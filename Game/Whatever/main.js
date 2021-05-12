const hiddenBot = require('./../hiddenBot')
const openingConversation = require('./conversations')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const msg = {
    channel: 0
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    msg.channel = client.channels.cache.find(channel => channel.name === 'test-channel')
  });
  
client.login(hiddenBot.hiddenBot);

class Entity {
    constructor(name, hp, ar){
        this.name = name
        this.hp = hp
        this.ar = ar
    }
}

class Player extends Entity {
    constructor(name, hp, ar, abilityOne, abilityTwo){
        super(name, hp, ar)
        this.abilityOne = abilityOne
        this.abilityTwo = abilityTwo
    }
}

class Enemy extends Entity {
    constructor(name, hp, ar, abilityOne, abilityTwo){
        super(name, hp, ar)
        this.abilityOne = abilityOne
        this.abilityTwo = abilityTwo
    }
}

//Player State
// Goal to remove these
let PlayerClass = 'N/A'
let PlayerName = ''

//Player Classes
const classOptions = {
GUNSLINGER: new Player('Gunslinger', 105, 4, {'Headshot':{name: 'Headshot', dmg: 45}}, {'Trickshot':{name: 'Trickshot', dmg: 75, CTH: 75}}),
WARDEN: new Player('Warden', 135, 7, {'Headbutt':{name: 'Headbutt', dmg: 30}}, {'Police Brutality':{name: 'Police Brutality', dmg: 50, CTH: 75}})
}

//Enemy Encounters
const MafiaBruiser = new Enemy('Mafia Bruiser', 150, 3, {'Gut Punch':{name: 'Gut Punch', dmg: 12}}, {'Rough \'em Up':{name: 'Rough \'em Up', dmg: 25}})
const MafiaWiseguy = new Enemy('Mafia Wiseguy', 70, 0, {'Switchblade Slash':{name: 'Switchblade Slash', dmg: 18}}, {'Oh Hoh I\'ma Stab Ya!':{name: 'Oh Hoh I\'ma Stab Ya!', dmg: 30}})
const MafiaSoldier = new Enemy('Mafia Soldier', 125, 2, {'Christallin Karate':{name: 'Christallin Karate', dmg: 15}}, {'Round House 9mm Bullet':{name: 'Round House 9mm Bullet', dmg: 35}})
const MafiaJerk = new Enemy('Mafia Jerk', 180, 0, {'Hitty':{name: 'Hitty', dmg: 18}}, {'FISTY':{name: 'FISTY', dmg: 28}})
const Gablin = new Enemy('Gablin', 20, 0, {'Beg for life':{name: 'Beg for life', dmg: 0}}, {'Pathetic Cry':{name: 'Pathetic Cry', dmg: 0}})

//Conversations
console.log(openingConversation)


//Where the game happens

const classPick = (classChoice, rebirth) => {
    PS.hp = classOptions[classChoice].hp
    PlayerClass = classOptions[classChoice].name.toUpperCase()
    // GS.PS.inventory.heal.uses = 3
    if(rebirth === false){ 
      msg.channel.send(`You chose ${PlayerClass}.`)
      msg.channel.send(`\n**CHOICE**\n(You're in an almost empty bar, save for the bartender, an old man wearing the outfit of a theater usher.)\n "How do you feel?" He asks. \n 1: Pretty shit.\n2: Great!\n`)
    }
  }
  
  client.on("message", (msg) => {

    PlayerName = msg.author;
    let splitMessage = msg.content.split(" ");

    let gayMessage = splitMessage.indexOf('gay');
  if (gayMessage > -1){
    msg.channel.send('Your mom is gay, friggin idiot');
  }

  let startMessage = splitMessage.indexOf('START');
  if(startMessage > -1){
    msg.channel.send('Game is starting. Get Ready!\n If you need help, use -MOM to get help.')
    // GS.channel.send(GS.openingSetting)
    msg.channel.send('**CLASS**\nWhat class will you choose?' + `\n\n Gunslinger \n Warden \n`)
  }
  let classMessage = splitMessage.indexOf('-class');
  if(classMessage === 0){
    classPick(splitMessage[1].toUpperCase(), false)
  }
})