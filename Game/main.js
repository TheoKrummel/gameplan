const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

let GameState = {
  openingSetting: 
`"Your story begins in the once illustrious capitol city **Christallis**. 
Named for the rare crystal "Zhonflorite" only found here in all of "NohM\'Ana". 
The city built upon great wealth, and quickly attracted many travelers looking for quick and easy money, growing in size, population, and power." \n`,
  classes: {
    'GUNSLINGER': 'Gunslinger',
    'WARDEN': 'Warden'
  },
  randomEncounter: {
    options: ['Fight', 'Flee'],
    list: ['Gablin Gang', 'Dreg Crew', 'Mafia Boys']
  },
  playerState: {
    class: 'N/A',
    HP: 100
  }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login("ODI2MTQzNTQ5NDMwMTY5NjA2.YGIMIw.YFbDt75LRHMYVHpJHXUEzXssUzk");

const classPick = (msg, classChoice) => {
  GameState.playerState.class = GameState.classes[classChoice]
  msg.channel.send(`You chose ${GameState.playerState.class}.`)
}

client.on("message", (msg) => {
  somethingElse = msg;
  let splitMessage = msg.content.split(" ");

  let gayMessage = splitMessage.indexOf('gay');
  if (gayMessage > -1){
    msg.channel.send('Your mom is gay, friggin idiot');
  }
  // SCUFFED EVERYTHING I CAN ONLY GET IT TO WORK HERE GONNA NEED HELP ON THIS ONE
  let startMessage = splitMessage.indexOf('START');
  if(startMessage > -1){
    msg.channel.send('Game is starting. Get Ready!')
    msg.channel.send(GameState.openingSetting)
    msg.channel.send('What class will you choose?' + `\n Gunslinger \n Warden \n`)
  }
  let classMessage = splitMessage.indexOf('-class');
  if(classMessage === 0){
    classPick(msg, splitMessage[1].toUpperCase())
  }
})

const createRandEnc = () => {
  
  const rand = Math.floor(Math.random()*3)
  const enc = GameState.randomEncounter.list[rand]
  
  const randomEnc = {
    encounter: enc,
    options: GameState.randomEncounter.options
  }
  
  const question = `You've encountered a ${randomEnc.encounter}!\nWhat will you do?`
  const options = `\n 1: ${randomEnc.options[0]} \n 2: ${randomEnc.options[1]}\n`

  const resp = promptPlayer(question, options)

  return { resp: resp, options: randomEnc.options}
}


// const classPick = () => {
//   const classChoice = promptPlayer('What class will you choose?', `\n ${GameState.classes[0]} \n ${GameState.classes[1]} \n`)
//   GameState.playerState.class = GameState.classes[classChoice - 1]
//   console.log(`You chose ${GameState.playerState.class}.`)
// }

// I KNOW I CAN MAKE THIS BETTER BUT IM WORKING ON IT lol
// Planning to make it a function like promptPlayer at some point just to make conversations easy
// In case you see this before I'm finished, theres a bug where the text repeats itself and I'm working on it
const openingConversation = () => {
  const q1 = promptPlayer(`\n(You're in an almost empty bar, save for the bartender, an old man wearing the outfit of a theater usher.)\n "How do you feel?" He asks. \n`, `1: Pretty shit.\n2: Great!\n`)
  if(q1 === '1'){
    console.log('\n"Suck it up, there\'s trouble brewin\' my friend."')
    const q11 = promptPlayer(`"Do you think you're ready to do this? Out there, you\'ll be on your own."\n`, `1: Do what? Where am I?! \n2: YEah I'm READY \n`)
    if(q11 === '1'){
    console.log('\n(He chuckles)\n"You always know how to make people smile. Good luck out there."')
    }else if(q11 === '2'){
      console.log('\n(Your enthusiasm brings a small smile to his face)\n"With that attitude I know we can change things around here. Good luck out there."')
    }else{
      console.log('shut up inside q11')
    }
  }else if(q1 === '2'){
    console.log('\n"That\'s good. I doubt it will last."')
    const q12 = promptPlayer(`(You see a faint smile on his lips. He washes a glass and stares down at the bar table)\n "It\'s almost time to go."\n`, `1: So it is. What will you do?\n2: Go where?\n`)
    if(q12 === '1'){
      console.log(`\n"Me? I'll be here. The Mafia won't touch me. Even if they tried, Charlie would rip them a new one."\n(He jerks his thumb towards a tommygun mounted on the wall behind his head)\n"I wish you the best of luck. You\'ll need it.`)
    }else if(q12 === '2'){
      console.log(`\n"That\'s for you to find out and for me to watch. Hope you\'re ready for what\'s out there."`)
    }else{console.log('shut up inside q12')}
  }else{console.log('shut up')}
  console.log('You give the old man a nod, take a deep breath and walk out of the bar.')
}

// GAME STARTS HERE

// Show opening scene
// console.log(GameState.openingSetting)

// Ask player to pick class

// classPick()
// openingConversation()