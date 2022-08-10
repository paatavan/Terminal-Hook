const Discord = require("discord.js")   
const env = require("dotenv")
const bot = new Discord.Client({
    intents:[
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_BANS,
        Discord.Intents.FLAGS.GUILD_MEMBERS, 
        Discord.Intents.FLAGS.GUILD_VOICE_STATES
         
    ]
})
bot.on("ready", bot   => {
    console.log(`Im ready to do nothing for a wile`)

    bot.user.setActivity("Whats a Admin Launch ?.", {
        type: "STREAMING",
        url: "https://www.twitch.tv/monstercat"
      });

});



bot.on("messageCreate", message =>{
    if(message.content === `./terminal`){
        
        const TerminalHome = new Discord.MessageEmbed()
        .setDescription("```Terminal Hook [version 0.1\
                                      (c) Zoullien Ideas.Tous droits réservés\
         \
         \
         \
         C:```")
       .setColor("#2e3136")
       
        message.channel.send({ embeds: [TerminalHome]})
    
        
    }
})
bot.on("messageCreate", message =>{
    if(message.content === `./thelp`){
        
        const TerminalHome = new Discord.MessageEmbed()
        .setDescription("```Terminal Hook [version 0.1]\
                                      (c) Zoullien Ideas.Tous droits réservés\
         \
         \
         \
         C:help\
         \
         \
                                                                  BANㅤㅤㅤㅤPermet de Bannir des personne dérangent le serveur tout en detruisant les règles.\
\
\
                                C:```")
       .setColor("#2e3136")
       
        message.channel.send({ embeds: [TerminalHome]})
    
        
    }
})

bot.on("messageCreate", message =>{
    if(message.content === `./tban`){
        
        const TerminalHome = new Discord.MessageEmbed()
        .setDescription("```Terminal Hook [version 0.1\
                                      (c) Zoullien Ideas.Tous droits réservés\
         \
         \
         \
         C:ban```")
       .setColor("#2e3136")
       
        message.channel.send({ embeds: [TerminalHome]})
    
        
    }
})

bot.login(token bro)
