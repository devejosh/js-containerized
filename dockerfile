FROM node:23

WORKDIR /app

COPY . ./

CMD ["node" , "app.js"]

