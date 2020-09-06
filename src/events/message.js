const { owners } = require("../../config/config");
const { checkChannelPermissions } = require("../functions/checkPermission");

module.exports = async (client, message) => {
  if (message.author.bot || message.type === "dm") return;
  if (!message.content.toLowerCase().startsWith(client.prefix)) return;

  // check if bot has permission to send message in current channel
  if (!checkChannelPermissions(message, ["SEND_MESSAGES"])) return;

  const args = message.content.split(/ +/g);
  const commandName = args.shift().slice(client.prefix.length).toLowerCase();

  let cmd = client.commands.get(commandName);
  if (!cmd) cmd = client.commands.get(client.aliases.get(commandName));

  console.log("*********************************");

  console.log("message received::", message.content);
  console.log(args);
  console.log(commandName);

  console.log(cmd);

  if (cmd) cmd.run(client, message, args);
};
