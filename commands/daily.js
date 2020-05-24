const Eco = require("quick.eco");
const eco = new Eco.Manager();
module.exports.run = async(bot,message,args) => {
  let add = eco.daily(message.author.id, 7000);
        if (add.onCooldown) return message.reply(`You already claimed your daily coins. Come back after ${add.time.days} days, ${add.time.hours} hours, ${add.time.minutes} minutes & ${add.time.seconds} seconds.`);
        else return message.reply(`you claimed ${add.amount} as your daily coins and now you have total ${add.after} coins.`);
}
module.exports.config = {
  name: 'daily',
  aliases: ["d"]
}