import { Button, Checkbox, Col, Divider, Form, Input, Layout, Row, Select, Image, ConfigProvider, Space } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { Menu_Home } from './Components/Menus.tsx/Menu';
import { motion } from 'framer-motion';
import { Copyright } from '@phosphor-icons/react';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import { Menu_Login } from './Components/Menus.tsx/Menu_Login';



const SignUp: React.FC = () => {
    const [showForm, setForm] = React.useState(true)


    const onFinish = async (values: any) => {
        let newData = await fetch('http://localhost:80/testing_backend', {
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


    const steps = [
        {
            title: 'First',
            content: 'First-content',
        },
        {
            title: 'Second',
            content: 'Second-content',
        },
        {
            title: 'Last',
            content: 'Last-content',
        },
    ];



    return (
        <Layout className='layout'>
            <Header className='header'>

                <Menu_Login />

            </Header>

            <Layout className='homeScreenDesktop'>

                <Content >
                    <Row justify={'space-around'} gutter={[0, 75]}>

                        <Col xs={22} md={10} className='form_login'>
                            <h2 style={{ display: 'flex' }} className='footer_h1'>
                                <motion.div className='logo'>

                                    <div style={{ height: 'fit-content' }}>
                                        <div className='logoBlue'></div>
                                        <div className='logoBeige'></div>
                                    </div>
                                    <div style={{ height: 'fit-content' }}>
                                        <div className='logoBeige'></div>
                                        <div className='logoBlue'></div>

                                    </div>
                                </motion.div>Kcm Inc
                            </h2>
                            <h1>Registration Page</h1>
                            <p>Please enter your username and password that you
                                used to create your account. If you are having difficulties
                                logging in, message our support center for assistance. </p>
                            <Divider className='dividerHeader'></Divider>
                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="one"
                                layout='horizontal'
                                size='large'

                            >


                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorPrimary: 'black',
                                            colorPrimaryHover: '#fafafa',
                                            lineWidth: 2,
                                            fontFamily: 'Jost',
                                            fontSize: 14,
                                        },
                                    }}
                                >

                                    <Form.Item

                                        label="First Name"
                                        name="first_name"
                                        rules={[{ required: true, message: 'Please input your first name!' }]}
                                    >
                                        <Input type='text' />
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
                                        label="Business Size"
                                        name="business_size"
                                        rules={[{ required: true, message: 'Please select your business size!' }]}
                                    >
                                        <Select bordered>
                                            <Select.Option value="micro">Less than 10</Select.Option>
                                            <Select.Option value="small">Between 10 and 50</Select.Option>
                                            <Select.Option value="medium">Between 50 and 250 </Select.Option>
                                            <Select.Option value="large">Over 250</Select.Option>

                                        </Select>
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

                                        rules={[{ required: true, message: 'Please input your email address!' }]}
                                    >
                                        <Input type='email' />
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        label="Password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item
                                        name="confirm"
                                        label="Confirm Password"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                    <Form.Item
                                        name="terms_of_service"
                                        valuePropName="checked"
                                        rules={[
                                            {
                                                validator: (_, value) =>
                                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                            },
                                        ]}
                                    >
                                        <Checkbox>
                                            I agree to the <a href="">Terms of Service</a>
                                        </Checkbox>
                                    </Form.Item>
                                    <Form.Item
                                        name="privacy_policy"
                                        valuePropName="checked"
                                        rules={[
                                            {
                                                validator: (_, value) =>
                                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                            },
                                        ]}
                                    >
                                        <Checkbox>
                                            I have read the <a href="">Privacy Policy</a>
                                        </Checkbox>
                                    </Form.Item>


                                    <Form.Item
                                    >
                                        <button className='buttonBlack' type="submit">
                                            Verify
                                        </button>
                                    </Form.Item>
                                </ConfigProvider>
                            </Form>

                        </Col>


                    </Row>




                </Content>

            </Layout>
            <Footer className='footer_public'>
                <Row justify={'center'} align='middle' gutter={[0, 75]}>
                    <Col xs={22} md={10}>

                        <p>KCM Inc is dedicated to offering B2B services that
                            provide practical and advantageous solutions to businesses.
                            Our team conducts comprehensive research and development,
                            utilizing publicly available data from both public and private
                            institutions. We meticulously analyze this data to develop
                            innovative and effective business services that cater to the
                            needs of communities and clients.</p>
                    </Col>




                </Row>
            </Footer>
        </Layout>)
}

export default SignUp; 