/**
 * @name checkChannelPermissions
 * @description check asked channel permissions for bot and return boolean value as answer
 * @param {message} msg discord api message object
 * @param {array} permissionArray array of permissions names
 * @returns {boolean} boolean value if bot have asked permission
 */
module.exports.checkChannelPermissions = (msg, permissionArray) =>
  msg.channel
    .permissionsFor(msg.guild.me)
    .toArray()
    .includes(...permissionArray);
