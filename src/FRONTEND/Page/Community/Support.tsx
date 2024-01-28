import * as React from 'react'
import { Col, Divider, Layout, Row, Form, Input, ConfigProvider, Button, Alert, Space, } from 'antd'
import Menu from '../Components/Navigation/Main_Menu'
import { Content, Header } from 'antd/es/layout/layout'
import Public_Footer from '../Components/Navigation/Footer';






import 'isomorphic-fetch';




import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { At, Buildings, IdentificationBadge, Phone } from '@phosphor-icons/react';
import TextArea from 'antd/es/input/TextArea';



const Support: React.FC = () => {
  document.title = 'Support'

  const [showForm, setForm] = React.useState(true)

  const onFinish = async (values: any) => {

    let newData = await fetch('/support_message', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    setForm(false)

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };





  return (

    <Layout className='layout'>
      <Header className='header'>

        <Menu />

      </Header>

      <Layout className='homeScreenDesktop'>

        <Content >
          <Space wrap size={[0, 100]}>
            <Row justify={'center'} align={'middle'} gutter={[0, 16]} className='sectionHeaderOther'>
              <Col >
                <h3>
                  Support
                </h3>
              </Col>
            </Row>

            <Row justify={'center'} align={'middle'} gutter={[0, 16]} >




              {showForm ?
                <Col xs={{ span: 22 }} md={{ span: 8 }} >

                  <>

                    <Form
                      name="basic"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="on"
                      size='middle'
                      className='formStyles'


                    >

                      <span>
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
                        <h3>Kcm Inc Public Support Form</h3>
                      </span>

                      <Alert
                        description="Thank you for choosing Kcm Inc as your primary service provider.
                                                 We want to assure you that our support team will respond to your
                                                 query within the next 48-72 hours after you provide us with the
                                                 necessary information. Your satisfaction is our top priority and
                                                 we look forward to assisting you."
                        type="warning"
                        className='heroText'
                      />
                      <ConfigProvider
                        theme={{
                          token: {
                            colorPrimary: 'black',
                            lineWidth: 1,
                            fontFamily: 'Jost',
                            fontSize: 16,
                          },
                        }}
                      >
                        <Form.Item
                          name="first_name"
                          rules={[{ required: true, message: 'Please input your first name!' }]}
                        >
                          <Input type='text' style={{
                            border: '1px solid #4D4D4F',
                            borderRadius: '1.5px',
                            fontSize: 14
                          }} placeholder="First Name" maxLength={25} showCount prefix={<IdentificationBadge size={20} color="#849FD1" weight="fill" />} />
                        </Form.Item>


                        <Form.Item
                          name="last_name"
                          rules={[{ required: true, message: 'Please input your last name!' }]}
                        >
                          <Input style={{
                            border: '1px solid #4D4D4F',
                            borderRadius: '1.5px',
                            fontSize: 14
                          }} type='text' placeholder="Last Name" maxLength={25} showCount prefix={<IdentificationBadge size={20} color="#849FD1" weight="fill" />} />
                        </Form.Item>

                        <Form.Item
                          name="business_name"
                          rules={[{ required: true, message: 'Please input the businesses name!' }]}
                        >
                          <Input style={{
                            border: '1px solid #4D4D4F',
                            borderRadius: '1.5px',
                            fontSize: 14
                          }} type='text' placeholder="Enterprise Name ." maxLength={25} showCount prefix={<Buildings size={20} color="#849FD1" weight="fill" />} />
                        </Form.Item>



                        <Form.Item
                          name="phone_number"
                          rules={[
                            {
                              required: true,
                              message: 'Please enter your contact number!',
                            },
                          ]}                                                    >
                          <Input style={{
                            border: '1px solid #4D4D4F',
                            borderRadius: '1.5px',
                            fontSize: 14
                          }} type='tel' placeholder="Contact number" maxLength={10} showCount prefix={<Phone size={20} color="#849FD1" weight="fill" />} />
                        </Form.Item>


                        <Form.Item
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: 'Please enter a email address!',
                            },
                          ]}                                                    >
                          <Input style={{
                            border: '1px solid #4D4D4F',
                            borderRadius: '1.5px',
                            fontSize: 14
                          }} type='text' placeholder="Email Address" maxLength={45} showCount prefix={<At size={20} color="#849FD1" weight="fill" />} />
                        </Form.Item>


                        <Form.Item
                          name="message"
                          rules={[
                            {
                              required: true,
                              message: 'Enter a 200 character message?',

                            },
                          ]}
                          hasFeedback
                        >
                          <TextArea style={{
                            border: '1px solid #4D4D4F',
                            borderRadius: '1.5px',
                            fontSize: 14
                          }} placeholder="How can we assist you? " bordered={true} maxLength={200} showCount autoSize={{ minRows: 4, maxRows: 4 }} />

                        </Form.Item>
                        <Form.Item
                        >
                          <button type="submit" className='buttonFormBeige'>
                            Submit
                          </button>
                        </Form.Item>
                      </ConfigProvider>
                    </Form>

                  </>
                </Col>
                :
                <Col xs={{ span: 22 }} md={{ span: 12 }} style={{ padding: '10rem 0rem' }}>





                  <span>
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
                    <h3>We've receive your message. </h3>
                  </span>

                  <Alert
                    description="
                    Our commitment to transparency and public engagement is a top priority, and we are thrilled that you're eager to learn more about our operations. Please be assured that your request for a visit is valuable to us. Thank you once again for your interest and support. We look forward to providing insight into the work at Kcm Inc.
                    "
                    type="warning"
                    className='heroText'
                  />



                </Col>
              }



            </Row>






          </Space>

        </Content>

      </Layout>

      <Public_Footer />

    </Layout >)
}

export default Support