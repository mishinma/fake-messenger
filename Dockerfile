
FROM node:12.13.0-alpine as build-frontend
WORKDIR /app
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build


# Specify a base image
FROM node:12.13.0-alpine AS build-backend

WORKDIR /app

# Install dependencies
COPY backend/package.json .
RUN npm install
COPY backend/ .
COPY --from=build-frontend /app/build/ ./build-frontend/

EXPOSE 3001

# Default command
CMD ["npm", "run", "start"]