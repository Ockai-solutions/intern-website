FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV NEXT_PUBLIC_VERSION="v0.1.0"

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]