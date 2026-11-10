import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const WhyChooseUs = () => {
  const highlights = [
    {
      icon: 'bi-gpu-card',
      title: 'Industry Tooling',
      text: 'Train on PyTorch, Scikit-learn, Hugging Face, LangChain, Docker, and FastAPI.',
    },
    {
      icon: 'bi-person-video3',
      title: 'Mentor Support',
      text: 'Structured guidance from practicing AI Engineers and ML system architects.',
    },
    {
      icon: 'bi-folder-check',
      title: 'Production Portfolio',
      text: 'Deploy real applications: recommendation systems, RAG bots, and vision pipelines.',
    },
    {
      icon: 'bi-patch-check',
      title: 'Career Outcomes',
      text: 'System design rounds, DSA mastery sessions, and dedicated hiring networks.',
    },
  ]

  return (
    <section id="why-us" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose Us</h2>
          <p className="text-muted">A structured program engineered for practical software and model delivery.</p>
        </div>
        <Row className="g-4">
          {highlights.map((item, idx) => (
            <Col md={6} lg={3} key={idx}>
              <Card className="h-100 border-0 shadow-sm p-3 text-center">
                <Card.Body>
                  <div className="text-primary mb-3">
                    <i className={`bi ${item.icon} fs-1`}></i>
                  </div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default WhyChooseUs