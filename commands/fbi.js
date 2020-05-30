const d = require('discord.js')
const request = require('request')
const client = require('nekos.life');
const neko = new client();
module.exports.run=async(bot,message,args)=>{
  
    let embed = new d.MessageEmbed()
    .setTitle('Here is your request:')
    .setImage('https://tenor.com/t1np.gif')
    .setColor('RANDOM')
    message.channel.send(embed)
  
}
module.exports.config={
  name:'fbi',
  aliases:[]
}