FROM node:lts-slim

WORKDIR '/home/app'

ARG COMMAND
ENV COMMAND $COMMAND

COPY package.json package.json

RUN yarn install

CMD yarn $COMMAND