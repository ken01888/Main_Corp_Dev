import { Col, Layout, Row, Alert,} from 'antd';

import { Content,Header } from 'antd/es/layout/layout';
import * as React from 'react'

import Main_Menu from '../Components/Navigation/Main_Menu';
import 'antd/dist/reset.css';
import Public_Footer from '../Components/Navigation/Footer';












const About_Us: React.FC = () => {
  document.title = 'About Us'


  return (
    <Layout className='layout'>
      <Header className='header'>

        <Main_Menu />
      </Header>

      <Layout className='homeScreenDesktop'>

        <Content >
          <Row justify={'center'} align={'middle'} gutter={[0, 16]} className='sectionHeaderOther'>
            <Col >
              <h3>About Us</h3>
            </Col>
          </Row>

          <Row justify={'center'} align={'middle'} gutter={[0, 16]} >
          <Col xs={22} md={20}  style={{ borderBottom: '5px solid var(--light_beige)', marginTop: '6rem'}}>



              <h1>K.C. Morris Inc</h1>

              <Alert
                description='K.C. Morris Inc. is a for-profit organization that strives to create business applications to improve communities and industries. Institutions have an unwavering duty to their external stakeholders. We focus on the societal obligations of organizations, which supersede merely capital gains. Doing what is suitable for our collective society and assisting organizations in recognizing opportunities for reciprocity is our primary mission. We strive to create a world where purchasing decisions made by consumers and businesses produce long-lasting benefits that transcend generations. '
                type="warning"
                className='heroText'
              />




            </Col>



          </Row>


          <Row justify={'center'} align={'middle'} gutter={[0, 16]} >


            <Col xs={{ span: 22 }} md={{ span: 12 }} className='alignCol_1'>
              <div >
                <div className='logoBlue'></div>

                <h1>People</h1>

                <Alert
                  description="Our cadence focuses on people's socioeconomic progress. By recognizing challenges impacting communities nationally and internationally, we develop business applications that move our world forward by bringing efficiencies to enterprises."
                  type="warning"
                  className='heroText'
                />

              </div>
            </Col>

          </Row>

          <Row justify={'center'} align={'middle'} gutter={[0, 16]} >


            <Col xs={{ span: 22 }} md={{ span: 12 }} className='alignCol_1'>
              <div >
                <div className='logoBeige'></div>

                <h1>Mission</h1>

                <Alert
                  description="We focus on issues prevalent throughout global communities and develop business applications that improve the performance of enterprises while battling socioeconomic challenges affecting communities."
                  type="warning"
                  className='heroText'
                />

              </div>
            </Col>
          </Row>

          <Row justify={'space-evenly'} align={'middle'} gutter={[0, 16]} >


            <Col xs={{ span: 22 }} md={{ span: 12 }} className='alignCol_1'>
              <div >
              <div className='logoBlue'></div>
                <h1>Values</h1>
                <Alert
                  description="Improving the welfare of all persons within the systems that make up our world requires a collective effort from all parties. With resources stretched and the middle class slowly edging toward extinction, we believe that all entities must collaborate for the betterment of people."
                  type="warning"
                  className='heroText'
                />


              </div>

            </Col>


          </Row>

          <Row justify={'space-evenly'} align={'middle'} gutter={[0, 16]} >




            <Col xs={{ span: 22 }} md={{ span: 12 }} className='alignCol_1'>
              <div >
                <div className='logoBeige'></div>


                <h1>Promise</h1>
                <Alert
                  description="We are committed to developing a range of innovative applications that not only preserve our world but also enhance the well-being of people. We strive to create applications that facilitate the flow of benefits between producers and consumers while reducing the burden on government institutions and their resources. We aim to supercharge enterprises and upgrade communities, delivering on our promise of a better and sustainable future.
      "
                  type="warning"
                  className='heroText'
                />
              </div>
            </Col>
          </Row>



        </Content>
      </Layout>

      <Public_Footer />



    </Layout >)
}

export default About_Us; 