const db = require('quick.db')
module.exports.run = async(bot,message,args) =>{
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  else if(message.author.id === '460751723342987274') {
    let fetched = db.fetch(`xp_${message.channel.id}`)
  if(fetched === 'true'){
    db.set(`xp_${message.channel.id}`, null)
  }else db.set(`xp_${message.channel.id}`, 'true')
  }else {
  let fetched = db.fetch(`xp_${message.channel.id}`)
  if(fetched === 'true'){
    db.set(`xp_${message.channel.id}`, null)
  }else db.set(`xp_${message.channel.id}`, 'true')
}
}
module.exports.config={
  name:'disable_xp',
  aliases:['dxp']
}