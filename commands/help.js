const {MessageEmbed} = require('discord.js')
module.exports.run = async (bot,message,args) => {
  let embed = new MessageEmbed()
  .setTitle("Bot Commands")
  .addField("Basic Commands","``weather <city>``,``covid <country>``,``toss``,``botstatus``,``fifa <year>``,``fortnite <user> <gamemode>``,``user <mention player>``,``serverinfo``,``spotify [mention user]``, ``autoreplyoff/on``,``swearfilteron/off``,``rank``,``snipe``,``kiss``,``slap``,``hug``,``nsfw``")
  .addField("Mod","``newrole <name> <hex>``,``clean <number>``,``mute``,``snipe``")
  .addField("Image Creation", "``trumptweet <text>``,``bad [user]``,``tweet <username> <text>``")
  .addField("Music","Prefix for Music is [``p``] ``help`` ")
  .addField("Giveaway","Prefix for Giveaway is [``g,``] ``help``")
  .setColor('#ffb900')
  message.channel.send(embed)
  

  
}
module.exports.config = {
  name: 'help',
  aliases: ['h']
}