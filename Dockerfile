FROM nginx:alpine

# Копируем собранные файлы React в директорию Nginx
COPY ./build /usr/share/nginx/html


# Команда запуска nginx
CMD ["nginx", "-g", "daemon off;"]