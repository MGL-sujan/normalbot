const db = require('quick.db')
module.exports.run = async(bot,message,args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This command requires admin rights')
  if(!args[0]) return message.channel.send('usage: ``%setprefix <custom prefix>``')
  db.set(`prefix_${message.guild.id}`, args[0])
  message.channel.send('Changed the prefix')
}
module.exports.config = {
  name:'setprefix',
  aliases:['setp']
}