import tornado.ioloop
import tornado.web


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        print('Got GET')
        response = {'text': 'text from response'}
        self.write(response)


application = tornado.web.Application([
    (r'/test', MainHandler),
], validate_cert=False)

if __name__ == "__main__":
    application.listen(6532, address='127.0.0.1')
    tornado.ioloop.IOLoop.instance().start()