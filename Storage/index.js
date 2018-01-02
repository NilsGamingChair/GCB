const Discord = require("discord.js");
const TOKEN = "MzcxMjA1NzAyMjkyODY1MDI2.DMyPxA.4kD-aBT_GfbBSe1TqPyu7Eaonb0";
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
      message.channel.send('pong')
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
          url: "https://cdn.discordapp.com/attachments/370655476226195479/371003333244092416/Editable_logo_00015.png"
        },
        fields:[
          {

              name:"**>userstats**",
              value: " Shows you your stats!",
              inline: true,
          },
          {

            name:"**>fixtures**",
            value: "Shows you the upcoming matches!",
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

  if (msg === prefix + "FIXAUTO") {
    message.delete()
        var interval = setInterval (function () {
          message.channel.send({embed:{

              title:"**Fixtures**",
              description:" ",
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
                icon_url: 'https://images-ext-2.discordapp.net/external/DUHHff9SHuJsgiT3tZ-hZExNcspjc0cFDRpJWv-zar0/https/cdn.discordapp.com/avatars/188717643694342144/c7ae8f8503009b7f03dbc1d0f559cb3a.webp',
              }
          }})
        }, 6 * 1000);

   }

   if (msg === prefix + 'clear') {
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
              message.channel.fetchMessages()
                 .then(function(list){
                      message.channel.bulkDelete(list);
                  }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
          }
      }

});


bot.on('ready', () => {
  console.log('Bot is up and running!')


  bot.user.setStatus('dnd');

  bot.user.setGame('Torb on Lyjang Tower!');

  bot.user.setGame('Torb on Lyjang Tower!', 'https://www.twitch.tv/lunart1ck');
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




bot.login(TOKEN);
