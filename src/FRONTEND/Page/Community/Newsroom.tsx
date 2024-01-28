import { Alert, Col, Layout, Row, Space } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import Main_Menu from '../Components/Navigation/Main_Menu';
import 'antd/dist/reset.css';
import Public_Footer from '../Components/Navigation/Footer';
import { motion } from 'framer-motion';
import { ArrowFatRight, ArticleMedium, Broadcast, CalendarBlank } from '@phosphor-icons/react';










const Newsroom: React.FC = () => {
  let [verified, setVerified] = React.useState(false);
  document.title = 'Newsroom'





  return (
    <Layout className='layout'>
      <Header className='header'>

        <Main_Menu />
      </Header>

      <Layout className='homeScreenDesktop'>

        <Content >
          <Space wrap size={[0, 100]}>
            <Row justify={'center'} align={'middle'} gutter={[0, 16]} className='sectionHeaderOther'>
              <Col >
                <h3>Newsroom</h3>
              </Col>
            </Row>

            <Row justify={'space-evenly'} align={'middle'} gutter={[0, 16]} >

            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} >
                <div >
                  <p>November 24, 2023 8:00 A.M. CST</p>
                  <a href='EPMP_PR' className='blurbText'> <h1>K.C. Morris Inc. Unleashes New Cutting-Edge Business Software to Improve Health Outcomes through Nutrient Payload Control</h1></a>
                  <div className='articleDiv'>
                    <ArrowFatRight size={36} weight="fill" color='#E8DAC2' />


                    <p>[Birmingham,Al. | Novermber 24,2023] - K.C. Morris Inc., a leading innovator in the responsible business service space, has announced the launch of its latest product ........</p>

                  </div>

                </div>
              </Col>

              <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} >
                <div >
                  <p>November 24, 2023 8:00 A.M. CST</p>
                  <a href='EPMP_PR' className='blurbText'> <h2>K.C. Morris Inc. Unleashes New Cutting-Edge Business Software to Improve Health Outcomes through Nutrient Payload Control</h2></a>
                  <div className='articleDiv'>
                    <ArrowFatRight size={36} weight="fill" color='#E8DAC2' />


                    <p>[Birmingham,Al. | Novermber 24,2023] - K.C. Morris Inc., a leading innovator in the responsible business service space, has announced the launch of its latest product ........</p>

                  </div>

                </div>
              </Col>
        

            </Row>

            



          </Space>
        </Content>
      </Layout>
      <Public_Footer />


    </Layout >)
}

export default Newsroom; 