import tornado.ioloop
import tornado.web
import tornado.websocket
import cv2
import base64

cap = cv2.VideoCapture(0)
cap.set(3, 640)
cap.set(4, 480)


class WebSocketHandler(tornado.websocket.WebSocketHandler):

    def open(self, id):
        print("open success, id: ", id)
        self.timer = tornado.ioloop.PeriodicCallback(self.send_data, 100)
        self.timer.start()

    def on_close(self):
        self.timer.stop()

    def on_message(self):
        pass
    
    def send_data(self):
        # USAR VARIABLE GLOBAL PARA ENVÍAR DESDE LA DETECCIÓN DE OBJETOS
        # DEBERÍA HACER UNA COPIA PARA EVITAR CARRERAS Y CONDICIONES
        success, img = cap.read()
        
        resized = cv2.resize(img, (0, 0), fx=0.2, fy=0.2)
        _, buffer = cv2.imencode('.jpg', resized)
        image_base64 = base64.b64encode(buffer).decode('utf-8')
        self.write_message('data:image/jpeg;base64,' + image_base64)

    def check_origin(self, origin):
        return True


application = tornado.web.Application([
    (r'/(?P<id>[0-9])', WebSocketHandler),
])

def start_server():
    application.listen(6500)
    print("[+] Servidor iniciado")
    tornado.ioloop.IOLoop.instance().start()
