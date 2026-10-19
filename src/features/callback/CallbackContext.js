import { createContext, useContext } from 'react'

// Общий "пульт": любой компонент может открыть окно обратного звонка.
export const CallbackContext = createContext(null)
export const useCallbackModal = () => useContext(CallbackContext)
