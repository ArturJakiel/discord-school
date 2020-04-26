module.exports = async (client) => {
  console.log(`\n${client.user.tag} report as Ready!`);

  const activateServers = [];
  client.guilds.cache.map(({ id, name, available }) => {
    return activateServers.push([id, name, available]);
  });

  console.log("\nconnected servers: ");
  console.table(activateServers);
};
