module.exports.run= async(bot,message,args)=>{
  message.channel.send(args[0])
}
module.exports.config={
  name:'enlarge',
  aliases:['el']
}