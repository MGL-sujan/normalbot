const {MessageEmbed} = require('discord.js')
const Eco = require("quick.eco");
const eco = new Eco.Manager();
module.exports.run = async(bot,message,args) => {
  let money = eco.fetchMoney(message.author.id);
  let embed = new MessageEmbed()
  .setTitle(`@${message.author.username}'s Balance`)
  .addField("Current Balance:", `${money.amount}`)
  .addField("Type:", 'Global Coins')
  .setColor('#1e00ff')
  message.channel.send(embed)
  
}
module.exports.config = {
  name: "bal",
  aliases: ["bal"]
}