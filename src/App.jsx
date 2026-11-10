import React, { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WhyChooseUs from './components/WhyChooseUs'
import Eligibility from './components/Eligibility'
import Curriculum from './components/Curriculum'
import PlacementAssistance from './components/PlacementAssistance'
import KickOffCTA from './components/KickOffCTA'
import RequestCallbackModal from './components/RequestCallbackModal'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onOpenModal={handleOpenModal} />
      <main className="flex-grow-1">
        <HeroSection onOpenModal={handleOpenModal} />
        <WhyChooseUs />
        <Eligibility />
        <Curriculum />
        <PlacementAssistance />
        <KickOffCTA onOpenModal={handleOpenModal} />
      </main>
      <footer className="bg-dark text-white text-center py-4 border-top">
        <p className="mb-0 text-white-50">© 2026 AI & ML Academy. All rights reserved.</p>
      </footer>

      {/* Reusable Modal Component */}
      <RequestCallbackModal show={isModalOpen} onHide={handleCloseModal} />
    </div>
  )
}

export default App