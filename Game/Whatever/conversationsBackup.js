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
        GS.channel.send('\n(He chuckles)\n"You always know how to make people grin. Good luck out there."')
        GS.channel.send('(He hands you a full bottle of gin)\n"For the journey." He says, and smiles.\nYou give the old man a nod, take a deep breath and walk out of the bar.')
        }else if(conversationChoice1 === '2'){
        GS.channel.send('\n(Your enthusiasm brings a small smile to his face)\n"With that attitude I know we can change things around here. Good luck out there."')
        GS.channel.send('(He hands you a full bottle of gin)\n"For the journey." He says, and smiles.\nYou give the old man a nod, take a deep breath and walk out of the bar.')
        }else{
        console.log('shut up inside q11')
        }
        fightEncounter()
    }
  
    const openingConversation2 = (answerChoice) => {
      const conversationChoice2 = answerChoice
      if(conversationChoice2 === '1'){
        GS.channel.send(`\n"Me? I'll be here. The Mafia won't touch me. Even if they tried, Charlie would rip them a new one."\n(He jerks his thumb towards a tommygun mounted on the wall behind his head)\n"I wish you the best of luck. You\'ll need it.`)
        GS.channel.send('(He hands you a full bottle of gin)\n"For the journey." He says, and smiles.\nYou give the old man a nod, take a deep breath and walk out of the bar.')
      }else if(conversationChoice2 === '2'){
        GS.channel.send(`\n"That\'s for you to find out and for me to watch. Hope you\'re ready for what\'s out there."`)
        GS.channel.send('(He hands you a full bottle of gin)\n"For the journey." He says, and smiles.\nYou give the old man a nod, take a deep breath and walk out of the bar.')
      }else{console.log('shut up inside q12')}
      fightEncounter()
    }

client.on("message", (msg) => {

    let splitMessage = msg.content.split(" ");
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
})