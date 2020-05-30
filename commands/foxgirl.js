const Discord = require('discord.js')
const request=require('request')
const client = require('nekos.life');
const neko = new client();
module.exports.run=async(bot,message,args)=>{
  let link = await neko.sfw.foxGirl()
    let embed = new Discord.MessageEmbed()
    .setTitle('Here is your request:')
    .setImage(link.url)
    .setColor('RANDOM')
    message.channel.send(embed)

}
module.exports.config = {
  name:'foxgirl',
  aliases:[]
}