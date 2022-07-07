FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json

COPY src/pages ./pages
COPY public ./public
COPY src/styles ./styles
COPY src/components ./components

CMD ["npm", "run", "dev"]