import { useState } from 'react'

export default function useLocalStorage(key: string, initialValue: unknown) {
  const [item, setStoredItem] = useState(() => {
    try {
      const localStorage = window.localStorage.getItem(key)
      return localStorage ? JSON.parse(localStorage) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setItem = (value: unknown) => {
    try {
      const valueToStore = value instanceof Function ? value(item) : value
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
      setStoredItem(valueToStore)
    } catch (error) {
      throw { name: 'Local Storage error', response: error }
    }
  }

  const removeItem = () => {
    try {
      setStoredItem(initialValue)
      window.localStorage.removeItem(key)
    } catch (error) {
      throw { name: 'Local Storage error', response: error }
    }
  }

  return { item, setItem, removeItem }
}
