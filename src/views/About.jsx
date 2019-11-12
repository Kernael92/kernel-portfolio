import React from 'react';
import ImageZoom from 'react-medium-image-zoom';
import IMG_2533 from 'assets/img/IMG_2533.JPG';


let filePath = 'assets/files/KERNAEL APUKO CURRICULUM VITAE (1) (1).pdf';
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
                                        style: { width: '50em'}
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
                                
                                <a className="btn" href="assets/files/KERNAEL APUKO CURRICULUM VITAE (1) (1).pdf" onClick={(event) => { event.preventDefault(); window.open(filePath); }}>
                                    DOWNLOAD CV
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default About;