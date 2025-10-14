# Giai đoạn build
FROM node:22.15.0-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Cài đặt dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Build ứng dụng
RUN npm run build

# Giai đoạn production
FROM node:22.15.0-alpine AS production

WORKDIR /app

# Tạo user không phải root để bảo mật
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001

# Copy package files
COPY package*.json ./

# Cài đặt chỉ production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy built application từ builder stage
COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist

# Chuyển sang user không phải root
USER nestjs

# Expose port
EXPOSE 3000


# Start ứng dụng
CMD ["node", "dist/main.js"]