import { ADD_REMINDER, DELETE_REMINDER } from '../constants'

const reminder = action => {
  return {
    text: action.text,
    id: Math.random()
  }  
}

const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id)
  console.log('new reminder', reminders)
  return reminders
}

const reducer = (state = [], action) => {
  let reminders = null
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]
      console.log('reminders as state', reminders)
      return reminders
    case DELETE_REMINDER:
      reminders = removeById(state, action.id)
      return reminder
    default:
      return state
  }
}

export default reducer