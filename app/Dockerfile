FROM node:11.9.0

WORKDIR /app
COPY package.json /app
RUN npm install -g yarn
RUN yarn install
COPY . /app
CMD node index.js
EXPOSE 8081
