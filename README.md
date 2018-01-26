# Portmanteau Slack Bot

## What?

Portmanteau Slack Bot is a Slack bot inspired by [Portmanteau Bot](https://github.com/jamcowl/PORTMANTEAU-BOT). It uses the simple portmanteau generation algorithm created by the original creator of Portmanteau Bot, rewritten in Javascript. To get more information on how it works, etc. please go to the original repository.

## Why?

I use Slack daily for work. I just want to have fun while at it. Also, I love coding in Javascript.

## How?

It's really easy to start using this project. This project is built as production-ready as it can be. Deployment is done via Docker to enable easy deployment.

Requirements:
- NodeJS
- Docker

To easily deploy using Docker simply set the `SLACK_BOT_TOKEN` environment variable with your token and run
```
./deploy.sh
```
The app will be running on port 3030
