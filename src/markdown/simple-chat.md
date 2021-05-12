---
title: Simple Chat
description: A chat application that allow user to create "public" and "private" rooms, with privacy in mind.
reason: To learn GatsbyJS, NodeJS, MongooseJS, and socket.io
technologies: html,css,javascript,socket
image: https://simple-chat.kurtobando.com/preview.png
repository: https://github.com/kurtobando/simple-chat
---
Simple Chat application is powered by GatsbyJS, NodeJS, MongooseJS and socket.io allow user to create "public" and "private" rooms, with privacy in mind.

Which means, we never save your messages on our server, only active chat members who can read your messages during your active session. Thanks to socket.io enables real-time, bidirectional and event-based communication.

Have doubts? Check Source Code

Client [github.com/kurtobando/simple-chat](https://github.com/kurtobando/simple-chat)

Server API [github.com/kurtobando/simple-chat-api](https://github.com/kurtobando/simple-chat-api)

## Demo
Visit [simple-chat.kurtobando.com](https://simple-chat.kurtobando.com)


## Installation

Simple Chat requires [Node.js](https://nodejs.org/) v14+ to run, and [gatsby-cli](https://www.gatsbyjs.com/docs/reference/gatsby-cli/) installed globally

### Development
For development environment, create `.env.development`
```
GATSBY_API_BASE_URL=REPLACE_URL_FROM_SIMPLE_CHAT_SERVER_API
GATSBY_HOTJAR_ID=XXXXXXX
GATSBY_HOTJAR_VERSION=X
GATSBY_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
GATSBY_SITE_URL=http://localhost
GATSBY_SITE_TITLE=Simple Chat
GATSBY_SITE_DESCRIPTION=A simple chat application powered from GatsbyJS, NodeJS, Mongoose and socket.io
GATSBY_SITE_IMAGE_PREVIEW=http://localhost/preview.png
```
Then.
```sh
npm install
gatsby develop
```
### Production
For production environment. Create `.env.production`
```
GATSBY_API_BASE_URL=REPLACE_URL_FROM_SIMPLE_CHAT_SERVER_API
GATSBY_HOTJAR_ID=XXXXXXX
GATSBY_HOTJAR_VERSION=X
GATSBY_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
GATSBY_SITE_URL=http://localhost
GATSBY_SITE_TITLE=Simple Chat
GATSBY_SITE_DESCRIPTION=A simple chat application powered from GatsbyJS, NodeJS, Mongoose and socket.io
GATSBY_SITE_IMAGE_PREVIEW=http://localhost/preview.png
```
Then.
```sh
npm install
gatsby build
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
