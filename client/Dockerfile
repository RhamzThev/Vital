FROM node:lts-alpine AS build

WORKDIR /client

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /usr/src/app/dist/client /usr/share/nginx/html

EXPOSE 4200