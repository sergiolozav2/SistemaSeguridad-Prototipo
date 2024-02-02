from ultralytics import YOLO
from draw import prediction_box, prediction_label

model = YOLO("yolov8s.pt")


def predict(image):
    results = model(image, conf=0.6, verbose=False, stream=True)
    results = copy_generator(results)
    draw_predictions(image, results)
    return image, results

def copy_generator(results):
    copy = []
    for r in results:
        copy.append(r)
    return copy
    
def draw_predictions(image, results):
    for r in results:
        boxes = r.boxes
        for box in boxes:
            label_id = int(box.cls[0])
            prediction_box(image, box)
            prediction_label(image, box, label_id)
