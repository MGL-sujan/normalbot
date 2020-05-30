const db = require('quick.db')
const d = require('discord.js')
module.exports.run =async(bot,message,args)=>{
  let msg = db.fetch(`snipe_${message.channel.id}`)
  let author = db.fetch(`snipe1_${message.channel.id}`)
  if(msg !== null && author !== null){
    let embed = new d.MessageEmbed()
    .setTitle('Snipe')
    .setFooter('Author:', message.author.displayAvatarURL({dynamic:true}))
    .setColor("RANDOM")
    .addField("Sniped Message:",msg)
    .addField("Sniped message author:", author.tag)
    .setTimestamp()
    db.set(`snipe_${message.channel.id}`,null)
    db.set(`snipe1_${message.channel.id}`,null)
    message.channel.send(embed)
  }else{
    let embed = new d.MessageEmbed()
    .setTitle('There is nothing to Snipe!!')
    .setColor('RANDOM')
    .setFooter('Outcome: ERROR', message.author.displayAvatarURL({dynamic:true}))
    .setTimestamp()
    message.channel.send(embed)
  }
}
module.exports.config = {
  name:'snipe',
  aliases:[]
}