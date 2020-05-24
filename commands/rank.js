const db = require('quick.db')
const {MessageEmbed} = require('discord.js')
const {createCanvas,loadImage} = require('canvas')
const {MessageAttachment} = require('discord.js')
module.exports.run = async (bot,message,args) =>{
  if(message.mentions.users.first()){
    try {
    let user = message.mentions.users.first()
    let msg = await db.fetch(`message_${message.guild.id}_${user.id}`)
    let fetch = db.fetch(`background_${user.id}`)
    let color = '#eb3434'
    let g = db.fetch(`user_colorhex_${user.id}`)
    if(g === null)  color = '#eb3434'
    else color = g
    let background = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytiACYWlpCPuQehId5W1DygE7N7Xv6Oqc0yXmStomOsIpCzD9gw&s';
    if(fetch === null) background = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytiACYWlpCPuQehId5W1DygE7N7Xv6Oqc0yXmStomOsIpCzD9gw&s';
    else background = fetch;
    let lvl = await db.fetch(`lvl_${message.guild.id}_${user.id}`)
    const score = await db.fetch(`score_${message.guild.id}_${user.id}`)
    const canvas = createCanvas(1200,333)
    const ctx = canvas.getContext('2d')
    const bg = await loadImage(background)
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)
    
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#ffffff'
    ctx.globalAlpha = 20
    ctx.strokeRect(120,216,1000,68)
    ctx.stroke();
    ctx.fillStyle = color
    ctx.fillRect(120,216, (score)*10,64)
    ctx.fill();
    
    ctx.globalAlpha = 1
    
    ctx.textAlign = "left"
    ctx.fillStyle = "#ffffff"
    ctx.font = "30px Arial"
    ctx.fillText(user.tag,300,140)
    
    ctx.font = "50px Arial"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`Level`, 300,180);
    ctx.fillText(lvl,470,180)
    
    ctx.font = '30px Arial'
    ctx.textAlign = 'center'
    ctx.fillStyle= '#ffffff'
    ctx.fillText(`${score}/100 `, 500,250)
    
    ctx.font = '30px Arial'
    ctx.textAlign = 'left'
    ctx.fillStyle = '#ffffff'
    ctx.fillText(`Messages Sent:`,850,100)
    
    ctx.font = '50px Arial'
    ctx.textAlign = 'left'
    ctx.fillStyle = '#ffffff'
    ctx.fillText(msg,850, 150)
    
    
    
    ctx.arc(170,160,120,0,Math.PI*2,true)
    ctx.lineWidth = 6
    ctx.strokeStyle = '#ffffff'
    ctx.stroke()
    ctx.closePath()
    ctx.clip()
    const avatar = await loadImage(user.displayAvatarURL({format: 'jpg'}))
    ctx.drawImage(avatar,40,40,250,250)
    const attachment = new MessageAttachment(canvas.toBuffer(),'rank.png')
    message.channel.send(attachment)
    }catch(e){console.log(e)}
  }
  else{
    let user = message.author
    let msg = await db.fetch(`message_${message.guild.id}_${message.author.id}`)
    let background = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytiACYWlpCPuQehId5W1DygE7N7Xv6Oqc0yXmStomOsIpCzD9gw&s';
    let fetch = db.fetch(`background_${user.id}`)
    if(fetch === null) background = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytiACYWlpCPuQehId5W1DygE7N7Xv6Oqc0yXmStomOsIpCzD9gw&s';
    else background = fetch;
    let color = '#eb3434'
    let g = db.fetch(`user_colorhex_${user.id}`)
    if(g === null)  color = '#eb3434'
    else color = g
    let lvl = await db.fetch(`lvl_${message.guild.id}_${user.id}`)
    const score = await db.fetch(`score_${message.guild.id}_${user.id}`)
    const canvas = createCanvas(1200,333)
    const ctx = canvas.getContext('2d')
    const bg = await loadImage(background)
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)
    
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#ffffff'
    ctx.globalAlpha = 20
    ctx.strokeRect(180,216,1000,68)
    ctx.stroke();
    ctx.fillStyle = color
    ctx.fillRect(180,216, (score)*10,65)
    ctx.fill();
    
    ctx.globalAlpha = 1
    
    ctx.textAlign = "left"
    ctx.fillStyle = "#ffffff"
    ctx.font = "30px Arial"
    ctx.fillText(user.tag,300,140)
    
    ctx.font = "50px Arial"
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`Level`, 300,180);
    ctx.fillText(lvl,470,180)
    
    ctx.font = '30px Arial'
    ctx.textAlign = 'center'
    ctx.fillStyle= '#ffffff'
    ctx.fillText(`${score}/100 `, 500,250)
    
      ctx.font = '30px Arial'
    ctx.textAlign = 'left'
    ctx.fillStyle = '#ffffff'
    ctx.fillText(`Messages Sent:`,850,100)
    
    ctx.font = '50px Arial'
    ctx.textAlign = 'left'
    ctx.fillStyle = '#ffffff'
    ctx.fillText(msg,850, 150)
    
    
    ctx.arc(170,160,120,0,Math.PI*2,true)
    ctx.lineWidth = 6
    ctx.strokeStyle = '#ffffff'
    ctx.stroke()
    ctx.closePath()
    ctx.clip()
    
    
    const avatar = await loadImage(user.displayAvatarURL({format: 'jpg'}))
    const guildimage = await loadImage(message.guild.iconURL({format:'jpg'}))
    ctx.drawImage(guildimage,100,100,700,700)
    ctx.drawImage(avatar,40,40,250,250)
    const attachment = new MessageAttachment(canvas.toBuffer(),'rank.png')
    message.channel.send(attachment)
  

  }
}
module.exports.config = {
  name:'rank',
  aliases:['rk']
}