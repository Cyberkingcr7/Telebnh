 const TelegramBot = require('node-telegram-bot-api');
const token = 
'2089510450:AAFmnGNdFXWoFGN6kQbv6jfpWy45d0srLL4';
//1807943661:AAGYnAnJFO6d6nI_D-y2u-GgP2DNBE9sB18
const bot = new TelegramBot(token, {polling: true});
const fs = require ("fs-extra")
const prefix = "/"

bot.on('message', (msg) => {

  //anything

});

bot.on('message', (msg) => {

var Hi = "hi";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.from.id, "Hello  "+ msg.from.first_name);
}



var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
}

});

bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id, "Welcome, this is  a test bot made by suijin,i will be adding features soon");
})

bot.onText(/\/sendpic/, (msg) => {

bot.sendPhoto(msg.chat.id,"https://waifu.pics/api/sfw/waifu/get",{caption : "Here we go! \npowered by suijin "} )

});
//https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fbhg76OAOSyk%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dbhg76OAOSyk&tbnid=RiYFqGLREx8zQM&vet=12ahUKEwik2YzqwJnyAhUIfBoKHVJBDJgQMygEegUIARDPAQ..i&docid=xLbNMaHGB6-u7M&w=1280&h=720&q=raining%20anime&ved=2ahUKEwik2YzqwJnyAhUIfBoKHVJBDJgQMygEegUIARDPAQ,https://www.google.com/imgres?imgurl=https%3A%2F%2Fhdwallpaperim.com%2Fwp-content%2Fuploads%2F2017%2F08%2F22%2F83027-anime_girls-umbrella-rain-Vocaloid-Hatsune_Miku.jpg&imgrefurl=https%3A%2F%2Fhdwallpaperim.com%2Fanime-girls-umbrella-rain-vocaloid-hatsune-miku%2F&tbnid=lzsxYtjSVQYqjM&vet=12ahUKEwiKqOe755nyAhVO04UKHb6MB9gQMygHegUIARC6AQ..i&docid=RattJth-XfKsAM&w=1920&h=1080&q=raining%20anime&hl=en-US&ved=2ahUKEwiKqOe755nyAhVO04UKHb6MB9gQMygHegUIARC6AQ",{caption : "Here we go! \npowered by suijin "} 



bot.on('message', (msg) => {

var what = "idiot";
if (msg.text.includes(what)) {
bot.kickChatMember(msg.chat.id,  msg.from.id);

bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");

}
});





