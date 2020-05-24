const beautify = require('beautify')
const {MessageEmbed } = require("discord.js")
var CleanText = require('clean-text-js');

module.exports.run = async (bot, message ,args) => {
   if(message.author.id !== "460751723342987274") return message.channel.send("Dont try to swindle me. I know you are not the bot owner");
    
    if(!args[0]) {
       return message.channel.send("What are you evaluating use some common sense!");
    } 

    

     function cleanText(text) {
        if (typeof text !== "string")
            text = require("util").inspect(text, { depth: 1 });

        text = text
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203))
           

        return text;
     }
      try {
        if(args.join(" ").toLowerCase().includes("token")) {
                return
        }
      
     
    const toEval = args.join(" ");
    const evalcode = eval(toEval);
    const evaluated = await cleanText(evalcode)
        

    let embed = new MessageEmbed()
    .setAuthor("EVALUATION", message.author.displayAvatarURL())
    .setColor(123456)
    .setTitle(`📥INPUT📥`)
    .setDescription(`\`\`\`js\n${toEval}\`\`\``)
    .addField(
          `<a:ship_sucess:713220790958424125> OUTPUT <a:ship_sucess:713220790958424125>`,
          `\`\`\`js\n${cleanText(evaluated)}\`\`\``,
          false
        )
    .addField(`📄TYPE📄`, `\`\`\`js\n${typeof evaluated}\`\`\``, false)
    .setFooter("OUTCOME: SUCCESS!", message.author.displayAvatarURL())
    .setTimestamp();
    message.channel.send(embed).then(m=> m.react('a:ship_sucess:713220790958424125'));

    

    } catch(e) {
        message.channel.send("An error occured while evaluating the code")
        console.log(e)
        return;

    }
     }
 
  



module.exports.config = {
    name: "eval",
    description: "evaluates a code",
    usage: "%eval",
    accessableby: "Members",
    aliases: ["si", "eval"]
}