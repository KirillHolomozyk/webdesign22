FROM node:16
WORKDIR /usr/src/app
COPY vacuum_cl.json ./
COPY . . 
EXPOSE 3000
CMD npm run json-server -w vacuum_cl.json