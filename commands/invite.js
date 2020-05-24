const Discord = require('discord.js')
module.exports.run = async(bot,message,args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle('<a:ninja_style:713632898674065409> Pls try inviting the bot from below link or please react with "❌"')
  .setDescription(`[Click here](https://top.gg/bot/702905673524051988)`)
  message.channel.send(embed).then(m=> m.react('❌').then(m.awaitReactions((reaction, user) =>  reaction.emoji.name == '❌' && user.id === message.author.id, { max: 1, time: 30000 }).then(collected => {
                                  if (collected.first().emoji.name == '❌' ){
                                  message.author.send("https://discord.com/api/oauth2/authorize?client_id=702905673524051988&permissions=8&scope=bot")
                                  }                      
                                                         })))
  //message.author.send("https://discord.com/api/oauth2/authorize?client_id=702905673524051988&permissions=8&scope=bot")
  //message.author.send("We might add a notification system in future. u might have to disable it, by adding this bot you accept the term.")
  message.delete()
}
module.exports.config = {
  name: 'invite',
  aliases: ['i']
}