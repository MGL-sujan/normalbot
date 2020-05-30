const Discord = require('discord.js')
const request=require('request')
const client = require('nekos.life');
const neko = new client();
module.exports.run=async(bot,message,args)=>{
  if(!message.mentions.users.size)return
  let user = message.mentions.users.first()
  let link = await neko.sfw.slap()
    let embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} slapped ${user.username}`)
    .setImage(link.url)
    .setColor('RANDOM')
    message.channel.send(embed)

}
module.exports.config = {
  name:'slap',
  aliases:[]
}