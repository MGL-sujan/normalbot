const request = require('request')
const fetch = require('node-fetch')
module.exports.run = async(bot,message,args)=>{
  var url = 'http://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2020-05-23&' +
          'sortBy=popularity&' +
          'apiKey=f954123d8b32416580b35ca667e14048';

request(url,function(body,response,error){
        console.log(response.articles[0].source)
        })

}
module.exports.config = {
  name: "news",
  aliases: ["autooff"]
}