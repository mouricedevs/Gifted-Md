# Don't change this [ /GiftedTech/ ] name!
# Change from below link, else bot wil not work!

FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm i && npm i -g qrcode-terminal

COPY . .

EXPOSE 5000

CMD ["node", "gifted/gifted.js"]
