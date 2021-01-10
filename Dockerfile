FROM node:15.5.1-alpine
WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn --pure-lockfile
