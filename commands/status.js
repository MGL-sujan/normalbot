const os = require('os')
module.exports.run = async(bot,message,args)=>{
  message.channel.send(`\`\`\`SERVER INFO-->\nCPU INFO -->\nCPU MODEL = ${os.cpus.model}\nCPU CLOCK SPEED = ${os.cpus.speed} MHz\nCPU IDLE TIME = ${os.cpus.idle} ms\n----------------------------------------\nMEMORY INFO -->\nTOTAL MEMORY = ${os.totalmem} MB\nFREE MEMORY = ${os.freemem} MB\`\`\``)
}
module.exports.config={
  name:'status',
  aliases:[]
}