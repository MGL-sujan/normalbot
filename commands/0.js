const request = require('request')
const {MessageAttachment}= require('discord.js')
const {MessageEmbed} = require('discord.js')
const client = require('nekos.life');
const neko = new client();

module.exports.run = async(bot,message,args)=>{
  if(!message.channel.nsfw) return message.channel.send('Nsfw channels only')
  let url = await neko.nsfw.hentai()
  
  
     let embed = new MessageEmbed()
    .setTitle('Here is your request:')
    .setImage(url.url)
    .setColor('RANDOM')
    message.channel.send(embed)
  

  
}
module.exports.config = {
  name: "hentai",
  aliases: ["g"]
}