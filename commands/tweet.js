
const d = require('discord.js')
const request = require('request')
module.exports.run = async(bot,message,args)=>{
  if(!args[0]) return message.channel.send('Bad Request```Missing argument username text```')
  request(`https://nekobot.xyz/api/imagegen?type=tweet&username=${args[0]}&text=${args.slice(1).join(' ')}`,function(error,response,body){
    let link = JSON.parse(body).message
    let attach = new d.MessageAttachment(link,'tweet.png')
    message.channel.send(attach)
  })
}
module.exports.config ={
  name:'tweet',
  aliases:[]
}