FROM mcr.microsoft.com/playwright:v1.40.0

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

CMD ["npx", "playwright", "test"]
