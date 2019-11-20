import React from 'react';

// reactstrap components
import { Row,Col } from 'reactstrap';
// react sweet progress bar components
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";



class Resume extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <div className="container">
                        <section className="skills">
                            <h1>My Skills</h1>
                            <Row>
                                <Col lg="6">
                                    <h4>HTML</h4>
                                     <Progress 
                                        strokeWidth={1}
                                        percent={95}
                                     />
                                    <h4>CSS3</h4>
                                    <Progress 
                                        strokeWidth={1}
                                        percent={95}
                                    />
                                    <h4>Django</h4>
                                    <Progress 
                                        strokeWidth={1}
                                        percent={80}
                                    />
                                    <h4>Flask</h4>
                                    <Progress 
                                        strokeWidth={1}
                                        percent={90}
                                    />
                                </Col>
                                <Col lg="6">
                                    <h4>ReactJs</h4>
                                    <Progress 
                                        strokeWidth={1}
                                        percent={70}
                                    />
                                    <h4>Postgress</h4>
                                    <Progress 
                                        strokeWidth={1}
                                        percent={90}
                                    />
                                    <h4>MongoDB</h4>
                                    <Progress 
                                        strokeWidth={1}
                                        percent={70}
                                    />
                                    <h4>Angular</h4>
                                    <Progress 
                                        strokeWidth={1}
                                        percent={50}
                                    />
                                </Col>
                            </Row>
                        </section>
                        <section className="resume">
                            <h1>Resume</h1>
                            <div className="work">
                                <div>
                                    <i></i>
                                    <h2>Working Experience</h2>
                                </div>
                                <Row>
                                    <Col lg="3">
                                        <p>
                                            2019 - Present
                                        </p>
                                    </Col>
                                    <Col lg="9">
                                        <h3>
                                            <span>Full Stack Web Developer Intern</span>
                                        </h3>
                                        <h5>Certeon Technology</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur, 
                                            adipisicing elit. Quas, magni mollitia, 
                                            aspernatur consequatur accusamus vero eum facere 
                                            exercitationem velit suscipit ipsam placeat libero. 
                                            Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                                        </p>
                                    </Col>
                                    <Col lg="3">
                                        <p>
                                            2017 - 2018
                                        </p>
                                    </Col>
                                    <Col lg="9">
                                        <h3>
                                            <span>  CIP Agent</span>
                                        </h3>
                                        <h5>Turkish Airline Lounge</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur, 
                                            adipisicing elit. Quas, magni mollitia, 
                                            aspernatur consequatur accusamus vero eum facere 
                                            exercitationem velit suscipit ipsam placeat libero. 
                                            Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                                        </p>
                                    </Col>
                                    <Col lg="3">
                                        <p>
                                            2017 - 2017
                                        </p>
                                    </Col>
                                    <Col lg="9">
                                        <h3>
                                            <span>Geospatial Engineer Intern</span>
                                        </h3>
                                        <h5>Ramani Land Services</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur, 
                                            adipisicing elit. Quas, magni mollitia, 
                                            aspernatur consequatur accusamus vero eum facere 
                                            exercitationem velit suscipit ipsam placeat libero. 
                                            Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                                        </p>
                                    </Col>
                                    </Row>
                                   <div>
                                        <i></i>
                                        <h2>Educational Qualification</h2>
                                   </div>
                                    <Row>
                                    <Col lg="3">
                                        <p>
                                            2018 - 2019
                                        </p>
                                    </Col>
                                    <Col lg="9">
                                        <h3>
                                            <span>Full Stack Web Developer</span>
                                        </h3>
                                        <h5>Moringa School</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur, 
                                            adipisicing elit. Quas, magni mollitia, 
                                            aspernatur consequatur accusamus vero eum facere 
                                            exercitationem velit suscipit ipsam placeat libero. 
                                            Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                                        </p>
                                    </Col>
                                    <Col lg="3">
                                        <p>
                                            2012 - 2017
                                        </p>
                                    </Col>
                                    <Col lg="9">
                                        <h3>
                                            <span>Geospatial Engineer</span>
                                        </h3>
                                        <h5>Technical University of Kenya</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur, 
                                            adipisicing elit. Quas, magni mollitia, 
                                            aspernatur consequatur accusamus vero eum facere 
                                            exercitationem velit suscipit ipsam placeat libero. 
                                            Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                                        </p>
                                    </Col>
                                    <Col lg="3">
                                        <p>
                                            2008 - 2010
                                        </p>
                                    </Col>
                                    <Col lg="9">
                                        <h3>
                                            <span>Kenya Certificate of Secondary Education</span>
                                        </h3>
                                        <h5>Lugulu Girls High School</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur, 
                                            adipisicing elit. Quas, magni mollitia, 
                                            aspernatur consequatur accusamus vero eum facere 
                                            exercitationem velit suscipit ipsam placeat libero. 
                                            Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                                        </p>
                                    </Col>
                                </Row>

                            </div>
                        </section>
                    </div>
                </div>
            </>
        )
    }
}

export default Resume;