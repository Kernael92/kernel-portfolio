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
                        <div className="skills">
                            <h1>Skills</h1>
                            <Row>
                                <Col lg="6">
                                    <h3>HTML</h3>
                                     <Progress percent={95}/>
                                    <h3>CSS3</h3>
                                    <Progress percent={95}/>
                                    <h3>Django</h3>
                                    <Progress percent={80}/>
                                    <h3>Flask</h3>
                                    <Progress percent={80}/>
                                </Col>
                                <Col lg="6">
                                    <h3>ReactJs</h3>
                                    <Progress percent={70}/>
                                    <h3>Postgress</h3>
                                    <Progress percent={85}/>
                                    <h3>MongoDB</h3>
                                    <Progress percent={80}/>
                                    <h3>Flask</h3>
                                    <Progress percent={95}/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Resume;