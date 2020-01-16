import React from 'react';
import * as emailjs from 'emailjs-com'

// reactstrap components
import { Row, Col,Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';

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
                <div className="content ">
                    <div className="container">
                        <h1>CONTACT ME</h1>
                        <i></i>
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
                                            required

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
                                            required

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
                                            required

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
                                            required
                                        />
                                    </FormGroup>
                                    <Button variant="primary" type="submit">Send</Button>

                                    
                                </Form>
                            </Col>
                            <Col lg="6">
                            <Card className="card">
                                <CardBody className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="col-md-9">
                                            <h3>Phone</h3>
                                            <h4>+254714140423</h4>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="card">
                                <CardBody className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                        <i className="fa fa-envelope-o"></i>
                                        </div>
                                        <div className="col-md-9">
                                        <h3>Email</h3>
                                        <h4>apuko.kernael@gmail.com</h4>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="card">
                                <CardBody className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="col-md-9">
                                            <h3>Phone</h3>
                                            <h4>+254714140423</h4>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact;