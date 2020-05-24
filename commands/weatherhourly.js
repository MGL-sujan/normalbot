const request = require('request')
module.exports.run = async (bot,message,args) => {
  if(!args[0]) return;
  else {
  let apikey = '0bef22e3a7d648fe4618d2b5556b9be4'
  let city = args[0]
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`
  request(url,function(err,response,body) {
    if(err) {console.log(err)}
    else {
      
    let weather = JSON.parse(body);
    console.log(weather.list[1].main.feels_like)
    }
  })
  }
}
module.exports.config = {
  name: 'w.hourly',
  aliases: ['w.h']
}