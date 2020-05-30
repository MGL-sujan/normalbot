var querystring = require('querystring');
const request = require('request')
const d = require('discord.js')


module.exports.run = async(bot,message,args)=>{
  if(!args[0]) return message.chanel.send('Usage: ``spacex launcpad <number>``|Fact: SpaceX has only got 6 launchpads try putting a number between 1 and 6')
  if(args[0] > 6)return message.channel.send('Fact:SpaceX has only got 6 launchpads')
  if(isNaN(args[0])) return message.channel.send('Fact: SpaceX accepts numbers you should try it')
  if(args[0]=== '1'){
  request('https://api.spacexdata.com/v3/launchpads',function(error,response,body){
 let p =JSON.parse(body)[0]
 let embed = new d.MessageEmbed()
 .setTitle('SpaceX launcpad Info')
 .setAuthor('SpaceX','https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/332px-SpaceX-Logo.svg.png')
 .setThumbnail('https://cdn.glitch.com/486dc4db-f05c-428c-959e-9a9a8a80bf23%2Flaunch-america-loop-2.gif?v=1590724719207')
 .setFooter("Fact: The author of this bot loves Elon Musk!",message.author.displayAvatarURL({dynamic:true}))
 .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/SLC-3_Service_Tower_Rolls_Back_for_InSight.jpg/800px-SLC-3_Service_Tower_Rolls_Back_for_InSight.jpg')
 .addField('Name',p.name)
 .addField('Status',p.status)
 .addField('Site Name',p.site_name_long)
 .addField('Location Name',p.location.name)
 .addField('Region',p[0].location.region)
 .addField('Coordinates [lat][lon]',`${p.location.latitude},${p.location.longitude}`)
 .addField('Vehicles Launched',p.vehicles_launched)
 .addField('Attempted Launches',p.attempted_launches)
 .addField('Succesfull launches',p.successful_launches)
 .addField('Details',p.details)
 .setColor('RANDOM')
 message.channel.send(embed)
  })}
    if(args[0]=== '2'){
  request('https://api.spacexdata.com/v3/launchpads',function(error,response,body){
 let p =JSON.parse(body)[1]
 let embed = new d.MessageEmbed()
 .setTitle('SpaceX launcpad Info')
 .setAuthor('SpaceX','https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/332px-SpaceX-Logo.svg.png')
 .setThumbnail('https://cdn.glitch.com/486dc4db-f05c-428c-959e-9a9a8a80bf23%2Flaunch-america-loop-2.gif?v=1590724719207')
 .setFooter("Fact: The author of this bot loves Elon Musk!",message.author.displayAvatarURL({dynamic:true}))
 .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/KSC-20171215-PH_AWG03_0009_%2824214520767%29.jpg/1024px-KSC-20171215-PH_AWG03_0009_%2824214520767%29.jpg')
 .addField('Name',p.name)
 .addField('Status',p.status)
 .addField('Site Name',p.site_name_long)
 .addField('Location Name',p.location.name)
 .addField('Region',p.location.region)
 .addField('Coordinates [lat][lon]',`${p.location.latitude},${p.location.longitude}`)
 .addField('Vehicles Launched',p.vehicles_launched)
 .addField('Attempted Launches',p.attempted_launches)
 .addField('Succesfull launches',p.successful_launches)
 .addField('Details',p.details)
 .setColor('RANDOM')
 message.channel.send(embed)
  })}
    if(args[0]=== '3'){
  request('https://api.spacexdata.com/v3/launchpads',function(error,response,body){
 let p =JSON.parse(body)[2]
 let embed = new d.MessageEmbed()
 .setTitle('SpaceX launcpad Info')
 .setAuthor('SpaceX','https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/332px-SpaceX-Logo.svg.png')
 .setThumbnail('https://cdn.glitch.com/486dc4db-f05c-428c-959e-9a9a8a80bf23%2Flaunch-america-loop-2.gif?v=1590724719207')
 .setFooter("Fact: The author of this bot loves Elon Musk!",message.author.displayAvatarURL({dynamic:true}))
 .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/SpaceX_private-launch_facility_location--TexasProposal--201304.jpg/800px-SpaceX_private-launch_facility_location--TexasProposal--201304.jpg')
 .addField('Name',p.name)
 .addField('Status',p.status)
 .addField('Site Name',p.site_name_long)
 .addField('Location Name',p.location.name)
 .addField('Region',p.location.region)
 .addField('Coordinates [lat][lon]',`${p.location.latitude},${p.location.longitude}`)
 .addField('Vehicles Launched',p.vehicles_launched)
 .addField('Attempted Launches',p.attempted_launches)
 .addField('Succesfull launches',p.successful_launches)
 .addField('Details',p.details)
 .setColor('RANDOM')
 message.channel.send(embed)
  })}if(args[0]=== '4'){
  request('https://api.spacexdata.com/v3/launchpads',function(error,response,body){
 let p =JSON.parse(body)[3]
 let embed = new d.MessageEmbed()
 .setTitle('SpaceX launcpad Info')
 .setAuthor('SpaceX','https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/332px-SpaceX-Logo.svg.png')
 .setThumbnail('https://cdn.glitch.com/486dc4db-f05c-428c-959e-9a9a8a80bf23%2Flaunch-america-loop-2.gif?v=1590724719207')
 .setFooter("Fact: The author of this bot loves Elon Musk!",message.author.displayAvatarURL({dynamic:true}))
 .setImage('https://upload.wikimedia.org/wikipedia/commons/8/8e/Omelek_Island.jpg')
 .addField('Name',p.name)
 .addField('Status',p.status)
 .addField('Site Name',p.site_name_long)
 .addField('Location Name',p.location.name)
 .addField('Region',p.location.region)
 .addField('Coordinates [lat][lon]',`${p.location.latitude},${p.location.longitude}`)
 .addField('Vehicles Launched',p.vehicles_launched)
 .addField('Attempted Launches',p.attempted_launches)
 .addField('Succesfull launches',p.successful_launches)
 .addField('Details',p.details)
 .setColor('RANDOM')
 message.channel.send(embed)
  })}if(args[0]=== '5'){
  request('https://api.spacexdata.com/v3/launchpads',function(error,response,body){
 let p =JSON.parse(body)[2]
 let embed = new d.MessageEmbed()
 .setTitle('SpaceX launcpad Info')
 .setAuthor('SpaceX','https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/332px-SpaceX-Logo.svg.png')
 .setThumbnail('https://cdn.glitch.com/486dc4db-f05c-428c-959e-9a9a8a80bf23%2Flaunch-america-loop-2.gif?v=1590724719207')
 .setFooter("Fact: The author of this bot loves Elon Musk!",message.author.displayAvatarURL({dynamic:true}))
 .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Iridium-1_Mission_%2831450835954%29.jpg/800px-Iridium-1_Mission_%2831450835954%29.jpg')
 .addField('Name',p.name)
 .addField('Status',p.status)
 .addField('Site Name',p.site_name_long)
 .addField('Location Name',p.location.name)
 .addField('Region',p.location.region)
 .addField('Coordinates [lat][lon]',`${p.location.latitude},${p.location.longitude}`)
 .addField('Vehicles Launched',p.vehicles_launched)
 .addField('Attempted Launches',p.attempted_launches)
 .addField('Succesfull launches',p.successful_launches)
 .addField('Details',p.details)
 .setColor('RANDOM')
 message.channel.send(embed)
  })}
  if(args[0]=== '6'){
  request('https://api.spacexdata.com/v3/launchpads',function(error,response,body){
 let p =JSON.parse(body)[5]
 let embed = new d.MessageEmbed()
 .setTitle('SpaceX launcpad Info')
 .setAuthor('SpaceX','https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/332px-SpaceX-Logo.svg.png')
 .setThumbnail('https://cdn.glitch.com/486dc4db-f05c-428c-959e-9a9a8a80bf23%2Flaunch-america-loop-2.gif?v=1590724719207')
 .setFooter("Fact: The author of this bot loves Elon Musk!",message.author.displayAvatarURL({dynamic:true}))
 .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/KSC-20190628-PH_FWM01_0157~orig.jpg/800px-KSC-20190628-PH_FWM01_0157~orig.jpg')
 .addField('Name',p.name)
 .addField('Status',p.status)
 .addField('Site Name',p.site_name_long)
 .addField('Location Name',p.location.name)
 .addField('Region',p.location.region)
 .addField('Coordinates [lat][lon]',`${p.location.latitude},${p.location.longitude}`)
 .addField('Vehicles Launched',p.vehicles_launched)
 .addField('Attempted Launches',p.attempted_launches)
 .addField('Succesfull launches',p.successful_launches)
 .addField('Details',p.details)
 .setColor('RANDOM')
 message.channel.send(embed)
  })}
}

 
  

  
module.exports.config={
  name:'spacex_launchpad',
  aliases:[]
}