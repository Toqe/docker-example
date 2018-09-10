FROM stefanscherer/node-windows
WORKDIR /usr/src/app
COPY *.js ./
COPY *.json ./
RUN npm install

ENTRYPOINT [ "c:\\nodejs\\npm.cmd", "start" ]