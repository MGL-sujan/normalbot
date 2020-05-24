const Discord = require('discord.js')
const puppeteer = require('puppeteer');

module.exports.run= async(bot,message,args)=>{
  //curl -H "Content-Type: application/json; charset=utf-8"  -H "Authorization: Bearer ya29.c.Ko8BzAd9nO4uFdCvGr-OXKfuvq5QzHU1v2OJGAU3pWkHeo3enVcvY6JsZQzviitawwb-3_VLNaM0v5N1W-zGZsmFfI-GSOS2zKCYLqsffTBuEiVnjmSxnddO8hNqOW5bM9_ohayzdOJ2-ylX9YmAGNkGfgnxrTlaDwsOzum-oGe0ZBHozSZOx8lljeqG0A06d4Y"  -d "{\"queryInput\":{\"text\":{\"text\":\"hi\",\"languageCode\":\"en\"}},\"queryParams\":{\"timeZone\":\"Asia/Calcutta\"}}" "https://dialogflow.clients6.google.com/v2/projects/botdiscord-264809/locations/global/agent/sessions/ba67f0fb-d9dd-08ce-7b02-979a8a0e6366:detectIntent"

// we're using async/await - so we need an async function, that we can run

  // open the browser and prepare a page
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // set the size of the viewport, so our screenshot will have the desired size
  await page.setViewport({
      width: 1280,
      height: 800
  })

  await page.goto(args)
  let img = await page.screenshot({
      path: 'codesnacks.png',
      fullPage: true
  })
  let attachment = new Discord.MessageAttachment(img.toBuffer(),'screen.png')
message.channel.send(attachment)
  // close the browser 
  await browser.close();


}

module.exports.config = {
  name: 'screenshot',
  aliases: ["autoof"]
}