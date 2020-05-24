const fs = require("fs");
const { token } = require("./config.json");
const Discord = require('discord.js');
const bot = new Discord.Client({ disableEveryone: true });
const superagent = require("superagent");
const config = require("./config.json");
const DiscordCanvas = require('discord-canvas')
require("./util/eventHandler")(bot);
const http = require('http');
const express = require('express');
const app = express();
const db = require('quick.db')
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 240000);
const date = new Date()
const hour = date.getHours()
let prefix = '%'

bot.on("ready", async () => {
  console.log("Bot is functional");
  const statuses = [ '%help',`${bot.users.cache.size} users`,`${bot.guilds.cache.size} guilds`]

   setInterval(() => {
     let status = statuses[Math.floor(Math.random()* statuses.length)]
    bot.user.setPresence({ activity: { name: status ,type: 'WATCHING' }, status: 'idle' })
   },10000)
setInterval(()=>{
   var guild = bot.guilds.cache.keyArray() 
   guild.forEach(resett)
  function resett(id){
    db.set(`message_today_${id}`,0)
}
}, 82800000 - (hour*3600000)  )
  

})


bot.on('guildMemberAdd', async member => {
  try {
   const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if(!channel) return;
    const server = member.guild.name;
   const image = await new DiscordCanvas.Welcome()
            .setUsername(member.user.username)
            .setDiscriminator(member.user.discriminator)
            .setMemberCount(member.guild.memberCount)
            .setGuildName("Server")
            .setAvatar(member.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 }))
            .setColor("border", "#355EF2")
            .setColor("username-box", "#355EF2")
            .setColor("discriminator-box", "#355EF2")
            .setColor("message-box", "#355EF2")
            .setColor("title", "#355EF2")
            .setColor("avatar", "#355EF2")
            .setText("message", `welcome to ${server}!!`)
            .setBackground("https://cdn.glitch.com/6a8e40c8-fe0d-4099-99d2-02952070f31c%2Fe292d925-1e4f-4fe8-b460-a45a638d3234.image.png?v=1583548490710")
            .toAttachment();
            

        const attachment = new Discord.MessageAttachment(image.toBuffer(), "welcomer.png");
        
        channel.send(attachment);
  } catch(e) {
    console.log(e)
  }
  
    })

bot.on("guildMemberRemove", async member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-bye');
  if(!channel) return;
  try {
  const image = await new DiscordCanvas.Goodbye()
            .setUsername(member.user.username)
            .setDiscriminator(member.user.discriminator)
            .setMemberCount(member.guild.memberCount)
            .setGuildName("server")
            .setAvatar(member.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 }))
            .setColor("border", "#FF0000")
            .setColor("username-box", "#FF0000")
            .setColor("discriminator-box", "#FF0000")
            .setColor("message-box", "#FF0000")
            .setColor("title", "#FF0000")
            .setColor("avatar", "#FF0000")
            .setText("message", "we will miss ya!")
            .setBackground("https://cdn.glitch.com/6a8e40c8-fe0d-4099-99d2-02952070f31c%2Ff6ee043f-2dd6-4408-8abf-21e955453d48.image.png?v=1583548160258")
            .toAttachment();

        const attachment = new Discord.MessageAttachment(image.toBuffer(), "leaver.png");
        channel.send(attachment);
  } catch(e) {
    console.log(e)
  }
})



bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) {
    console.log(err);
    
  }
  let jsfile = files.filter(f => f.split(".").pop() === "js");

  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`);
    bot.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach(alias => {
      bot.aliases.set(alias, pull.config.name);
    });
  });
});

bot.on("message", async message => {
  let fetched = await db.fetch(`prefix_${message.guild.id}`)
  if (fetched === null) prefix = '%'
  else prefix = fetched
  if (message.author.bot) return;
  if(message.content === '%prefix') return message.channel.send(`The prefix for current channel is ${fetched}`)

  if (message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;
  let commandFile = bot.commands.get(
    cmd.slice(prefix.length) ||
      bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
  );
  if (commandFile) commandFile.run(bot, message, args);
});

bot.login(token);

