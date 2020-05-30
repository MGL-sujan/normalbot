const d = require('discord.js')
module.exports.run = async(bot,message,args)=>{
  let time = new Date().getHours()
  let minute = new Date().getMinutes()
  let timer = 11 - time + 4
  let embed = new d.MessageEmbed()
  .setTitle('#Launch America')
  .setDescription('A new era of human spaceflight is set to begin as American astronauts once again launch on an American rocket from American soil to the International Space Station as part of NASA’s Commercial Crew Program.')
  .addField('Launch in:',`${timer} hours`)
  .setThumbnail('https://cdn.glitch.com/486dc4db-f05c-428c-959e-9a9a8a80bf23%2Flaunch-america-loop-2.gif?v=1590724719207')
  .setImage('https://www.nasa.gov/specials/dm2/img/la-white-logo.png')
  .addField('Live:', `[Live on youtube](https://www.youtube.com/watch?v=pMsvr55cTZ0)`)
  message.channel.send(embed)
}
module.exports.config ={
  name: '#launchamerica',
  aliases:[]
}