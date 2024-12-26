FROM node:23-bookworm-slim

WORKDIR /app

# npm init -y && npm install express@4.21.2

COPY . /app

EXPOSE 3000

CMD ["bash"]
