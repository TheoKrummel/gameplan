/*jshint esversion: 6 */
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.login("ODI2MTQzNTQ5NDMwMTY5NjA2.YGIMIw.YFbDt75LRHMYVHpJHXUEzXssUzk");