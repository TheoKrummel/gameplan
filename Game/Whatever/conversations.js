class Conversation {
    constructor(q1, q2, prompt1, prompt2, prompt11, prompt12){
        // this.prompt = prompt
        this.q1 = q1
        this.q2 = q2
        this.prompt1 = prompt1
        this.prompt2 = prompt2
        this.prompt11 = prompt11
        this.prompt12 = prompt12
    }
}

    
    
    
    const openingConversationQ1 = (`\n"Suck it up ${PlayerName}, there\'s trouble brewin\' my friend." \n"Do you think you're ready to do this? Out there, you\'ll be on your own."\n1: Do what? Where am I?! \n2: YEah I'm READY \n`)
    const openingConversationQ2 = (`\n"That\'s good. I doubt it will last."\n(You see a faint smile on his lips. He washes a glass and stares down at the bar table)\n "It\'s almost time to go ${PlayerName}."\n1: So it is. What will you do?\n2: Go where?\n`)
    const openingConversationPrompt1 = ('\n(He chuckles)\n"You always know how to make people grin. Good luck out there."\n(He hands you a full bottle of gin)\n"For the journey." He says, and smiles.\nYou give the old man a nod, take a deep breath and walk out of the bar.')
    const openingConversationPrompt2 = ('\n(Your enthusiasm brings a small smile to his face)\n"With that attitude I know we can change things around here. Good luck out there."\n(He hands you a full bottle of gin)\n"For the journey." He says, and smiles.\nYou give the old man a nod, take a deep breath and walk out of the bar.')
    const openingConversationPrompt11 = (`\n"Me? I'll be here. The Mafia won't touch me. Even if they tried, Charlie would rip them a new one."\n(He jerks his thumb towards a tommygun mounted on the wall behind his head)\n"I wish you the best of luck. You\'ll need it.\n(He hands you a full bottle of gin)\n"For the journey." He says, and smiles.\nYou give the old man a nod, take a deep breath and walk out of the bar.`)
    const openingConversationPrompt12 = (`\n"That\'s for you to find out and for me to watch. Hope you\'re ready for what\'s out there."\n(He hands you a full bottle of gin)\n"For the journey." He says, and smiles.\nYou give the old man a nod, take a deep breath and walk out of the bar.`)







    const openingConversation = new Conversation(openingConversationQ1, openingConversationQ2, openingConversationPrompt1, openingConversationPrompt2, openingConversationPrompt11, openingConversationPrompt12)

    // client.on("message", (msg) => {

    //     let splitMessage = msg.content.split(" ");
    //     let madeChoice = splitMessage.indexOf('-choice');
    //         if(madeChoice === 0){
    //     let convo = GS.PS.qIndex;
    //     let choice = splitMessage[1];
    //         if(convo === 0){
    //             openingConversation(splitMessage[1])
    //         } 
    //         else if(convo === 1){
    //         if(choice === '1'){
    //             openingConversation1(splitMessage[1])
    //         }else if (choice === '2'){
    //             openingConversation1(splitMessage[1])
    //         }
    //         }else if(convo === 2){
    //         if(choice === '1'){
    //             openingConversation2(splitMessage[1])
    //         }else if(choice === '2'){
    //             openingConversation2(splitMessage[1])
    //         }
    //         }
    //         }   
    // })
module.exports = {openingConversation}