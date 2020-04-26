const { owners } = require("../../config/config");

module.exports = async (client, message) => {
  if (message.author.bot || message.type === "dm") return;

  const args = message.content.split(/ +/g);
  const commandName = args.shift().slice(client.prefix.length).toLowerCase();

  let cmd = client.commands.get(commandName);
  if (!cmd) cmd = client.commands.get(client.aliases.get(commandName));

  // const cmd = client.commands.get(commandName)
  //   ? client.commands.get(commandName)
  //   : client.commands.get(client.aliases.get(commandName));

  console.log("message received::", message.content);
  console.log(args);
  console.log(commandName);

  console.log(cmd);

  if (cmd) cmd.run(client, message, args);
};
