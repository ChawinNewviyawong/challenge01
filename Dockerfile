FROM node:8.4.0-alpine

# Create app directory in docker
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json are copied
# where available
COPY package.json /usr/src/app

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD ["npm", "start"]
