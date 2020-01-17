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
                                    <h4>Heroku</h4>
                                    <Progress 
                                        strokeWidth={1}
                                        percent={80}
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
                                            October 2019 - Present
                                        </p>
                                    </Col>
                                    <Col lg="9">
                                        <h3>
                                            <span className="span">Full Stack Web Developer Intern</span>
                                        </h3>
                                        <h4>Certeon Technology</h4>
                                        <h6>Achievements and responsibilities</h6>
                                    
                                        <ul>
                                            <li></li>
                                        </ul>
                                    </Col>
                                    <Col lg="3">
                                        <p>
                                            September 2017 - September 2018
                                        </p>
                                    </Col>
                                    <Col lg="9">
                                        <h3>
                                            <span className="span">  CIP Agent</span>
                                        </h3>
                                        <h4 >Turkish Airline Lounge</h4>
                                        <h6>Achievements and responsibilities</h6>
                                        <hr/>
                                        <ul>
                                            <li>Drafted daily reports</li>
                                            <li>Monitored and managed the system used to record and store passengers details</li>
                                            <li>Welcomed and ensured the comfortability of business and first class passengers in the Turkish business lounge at Jomo Kenyatta International Airport</li>

                                        </ul>
                                    </Col>
                                    <Col lg="3">
                                        <p>
                                            March 2017 - August 2017
                                        </p>
                                    </Col>
                                    <Col lg="9">
                                        <h3>
                                            <span className="span">Geospatial Engineer Intern</span>
                                        </h3>
                                        <h4>Ramani Land Services</h4>
                                        <h6>Achievements and responsibilities</h6>
                                        <ul>
                                            <li>Conducted static GPS survey in the coastal region</li>
                                            <li>Drafted daily reports</li>
                                            <li>Analyzed and presented the final information of survey field data in form of maps</li>
                                        </ul>
                                    </Col>
                                    </Row>
                                   <div>
                                        <i></i>
                                        <h2>Educational Qualification</h2>
                                   </div>
                                    <Row>
                                    <Col lg="3">
                                        <p>
                                           September 2018 - February 2019
                                        </p>
                                    </Col>
                                    <Col lg="9">
                                        <h3>
                                            <span className="span">Full Stack Web Developer</span>
                                        </h3>
                                        <h4>Moringa School</h4>
                                    </Col>
                                    <Col lg="3">
                                        <p>
                                            May 2012 - December 2017
                                        </p>
                                    </Col>
                                    <Col lg="9">
                                        <h3>
                                            <span className="span">Geospatial Engineer</span>
                                        </h3>
                                        <h4>Technical University of Kenya</h4>
                                        <p>Bachelor's Degree - GeospatialEngineering
                                            2nd Class Upper Division
                                        </p>
                                    </Col>
                                    <Col lg="3">
                                        <p>
                                            2007 - 2010
                                        </p>
                                    </Col>
                                    <Col lg="9">
                                        <h3>
                                            <span className="span">Kenya Certificate of Secondary Education</span>
                                        </h3>
                                        <h4>Lugulu Girls High School</h4>
                                        
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