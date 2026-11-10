import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Eligibility = () => {
  const requirements = [
    {
      title: 'Educational Qualification',
      description: 'Graduates or final-year students in Computer Science, IT, BCA, B.Sc (Math/Stats), or related disciplines.',
    },
    {
      title: 'Mathematical Foundation',
      description: 'Comfortable with foundational high-school level concepts in linear algebra, probability, and basic calculus.',
    },
    {
      title: 'Transitioning Engineers',
      description: 'Backend developers, frontend devs, and tech support professionals seeking a high-growth career pivot.',
    },
  ]

  return (
    <section id="eligibility" className="py-5 bg-light border-top border-bottom">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">AI & ML Engineer – Eligibility</h2>
          <p className="text-muted">Who can enroll in this 18-month career track?</p>
        </div>
        <Row className="g-4 justify-content-center">
          {requirements.map((req, idx) => (
            <Col md={4} key={idx}>
              <Card className="h-100 border-0 shadow-sm p-3">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-check2-circle text-primary fs-3 me-2"></i>
                    <h5 className="fw-bold mb-0">{req.title}</h5>
                  </div>
                  <p className="text-secondary small mb-0">{req.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Eligibility