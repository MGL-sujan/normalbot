const Eco = require("quick.eco");
const eco = new Eco.Manager();
module.exports.run = async (bot, message,args) => {
  
  let random = Math.floor(Math.random()*100)
  if(random <= 50) {
    message.channel.send("Heads!")
    if(args[0] === "heads") {
      message.channel.send("You won!")
      eco.addMoney(message.author.id, 500);
      message.channel.send("You won 500 Global Coins.")
    } else if(args[0] === "tails") {
      message.channel.send("You lost!")
      eco.removeMoney(message.author.id,250)
      message.channel.send("Lol you just lost 250 GLobal Coins")
    }
  } else {
    message.channel.send("Tails!")
    if(args === "tails") {
      message.channel.send("You won !")
    }else if(args === "heads") {
      message.channel.send("You lost!")
    }
  }
}

module.exports.config = {
  name: "toss",
  description: "gives heads or tails",
  usage : "%toss",
  aliases : ["toss"]
}