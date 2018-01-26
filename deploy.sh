#!/bin/sh

npm run cleanup

npm install
npm run build
npm prune --production

docker build -t portmanteau-slack-bot:latest .

docker kill portmanteau-slack-bot
docker rm portmanteau-slack-bot
docker run -d -p 3030:3030 --name portmanteau-slack-bot -e SLACK_BOT_TOKEN=$SLACK_BOT_TOKEN --restart unless-stopped portmanteau-slack-bot:latest
