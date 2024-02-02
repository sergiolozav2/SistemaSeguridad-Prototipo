import cv2
from model import predict
from camera_feed_websocket import CameraFeedWebSocket
import image_base64
from services import alarm

cap = cv2.VideoCapture(0)
cap.set(3, 640)
cap.set(4, 480)


ws_client = CameraFeedWebSocket('ws://localhost:6500/2')

while True:
    _, image = cap.read()

    image, results = predict(image)
    image_url = image_base64.convert(image)
    ws_client.send(image_url)

    dangerous_item = alarm.check_dangerous_item(results)
    if dangerous_item:
        alarm.register_event(dangerous_item, image_url)

    cv2.imshow('Webcam', image)
    if cv2.waitKey(1) == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
