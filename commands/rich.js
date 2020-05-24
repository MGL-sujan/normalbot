
const Eco = require("quick.eco")
const eco = new Eco.Manager();
const Discord = require('discord.js')
const cred = "This is a Footer Const."

module.exports.run = async(bot,message,args) => {
  let lb = eco.leaderboard({ limit: 10, raw: false });
    const embed = new Discord.MessageEmbed()//v12 OHK k leave this shit. LOL bal only matters. Should i add u fact command no thanksok
      .setAuthor("Leaderboard")
      .setColor('RANDOM');
    lb.forEach(u => {
      embed.addField(
        `${u.position}. ${bot.users[u.id].tag}`,
        `Global Coins: ${u.money} 💸`
      );
    });
    return message.channel.send(embed);
}
module.exports.config = {
  name: 'rich',
  aliases: ['richest']
}