import React from 'react';
import ImageZoom from 'react-medium-image-zoom';
import IMG_2533 from 'assets/img/IMG_2533.JPG';


// reactstrap components
import { Card, Row, CardHeader, CardBody, Col, CardDeck } from 'reactstrap';



let filePath = '/KERNAEL APUKO CURRICULUM VITAE (1) (1).pdf';
class About extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <div className="container">
                        <h1>ABOUT ME</h1>
                        <div className="row">
                            <div className="col-md-6">
                                <ImageZoom
                                    image={{
                                        src: IMG_2533,
                                        alt: IMG_2533,
                                        className: 'img',
                                        style: { width: '30em'}
                                    }}
                                    zoomImage = {{
                                        src: IMG_2533,
                                        alt: IMG_2533,
                                    }}
                                    
                                />
                            </div>
                            <div className="col-md-6">
                                <h2>I am <span className="span">Kernael Apuko</span></h2>
                                <h4>
                                I am a Full Stack web developer. 
                                I can provide clean code and pixel perfect design.
                                I also make websites more and more interactive with web animations.
                                </h4>
                                <p>
                                    <b>Full name : </b>
                                    Kernael Apuko
                                </p>
                                <p>
                                    <b>Nationality : </b>
                                    Kenyan
                                </p>
                                <p>
                                    <b>Languages : </b>
                                    English, Kiswahili
                                </p>
                                <p>
                                    <b>Freelance : </b>
                                    Available
                                </p>
                                <p>
                                    <b>Full-time : </b>
                                    Available
                                </p>
                                
                                <a className="btn" href="/KERNAEL APUKO CURRICULUM VITAE (1) (1).pdf" onClick={(event) => { event.preventDefault(); window.open(filePath); }}>
                                    DOWNLOAD CV
                                </a>
                            </div>
                            <div className="services">
                                <h1>SERVICES</h1>
                                <Row>
                                <CardDeck className="card-deck">
                                    <Col lg="4">
                                        <Card className="card">
                                            <CardHeader>
                                                <i className="fa fa-dashboard"></i>
                                            </CardHeader>
                                            <CardBody className="card-body">
                                                <h2>Web Design</h2>
                                                <p clasName="body-content">
                                                    Lorem ipsum
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col lg="4">
                                    <Card className="card">
                                        <CardHeader>
                                            <i className="fa fa-code"></i>
                                        </CardHeader>
                                        <CardBody className="card-body">
                                            <h2>Web development</h2>
                                            <p clasName="body-content">
                                                Lorem ipsum
                                            </p>
                                        </CardBody>
                                    </Card>
                                    </Col>
                                    <Col lg="4">
                                    <Card className="card">
                                        <CardHeader>
                                            <i className="fa fa-mobile-phone"></i>
                                        </CardHeader>
                                        <CardBody className="card-body">
                                            <h2>Mobile Application</h2>
                                            <p clasName="body-content">
                                                Lorem ipsum
                                            </p>
                                        </CardBody>
                                    </Card>
                                    </Col>
                                    </CardDeck>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default About;