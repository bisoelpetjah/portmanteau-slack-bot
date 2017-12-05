FROM mhart/alpine-node:base-8.9.1
WORKDIR /source

ADD build src
ADD index.js index.js
ADD node_modules node_modules

EXPOSE 3030

CMD ["node", "."]
