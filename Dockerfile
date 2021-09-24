FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g @nestjs/cli

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "node", "dist/main" ]
