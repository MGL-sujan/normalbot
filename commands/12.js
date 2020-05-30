const request = require('request')
const Discord=require('discord.js')
const client = require('nekos.life');
const neko = new client();
module.exports.run = async(bot,message,args)=>{
  if(!message.channel.nsfw)return
  let link = await neko.nsfw.kuni()
    let embed = new Discord.MessageEmbed()
    .setTitle('Here is your request:')
    .setImage(link.url)
    .setColor('RANDOM')
    message.channel.send(embed)

  
}
module.exports.config={
  name:'kuni',
  aliases:['pn']
}