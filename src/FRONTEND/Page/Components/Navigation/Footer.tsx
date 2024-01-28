import { Col, ConfigProvider, Row, Space } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import * as React from 'react';

import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { FileTextOutlined, FolderOpenOutlined, FolderOutlined, UserOutlined } from '@ant-design/icons';
import { CirclesFour, DotsThreeOutline, FacebookLogo, LinkedinLogo, MetaLogo, TwitterLogo, } from '@phosphor-icons/react';






export const Public_Footer = (props) => {



  return (
    <Footer className='footer_public'>
      <Row justify={'space-between'} gutter={[0, 75]}>
        {/* <Col xs={22} md={6} className='footer_column'>


          <a href='/aboutus' className='anchorLinks'>About Us</a>


          <a href='/newsroom' className='anchorLinks'>Newsroom</a>


          <a href='/support' className='anchorLinks'>Contact Us</a>



        </Col> */}

        {/* <Col xs={22} md={6} className='footer_column'>


          <a href='/termsofservice' className='anchorLinks'>Terms of Service</a>


          <a href='/privacypolicy' className='anchorLinks'>Privacy Policy</a>





        </Col> */}



        <Col xs={22} md={8}>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: 'Jost',
                colorTextTertiary: 'black',
                colorPrimaryHover: '#000000',
                colorBgContainer: '#fafafa'
              },
            }}
          >
            <motion.div className='logo'>
              <div style={{ height: 'fit-content' }}>
                <div className='logoBlue'></div>
                <div className='logoBeige'></div>
              </div>
              <div style={{ height: 'fit-content' }}>
                <div className='logoBeige'></div>
                <div className='logoBlue'></div>
              </div>
            </motion.div>
            <div className='footerCompanyDetails'>
              <h3>K.C. Morris Inc</h3>
              <p>3500 Lenox Rd NE</p>
              <p>Atlanta, GA 30326</p>
              <p>Copyright © 2023 K.C. Morris Inc.</p>
              <p>All rights reserved.</p>
            </div>
          </ConfigProvider>
        </Col>
        <Col xs={22} md={1} className='footer_column'>
          <a target='_blank' href='https://www.facebook.com/KCMIncEngine' className='anchorLinks'><FacebookLogo size={20} weight="fill" color='#4D4D4F' /></a>
          <a target='_blank' href='https://twitter.com/KCMINC1' className='anchorLinks'><TwitterLogo size={20} weight="fill" color='#4D4D4F' /></a>
          <a target='_blank' href='https://www.linkedin.com/company/k-c-morris-inc-stakeholder-intelligence-corporations/?viewAsMember=true' className='anchorLinks'><LinkedinLogo size={20} weight="fill" color='#4D4D4F' /></a>
        </Col>
      </Row>
    </Footer>
  )
}


export default Public_Footer; 
