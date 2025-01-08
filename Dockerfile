FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g express

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .


USER 1000


EXPOSE 3000
CMD [ "node", "index.js"]
