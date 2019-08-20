#!/bin/sh
TIMESTAMP=`date +%F-%H%M`
MONGO_DATABASE="SITEDODC"
BACKUP_NAME_DB="$MONGO_DATABASE-$TIMESTAMP-db"
BACKUP_NAME_UPLOADS="$MONGO_DATABASE-$TIMESTAMP-uploads"
BACKUPS_DIR="/home/760479/strapi-docker/backup/mongo"
tar -zcvf $BACKUPS_DIR/$BACKUP_NAME_DB.tar.gz /home/760479/strapi-docker/db/
mv $BACKUPS_DIR/$BACKUP_NAME_DB.tar.gz backup/mongo/
tar -zcvf $BACKUPS_DIR/$BACKUP_NAME_UPLOADS.tar.gz /home/760479/strapi-docker/backup/uploads/
mv $BACKUPS_DIR/$BACKUP_NAME_UPLOADS.tar.gz backup/mongo/
find /home/760479/backup/mongo -mtime +90 -exec rm {} \;
