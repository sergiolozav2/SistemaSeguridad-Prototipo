## Sistema de seguridad con alarma - Prototipo

### Descripción
Este proyecto contiene el código para iniciar un modelo reconocedor de objetos en la webcam y envíarlo a un servidor como base64.


### Herramientas utilizadas
- Python
- Detector de objetos - YoloV8
- Tornado (Servidor de Websockets)
- Websocket (Cliente de Websockets)
- Open-cv

### Funcionamiento
- yolo_model/main.py
  - Inicia webcam 
  - Detecta objetos en webcam
  - Registra eventos en base de datos supabase
  - Envía transmisión con WebSockets a ws://localhost:6500/2
- camera_server/server.py
  - Inicia servidor websocket en puerto 6500
  - Escucha transmisión envíada por la webcam
  - Redirige transmisión de yolo_model/main.py a un cliente conectado a ws://localhost:6500/1