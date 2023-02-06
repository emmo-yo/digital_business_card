import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app--container">
      <Header />
      <main>
        <About />
        <Interest />
      </main>
      <Footer />
    </div>
  )
}
