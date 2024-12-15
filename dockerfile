FROM node:23

WORKDIR /app

RUN npm init -y && npm install express@4.21.2

COPY . /app

EXPOSE 3000

CMD ["node", "app.js"]

