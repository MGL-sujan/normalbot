const db = require('quick.db')
module.exports.run = async(bot,message,args) =>{
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You need Admin perms to run this command. ')

  db.set(`c_${message.guild.id}`, null)
  message.channel.send('Turned on swear filter')
}
module.exports.config = {
  name:'swearfilteron',
  aliases:["swt"]
}