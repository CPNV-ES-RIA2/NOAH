# Étape de construction
FROM node:21-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html/dashboard

EXPOSE 5173
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# BUILD
# docker build . -f Dockerfile -t dashboard:prod

# RUN
# docker run -d -p 5173:5173 --name dashboard dashboard:prod
