// MAIN APP FILE
const { Client, Collection } = require("discord.js");

const { token, prefix } = require("../config/config");

if (!token) {
  throw new Error(
    "Missing TOKEN KEY \n create .env file witch TOKEN argument or add TOKEN as environmental value"
  );
}

const client = new Client({ disableMentions: "everyone" });

client.prefix = prefix;
client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();

require("./handlers/events").run(client);
require("./handlers/commands").run(client);

/*
client.on("message", async (message) => {

  if (message.content.startsWith(`${prefix}test`)) {
    if (message.type === "dm")
      message.author.send(`${message.member.author} hullo`);
    message.channel.send(`${message.member.author} hullo`);
  }
  // || (message.mentions.users.first().id !== client.user.id)

  // if (message.content.startsWith(`${config.prefix}detention`)) {
  //   console.log(message.author);

  //   // message.author.id.setActivity("detention");

  //   // message.author.setActivity("detention");
  // }

  // if (
  //   message.content.startsWith(
  //     `${config.prefix}init` || `${config.prefix}initialization`
  //   ) &&
  //   message.member.hasPermission(["ADMINISTRATOR"])
  // ) {
  //   // console.log(message.content);
  //   let member = message.mentions.members.first();
  //   message.channel.send(`creating school chat template by: ${member}`);
  // }
});
*/

client.login(token);
