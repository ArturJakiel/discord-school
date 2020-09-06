const { MessageEmbed } = require("discord.js");

const { developers } = require("../../../config/config");

/**
 * @name About
 * @namespace commands
 * @description send rich message with information about bot
 */
module.exports = {
  info: {
    name: "about",
    aliases: ["about", "botinfo"],
    category: "public",
    permissions: [],
    description: "display information about bot",
    usage: "",
  },

  async run(client, message, args) {
    const botRoleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#96f2e3"
        : message.guild.me.displayHexColor;

    console.log(client.user);

    const aboutEmbedBox = new MessageEmbed()
      .setColor(botRoleColor)
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTitle(`DiscordSchoolBot v${process.env.npm_package_version}`)
      .setDescription(process.env.npm_package_description)
      .addField(
        "**Developers:**",
        developers.map((data) => data.reduce((prev, curr) => `${prev} ${curr}`))
      )
      .addField(
        "**Library**",
        `discord.js ${process.env.npm_package_dependencies_discord_js}`,
        false
      )
      .addField(
        "**GitHub**",
        `https://github.com/ArturJakiel/discord-school`,
        false
      );
    message.channel.send(aboutEmbedBox);
  },
};
