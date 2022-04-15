FROM node:lts-alpine AS deps

RUN apk add --no-cache libc6-compat
RUN mkdir -p /app
WORKDIR /app
COPY ./package.json ./
COPY ./next.config.js ./
COPY ./next-i18next.config.js ./
COPY ./ ./
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts-alpine  AS builder
WORKDIR /app
COPY ./ ./
COPY --from=deps ./app/node_modules ./node_modules
RUN yarn build

FROM node:lts-alpine as runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder ./app/next.config.js ./
COPY --from=builder ./app/next-i18next.config.js ./
COPY --from=builder ./app/styles ./styles
COPY --from=builder ./app/public ./public
COPY --from=builder ./app/.next ./.next
COPY --from=builder ./app/node_modules ./node_modules
COPY --from=builder ./app/package.json ./

EXPOSE 3000

RUN npx next telemetry disable

CMD ["node_modules/.bin/next", "start"]
