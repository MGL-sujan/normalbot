const request = require('request')
const {MessageEmbed} = require('discord.js')
const client = require('nekos.life');
const neko = new client();
module.exports.run=async(bot,message,args)=>{
  if(!message.channel.nsfw) return
  let link = await neko.nsfw.pussy()
    let embed = new MessageEmbed()
    .setTitle('Here is your request:')
    .setImage(link.url)
    .setColor('RANDOM')
    message.channel.send(embed)
  
}
module.exports.config = {
  name:'pussy',
  aliases:[]
}