import * as React from 'react'
import Exit from './QuickExitButton'
import Close from './EndChatButton'

//Buttons should be able to end the conversation and notify the counselor that the child has left the conversation
export default function ButtonsRow () {
  return (
    <div>
      <Exit />
      <Close />
    </div>
  )
};