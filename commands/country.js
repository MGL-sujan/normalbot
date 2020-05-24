const countries        = require('country-data-list').countries
const currencies    = require('country-data-list').currencies
const  regions          = require('country-data-list').regions
const  languages        = require('country-data-list').languages
const callingCountries = require('country-data-list').callingCountries
const {MessageEmbed} = require('discord.js')
var lookup = require('country-data-list').lookup
const alpha2 = require("i18n-iso-countries");
module.exports.run = async(bot,message,args) => {
if(!args[0])return;
  var country = lookup.countries({name: args[0]})[0]
  
  
  
let embed = new MessageEmbed()
.setTitle('Country Data')
.setColor('123456')
.addField('Name',  countries.j.name)
.addField('Currency', countries.alpha2.a.currencies)
.addField('Language', countries.alpha2.getAlpha2Code(args[0], 'en').languages)
message.channel.send(embed)
  
  
}
 
module.exports.config = {
  name: 'country',
  aliases: ["ct"]
}