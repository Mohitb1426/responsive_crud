import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './StyleStudentForm.css';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';

export default function StudentForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const submitStudentForm = (e) => {
        e.preventDefault();
        const requestBody = {
            name, email, password
        }
    }
    console.log(location?.state?.name)
    return (
        <div className='MainContainer'>
            <Form onSubmit={submitStudentForm}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="3">
                        <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder=" Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="3">
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder=" Email Address" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Roll Number
                    </Form.Label>
                    <Col sm="3">
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="number" placeholder="Roll Number" />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
