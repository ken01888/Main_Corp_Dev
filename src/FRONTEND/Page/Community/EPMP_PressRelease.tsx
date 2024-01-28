import { Col, Layout, Row, ConfigProvider, Alert, Space, Image, Collapse, Timeline } from 'antd';
import type { CollapseProps } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { motion } from 'framer-motion';
import Main_Menu from '../Components/Navigation/Main_Menu';
import 'antd/dist/reset.css';
import heroImage from '../400ppi/heroImage.png'
import section2 from '../400ppi/section2.png'
import section3 from '../400ppi/section3.png'
import community from '../400ppi/community.png'
import Public_Footer from '../Components/Navigation/Footer';
import { Hash } from '@phosphor-icons/react';











const EPMA_PR: React.FC = () => {
  document.title = 'EPMA Press Release'




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

                <h3>
                  Press Release
                </h3>
              </Col>
            </Row>

            <Row justify={'space-evenly'} align={'middle'} gutter={[0, 16]} >
              <Col xs={22} md={18} style={{ textAlign: 'center' }}>

                <div >

                  <h1>K.C. Morris Inc. Unleashes New Cutting-Edge Business Software to Improve Health Outcomes through Nutrient Payload Control</h1>
                  
                 


                </div>
              </Col>

              <Col xs={20} md={16} style={{ textAlign: 'center' }}>

<div >


  <Alert
    description="[Birmingham,Al. | Novermber 24,2023] - K.C. Morris Inc., a leading innovator in the responsible business service space, has announced the launch of its latest product, the Bite of Life Analytics (BoLA) - AA:HV:01. This state-of-the-art business software assists individual and community health by controlling the nutrient payload in food items.
    "
    type="warning"
    className='heroText'
  />

  <Alert
    description="The BoLA is an enterprise technological application for research and development purposes. Its primary objective is to help stakeholders such as farmers, commodity traders, suppliers, healthcare facilities, and retail food service establishments better understand the health implications of the products they grow,purchase, manufacture and deliver. The application provides an all-in-one solution that simplifies the entire process by integrating inventory management, product development, and nutritional analysis into a single program.

    "
    type="warning"
    className='heroText'
  />

  <Alert
    description='Controlling the nutrient payload in food items is a key factor in improving individual and community health," said K.C. Morris, founder and CEO of K.C. Morris Inc. "We are thrilled to launch the BoLA, which represents a major step forward in the industry, and we believe it will have a significant positive impact on the health and wellbeing of people worldwide.'
    type="warning"
    className='heroText'
  />
  <motion.div className='logoBigPressRelease'>

    <div style={{ height: 'fit-content' }}>
      <div className='logoBlue'></div>
      <div className='logoBeige'></div>
    </div>
    <div style={{ height: 'fit-content' }}>
      <div className='logoBeige'></div>
      <div className='logoBlue'></div>

    </div>

  </motion.div>
  <h2>K.C. Morris Inc.
  </h2>
  <Alert
    description='K.C. Morris Inc. is a leading innovator in the responsible business application development industry. Founded in 2016, the company is committed to improving communities through innovative products and services.

    '
    type="warning"
    className='heroText'
  />
  <Alert
    description='###'
    type="warning"
    className='heroText'
  />
  


</div>
</Col>
            </Row>


          </Space>
        </Content>
      </Layout>
      <Public_Footer />



    </Layout >

  )
}

export default EPMA_PR; 