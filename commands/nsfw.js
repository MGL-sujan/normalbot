const request = require('request')
const {MessageAttachment}= require('discord.js')
const {MessageEmbed} = require('discord.js')
const client = require('nekos.life');
const neko = new client();

module.exports.run = async(bot,message,args)=>{
  if(!message.channel.nsfw) return message.channel.send('Nsfw channels only')
  
  
     let embed = new MessageEmbed()
    .addField('Nsfw commands','``hentai``\n``hentaigif``\n``boobs``\n``sologirl``\n``sologirlgif``\n``cum``\n``anal``\n``neko``\n``nekogif``\n``blowjob``\n``lesbian``\n``pussy``\n``kuni``\n``classic``\n``hentaiavatar``\n``yuri``\n``trap``\n')
    .setColor('RANDOM')
    message.channel.send(embed)
  

  
}
module.exports.config = {
  name: "nsfw",
  aliases: ["g"]
}