import cv2
import base64

def convert(image):
    resize = cv2.resize(image, (0,0), fx=0.2, fy=0.2)
    _, buffer = cv2.imencode('.jpg', resize)
    image_base64 = base64.b64encode(buffer).decode('utf-8')
    return 'data:image/jpeg;base64,' + image_base64