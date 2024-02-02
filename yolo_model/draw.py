import cv2
from class_names import labels

def prediction_box(image, box):
    x1, y1, x2, y2 = box.xyxy[0]
    x1, y1, x2, y2 = int(x1), int(y1), int(
        x2), int(y2)  # convert to int values

    cv2.rectangle(image, (x1, y1), (x2, y2), (255, 0, 255), 3)


def prediction_label(image, box, label_id):
    x1, y1, _, _ = box.xyxy[0]
    position = [int(x1), int(y1)]
    font = cv2.FONT_HERSHEY_SIMPLEX
    fontScale = 1
    color = (255, 0, 0)
    thickness = 2
    label = labels[label_id]

    cv2.putText(image, label, position, font, fontScale, color, thickness)
