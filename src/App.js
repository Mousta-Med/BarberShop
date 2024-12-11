import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'

const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Services />
            </main>
            <Footer />
        </div>
    )
}

export default App