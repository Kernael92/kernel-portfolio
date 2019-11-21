import React from 'react';

// reactstrap components
import { Row, Col } from 'reactstrap';

class Contact extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <div className="container">
                        <Row>
                            <Col lg="6">
                                <form method="POST" action="/contact">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter name" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="message">Message</label>
                                        <textarea class="form-control" id="message" rows="3" required></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-info">Send</button>

                                    <div>
                                        { window.location.hash === '#success' &&
                                            <div id="success">
                                            <p>Your message has been sent!</p>
                                            </div>
                                        }
                                        { window.location.hash === '#error' &&
                                            <div id="error">
                                            <p>An error occured while submitting the form.</p>
                                            </div>
                                        }
                                    </div>   
                                </form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact;