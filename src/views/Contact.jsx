import React from 'react';
import * as emailjs from 'emailjs-com'

// reactstrap components
import { Row, Col,Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    handleSubmit(e) {
        e.preventDefault()

        const { name, email, subject, message } = this.state 

        let templateParams = {
            name: name,
            from_name: email,
            to_name: 'apuko.kernael@gmail.com',
            subject: subject,
            message_html: message,
        }

        emailjs.send(
            'gmail',
            'template_Mk3vprTX',
            templateParams,
            'user_UIuHCFozJG8zqRYYlILsG',
        )
         this.resetForm()
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    render() {
        return (
            <>
                <div className="content">
                    <div className="container">
                        <Row>
                            <Col lg="6">
                                <h1 className="p-heading1">Get in Touch</h1>
                                <Form onSubmit={this.handleSubmit.bind(this)}>
                                    <FormGroup controlId="formBasicEmail">
                                        <Label className="text-muted">Email address </Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            className="text-primary"
                                            onChange={this.handleChange.bind(this, 'email')}
                                            placeholder="Enter email"

                                        />
                                    </FormGroup>
                                    <FormGroup controlId="formBasicName">
                                        <Label className="text-muted">Name</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={this.state.name}
                                            className="text-primary"
                                            onChange={this.handleChange.bind(this, 'name')}
                                            placeholder="Enter your name"

                                        />
                                    </FormGroup>
                                    <FormGroup controlId="formBasicSubject">
                                        <Label className="text-muted">Subject</Label>
                                        <Input
                                            type="text"
                                            name="subject"
                                            value={this.state.subject}
                                            className="text-primary"
                                            onChange={this.handleChange.bind(this, 'subject')}
                                            placeholder="Subject"

                                        />
                                    </FormGroup>
                                    <FormGroup controlId="formBasicMessage">
                                        <Label className="text-muted">Message</Label>
                                        <Input
                                            type="textarea"
                                            name="message"
                                            value={this.state.message}
                                            className="text-primary"
                                            onChange={this.handleChange.bind(this, 'message')}
                                        />
                                    </FormGroup>
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact;