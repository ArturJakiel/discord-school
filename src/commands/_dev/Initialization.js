/**
 * @name Initialization
 * @namespace commands
 * @description create chanel's template, roles, permission
 */
module.exports = {
  info: {
    name: "initialization",
    aliases: ["initialization", "init"],
    category: "developers",
    permissions: ["ADMINISTRATOR"],
    description: "create chanel's template, roles, permission",
    usage: "",
  },

  async run(client, message, args) {
    message.channel.send(
      `${this.info.description}\nanswer net question to finish initialization`
    );

    /**
     * set default message notification for only @mentions
     *    message.guild.defaultMessageNotifications = "MENTIONS":
     *
     * set chanel for logs
     * systemChannelFlags: SystemChannelFlags { bitfield: 0 },
     *
     *
     */
  },
};
