const hiddenBot = require('./hiddenBot.js')

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

let GS = {
  channel: 0,
  openingSetting: `"Your story begins in the once illustrious capitol city **Christallis**. 
Named for the rare crystal "Zhonflorite" only found here in all of "NohM\'Ana". 
The city built upon great wealth, and quickly attracted many travelers looking for quick and easy money, growing in size, population, and power." \n`,
  classes: {
    'GUNSLINGER':{ 
      name:'Gunslinger',
      BH: 105,
      BA: 2,
      abilities:{
        abilityOne: {
          name:'Headshot',
          damage: 45,
        },
        abilityTwo:{
          name:'Trickshot',
          damage: 75,
          CTH: 75
        }
      }},
    'WARDEN': {
      name:'Warden',
      BH: 135,
      BA: 13,
      abilities:{
        abilityOne: {
          name:'Headbutt',
          damage: 40,
        },
        abilityTwo:{
          name:'Police Brutality',
          damage: 70,
          CTH: 75
        }
      }
    }
  },
  RE: {
    options: ['Fight', 'Flee'],
    list: {
      'GABLIN GANG': {
      name:'Gablin Gang',
      BH: 100,
      BA: 5,
      Attacks:{
        BasicAttack: 15,
        SecondaryAttack: 30
      }
      },
      'DREG CREW': {
        name: 'Dreg Crew',
        BH: 100,
        BA: 5,
        Attacks:{
          BasicAttack: 15,
          SecondaryAttack: 30
        }
      },
      'MAFIA BOYS': {
        name:'Mafia Boys',
        BH: 100,
        BA: 5,
        Attacks:{
          BasicAttack: 15,
          SecondaryAttack: 30
        }
      }
    } 
  },
  PS: {
    name: 'Default',
    qIndex: 0,
    class: 'N/A',
    HP: 0,
    lives: 3,
  },
  ES: {
    actions: []
  }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  GS.channel = client.channels.cache.find(channel => channel.name === 'test-channel')
});

client.login(hiddenBot.hiddenBot);

const openingConversation = (answerChoice) => {
  const conversationChoice = answerChoice
  if(conversationChoice === '1'){
    GS.channel.send(`\n"Suck it up ${GS.PS.name}, there\'s trouble brewin\' my friend."`)
    GS.channel.send(`"Do you think you're ready to do this? Out there, you\'ll be on your own."\n1: Do what? Where am I?! \n2: YEah I'm READY \n`)
    GS.PS.qIndex = 1;
  }else if(conversationChoice === '2'){
    GS.channel.send('\n"That\'s good. I doubt it will last."')
    GS.channel.send(`(You see a faint smile on his lips. He washes a glass and stares down at the bar table)\n "It\'s almost time to go ${GS.PS.name}."\n1: So it is. What will you do?\n2: Go where?\n`)
    GS.PS.qIndex = 2
  }else{console.log('shut up')}
  
}

const openingConversation1 = (answerChoice) => {
  const conversationChoice1 = answerChoice
    if(conversationChoice1 === '1'){
      GS.channel.send('\n(He chuckles)\n"You always know how to make people smile. Good luck out there."')
      GS.channel.send('You give the old man a nod, take a deep breath and walk out of the bar.')
      }else if(conversationChoice1 === '2'){
      GS.channel.send('\n(Your enthusiasm brings a small smile to his face)\n"With that attitude I know we can change things around here. Good luck out there."')
      GS.channel.send('You give the old man a nod, take a deep breath and walk out of the bar.')
      }else{
      console.log('shut up inside q11')
      }
      fightEncounter()
  }

  const openingConversation2 = (answerChoice) => {
    const conversationChoice2 = answerChoice
    if(conversationChoice2 === '1'){
      GS.channel.send(`\n"Me? I'll be here. The Mafia won't touch me. Even if they tried, Charlie would rip them a new one."\n(He jerks his thumb towards a tommygun mounted on the wall behind his head)\n"I wish you the best of luck. You\'ll need it.`)
      GS.channel.send('You give the old man a nod, take a deep breath and walk out of the bar.')
    }else if(conversationChoice2 === '2'){
      GS.channel.send(`\n"That\'s for you to find out and for me to watch. Hope you\'re ready for what\'s out there."`)
      GS.channel.send('You give the old man a nod, take a deep breath and walk out of the bar.')
    }else{console.log('shut up inside q12')}
    fightEncounter()
  }

const classPick = (classChoice, rebirth) => {
  GS.PS.HP = GS.classes[classChoice].BH
  if(rebirth === false){ 
    GS.PS.class = GS.classes[classChoice].name.toUpperCase()
    GS.channel.send(`You chose ${GS.PS.class}.`)
    GS.channel.send(`\n(You're in an almost empty bar, save for the bartender, an old man wearing the outfit of a theater usher.)\n "How do you feel?" He asks. \n 1: Pretty shit.\n2: Great!\n`)
  }
}

client.on("message", (msg) => {

  GS.PS.name = msg.author;
  let splitMessage = msg.content.split(" ");

  let gayMessage = splitMessage.indexOf('gay');
  if (gayMessage > -1){
    GS.channel.send('Your mom is gay, friggin idiot');
  }

  let startMessage = splitMessage.indexOf('START');
  if(startMessage > -1){
    GS.channel.send('Game is starting. Get Ready!')
    // GS.channel.send(GS.openingSetting)
    GS.channel.send('What class will you choose?' + `\n\n Gunslinger \n Warden \n`)
  }
  let classMessage = splitMessage.indexOf('-class');
  if(classMessage === 0){
    classPick(splitMessage[1].toUpperCase(), false)
  }
  
  let madeChoice = splitMessage.indexOf('-choice');
  if(madeChoice === 0){
    let convo = GS.PS.qIndex;
    let choice = splitMessage[1];
    if(convo === 0){
      openingConversation(splitMessage[1])
    } 
    else if(convo === 1){
      if(choice === '1'){
        openingConversation1(splitMessage[1])
      }else if (choice === '2'){
        openingConversation1(splitMessage[1])
      }
    }else if(convo === 2){
      if(choice === '1'){
        openingConversation2(splitMessage[1])
      }else if(choice === '2'){
        openingConversation2(splitMessage[1])
      }
    }
  }

  let admin = splitMessage.indexOf('-admin');
  if(admin === 0){
    if(splitMessage[1] === 'reset') {
      GS.PS.qIndex = 0
      GS.PS.class = 'N/A'
      GS.channel.send('Game is starting. Get Ready!')
      GS.channel.send(GS.openingSetting)
      GS.channel.send('What class will you choose?' + `\n Gunslinger \n Warden \n`)
    }
  }

  let continueMessage = splitMessage.indexOf('-continue')
        if(continueMessage === 0){
          classPick(GS.PS.class, true)
          GS.channel.send(`You Revive`)
          GS.PS.lives = GS.PS.lives - 1
          console.log(GS.PS.HP)
          console.log(GS.PS.lives)
        }

  let fightOptionsMessage = splitMessage.indexOf('-ability')
  if(fightOptionsMessage === 0){
    const playerArmor = GS.classes[GS.PS.class].BA
    const ability = splitMessage[1]
    
    GS.classes[GS.PS.class].abilities
    const abilityOne = GS.classes[GS.PS.class].abilities.abilityOne
    const abilityTwo = GS.classes[GS.PS.class].abilities.abilityTwo
    if(ability === '1'){
      GS.ES.actions.push(abilityOne.name)
      GS.ES.encounter.BH = GS.ES.encounter.BH - abilityOne.damage
      const lastAbility = GS.ES.actions[GS.ES.actions.length -1]
      GS.channel.send(`You used ${lastAbility}. ${GS.ES.encounter.name}'s health has been reduced to ${GS.ES.encounter.BH}`)
    }else if(ability === '2'){
      GS.ES.actions.push(abilityTwo.name)
      const chance = Math.random()
      if(chance > .99){
        GS.ES.encounter.BH = GS.ES.encounter.BH - abilityTwo.damage
        const lastAbility = GS.ES.actions[GS.ES.actions.length -1]
        GS.channel.send(`You used ${lastAbility}. ${GS.ES.encounter.name}'s health has been reduced to ${GS.ES.encounter.BH}`)
      }else if(chance < .99){
        GS.channel.send('The attack missed!')
      }
    }
    if(GS.ES.encounter.BH < 1){
      GS.channel.send(`YOU MURDERED THEM OH MY GOD WHAT THE FUCK IS WRONG WITH YOU \nthanks for playing lol`)
    }
    if(GS.ES.encounter.BH > 1){ 
      const enemyAttacks = Object.keys(GS.ES.encounter.Attacks)
      const attackGenerator = Math.floor(Math.random()*2)
      const theBigAttack = enemyAttacks[attackGenerator]
      GS.PS.HP =  GS.PS.HP - (GS.ES.encounter.Attacks[theBigAttack] - playerArmor)
      if(GS.PS.HP < 1){
        GS.channel.send(`Wow. That was fast.\n **YOU DIED**\n Continue?`)
        
      }
      if(GS.PS.HP > 1){
      GS.channel.send(`${GS.ES.encounter.name} clobbered your fuckin face in bud, dealing ${GS.ES.encounter.Attacks[theBigAttack] - playerArmor} damage!\n Your new HP is ${GS.PS.HP}\n What will you do? \n1: ${abilityOne.name}\n2: ${abilityTwo.name}`)
    }
    }
  }
})

const createRandEnc = function (obj) {
  const keys = Object.keys(GS.RE.list);
  return GS.RE.list[keys[ keys.length * Math.random() << 0]];
};

const fightEncounter = () => {
  const encounter = createRandEnc()
  GS.channel.send(`\n(Surveying your environment, you realize you\'re surrounded by a ${encounter.name})\n Prepare yourself.`)
  GS.ES['encounter'] = encounter

  const pClass = GS.PS.class;
  const abilityOne = GS.classes[pClass].abilities.abilityOne.name
  const abilityTwo = GS.classes[pClass].abilities.abilityTwo.name

  GS.channel.send(`\nWhat will you do? \n1: ${abilityOne}\n2: ${abilityTwo}`)
}