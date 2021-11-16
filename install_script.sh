git clone https://github.com/tornadoweb/tornado.git
cd tornado
python setup.py build
python setup.py install
cd ../
python tornado_web_server.py &
cd electron-app
npm install
npm start &
