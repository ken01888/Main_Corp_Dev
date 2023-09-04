import * as React from 'react'
import { Col, Divider, Layout, Row, Form, Input, ConfigProvider, Button, Space, } from 'antd'
import Menu from '../Components/Navigation/Main_Menu'
import { Content, Footer, Header } from 'antd/es/layout/layout'




import 'isomorphic-fetch';




import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';



const Support: React.FC = () => {
    document.title = 'Kcm Inc Community Support'

    const [showForm, setForm] = React.useState(true)

    const onFinish = async (values: any) => {

        let newData = await fetch('http://localhost:8080/support_message', {

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
                    <Row justify={'space-around'} gutter={[0, 75]}>


                        <Col xs={22} md={12}>
                            <motion.div className='form_login' initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: .5 }}>
                                <h2 style={{ display: 'flex' }} className='footer_h1'>
                                    <div className='logo'>

                                        <div style={{ height: 'fit-content' }}>
                                            <div className='logoBlue'></div>
                                            <div className='logoBeige'></div>
                                        </div>
                                        <div style={{ height: 'fit-content' }}>
                                            <div className='logoBeige'></div>
                                            <div className='logoBlue'></div>


                                        </div>
                                    </div>Kcm Inc
                                </h2>

                                {showForm ?
                                    <>
                                        <h1>Contact Support</h1>
                                        <p>Thank you for choosing Kcm Inc as your primary service provider.
                                            We want to assure you that our support team will respond to your
                                            query within the next 48-72 hours after you provide us with the
                                            necessary information. Your satisfaction is our top priority and
                                            we look forward to assisting you.
                                        </p>
                                        <Divider className='dividerHeader'></Divider>
                                        <Form
                                            name="basic"
                                            initialValues={{ remember: true }}
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            autoComplete="one"
                                            size='large'

                                        >


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

                                                    label="First Name"
                                                    name="first_name"
                                                    rules={[{ required: true, message: 'Please input your first name!' }]}
                                                >
                                                    <Input type='text'
                                                    />
                                                </Form.Item>

                                                <Form.Item
                                                    label="Last Name"
                                                    name="last_name"
                                                    rules={[{ required: true, message: 'Please input your last name!' }]}
                                                >
                                                    <Input type='text' />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Business Name"
                                                    name="business_name"

                                                    rules={[{ required: true, message: 'Please input your business name!' }]}
                                                >
                                                    <Input type='text' />
                                                </Form.Item>


                                                <Form.Item
                                                    label="Phone Number"
                                                    name="phone_number"

                                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                                >
                                                    <Input type='tel' maxLength={10} />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Email"
                                                    name="email"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please enter a email address',
                                                        },

                                                    ]}

                                                >
                                                    <Input type='email' />
                                                </Form.Item>

                                                <Form.Item
                                                    label="Enter Message"
                                                    name="message"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Enter your message here',
                                                        },

                                                    ]}
                                                >
                                                    <Input.TextArea> </Input.TextArea>
                                                </Form.Item>
                                                <Form.Item
                                                >
                                                    <Button className='buttonBlack' htmlType="submit">
                                                        Contact Support
                                                    </Button>
                                                </Form.Item>

                                            </ConfigProvider>
                                        </Form>
                                    </>


                                    :
                                    <><h1>Message Received</h1>
                                        <Divider className='dividerHeader'></Divider></>}

                            </motion.div>
                        </Col>


                    </Row>




                </Content>

            </Layout>

            <Footer className='footer_public'>
                <Row justify={'space-between'} align='middle' gutter={[0, 75]}>
                    <Col xs={22} md={10}>
                        <h2 style={{ display: 'flex' }} className='footer_h1'>
                            <div className='logo'>

                                <div style={{ height: 'fit-content' }}>
                                    <div className='logoBlue'></div>
                                    <div className='logoBeige'></div>
                                </div>
                                <div style={{ height: 'fit-content' }}>
                                    <div className='logoBeige'></div>
                                    <div className='logoBlue'></div>

                                </div>
                            </div>Kcm Inc
                        </h2>
                        <p>KCM Inc is dedicated to offering B2B services that
                            provide practical and advantageous solutions to businesses.
                            Our team conducts comprehensive research and development,
                            utilizing data from both public and private
                            institutions. We meticulously analyze this data to develop
                            innovative and effective business services that cater to the
                            needs of communities and clients.</p>
                    </Col>
                    <Col xs={22} md={5} >

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
                            <Space wrap direction='vertical' >
                                <h2>Free for a limited time! </h2>
                            </Space>

                        </ConfigProvider>


                    </Col>
                    <Col xs={22} md={5} >

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
                            <Space wrap direction='vertical' >
                                <Link reloadDocument to='/'>
                                    <Button htmlType="submit">Log In</Button>
                                </Link>




                                <Link reloadDocument to='/signup'> <Button htmlType="submit">Sign Up</Button></Link>




                                <Link reloadDocument to='/termsofservice'><Button htmlType="submit">Terms of Service</Button></Link>
                                <Link reloadDocument to='/privacypolicy'><Button htmlType="submit">Privacy Policy</Button></Link>

                            </Space>

                        </ConfigProvider>


                    </Col>

                </Row>
            </Footer>
        </Layout >)
}

export default Support