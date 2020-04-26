/**
 * @name Ping
 * @namespace commands
 * @description send rich message with information about bot
 */
module.exports = {
  info: {
    name: "ping",
    aliases: ["ping", "testping"],
    category: "public",
    permissions: [],
    description: "display ping",
  },

  run: async (client, message, args) => {
    message.reply(`Ping! ${client.ws.ping}ms`);
  },
};
