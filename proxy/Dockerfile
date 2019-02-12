FROM nginx:latest

# Removed default confs
RUN rm /etc/nginx/conf.d/*

COPY proxy.conf /etc/nginx/conf.d/
COPY ./certs/localhost.crt /etc/nginx/localhost.crt
COPY ./certs/localhost.key /etc/nginx/localhost.key
