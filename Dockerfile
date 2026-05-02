FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY wiki/package.json wiki/package-lock.json* ./
RUN npm ci

# Copy source
COPY wiki/ ./

# Build
RUN npm run build

# Serve with nginx
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
