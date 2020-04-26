const { MessageEmbed } = require("discord.js");

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
  },

  run: async (client, message, args) => {
    const botRoleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#96f2e3"
        : message.guild.me.displayHexColor;

    const aboutEmbedBox = new MessageEmbed()
      .setColor(botRoleColor)
      .setTitle(`DiscordSchoolBot v${process.env.npm_package_version}`)
      .addField("Developers: ", "Kizuhane", false)
      .addField(
        "Library",
        `discord.js ${process.env.npm_package_dependencies_discord_js}`,
        true
      )
      .addField(
        "GitHub",
        `discord.js ${process.env.npm_package_dependencies_discord_js}`,
        true
      );
    // .setFooter(client.user.username,client.user.displayAvatarURL())
    // setThumbnail('logo here');
    message.channel.send(aboutEmbedBox);
  },
};
