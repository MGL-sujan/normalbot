const db = require('quick.db')
module.exports.run = async(bot,message,args) => {
  if(!args[0]) return message.channel.send('usage: ``%set_background <image link>``')
  //if(!args[0].endsWith(['jpg','png','webp','gif'])) return message.channel.send('Not a valid image link!!')
  db.set(`background_${message.author.id}`, args[0])
  message.channel.send('Succesfully changed your background !!Note: If the link is not a valid image then your card will fail to load.')
}
module.exports.config = {
  name: 'set_background',
  aliases: ['s_Back']
}