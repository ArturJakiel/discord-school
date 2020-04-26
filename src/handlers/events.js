const { readdir } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "/events");

exports.run = (client) => {
  readdir(filePath, (err, events) => {
    if (err) return console.error("error:: events load directory error\n", err);

    if (!events.length) return console.error("error:: no event find");

    console.log("\nloading events:");

    events.forEach(async (eventFile) => {
      const eventName = eventFile.split(".")[0];

      try {
        // eslint-disable-next-line global-require
        const event = require(`${filePath}/${eventFile}`);
        client.on(eventName, event.bind(null, client));
        console.log(`[✓]    ${eventName}`);
      } catch (error) {
        console.log(`[X]    ${eventName}`);
        console.error(error);
        console.error("****************************************");
      }
    });
  });
};
