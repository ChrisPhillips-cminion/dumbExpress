FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g express

# make the 'app' folder the current working directory
WORKDIR /app
MKDIR /home/node/app
COPY . /home/node/app
WORKDIR /home/node/app

RUN chmod -R 775 /home/node/app
RUN chown -R node:root /home/node/app


# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

RUN chmod -R 775 /home/node/app
RUN chown -R node:root /home/node/app

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .


# build app for production with minification
RUN npm install


RUN yarn install --production

RUN chmod -R 775 /home/node/app
RUN chown -R node:root /home/node/app

EXPOSE 3000

USER 1000


EXPOSE 3000
CMD [ "node", "index.js"]
