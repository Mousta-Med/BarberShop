import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'

const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <Hero />
            <Footer />
        </div>
    )
}

export default App