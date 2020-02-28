const Discord = require('discord.js');
const prefix = '-';
var nazwabota = 'Cytrus BOT'
const bot = new Discord.Client({disableEveryone: true});
var PREFIX = '-'
const token = 'NjgyOTczOTEwNTU5NzUyMjMz.XlkzUw._VqyOf0AuzLkK2JZnUj_GqFdmHU'
var pomoc = 'komendy'
bot.on('ready', async () => {
    bot.user.setActivity("Cytrus to kozak")
    console.log(`${nazwabota} zgłasza sie`)     
})
bot.on('message', message=>{
    let args =message.content.substring(PREFIX.length).split(" ");
    
        switch(args[0]){
            case 'zakup':
            message.channel.sendMessage('W celu zakupu lua executora zglos sie do @fx_cytrus#4932')
            break;
            case 'buy':
            message.channel.sendMessage('dm @fx_cytrus#4932 if you want buy lua executor')
            break;
            case 'version':
            message.channel.sendMessage('Wersja bota: 1.0.0')
            break;
            case'bot':
            if(args[1] === 'pomoc'){
                message.Textchannel.sendMessage('Wszelką pomoc dot. bota znajdziesz na kanale @bot')
                }else{
                    message.channel.sendMessage('Nie ma takiej komendy')
                }
                break;
                case 'clear':
                    if(!args[1]) return message.reply('Wystąpił błąd!')
                    message.channel.bulkDelete(args[1]);
                    message.channel.sendMessage('Poprawnie Wyczyszczono czat!')
                    break;
            }


    
        })











    bot.login(token);
