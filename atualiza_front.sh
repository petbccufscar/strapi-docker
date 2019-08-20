#!/bin/bash
cd frontend
git pull
cd ..
docker-compose restart frontend-builder
