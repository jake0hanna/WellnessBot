Hooks.on('ready', function() 
{
  let reminderInterval = 10;
  setInterval(sendReminder, reminderInterval * 60000);
});


function sendReminder() 
{
  let reminderMessages = [
    'DRINK YOUR WATER DUMDUM!',
    'DO YOU WANT TO BE A HUNCHBACK?',
    'SOMETIMES I QUESTION IF YOU WANT TO SHRIVEL UP!',
    'IF YOU DONT FIX YOUR POSTURE ILL CRASH THE GAME!'
  ];

  let reminderMessage = reminderMessages[Math.floor(Math.random() * reminderMessages.length)];

  let chatData = 
  {
    user: game.user._id,
    content: reminderMessage
  };

  ChatMessage.create(chatData, {});
}
