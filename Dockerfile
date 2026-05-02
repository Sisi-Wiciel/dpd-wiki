# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY wiki/package.json wiki/package-lock.json* ./
RUN npm ci
COPY wiki/ ./
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
