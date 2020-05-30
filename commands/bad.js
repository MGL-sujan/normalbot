
const d = require('discord.js')
const request = require('request')
module.exports.run = async(bot,message,args)=>{
  if(!args[0]) {
     let link =`https://api.alexflipnote.dev/bad?image=${message.author.displayAvatarURL()}`
    let attach = new d.MessageAttachment(link,'bad.png')
    message.channel.send(attach)

  }else if(message.mentions.users.size){
  let link =`https://api.alexflipnote.dev/bad?image=${message.mentions.users.first().displayAvatarURL()}`
    let attach = new d.MessageAttachment(link,'bad.png')
    message.channel.send(attach)
  }else return message.channel.send('400 Bad Request! Maybe something missing?' )
}
module.exports.config ={
  name:'bad',
  aliases:[]
}