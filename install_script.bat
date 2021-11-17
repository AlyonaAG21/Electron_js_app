git clone https://github.com/tornadoweb/tornado.git
cd tornado
python setup.py build
python setup.py install
cd ../
rmdir /s /q tornado
start /b python tornado_web_server.pyw
cd electron-app
npm install && npm start