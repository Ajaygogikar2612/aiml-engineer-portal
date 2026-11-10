import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const RequestCallbackModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold text-success d-flex align-items-center">
          <i className="bi bi-check-circle-fill me-2 fs-4"></i>Request Submitted!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center py-4">
        <p className="fs-5 mb-2">Thank you for your interest in the <strong>AI & ML Engineer</strong> program!</p>
        <p className="text-muted small mb-0">
          Our admissions team will reach out within 24 hours to guide you through cohort dates, syllabus details, and prerequisites.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RequestCallbackModal