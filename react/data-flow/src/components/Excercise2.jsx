import React, { useState } from 'react';
import List from './List';
import Conversation from './Conversation';

function Excercise2() {
    const [chatState, setChatState] = useState({
    displayConversation: null,
    conversations: [
        {
            with: "Laura", convo: [
                { text: "Hi", sender: "self" },
                { text: "You there?", sender: "self" },
                { text: "Yeah, hi, what's up?", sender: "other" }
            ]
        },
        {
            with: "Dad", convo: [
                { text: "Have you finished your school work yet?", sender: "other" },
                { text: "Yes.", sender: "self" },
                { text: "What do you mean, yes?", sender: "other" },
                { text: "??", sender: "self" }
            ]
        },
        {
            with: "Shoobert", convo: [
                { text: "Shoobert!!!", sender: "self" },
                { text: "Dude!!!!!!!!", sender: "other" },
                { text: "Shooooooooo BERT!", sender: "self" },
                { text: "You're my best friend", sender: "other" },
                { text: "No, *you're* my best friend", sender: "self" },
            ]
        }
    ]
})

const displayConvo = (name) => {
    setChatState(prevState => ({ ...prevState, displayConversation: name }));
};

const goBackToList = () => {
    setChatState(prevState => ({ ...prevState, displayConversation: null }));
};

const currentConversation = chatState.conversations.find(
    (convo) => convo.with === chatState.displayConversation
);

return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-sm w-full">
      {chatState.displayConversation === null ? 
       ( <List conversations={chatState.conversations} onSelectContact={displayConvo}/> )
     : ( <Conversation  convo={currentConversation.convo} senderName={currentConversation.with} onBack={goBackToList} /> )}
    </div>
  );
}

export default Excercise2