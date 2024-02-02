import tornado.ioloop
import tornado.web
import tornado.websocket


clients = {1: None, 0: None}


class WebSocketHandler(tornado.websocket.WebSocketHandler):

    def open(self, id):
        print("CONEXIÓN DE: ", id)
        if(int(id) == 1):
            clients[1] = self
            print("CLIENTE CONECTADO")

    def on_close(self):
        print("CONEXIÓN CERRADA")
        clients[1] = None

    def on_message(self, message):
        print("Mensaje recibido")
        if clients[1] != None:
            print("Enviando a cliente")
            clients[1].write_message(message)
            
            

    def send_data(self):
        # USAR VARIABLE GLOBAL PARA ENVÍAR DESDE LA DETECCIÓN DE OBJETOS
        # DEBERÍA HACER UNA COPIA PARA EVITAR CARRERAS Y CONDICIONES
        pass

    def check_origin(self, origin):
        return True


application = tornado.web.Application([
    (r'/(?P<id>[0-9])', WebSocketHandler),
])


def start_server():
    application.listen(6500)
    print("[+] Servidor iniciado")
    tornado.ioloop.IOLoop.instance().start()
