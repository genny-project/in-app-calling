FROM node:9
ADD package.json .
RUN npm install
ADD . .
ENTRYPOINT npm start
EXPOSE 2255
