const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const config = require('./config.json');
const token = config.token;
const prefix = config.prefix;
const noob = config.ID;


client.on("ready", () => {
  console.log(`The Market // https://discord.gg/4QwWEqqGSv`)
  console.log(`Prefix : ${prefix}`)
  console.log(`https://discord.gg/4QwWEqqGSv`)
  client.user.setActivity({ type: "WATCHING", name: `The Market! // https://discord.gg/4QwWEqqGSv` });
});


client.on("message", message => {

  if (message.content.startsWith(prefix + 'dm')) {
    if (message.author.id != noob) { //Defines the bot Owner.
      return message.reply(':x: **You cannot use this as you do not have the correct permissions!**')
    }
    else {
      message.delete
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(argresult).then(console.log(`[+] Successfully Messaged | ${member.user.username}#${member.user.discriminator}`)).catch(e => console.error(`[-] Member might have DM's Disabled | ${member.user.username}#${member.user.discriminator}`));
      })
      console.log(`[/] Successfull.`)
      message.channel.send(`:white_check_mark: | **DMall sent to users!**\n`).then(message.delete({ timeout: 400 }));
    }
  }

})

client.login(token);
