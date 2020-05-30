const d = require('discord.js')
const request = require('request')
const client = require('nekos.life');
const neko = new client();
module.exports.run=async(bot,message,args)=>{
  if(!message.channel.nsfw)return
  let link = await neko.nsfw.boobs() 
    let embed = new d.MessageEmbed()
    .setTitle('Here is your request:')
    .setImage(link.url)
    .setColor('RANDOM')
    message.channel.send(embed)
  
}
module.exports.config={
  name:'boobs',
  aliases:[]
}