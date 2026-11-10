import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const PlacementAssistance = () => {
  const steps = [
    {
      icon: 'bi-file-earmark-person',
      title: 'ATS-Friendly Resume & GitHub',
      desc: 'Craft production-focused code repos and project writeups that stand out to technical hiring managers.',
    },
    {
      icon: 'bi-terminal',
      title: 'Mock Technical Screens',
      desc: 'Simulate live coding, Python algorithms, and ML system architecture interview rounds.',
    },
    {
      icon: 'bi-buildings',
      title: 'Direct Hiring Drives',
      desc: 'Connect directly with hiring partners looking for skilled Junior and Associate AI/ML developers.',
    },
  ]

  return (
    <section id="placements" className="py-5 bg-light border-top border-bottom">
      <Container>
        <div className="text-center mb-5">
          <span className="badge bg-success-subtle text-success border border-success px-3 py-2 rounded-pill fw-semibold mb-2">
            Placement Assurance
          </span>
          <h2 className="fw-bold">100% Placement Assistance</h2>
          <p className="text-muted">Comprehensive career readiness programs integrated right into your training.</p>
        </div>
        <Row className="g-4">
          {steps.map((step, idx) => (
            <Col md={4} key={idx}>
              <Card className="h-100 border-0 shadow-sm text-center p-3">
                <Card.Body>
                  <i className={`bi ${step.icon} text-success fs-1 mb-3`}></i>
                  <h5 className="fw-bold">{step.title}</h5>
                  <p className="text-secondary small mb-0">{step.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default PlacementAssistance