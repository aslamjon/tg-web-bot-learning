const { contactOptions, homeOptions, startOpitons } = require("./keyboards");

const fileName = require("path").basename(__filename);

const startCommand = async (bot, msg) => {
  const chatId = msg.chat.id;

  await bot.sendMessage(
    chatId,
    `Assalomu aleykum ${msg.from.first_name} botga xush kelibsiz.
  `,
  startOpitons
  );
};

module.exports = {
  startCommand,
};
