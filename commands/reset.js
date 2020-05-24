const db = require('quick.db')
module.exports.run = async(bot,message,args) => {
   if(message.author.id !== '601081450305159219')return
   var guild = bot.guilds.cache.keyArray() 
   guild.forEach(resett)
  function resett(id){
    db.set(`message_today_${id}`,0)
}


}
module.exports.config = {
  name: 'reset',
  aliases: ['reset']
}