const db = require('quick.db')
const Discord = require('discord.js')
const botconfig = require("../config.json")
module.exports.run = async (bot, message, args) => {
   
    let overall = db.fetch(`messages_${message.guild.id}`)
    let today = db.fetch(`message_today_${message.guild.id}`)
     try{
    let sEmbed = new Discord.MessageEmbed()
    .setColor("#0363ff")
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL({dynamic: true}))
    .addField("**Guild Name:**", `${message.guild.name}`, true)
    .addField("**Guild Owner:**", `${message.guild.owner}`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .addField("**Role Count:**", `${message.guild.roles.cache.size}`, true)
    .addField('Total Messages sent',overall )
    .addField('Messages Sent Today', today)
    .setFooter(`TestBot | Footer`, bot.user.displayAvatarURL());
    message.channel.send({embed: sEmbed});
   
} catch(e) {
  console.log(e)
}
 }


module.exports.config = {
    name: "serverinfo",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["si", "serverdesc"]
}