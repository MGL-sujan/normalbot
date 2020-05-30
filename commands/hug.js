const Discord = require('discord.js')
const request=require('request')
const client = require('nekos.life');
const neko = new client();
module.exports.run=async(bot,message,args)=>{
  if(!message.mentions.users.size)return message.channel.send("Whom you are hugging? xD <a:ninja_style:713632898674065409>")
  let user = message.mentions.users.first()
  let link = await neko.sfw.hug()
    let embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} hugged ${user.username}`)
    .setImage(link.url)
    .setColor('RANDOM')
    message.channel.send(embed)

}
module.exports.config = {
  name:'hug',
  aliases:[]
}