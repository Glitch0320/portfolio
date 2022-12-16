import { Modal, Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const Contact = ({ show, setShow }) => {

    const [form, setForm] = useState({
        subject: '',
        style: {}
    })
    const { subject, style } = form

    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
        >
            <Modal.Header
            className='bg-dark text-success display-6' 
            closeButton>
                Connect With Me
            </Modal.Header>

            <Modal.Body
            className='bg-secondary'>
                <p className='text-dark'>glitch0320@gmail.com</p>
                <Form
                    className='bg-dark p-3'
                    action={`mailto:glitch0320@gmail.com?subject=${subject}`}
                    method='get'
                    onSubmit={e => {
                        if (!subject) {
                            e.preventDefault()
                            setForm({ ...form, style: { color: '#55c937' } })
                            return
                        }
                    }}
                >

                    <Form.Group className='mb-3 text-center'>
                        <Form.Label>What would you like to talk about?</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Geo Path..."
                            value={subject}
                            name='subject'
                            onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
                        />
                        {!subject && <Form.Text
                            style={style}
                        >Anything, really</Form.Text>}
                    </Form.Group>

                    <Button type='submit' value='Send'>Connect</Button>
                </Form>

            </Modal.Body>

        </Modal>
    )
}

export default Contact