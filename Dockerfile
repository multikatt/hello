FROM node:6.7.0

COPY . /WORKDIR
WORKDIR /WORKDIR

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "build"]
