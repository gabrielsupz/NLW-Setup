import React, { useState } from 'react'
import { Habit } from './components/Habit'
import './styles/global.css'

export function App() {
  return (
    <div>
      <Habit completed={1} />
      <Habit completed={2} />
      <Habit completed={3} />
    </div>
  )
}
