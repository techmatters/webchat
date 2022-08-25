import * as React from 'react';

//Investigate the ability to have the 'Quick Exit' button clear the conversation UI for the child (shouldn't clear the chat for the counselor)
//Investigate the ability to have the 'Quick Exit' button redirect to a different url (e.g. www.google.com)

export default function QuickExitButton () {
  return (
    <button style={{'color':'red'}}>
      Quick Exit
    </button>
  )
};