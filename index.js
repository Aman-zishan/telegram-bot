var TelegramBot = require('node-telegram-bot-api'),
    telegram = new TelegramBot("998431663:AAFszirQmt8riC21yTL_KN9XdM8yRJdr1mA", { polling: true });

telegram.on("text", (message) => {
  telegram.sendMessage(message.chat.id, "Hey,its me Aman :)");
});
