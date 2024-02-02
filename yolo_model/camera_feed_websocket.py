from websocket import WebSocketApp
import websocket
import rel


def on_message(ws, message):
    print(message)


def on_error(ws, error):
    print(error)


websocket.enableTrace(False)


class CameraFeedWebSocket:
    def __init__(self, url) -> None:
        self.ws = WebSocketApp(url,
                               on_open=self.on_open,
                               on_message=on_message,
                               on_error=on_error,
                               on_close=self.on_close)
        self.ws.run_forever(dispatcher=rel, reconnect=5)

        self.open = False

    def on_close(self, ws, close_status_code, close_msg):
        print("Closed client connection")
        self.open = False

    def on_open(self, ws):
        print("Opened client connection")
        self.open = True

    def send(self, data):
        self.ws.send(data)
