import math
import threading

from .supabase_client import database
from .class_names import labels

dangerousItems = {
    "wine_glass",
    "knife",
    "gun",
    "handgun",
    "cell phone"
}


def check_dangerous_item(results):
    for r in results:
        boxes = r.boxes
        for box in boxes:
            cls = int(box.cls[0])
            label = labels[cls]
            if label in dangerousItems:
                return box
    return None


def register_event(box, image):
    label_id = int(box.cls[0])
    label = labels[label_id]
    confidence = math.ceil((box.conf[0]*100))/100

    _insert_supabase({
        "name": label,
        "confidence": confidence,
        "image": image
    })


def _insert_supabase(data):
    score = data["confidence"]
    query = database.table('Alarma').insert({
        "name": data["name"],
        "source": "Camara 3",
        "location": "Upsa",
        "picture": data["image"],
        "confidence": score,
        "severity": ("alta" if score > 0.85 else "media") if score > 0.7 else "baja"
    })

    thread = threading.Thread(target=_executeInsert, args=(query,))
    thread.start()


def _executeInsert(query):
    query.execute()
