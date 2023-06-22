import * as React from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Button, Carousel, Col, Divider, Layout, Row, Space, Watermark, Image, Form, Input, Checkbox } from 'antd'
import { Menu_Home } from './Components/Menu'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { ArrowRight, Broadcast, Copyright, FirstAid, ForkKnife, Megaphone, PiggyBank, Storefront } from '@phosphor-icons/react'
import { DotChartOutlined } from '@ant-design/icons';


let history = createBrowserHistory()

const Home: React.FC = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout className='layout'>
      <Header className='header'>

        <Menu_Home />

      </Header>

      <Layout className='homeScreenDesktop'>

        <Content >
          <Row justify={'space-around'} gutter={[0, 32]}>
            <Col xs={22} md={10}>
              <h1>Alternative health, wealth, education and housing services for businesses that benefit people.</h1>
              <Divider className='dividerHeader'></Divider>
              <p>
                Kcm Inc specializes in developing purposeful business services with universal benefits.
                We consciously design our services to flow benefits from for-profit institutions to communities.
              </p>
              <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
    />
              <div>
                <motion.button className='buttonBlue'>Access Our Services</motion.button>

              </div>

            </Col>
            <Col xs={22} md={8} className='headerLogoColumn'>
              <motion.div className='headerLogo'>

                <div style={{ height: 'fit-content' }}>
                  <div className='headerlogoWhite'>Health</div>
                  <div className='headerlogoBeige'>Wealth</div>
                </div>
                <div style={{ height: 'fit-content' }}>
                  <div className='headerlogoBeige'>Education</div>
                  <div className='headerlogoWhite'>Housing</div>
                </div>

              </motion.div>
            </Col>

          </Row>

          <Row justify={'space-around'} className='homesectionBlue'>
            <Col xs={22} md={10}>

              <h1>We help maturing and mature enterprises throughout multiple sectors.</h1>

            </Col>

            <Col xs={22} md={8} >
              <div >
                <Storefront size={32} color="#ffffff" weight="bold" />
                <h3 onClick={(e) => console.log(e)} >Consumer Discretionary</h3>

              </div>
              <div >
                <ForkKnife size={32} color="#ffffff" weight="bold" />
                <h3>Consumer Staples</h3>
              </div>
              <div >
                <FirstAid size={32} color="#ffffff" weight="bold" />
                <h3>Consumer Healhcare</h3>
              </div>
              <div >
                <PiggyBank size={32} color="#ffffff" weight="bold" />
                <h3>Financial</h3>
              </div>
              <div >
                <Broadcast size={32} color="#ffffff" weight="bold" />
                <h3>Communication</h3>
              </div>
            </Col>


          </Row>

          <Row justify={'space-around'} className='homesectionWhite'>


            <Col xs={22} md={10}>
              <h1>What We Stand For</h1>
              <Divider className='dividerHeader'></Divider>
              <p>
                Intelligent services that grow enterprises
                and communities are what we do best!
                Our methodology focuses on a circular
                reward system that improves value mobility
                between business and consumers.
              </p>

              <p className='statement'>Socioeconomic Insecurities We Challenge</p>
              <h3 className='insecurities'><div className='logoBeige'></div>Learning</h3>
              <h3 className='insecurities'><div className='logoBeige'></div>Health</h3>
              <h3 className='insecurities'><div className='logoBeige'></div>Housing</h3>
              <h3 className='insecurities'><div className='logoBeige'></div>Wealth</h3>

            </Col>

            <Col xs={22} md={8} >
              <div>
                <h3 className='serviceOffered'> <ForkKnife size={16} color="#000000" weight="bold" />Stakeholder Onboarding & Development</h3>
                <h3 className='serviceOffered'> <ForkKnife size={16} color="#000000" weight="bold" />Cost and Product Analysis</h3>
                <h3 className='serviceOffered'> <ForkKnife size={16} color="#000000" weight="bold" />Consumer Analysis</h3>
                <h3 className='serviceOffered'> <ForkKnife size={16} color="#000000" weight="bold" />Compliance</h3>
              </div>
            </Col>
          </Row>

          <Row justify={'space-around'} className='homesectionWhite'>


<Col xs={22} md={10}>
<Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

</Col>

</Row>

        </Content>

      </Layout>
      <Footer className='footer_public'>
        <Row>
          <Col xs={24}>
            <p><Copyright size={16} weight="bold" />Kcm Inc</p>
          </Col>
        </Row>
      </Footer>
    </Layout>

  )
}

export default Home