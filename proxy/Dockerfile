FROM nginx:latest

# Removed default confs
RUN rm /etc/nginx/conf.d/*
COPY proxy.conf /etc/nginx/conf.d/nginx.conf
COPY ./certs/localhost.crt /etc/nginx/ssl/localhost.crt
COPY ./certs/localhost.key /etc/nginx/ssl/localhost.key
COPY ./certs/dhparam.pem /etc/nginx/ssl/dhparam.pem
