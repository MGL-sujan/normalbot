const db = require('quick.db')
module.exports.run = async(bot,message,args) => {
  let blue = '#1e00ff'
  let green = '#00ff1e'
  let red = '#ff0000'
  let yellow = '#fff200'
  if(!args[0]) return message.channel.send("Please choose a color between blue,green,red,yellow or a valid hex(case sensitive)")
  //if(!args[0].include['blue','green','yellow','red']) return message.channel.send('Pleases choose a valid color from list ``%set_bar_color``')
  if(args[0] === 'blue'){
    db.set(`user_colorhex_${message.author.id}`, '#1e00ff')
    message.channel.send('Succesfully changed the color!!')
  } else if(args[0] === 'red'){
    
     db.set(`user_colorhex_${message.author.id}`, null)
     message.channel.send('Succesfully changed the color!!')
  }else if(args[0] === 'yellow'){  db.set(`user_colorhex_${message.author.id}`,'#fff200')
                                             message.channel.send('Succesfully changed the color!!')}
   else if(args[0] === 'green')  {db.set(`user_colorhex_${message.author.id}`,'#00ff1e')
                                              message.channel.send('Succesfully changed the color!!')}
 else if(args[0].length === 7 && args[0].startsWith('#')) {
   db.set(`user_colorhex_${message.author.id}`, args[0])
   message.channel.send('Succesfully changed the color!!')
 }
 else {
  message.channel.send('Pleases choose a valid color from list ``%set_bar_color`` or enter a valid hex')
}
}
module.exports.config = {
  name: 'set_bar_color',
  aliases: ['s_color']
}