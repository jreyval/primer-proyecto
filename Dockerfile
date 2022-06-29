FROM node:14.15
WORKDIR /usr/src/app/
COPY ./package*.json ./
RUN npm install
COPY . .
#EXPOSE 8000
CMD ["npm", "start"]