import React from 'react'
import { Container, Button } from 'react-bootstrap'

const KickOffCTA = ({ onOpenModal }) => {
  return (
    <section className="py-5 bg-primary text-white text-center">
      <Container>
        <h2 className="fw-bold display-6 mb-3">Kick off your AI Prep journey with Us</h2>
        <p className="lead mb-4 text-white-50">
          Transform your career by mastering the foundational and cutting-edge paradigms of Artificial Intelligence.
        </p>
        <Button variant="light" size="lg" className="fw-bold text-primary px-4 py-2" onClick={onOpenModal}>
          Request Call Back
        </Button>
      </Container>
    </section>
  )
}

export default KickOffCTA