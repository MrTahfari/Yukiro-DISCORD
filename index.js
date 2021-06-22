const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("hello hell!")
})

app.listen(3000, () => {
 console.log("Yukiro is Online")
})
let Discord = require("discord.js")
let client = new Discord.Client()
const emoji = require('discord-emoji-convert');


client.on('ready', () => {
 client.user.setActivity('-help | prefix is - ', { type: 'PLAYING' })
})

client.on("message", message => {

if (message.content.toLowerCase().startsWith("-kill")) {
  let victim = message.mentions.users.first()
    if (!victim) message.reply("Oops sorry, i belive -kill did not work because u have not provided the user to kill :)")
     else {
      let kill = new Discord.MessageEmbed()
        .setTitle("")
        .setDescription(`RIP To ${victim} :sob:`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/2c945adbbc31699861f411f86ce8058f/tenor.gif?itemid=5459053')
        .setFooter("")
      message.channel.send(kill)
    }
  }

if(message.content.toLowerCase().startsWith("-thanks")) {
    let victim = message.mentions.users.first();
      if(!victim) {
      message.reply("Oops sorry, i belive -thanks did not work because u have not provided the user to thank :)")
    } else {
      let thanks = new Discord.MessageEmbed()
         
        .setDescription(`${victim} was thanked by ${message.author}`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/0fca4f18137a4f0d92cfe55852691b11/tenor.gif?itemid=7347365')
        
      message.channel.send(thanks)
    }
  }

if(message.content.toLowerCase().startsWith("-hug")) {
    let victim = message.mentions.users.first();
      if(!victim) {
      message.reply("Oops sorry, i belive -hug did not work because u have not provided the user to hug :)")
    } else {
      let hugs = new Discord.MessageEmbed()
         
        .setDescription(`${victim} was cutely hugged by ${message.author}`)
        .setColor("RANDOM")
        .setImage('https://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-12.gif')
        
      message.channel.send(hugs)
    }
  }

if(message.content.toLowerCase().startsWith("-smash")) {
    let smashVictim = message.mentions.users.first();
      if(!smashVictim) {
      message.reply("Oops sorry, i belive -smash did not work because u have not provided the user to smash :)")
    } else {
      let smasher = new Discord.MessageEmbed()
         
        .setDescription(`${smashVictim} was destroyed by ${message.author}`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4874411')
        
      message.channel.send(smasher)
    }
  }

if(message.content.toLowerCase().startsWith("-kiss")) {
    let smashVictim = message.mentions.users.first();
      if(!smashVictim) {
      message.reply("Oops sorry, i belive -kiss did not work because u have not provided the user to kiss :)")
    } else {
      let kissing = new Discord.MessageEmbed()
         
        .setDescription(`${smashVictim} was cutely kissed by ${message.author}`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/503bb007a3c84b569153dcfaaf9df46a/tenor.gif?itemid=17382412')
        
      message.channel.send(kissing)
    }
  }

if(message.content.toLowerCase().startsWith("-spank")) {
    let smashVictim = message.mentions.users.first();
      if(!smashVictim) {
      message.reply("Oops sorry, i belive -spank did not work because u have not provided the user to spank :)")
    } else {
      let spank = new Discord.MessageEmbed()
         
        .setDescription(`${smashVictim} was sadly spanked by ${message.author}`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/2eb222b142f24be14ea2da5c84a92b08/tenor.gif?itemid=15905904')
        
      message.channel.send(spank)
    }
  }

if(message.content.toLowerCase().startsWith("-fuckyou")) {
    let smashVictim = message.mentions.users.first();
      if(!smashVictim) {
      message.reply("Oops sorry, i belive -fuckyou did not work because u have not provided the user to spank :)")
    } else {
      let fuckyou = new Discord.MessageEmbed()
         
        .setDescription(`LMFAO ${message.author} said fuck you ${smashVictim}`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/0dcb84c900e10b6272152cd759eb1eab/tenor.gif?itemid=15151786')
        
      message.channel.send(fuckyou)
    }
  }

if(message.content.toLowerCase().startsWith("-whoishorny")) {
    let smashVictim = message.mentions.users.first();
      if(!smashVictim) {
      message.reply("Oops sorry, i belive -whoishorny did not work because u have not provided the user to ask if there horny :)")
    } else {
      let horny = new Discord.MessageEmbed()
         
        .setDescription(`:open_mouth: ${smashVictim} is this horny ${message.author}`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/9fa87b802a8d3d273cd1518e45d2906f/tenor.gif?itemid=4905405')
        
      message.channel.send(horny)
    }
  }

if(message.content.toLowerCase().startsWith("-goodmorning")) {
    let smashVictim = message.mentions.users.first();
      if(!smashVictim) {
      message.reply("Oops sorry, i belive -goodmorning did not work because u have not provided the user to say goodmorning :)")
    } else {
      let goodmorning = new Discord.MessageEmbed()
         
        .setDescription(`:wink: ${smashVictim} good morning ${message.author}`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/e58e300d3a2f068314db9c567a8b2772/tenor.gif?itemid=18452936')
        
      message.channel.send(goodmorning)
    }
  }

if(message.content === "-members") {
 let embed = new Discord.MessageEmbed()
 .setColor("#fca4a4")
 .setAuthor(`${message.guild}`, message.guild.iconURL({ dynamic: true }))
 .setTitle("Members")
 .setDescription (`Total: ${message.guild.members.cache.size}\n Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
 .setThumbnail(message.guild.iconURL({ dynamic: true }))
 
 message.channel.send(embed)
}

if (message.content === "-avatar" || message.content === "-avatar" || message.content === "-AVATAR") { 
 let embed = new Discord.MessageEmbed()
.setTitle("")
.setImage(`${message.author.displayAvatarURL({dynamic : true})}`)
.setColor("PURPLE")
message.channel.send(embed)
}

if(message.content.toLowerCase().startsWith("-slap")) {
    let smashVictim = message.mentions.users.first();
      if(!smashVictim) {
      message.reply("Oops sorry, i belive -slap did not work because u have not provided the user to slap :)")
    } else {
      let slap = new Discord.MessageEmbed()
         
        .setDescription(`LMFAO ${message.author} slapped the shit outta you ${smashVictim}`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/477821d58203a6786abea01d8cf1030e/tenor.gif?itemid=7958720')
        
      message.channel.send(slap)
    }
  }

if(message.content.toLowerCase().startsWith("-iscrying")) {
    let smashVictim = message.mentions.users.first();
      if(!smashVictim) {
      message.reply("Oops sorry, i belive -iscrying did not work because u have not cried yet :)")
    } else {
      let iscrying = new Discord.MessageEmbed()
         
        .setDescription(`aww ${smashVictim} dont worry its gonna be okay :slight_smile:`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/ce52606293142a2bd11cda1d3f0dc12c/tenor.gif?itemid=5184314')
        
      message.channel.send(iscrying)
    }
  }

if(message.content.toLowerCase().startsWith("-boobs")) {
    let smashVictim = message.mentions.users.first();
      if(!smashVictim) {
      message.reply("Oops sorry, i belive -boobs did not work because u have not seen boobs yet **VIRGIN** :)")
    } else {
      let boobs = new Discord.MessageEmbed()
         
        .setDescription(`hey sweetie ${smashVictim} here is some boobs :slight_smile:`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/d80c186c15f3cc37d0e29cf9e04d71af/tenor.gif?itemid=15403637')
        
      message.channel.send(boobs)
    }
  }
  
  if(message.content.toLowerCase().startsWith("-boobpower")) {
    let smashVictim = message.mentions.users.first();
      if(!smashVictim) {
      message.reply("Oops sorry, i belive -boobpower did not work because u have not unleased your boob power yet :)")
    } else {
      let boobpower = new Discord.MessageEmbed()
         
        .setDescription(`${smashVictim} JUST RELEASE HER BOOB POWER`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/3365ec4ad36536489ca76abafc1d5f2b/tenor.gif?itemid=9838385')
        
      message.channel.send(boobpower)
    }
  }

   if(message.content.toLowerCase().startsWith("-pat")) {
    let smashVictim = message.mentions.users.first();
      if(!smashVictim) {
      message.reply("Oops sorry, i belive -pat did not work because u have not unleased your boob power yet :)")
    } else {
      let pat = new Discord.MessageEmbed()
         
        .setDescription(`${message.author} Just patted ${smashVictim}`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/55df4c5fb33f3cd05b2f1ac417e050d9/tenor.gif?itemid=6238142')
        
      message.channel.send(pat)
    }
}
if(message.content === "-Help"||message.content === "-help") {
let embed = new Discord.MessageEmbed()
 .setTitle("")
 .setDescription("prefix is `-`")
 .addField(":zany_face: Fun", "`-spank` `-hug` `-smash` `-whoishorny` `-avatar` `-pat` `-boobpower` `-boobs` ` -iscrying` `-members` `-slap` `-goodmorning` `-fuckyou` `-kiss` `-smash` `-thanks`")
 .addField(":tools: Moderation", "`-kick` `-ban` `-mute` `-unmute` `-unban` `-serverinfo` `-membercount` `dm` `-slowmode` `admin` `-help`")
 .addField(":tada: Giveaway", "`start` `-end` `reroll` `-stats` `-edit` `-lists`")
 .addField(":wave: Others", "`-simprate` `-hacking` `-biden`")
 .addField(":robot: ChatApp", "`-chat` `-setchat`")
 .setColor("RANDOM")
 .setFooter("")
 message.channel.send(embed)
}


if(message.content.toLowerCase().startsWith("-punch")) {
    let smashVictim = message.mentions.users.first();
      if(!smashVictim) {
      message.reply("Oops sorry, i belive -punch did not work because u have not provided the user to smash :)")
    } else {
      let punch = new Discord.MessageEmbed()
         
        .setDescription(`${smashVictim} was punched to death by ${message.author}`)
        .setColor("RANDOM")
        .setImage('https://media1.tenor.com/images/2487a7679b3d7d23cadcd51381635467/tenor.gif?itemid=11451829')
        
      message.channel.send(punch)
    }
  }

if(message.content === "-serverinfo") {
 let embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
 .addField("Owner", message.guild.owner, true)
 .addField("Channels", message.guild.channels.cache.size, true)
 .addField("Roles", message.guild.roles.cache.size, true)
 .addField("Emojis", message.guild.emojis.cache.size, true)
 .addField("Verification Level", message.guild.verificationLevel, true)
 .addField("Region", `${message.guild.region}`, true)
 .addField("Members", `Total: ${message.guild.members.cache.size} | Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size} | Bots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
 .setThumbnail(message.guild.iconURL({ dynamic: true }))
 .setFooter(`ID: ${message.guild.id} Created • ${message.guild.createdAt.toDateString()}`)

 message.channel.send(embed)
}
if(message.content.startsWith(`-dm`)){
 const whattosend = message.content.slice("".length).trim().split(/ +/);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('please provide a user your dming')
if(!whattosend[1]) return message.channel.send('what do you want to send to them?')
member.send(whattosend.slice(1).join(" "))
}

if(message.content.toLowerCase().startsWith("-slowmode")){
 if (message.member.hasPermission("MANAGE_CHANNELS")) {
 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" "); 
 if(sentence != null){
 message.channel.setRateLimitPerUser(sentence);
 }

 message.channel.send(`okay i have enabled slowmode for this chat for ${sentence} seconds...`)
 } else {
 message.reply("what are you, dumb? you realize you have no permissions to execute this so dont try it again")
 } 
}

if (message.content === '-admin') {
 message.channel.send(`Ew no admin permissions for you dumbass BEGON Bitch :slight_smile:`)
}

if(message.content.startsWith("-simprate")) {
  let simprate = Math.round(Math.random() * 100 + 1)
  let victim = message.mentions.users.first()
  if(!victim) message.channel.send("please mention who you want me to simprate") 
  else {
    message.channel.send(`${victim} is ${simprate}% a simp! 
    `)
  }
}

if (message.content === '-help') {
 message.react("😎");
}

if (message.content.startsWith('-kick')) {
 const user = message.mentions.users.first();
 if (user) {
 const member = message.guild.member(user);
 if (member) { 
 member
 .kick('Optional reason that will display in the audit logs')
 .then(() => {
 message.channel.send(`i have successfully remove ${user.tag} from this server...`);
 })
 .catch(err => {
 message.reply('i couldnt kick this member...');
 console.error(err);
 });
 } else {
 message.reply("sorry, but that person isnt in this server...");
 }
 } else {
 message.reply("please mention the user to kick...");
 }
 }


if (message.content.toLowerCase().startsWith("-biden")) {
const sentence = message.content.split(" ").slice(1).join(" ")
    if (!sentence) return message.channel.send('please specify what you wanna send...')
    let embed = new Discord.MessageEmbed()
      .setImage(`https://api.popcatdev.repl.co/biden?text=${encodeURIComponent(sentence)}`)
      .setColor('RANDOM')
      .setFooter(' ');
    message.channel.send(embed)
}

if(message.content.startsWith("-hacking")) {
const user = message.mentions.users.first();
if(!user) return message.channel.send("please mention someone your hacking")
message.channel.send("**[25%]** Finding IP..").then(m => {
setTimeout(() => {
m.edit("**[50%]** IP FOUND, Looking for gmail and password...").then(m2 => {
setTimeout(() => {
m2.edit(`**[75%]** DONE, email - ${user.username}@icloud.com | password - XjdhgikshGdk`).then(m3 => {
setTimeout(() => {
m3.edit("**[100%]** Deleting System32..").then(m4 => {
setTimeout(() => {
m4.edit(`done hacking ${user}, all info was sent online.`)
}, 5500);
});
}, 2800);
});
}, 4500);
});
}, 5000);
});
};

client.on("message", async message => {
    if(message.content.startsWith(`-emojify`)) {
        var arg = message.content.split(" ").slice(1).join(" ")
        if(!arg) return message.channel.send('What do you want me to emojify? | Example Usage: !emojify this is cool')
        if(arg.legth > 90) return message.channel.send('Your text is too long | Please keep it under 90 characters')
        let emojis = emoji.convert(arg)
        message.channel.send(emojis).catch((_err) =>{
            message.channel.send(arg)
        })
    }
})

client.login(process.env.TOKEN)