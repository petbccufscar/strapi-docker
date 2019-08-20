#!/bin/sh

docker exec -it strapi-docker_db_1 mongo admin -u mongouser -p 'GozVHboWSdvedss' --eval "db.getSiblingDB('strapi')['core_store'].deleteMany({'key': 'plugin_content_manager_schema'})"
docker-compose down
docker-compose up -d
