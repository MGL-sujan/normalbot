const reqEvent = (event) => require(`../events/${event}`)
const db = require('quick.db')
module.exports = bot => {
    bot.on("ready", function() {reqEvent("ready") (bot) });
    bot.on("reconnecting", () => reqEvent("reconnecting") (bot))
    bot.on("disconnect", () => reqEvent("disconnect") (bot))
    bot.on("warn", reqEvent("warn"));
    bot.on("error", reqEvent("error"));
    bot.on('messageDelete',async message =>{
      db.set(`snipe_${message.channel.id}`,message.content)
      db.set(`snipe1_${message.channel.id}`, message.author)
    })
    bot.on("message",async message =>{
      let prefix = db.fetch(`prefix_${message.guild.id}`)
      if(message.channel.type === 'dm') return
      if(message.content.startsWith(prefix)) return;
      db.add(`messages_${message.guild.id}`,1)
      db.add(`message_today_${message.guild.id}`,1)

      let d= db.fetch(`xp_${message.channel.id}`)
      if(d === 'true') return;
      db.add(`score_${message.guild.id}_${message.author.id}`, 2)
      
      db.add(`message_${message.guild.id}_${message.author.id}`,1)

      let lvl = db.fetch(`lvl_${message.guild.id}_${message.author.id}`)
      if(lvl === null) {
      db.set(`lvl_${message.guild.id}_${message.author.id}`, 1)
      
      }
      
      
      let score = db.fetch(`score_${message.guild.id}_${message.author.id}`)
      if(score >= 100) {
        db.add(`lvl_${message.guild.id}_${message.author.id}`,1)
        db.set(`score_${message.guild.id}_${message.author.id}`, 0)
      }
      
    })
    bot.on("message", async message => {
      if(message.content === "dead chat") {
        let j = await db.fetch(`auto_${message.guild.id}`)
        if(j === 'true') return;
        else {
        message.channel.send("then chat instead of complaining!")
        }
      } else if(message.content.toLowerCase().includes("fuck")) {
        let fetched = await db.fetch(`c_${message.guild.id}`)
        if (fetched === 'true') return;
        message.delete()
        message.channel.send(`${message.author}Watch your language <a:PartyGlasses:713035586432139295>`)
      }
      else if(message.content.toLowerCase() === 'idc') {
        let j = await db.fetch(`auto_${message.guild.id}`)
        if(j === 'true') return;
        else{
        let random = Math.floor(Math.random()*100) 
        if(random < 50) {
          //message.channel.send('So What? <a:partyblob:713035590844547182>')
        }else {
          //message.channel.send('U dont care, I also dont care <a:CatDance:713035592245706763> ')
        }
        } 
      }else if(message.content.toLowerCase() === 'creeper') {
        let j = await db.fetch(`auto_${message.guild.id}`)
        if(j === 'true') return;
        else{message.channel.send('Aww man! <a:CatDance:713035592245706763>')}
      }else if(message.content.toLowerCase().includes("bitch")) {
        let fetched = await db.fetch(`c_${message.guild.id}`)
        if (fetched === 'true') return;
        message.delete()
       message.channel.send(`${message.author}Watch your language <a:PartyGlasses:713035586432139295>`)
      }
        
        
    })
    
}   