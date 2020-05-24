const {MessageEmbed} = require('discord.js')
const request = require('request')
module.exports.run = async(bot,message,args) => {
  if(!args[0]) return message.channel.send('Usage: ``%mars <solar days>``')
 request(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${args[0]}&api_key=hn5KJF4d2WaJJd2fY1v90sEsAbDqwJTcKQ05Kl6Y`,function(err,response,body){
   let p = JSON.parse(body)
   let images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png','https://th.bing.com/th/id/OIP.d4Ub1wecngzW3aLxaFn-fwHaFW?pid=Api&rs=1']
   let thumbnail = images[Math.floor(Math.random()*images.length)]
   let embed = new MessageEmbed()
   .setTitle('Mars Image')
   .setColor('RANDOM')
   .addField('Date', `${args[0]} SOL`)
   .addField('Imaging Camera Name', p.photos[0].camera.full_name)
   .addField('Rover Name', p.photos[0].rover.name)
   .addField('Earth Date', p.photos[0].earth_date)
   .addField('Rover Status', p.photos[0].rover.status)
   .setThumbnail(thumbnail)
   .setImage(p.photos[0].img_src)
   message.channel.send(embed)
   
 })
  
  
}
module.exports.config = {
  name: 'mars',
  aliases: ['m']
}