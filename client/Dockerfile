FROM node:lts-alpine AS build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Build the Angular app for production
COPY . .
RUN npm run build --prod

# RUN echo ${PWD} && ls -lR

FROM nginx:stable-alpine

COPY --from=build usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build usr/src/app/dist/client/browser /usr/share/nginx/html

EXPOSE 80