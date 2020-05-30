const { NekoBot } = require("nekobot-api");
const api = new NekoBot(); 
const Discord =require('discord.js')
module.exports.run = async(bot,message,args)=>{
 if(!args[0])return message.channel.send("Please type a quote or text")
    let image = await api.imageGen.trumpTweet(args.join(" ")); // returns a string.
    const attachment = new Discord.MessageAttachment(image,'trump.png')
    message.channel.send(attachment)
}
module.exports.config = {
  name: "trumptweet",
  aliases: ["tt"]
}