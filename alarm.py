from supabase_client import database
from datetime import datetime
import threading

dangerousItems = {
    "wine_glass",
    "knife",
    "gun",
    "handgun",
    "cell phone"
}


def registerEvent(data):
    score = data["confidence"]
    print(f"[-] Evento: {datetime.now().strftime('%d/%m/%Y %H:%M')}")
    query = database.table('Alarma').insert({
        "name": data["name"],
        "source": "Camara 2",
        "location": "Casa",
        "picture": data["image"],
        "confidence": score,
        "severity": ("alta" if score > 0.85 else "media") if score > 0.7 else "baja"
    })
    
    thread = threading.Thread(target=executeInsert, args=(query,))
    thread.start()
    
def executeInsert(query):
    query.execute()
    print("[+] Evento guardado")