const Discord = require("discord.js");

const bot = new Discord.Client();

const prefix = '>'

var fs = require('fs');

var userData = JSON.parse(fs.readFileSync('Storage/userData.json','utf-8'));

var embed = new Discord.RichEmbed()





bot.on('message', message => {



  var sender = message.author;

  var msg = message.content.toUpperCase();





if (sender.id === '371205702292865026'){

  return;

}





    if(msg === prefix + "PING") {

      message.channel.send('!pong')

    }



    if(msg === "!PONG") {

      message.channel.send('>ping')

    }



    const swearWords = ["FUCK", "BITCH", "SHIT", "NIGGA", "NIGGER", "NIGER", "NIGA", "FUK", "CUNT"];

  if( swearWords.some(word => msg.includes(word)) ) {

    message.delete()

    message.reply("Watch your language!");



  }



  if (msg === prefix + 'HELP') {

    message.channel.send({embed:{



        title:"**Commands:**",

        description:" ",

        color: 0x17A589,

        thumbnail: {

          url: ""

        },

        fields:[

          {



              name:"** :one: >userstats**",

              value: " Shows you your stats!",

              inline: true,

          },

          {



            name:"**:two: >ping**",

            value: "Might crash your server!",

            inline: true,

          },

          {



            name:"**:three: >questions**",

            value: "Questions you can ask the bot!",

            inline: true,

          },

          {



            name:"**:four: >roast me**",

            value: "Roasts you!",

            inline: true,

          },

        ],

        timestamp: new Date(),

        footer: {

          text: 'Created by Nils#7359',

          icon_url: 'https://images-ext-2.discordapp.net/external/DUHHff9SHuJsgiT3tZ-hZExNcspjc0cFDRpJWv-zar0/https/cdn.discordapp.com/avatars/188717643694342144/c7ae8f8503009b7f03dbc1d0f559cb3a.webp',

        }

    }})

  }



  if (msg === prefix + 'FIXTURES') {





    message.channel.send({embed:{



        title:"**Fixtures**",

        description:"  @everyone ",

        color: 0x17A589,

        thumbnail: {

          url: "https://cdn.discordapp.com/attachments/370655476226195479/371003333244092416/Editable_logo_00015.png"

        },

        fields:[

          {



              name:"**MM.DD.YYYY**",

              value: "Team 1 **vs** Team 2",

              inline: true,

          },

          {



            name:"**MM.DD.YYYY**",

            value: "Team 3 **vs** Team 4",

            inline: true,

          },

        ],

        timestamp: new Date(),

        footer: {

          text: 'created by Nils#7359',

          icon_url: 'https://images-ext-2.discordapp.net/external/DUHHff9SHuJsgiT3tZ-hZExNcspjc0cFDRpJWv-zar0/https/cdn.discordapp.com/avatars/188717643694342144/c7ae8f8503009b7f03dbc1d0f559cb3a.webp',

        }

    }})

  }



  if (msg === prefix + 'USERSTATS') {

      var userCreated = sender.createdAt.toString().split(' ');



    message.channel.send({embed:{

        author: {

                name: sender.username,

                icon_url: sender.avatarURL,

                },

        title:"**----------------------------**",

        description:" ",

        color: 0x17A589,

        thumbnail: {

          icon_url: sender.avatarURL,

        },

        fields:[

          {



              name:"**Account created:**",

              value: "" + userCreated + "",

              inline: true

          },

          {



              name: "**Messages sent on this server:**",

              value: "" + userData[sender.id].messagesSent + "messages",

          },

        ],

        timestamp: new Date(),

        footer: {

          text: 'created by Nils#7359',

          icon_url: 'https://images-ext-2.discordapp.net/external/DUHHff9SHuJsgiT3tZ-hZExNcspjc0cFDRpJWv-zar0/https/cdn.discordapp.com/avatars/188717643694342144/c7ae8f8503009b7f03dbc1d0f559cb3a.webp',

        }

    }})

  }







  if (!userData[sender.id]) userData[sender.id] = {

    messagesSent: 0

  }



  userData[sender.id].messagesSent++;



  fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {

    if (err) console.error(err)

  });



   if (msg === prefix + 'CLEAR') {

          if (message.member.hasPermission("MANAGE_MESSAGES")) {

              message.channel.fetchMessages()

                 .then(function(list){

                      message.channel.bulkDelete(list);

                  }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})

          }

      }







  if(msg === prefix + "INVITE") {

    message.channel.send({embed:{



        title:" GamingChairBot *(click here)* ",

        description:"  ",

        url:"https://discordapp.com/oauth2/authorize?client_id=397754038315253781&scope=bot&permissions=8",

        color: 0x17A589,

        thumbnail: {

          url: "https://media.discordapp.net/attachments/290505244004057098/376018337261420551/Logo.png"

        },

        fields:[

          {



              name:"Invite GamingChairBot to your server!",



              value: "For the welcome messages please create a channel called welcome ( like above #welcome )!",

              inline: true,

          },



        ],

        timestamp: new Date(),

        footer: {

          text: 'created by Nils#7359',

          icon_url: 'https://images-ext-2.discordapp.net/external/DUHHff9SHuJsgiT3tZ-hZExNcspjc0cFDRpJWv-zar0/https/cdn.discordapp.com/avatars/188717643694342144/c7ae8f8503009b7f03dbc1d0f559cb3a.webp',

        }

    }})

  }



  if(msg === prefix + "WHAT IS THE MEANING OF LIFE"){

    message.channel.send("I've heard from a reliable source that the Answer is 42.")

  }



  if(msg === prefix + "WHERE CAN I HIDE A DEAD BODY"){

    message.channel.send("Why the f**k are you asking me this.👋")

  }



  if(msg === prefix + "LOL"){

    message.channel.send("What's so funny?")

  }

  if (msg === prefix + 'QUESTIONS') {

    message.channel.send({embed:{



        title:"**Commands:**",

        description:" ",

        color: 0x17A589,

        thumbnail: {

          url: ""

        },

        fields:[

          {

              name:":one: **>What is the meaning of life**",

              value: " The bot knows!",

          },

          {

            name:":two: **>Where can I hide a dead body**",

            value: " The bot will tell you!",

          },

          {

            name:":three: **>lol**",

            value: " nothing more to say",

          },

        ],

        timestamp: new Date(),

        footer: {

          text: 'Created by Nils#7359',

          icon_url: 'https://images-ext-2.discordapp.net/external/DUHHff9SHuJsgiT3tZ-hZExNcspjc0cFDRpJWv-zar0/https/cdn.discordapp.com/avatars/188717643694342144/c7ae8f8503009b7f03dbc1d0f559cb3a.webp',

        }

    }})

  }



if(msg === prefix + "ROAST ME"){

    message.channel.send("If the a zombie apocalipce broke out you'd be safe! Zombies eat brains!")

  }



if(msg === prefix + "CURSE"){

  message.channel.send("Fuck this shit!")

}



});





bot.on('ready', () => {

  console.log('Bot is up and running!')



  bot.user.setStatus('dnd');



  bot.user.setGame('Torb on Lyjang Tower!');



  bot.user.setGame('Torb on Lyjang Tower!', 'https://www.twitch.tv/monstercat');

});



//WELCOME AND LEAVE MESSAGES!

bot.on('guildMemberAdd', member => {



  console.log('User ' + member.user.username + 'has joined the server!')



  var Spec = member.guild.roles.find('name', 'Spectators');



  member.addRole(Spec)





  member.guild.channels.find('name', 'welcome').send('**' + member.user.username + '**, has joined the server!');

});



bot.on('guildMemberRemove', member => {

  member.guild.channels.find('name', 'welcome').send('**' + member.user.username + '**, has left the server!');



});









bot.login(process.env.BOT_TOKEN);
