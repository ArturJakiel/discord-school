/**
 * @name KickMembers
 * @description kick user from server
 */
module.exports = {
  info: {
    name: "kick",
    aliases: ["kick"],
    category: "public",
    permissions: ["KICK_MEMBERS"],
    description: "Kick guild Members",
    usage: `<user>`,
  },

  async run(client, message, args) {
    message.channel.send(`Kick command test`);
  },
};

// const KickMembers = ({ message }) => {
//   if (message.member.hasPermission("KICK_MEMBERS" || "BAN_MEMBERS")) {
//     if (message.content.startsWith(`${prefix}kick`)) {
//       const mentionUser = message.mentions.members.first();

//       if (mentionUser.id === message.author.id)
//         return message.channel.send(`you can't kick yourself  `);

//       if (!mentionUser.kickable)
//         return message.channel.send(`you can't kick ${mentionUser}`);

//       mentionUser.kick().then((thisUser) => {
//         message.channel.send(`${thisUser.displayName} has been kicked!`);
//       });
//     }
//   }
// };
