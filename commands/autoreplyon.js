const db = require('quick.db')
module.exports.run = async(bot,message,args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("This command needs admin permissions")
  db.set(`auto_${message.guild.id}`, null)
  message.channel.send('Auto reply enabled')
  
}
module.exports.config = {
  name: "autoreplyon",
  aliases: ["autoon"]
}