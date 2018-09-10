FROM node:alpine
WORKDIR /usr/src/app
COPY *.js ./
COPY *.json ./
RUN npm install
EXPOSE 8080
CMD [ "npm", "start" ]