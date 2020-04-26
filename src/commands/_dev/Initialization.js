/**
 * @name Initialization
 * @namespace commands
 * @description send rich message with information about bot
 */
module.exports = {
  info: {
    name: "initialization",
    aliases: ["initialization", "init"],
    category: "developers",
    permissions: ["ADMINISTRATOR"],
    description: "display ping",
  },

  run: async (client, message, args) => {
    message.channel.send(`${message.member.author} Ping`);
  },
};
