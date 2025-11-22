FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* /app/
RUN npm install --production
COPY . /app
EXPOSE 4000
CMD ["node", "server.js"]
