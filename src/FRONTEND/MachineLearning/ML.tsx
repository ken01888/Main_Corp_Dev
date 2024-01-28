import { Col, Form, Input, Layout, Row, ConfigProvider, Alert, Space,Image } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css';

import { Fingerprint, At } from "@phosphor-icons/react";
import { motion } from 'framer-motion';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import heroImage from '.././Page/400ppi/heroImage.png'








const ML: React.FC = () => {



    (async () => {
      
        // Load the model.
        const model = await cocoSsd.load();
        console.log(model)
      
        // Classify the image.
        const predictions = await model.detect(heroImage);
      
        console.log('Predictions: ');
        console.log(predictions);
      })();

    return (
        <Layout className='layout'>
            <Layout className='homeScreenDesktop'>
                <Content >

                    <Row >
                        <Col className='sectionHeader'>
                            <h1 id="id01">Old Heading</h1>



                            <h3>
                                ML
                            </h3>




                        </Col>




                    </Row>
                    <Row justify={'center'} align={'middle'} gutter={[0, 16]} >
                        <Col xs={18}>
                        <Image src={heroImage} preview={false}></Image>

                            <h1>Multiple object detection using pre trained model in TensorFlow.js</h1>

                            <p>Wait for the model to load before clicking the button to enable the webcam - at which point it will become visible to use.</p>

                            <section id="demos" className="invisible">

                                <p>Hold some objects up close to your webcam to get a real-time classification! When ready click "enable webcam" below and accept access to the webcam when the browser asks (check the top left of your window)</p>

                                <div id="liveView" className="camView">
                                    <button
                                       
                                        id="webcamButton">Enable Webcam</button>
                                    <video id="webcam" autoPlay muted width="640" height="480"></video>
                                </div>
                            </section>
                        </Col>
                    </Row>

                </Content>
            </Layout>






        </Layout>)
}

export default ML; 