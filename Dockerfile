FROM node:6.7.0

COPY . /WORKDIR
WORKDIR /WORKDIR

CMD ["npm", "start"]
