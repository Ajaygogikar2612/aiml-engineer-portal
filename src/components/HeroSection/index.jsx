import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const HeroSection = ({ onOpenModal }) => {
  return (
    <section id="hero" className="bg-light py-5 border-bottom">
      <Container>
        <Row className="align-items-center g-4 py-4">
          <Col lg={7}>
            <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-2 rounded-pill fw-semibold mb-3">
              Full-Stack AI Engineering
            </span>
            <h1 className="display-4 fw-bold text-dark">
              Become an <span className="text-primary">AI & ML Engineer</span> in 18 Months
            </h1>
            <p className="lead text-secondary mt-3">
              Master predictive machine learning, deep learning vision models, LLM systems, and end-to-end MLOps deployment with production-grade engineering practices.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Button variant="primary" size="lg" className="px-4 fw-semibold" onClick={onOpenModal}>
                Request Call Back
              </Button>
              <Button variant="outline-dark" size="lg" className="px-4" href="#curriculum">
                Explore Syllabus
              </Button>
            </div>
          </Col>
          <Col lg={5}>
            <Card className="shadow-sm border-0 rounded-4 p-3 bg-white">
              <Card.Body>
                <h5 className="fw-bold mb-3 text-dark">Program Overview</h5>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                  <li className="d-flex align-items-center">
                    <i className="bi bi-calendar-check text-primary fs-3 me-3"></i>
                    <div>
                      <strong>Duration</strong>
                      <p className="text-muted mb-0 small">18 Months (Comprehensive Hands-On)</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-code-slash text-primary fs-3 me-3"></i>
                    <div>
                      <strong>Hands-on Labs</strong>
                      <p className="text-muted mb-0 small">20+ Real-world Projects & APIs</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-briefcase text-primary fs-3 me-3"></i>
                    <div>
                      <strong>Placement Drive</strong>
                      <p className="text-muted mb-0 small">1:1 Mock Interviews & Direct Referrals</p>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection