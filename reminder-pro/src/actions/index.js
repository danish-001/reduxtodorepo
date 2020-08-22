import { ADD_REMINDER } from '../constants'

export const addReminder = text => {
  const action = {
    type: ADD_REMINDER,
    text //ES6 short hand syntax when key and value are same
  }
  console.log('Action in Reminder', action)
  return action
}