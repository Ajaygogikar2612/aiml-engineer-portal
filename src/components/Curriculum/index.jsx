import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

const Curriculum = () => {
  const syllabus = [
    {
      title: 'Phase 1: Python & Applied Mathematics for Machine Learning',
      details: 'Object-oriented Python, NumPy, Pandas, vector calculus, statistical inference, and Exploratory Data Analysis (EDA).',
    },
    {
      title: 'Phase 2: Supervised & Unsupervised Machine Learning',
      details: 'Regression, classification, decision trees, random forests, XGBoost, clustering, cross-validation, and Scikit-Learn pipelines.',
    },
    {
      title: 'Phase 3: Deep Learning & Computer Vision',
      details: 'Neural networks from scratch, backpropagation, PyTorch, CNN architectures, transfer learning, and image classification.',
    },
    {
      title: 'Phase 4: Generative AI, LLMs & MLOps Deployment',
      details: 'Transformers, Hugging Face, Retrieval-Augmented Generation (RAG), vector databases, FastAPI microservices, and Docker containerization.',
    },
  ]

  return (
    <section id="curriculum" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">What will you learn in AI & ML?</h2>
          <p className="text-muted">A step-by-step modular breakdown from foundational code to production AI.</p>
        </div>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Accordion defaultActiveKey="0" flush className="shadow-sm rounded border">
              {syllabus.map((item, idx) => (
                <Accordion.Item eventKey={String(idx)} key={idx}>
                  <Accordion.Header className="fw-semibold">{item.title}</Accordion.Header>
                  <Accordion.Body className="text-secondary">{item.details}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Curriculum