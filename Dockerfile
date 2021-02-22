FROM node:12
RUN mkdir /opt/app-root/
WORKDIR /opt/app-root/
COPY . .
RUN npm install 
RUN chmod -R 755 /opt/app-root/
CMD ["npm","run","start"]