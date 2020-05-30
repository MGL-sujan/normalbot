const d = require('discord.js')
module.exports.run= async(bot,message,args)=>{
  if(!args[0]){
  let embed = new d.MessageEmbed()
  .setTitle("CANNOT ASK ELON!")
  .setColor('RANDOM')
  .addField('Sorry Elon is not free!!',"You need to ask elon something he is not a free man")
  .setFooter(message.author.tag,message.author.displayAvatarURL())
  .setThumbnail('https://cdn.discordapp.com/avatars/503433133446791170/a_b597effc13b3f18b2e2071f9621f7dda.gif?size=128')
  message.channel.send(embed)
    return
  }if(!args[1]){
    let embed = new d.MessageEmbed()
  .setTitle("CANNOT ASK ELON!")
  .setColor('RANDOM')
  .addField('You need to ask something!!','Dont ask me one word question!')
  .setFooter(message.author.tag,message.author.displayAvatarURL())
  .setThumbnail('https://cdn.discordapp.com/avatars/503433133446791170/a_b597effc13b3f18b2e2071f9621f7dda.gif?size=128')
  message.channel.send(embed)
    return
  }
  let ques = args.join(' ')
  let ans = ['ELON MUSK APPROVED!!','ELON MUSK DISPROVED!!']
  let embed = new d.MessageEmbed()
  .setTitle("ASKED ELON!")
  .addField(`${message.author.username} asked: ${ques}`,`${ans[Math.floor(Math.random()*ans.length)]}`)
  .setColor('RANDOM')
  .setFooter(message.author.tag,message.author.displayAvatarURL())
  .setThumbnail('https://cdn.discordapp.com/avatars/503433133446791170/a_b597effc13b3f18b2e2071f9621f7dda.gif?size=128')
  message.channel.send(embed)
  
}
module.exports.config={
  name:'askelon',
  aliases:[]
}