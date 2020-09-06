const { readdir } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "/commands");

module.exports.run = async (client) => {
  readdir(filePath, (err, dirs) => {
    if (err)
      return console.error(
        "commands error:: command load directory error\n",
        err
      );

    console.log("\nloading command:");

    dirs.forEach((dir) => {
      readdir(`${filePath}/${dir}`, (dirsError, files) => {
        if (dirsError) return console.error(dirsError);

        const modules = files.filter((file) => file.endsWith(".js"));
        if (!modules.length)
          return console.error(`commands error:: no command find for: ${dir}`);

        modules.forEach(async (cmd) => {
          try {
            // eslint-disable-next-line global-require
            const module = require(`${filePath}/${dir}/${cmd}`);

            // set commands collection
            client.commands.set(module.info.name, module);

            // set aliases if exist aliases
            if (module.info.aliases && Array.isArray(module.info.aliases)) {
              module.info.aliases.map((alias) =>
                client.aliases.set(alias, module.info.name)
              );
            } else {
              console.error(
                `commands error: missing aliases in array for ${module.info.name}`
              );
            }

            console.log(`[✓]    ${module.info.name}`);
          } catch (moduleError) {
            console.log(`[X]    ${cmd}`);
            console.error(moduleError);
            console.error("****************************************");
          }
        });
      });
    });
  });
};
