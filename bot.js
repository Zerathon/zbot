const Discord = require("discord.js");
const yt = require('ytdl-core');
const ffmpeg = require('ffmpeg');
const TOKEN = "MzE0ODUwNjU0MjczNDA0OTI4.DFfmgw.c3seCY26nWl4HhPP3CYcMNnSl34";
const PREFIX = "|";
const client = new Discord.Client();

var bot = new Discord.Client();

var servers = {};

bot.on('ready', () => {
  console.log(`Console | Zerabot is online! All systems optimal. `);
});



function commandIs(str, msg){
    return msg.content.startsWith("|" + str);
}

bot.on(`message`, message => {
 console.log("Chat Logs | " + message.author.username + " said: " + message.content)
});

bot.on('message', message => {
  var args = message.content.split(/[ ]+/);
          if (message.author.id !== '218375317851471872') return;
          if(commandIs("say", message)){
   if(args.length === 1){
         message.channel.sendMessage('You did not define an argument.');
      } else {
     message.channel.sendMessage(args.join(" ").substring(5));
     if (message.content.includes("|say") || message.content.includes("|say")){
        message.delete();
          }
        }
          }
});

bot.on('message', message => {
  var args = message.content.split(/[ ]+/);
          if (message.author.id !== '218375317851471872') return;
          if(commandIs("game", message)){
   if(args.length === 1){
         message.channel.sendMessage('You did not define an argument.');
      } else {
      bot.user.setGame(args.join(" ").substring(5));
     if (message.content.includes("|game") || message.content.includes("|game")){
          }
        }
          }
});


bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    client.on('message', message => {
      var args = message.content.split(/[ ]+/);
    if(commandIs("purge", message)){
       if(args.length >= 3){
               message.channel.sendMessage('You defined a large amount');
    } else {
      var msg;
      if(args.length === 1){
         msg=2;
    }
}
    }
  });

    switch (args[0]) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;

        case "ching":
            message.channel.sendMessage("Chong!");
            break;

        case "cmds":
             var embed = new Discord.RichEmbed()
                  .addField("Moderation", "// COMING SOON \\", true)
                  .addField("Fun", "|rdawson, |ping")
                  .addField("Assistance", "|cmds, |info, |help, |invite", true)
                  .addField("Music", "|play [search or url], |stop, |skip [number], |queue, |pause, |resume, |volume [1-200], |leave, |clearqueue")
                  .addField("Premium", "|say, |game. Contact Zerathonk 🤔#1210 to get access.")
                  .setColor(0x0078ff)
                  .setFooter("Created by Zerathonk 🤔#1210")
                  .setThumbnail(message.author.avatarURL)
             message.channel.sendEmbed(embed);

          break;



        case "rdawson": {
           var links = ([
              "https://cdn.discordapp.com/attachments/299928398929592320/315529117854334977/Screenshot_10.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315815675472117760/eJwVzEEOhCAMAMC_8ADKUqrgbwgSJBEhtJ6Mf9_d41zmUfc81aYOkcEbwF459blrlj5jybr0Xs4cR2WdeoMoEtPR8iUM1hnjyTn0.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315585482090217473/Screenshot_9.png",
              "https://cdn.discordapp.com/attachments/339156022809591809/339383479156604930/image.png",
              "https://cdn.discordapp.com/attachments/339156022809591809/339373788732850177/image.png",
              "https://cdn.discordapp.com/attachments/339156022809591809/339360211166822402/unknown.png",
              "https://cdn.discordapp.com/attachments/339156022809591809/339359595137073153/Screenshot_10.png",
              "https://cdn.discordapp.com/attachments/339156022809591809/339359329503150080/unknown.png",
              "https://cdn.discordapp.com/attachments/339156022809591809/339359329503150080/unknown.png",
              "https://cdn.discordapp.com/attachments/339156022809591809/339359329503150080/unknown.png",
              "https://cdn.discordapp.com/attachments/339156022809591809/339157472629620738/unknown.png",
              "https://cdn.discordapp.com/attachments/339156022809591809/339156996945084427/unknown.png",
              "https://images.discordapp.net/attachments/299928398929592320/339359504275603477/Screenshot_12.png",
              "https://images.discordapp.net/attachments/299928398929592320/339359328890912768/Screenshot_23.png",
              "https://images.discordapp.net/attachments/299928398929592320/339359334066814976/Screenshot_25.png",
              "https://images.discordapp.net/attachments/299928398929592320/339359388265349122/Screenshot_9.png",
              "https://images.discordapp.net/attachments/299928398929592320/339359425091600385/Screenshot_18.png",
              "https://images.discordapp.net/attachments/299928398929592320/339359413611790337/Screenshot_20.png",
              "https://images.discordapp.net/attachments/299928398929592320/339359449615564803/Screenshot_24.png",
              "https://images.discordapp.net/attachments/299928398929592320/339359504275603477/Screenshot_12.png",
              "https://images.discordapp.net/attachments/299928398929592320/339385747079561226/Screenshot_15.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315585501883006977/Screenshot_58.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315585528139612160/Screenshot_56.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315585574427688960/Screenshot_57.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315814781833445376/Screenshot_23.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315814794072555529/Screenshot_24.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315814849093304320/Screenshot_28.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315814812930277376/Screenshot_25.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315814904231624704/Screenshot_30.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315814936003739648/Screenshot_32.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315815838714167309/eJwVzMENwyAMAMBdGACDMSnJNoggghRihN1X1d2r3gD3Me91m8NcqlMOgLNL4XVaUV65VduY213z7GILD8iquVyjPiqA5FyKRCG9.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315816495970123777/Screenshot_39.png",
              "https://cdn.discordapp.com/attachments/299928398929592320/315816470749904896/Screenshot_41.png",
              "https://images.discordapp.net/.eJwVzNsNwyAMAMBdGADzrsk2iCCCFGKE3a-qu1e9Ae6j3vtWh7pEFh8A5-BK-9QstEtvuhP1u5U1WFeaUERKvWZ7hMEFYzCG4PHlXHaYAngbYzaICZNF72z2MOa_WU9X3x_AFSHb.YROYZ13DOc7Tc-NsMi9utdL38PM?width=248&height=300",
              "https://cdn.discordapp.com/attachments/240085443872292864/315593822631624705/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315593906353864705/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315593644826558467/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315593573837963266/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315593510738722817/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315593405101244416/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315593346544566273/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315593252462002176/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315592877843415042/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315592719495987201/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315592819811024907/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315592657416224778/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315592187259912192/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315592143911780362/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315591915489722370/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315591810733047808/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315591671167582211/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315591555564044288/Screenshot_32.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315590719320358912/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315590387609894913/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315590319372632066/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315590228276674560/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315590277375066122/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315590100354334732/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315587453316497411/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315587001665454082/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315586894488666112/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315586799017918465/image.png",
              "https://cdn.discordapp.com/attachments/240085443872292864/315586751240601601/image.png",
           ])
           var item = links[~~(Math.random() * links.length)];
           message.channel.sendMessage(item)
           }
           break;


        case "info":
             var embed = new Discord.RichEmbed()
                  .addField("Information", "Hello. My name is Zerabot, and I was created by Zerathonk 🤔#1210. I am still in very early stages, but I am constantly upated. I'm in the process of becoming a daily, fully working and friendly bot. Hopefully we can be friends! <3", true)
                  .setColor(0x0078ff)
                  .setFooter("Created by Zerathonk 🤔#1210")
                  .setThumbnail(message.author.avatarURL)
             message.channel.sendEmbed(embed);
            break;

        case "englandismycity":
            if (message.author.id !== '218375317851471872') return;
            setInterval(() => {message.channel.send("England is my city https://i.ytimg.com/vi/a-5VCZyAMz0/maxresdefault.jpg")},100)
        break;

        case "invite":
            var embed = new Discord.RichEmbed()
                .addField("What is your invite link?", "https://discordapp.com/oauth2/authorize?client_id=314850654273404928&scope=bot&permissions=8", true)
                .addField("Important Information", "I suggest that you inform Zerathonk 🤔#1210 before adding the bot just in case there's any future issues - this is for the best possible experience!", true)
                .addField("Remember!", "Always use |cmds and |help for help.", true)
                .setColor(0x0078ff)
                .setFooter("Created by Zerathonk 🤔#1210")
                .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);
        break;

        case "help":
            var embed = new Discord.RichEmbed()
                .addField("Who am I?", "Hey! My name's Zerabot and I was made by Zerathonk 🤔#1210. I can do very basic commands (|cmds), and I am constantly updated.", true)
                .addField("How do I use you?", "For help regarding usage, please use the command '|cmds'", true)
                .addField("Why don't you work?", "Make sure you're using a command that's added. If you want it, DM Zerathonk 🤔#1210. Always remember to use the | prefix.", true)
                .addField("This doesn't help at all!", "Sorry! Please contact Zerathonk 🤔#1210")
                .setColor(0x0078ff)
                .setFooter("Created by Zerathonk 🤔#1210")
                .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);
          break;


    }
});



const music = require('discord.js-music-v11');
const Bot = new Discord.Client();

Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});

music(Bot, {
    prefix: '|',        // Prefix of '-'.
    global: true,      // Server-specific queues.
    maxQueueSize: 10,   // Maximum queue size of 10.
});
Bot.login('MzE0ODUwNjU0MjczNDA0OTI4.DFfmgw.c3seCY26nWl4HhPP3CYcMNnSl34');
bot.login('MzE0ODUwNjU0MjczNDA0OTI4.DFfmgw.c3seCY26nWl4HhPP3CYcMNnSl34');
