const db = require('quick.db')
module.exports.run = async(bot,message,args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("This command needs admin permissions")
  db.set(`auto_${message.guild.id}`, 'true')
  message.channel.send('Auto reply disabled')
  
}
module.exports.config = {
  name: "autoreplyoff",
  aliases: ["autoof"]
}