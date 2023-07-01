const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const cors = require('@koa/cors');
const { v4: uuidv4 } = require('uuid');
const formatDate = require('./formatDate');
const WS = require("ws");

const app = new Koa();
const router = new Router();

app.use(BodyParser());
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

router.get('/', async (ctx, next) => {
  ctx.body = "status: ok";
});

const server = app.listen(7070, () => {
  console.log('Server running on port 7070');
});

const wsServer = new WS.Server({server})

const nicknames = [];
const chat = ['welcome to our chat'];

wsServer.on('connection', (ws) => {
  ws.on('message', (item) => {
    if (typeof (item) === "object") {
      const nicknameExists = nicknames.some( el => el.data !== item.data);
      if (nicknameExists === false) {
        nicknames.push(item);

        const eventDataNicknames = JSON.stringify({ nicknames });

        Array.from(wsServer.clients)
          .filter(client => client.readyState === WS.OPEN)
          .forEach(client => client.send(eventDataNicknames));
      }
    }
    if (typeof (item) === "string") {
      chat.push(item);

      const eventDataChat = JSON.stringify({ chat: [message] });

      Array.from(wsServer.clients)
        .filter(client => client.readyState === WS.OPEN)
        .forEach(client => client.send(eventDataChat));
    }
    ws.send(JSON.stringify({ nicknames }));
    ws.send(JSON.stringify({ chat }));
  });

    ws.send(JSON.stringify({ nicknames }));
    ws.send(JSON.stringify({ chat }));
});
