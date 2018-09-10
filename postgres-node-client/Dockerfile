FROM node:alpine
WORKDIR /usr/src/app
COPY *.js ./
COPY *.json ./
RUN npm install
CMD [ "npm", "start" ]