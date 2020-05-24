module.exports.run = async(bot,message,args) => {
   message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["Hmmmm ok?", "I dont wanna see", "Pingo!"]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`${response}: Bot Latency: \`${ping}\`, API Latency: \`${Math.round(bot.ws.ping)}\``)
    })
  
  
}
module.exports.config = {
  name:'ping',
  aliases:['p']
}