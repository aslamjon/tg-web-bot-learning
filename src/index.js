const TelegramApi = require("node-telegram-bot-api");
require("dotenv").config();
const { TELEGRAM_BOT_API } = require("./config");
const { startCommand } = require("./commands");


const bot = new TelegramApi(TELEGRAM_BOT_API, { polling: true });


const messageController = async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (text === "/start") return startCommand(bot, msg);
  
  console.log(msg);
  if (!msg.contact && !msg.location && msg.document && !get(msg, "text", "").startsWith("/"))
    return bot.sendMessage(chatId, "Men bu narsani bilmayman");
};

const errorController = async (error) => {
  console.log(error.code);
};

const init = () => {
  bot.on("message", messageController);

  // bot.on("contact", contactController);

  // bot.on("document", (msg) => {
  //   // file
  //   console.log("document");
  // });
  // bot.on("photo", (msg) => {
  //   // const chatId = msg.chat.id;
  //   // if (get(msg, "caption", "").startsWith("/ads")) return showAdsToEveryUsers(bot, msg, "")
  // });

  // bot.on("location", locationController);

  // bot.on("callback_query", callbackQueryController);

  // SHOW ERROR => 'EFATAL'
  bot.on("polling_error", errorController);

  // SHOW WEBHOOK ERROR => 'EPARSE'
  bot.on("webhook_error", errorController);
};

init();
module.exports = {
  init,
  bot,
};

