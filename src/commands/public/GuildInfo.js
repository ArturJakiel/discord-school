const { MessageEmbed } = require("discord.js");

/**
 * @name ServerInfo
 * @namespace commands
 * @description send rich message with information about guild
 */
module.exports = {
  info: {
    name: "server",
    aliases: ["server", "serverinfo"],
    category: "public",
    permissions: [],
    description: "display information about server",
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
