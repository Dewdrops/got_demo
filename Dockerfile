FROM node:13-alpine

WORKDIR /opt/app

COPY package.json .

RUN yarn

COPY . .

ENTRYPOINT ["sleep", "99999999"]
