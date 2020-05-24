const request = require('request')
const {MessageEmbed} = require('discord.js')
module.exports.run = async(bot,message,args) => {
  if(!args[0]) return message.channel.send('Usage: ``%flight <flight number>``| Please note IATA code search is not allowed ,We will add it in future')
  request(`http://api.aviationstack.com/v1/flights?access_key=75f3f97b8ab468e36de64dd20eff756e&flight_number=${args[0]}`,function(err,response,body){
    let p = JSON.parse(body)
   
    let embed = new MessageEmbed()
    .setTitle('Flight Tracker')
    .addField('Flight Date', p.data[0].flight_date)
    .addField('Flight Status', p.data[0].flight_status)
    .addField('Airlines Name',p.data[0].airline.name)
    .addField('Flight Number', p.data[0].flight.number)
    .addField('IATA Number',p.data[0].flight.iata)
    .addField('Departure Airport',p.data[0].departure.airport)
    .addField('Terminal', p.data[0].departure.terminal)
    .addField('Gate Number',p.data[0].departure.gate)
    .addField('Estimated Time of departure',p.data[0].departure.scheduled)
    .addField('Arrival Airport',p.data[0].arrival.airport)
    .addField('Terminal', p.data[0].arrival.terminal)
    .addField('Arrival Gate', p.data[0].arrival.gate)
    .addField('Estimated Time of Arrival',p.data[0].arrival.estimated)
    .setThumbnail(`https://content.airhex.com/content/logos/airlines_${p.data[0].airline.iata}_250_150_r.png?background=ffffff`)
    message.channel.send(embed)
    
    
  })
  
}
module.exports.config = {
  name: "flight",
  aliases: ["fl"]
}