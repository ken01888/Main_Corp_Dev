import { Button, Checkbox, Col, Divider, Form, Input, Layout, Row, Select, Image, ConfigProvider, Space } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu_Login } from './Components/Menus.tsx/Menu_Login';



const SignUp: React.FC = () => {
    const [showForm, setForm] = React.useState(true)

    const onFinish = async (values: any) => {
        console.log(values)
        let newData = await fetch('http://localhost:80/client_registration/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        setForm(false)
        let dbreply = await newData.json()


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

                            {showForm ?
                                <>
                                    <h1>Registration Page</h1><p>Kindly furnish us with the requisite details to establish your account. Should you encounter any difficulties during the process, do not hesitate to reach out to our dedicated support team for assistance. Thank you for choosing our services.
                                    </p><Divider className='dividerHeader'></Divider><Form
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
                                                    colorPrimaryHover: '#fafafa',
                                                    lineWidth: 2,
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
                                                        message: 'Create a 8 digit password!',
                                                        min: 8,
                                                        max: 8
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input.Password />
                                            </Form.Item>

                                            <Form.Item
                                                name="confirm_password"
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
                                                        validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                                    },
                                                ]}
                                            >
                                                <Checkbox onClick={(value) => { console.log(value); }}>
                                                    I agree to the <Link style={{
                                                        fontSize: '1rem',
                                                        fontFamily: 'Jost',
                                                        color: 'black',
                                                        textDecoration: '2px underline #e8dac2'
                                                    }} reloadDocument to="/termsofservice">Terms of Service</Link>
                                                </Checkbox>
                                            </Form.Item>
                                            <Form.Item
                                                name="privacy_policy"
                                                valuePropName="checked"
                                                rules={[
                                                    {
                                                        validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                                    },
                                                ]}
                                            >
                                                <Checkbox>
                                                    I agree to the <Link style={{
                                                        fontSize: '1rem',
                                                        fontFamily: 'Jost',
                                                        color: 'black',
                                                        textDecoration: '2px underline #e8dac2'
                                                    }} reloadDocument to="/termsofservice">Policy Agreement</Link>
                                                </Checkbox>
                                            </Form.Item>


                                            <Form.Item
                                            >
                                                <button className='buttonBlack' type="submit">
                                                    Verify
                                                </button>
                                            </Form.Item>
                                        </ConfigProvider>

                                    </Form></>


                                :
                                <><h1>Registration Complete</h1><p>Thank you for registering with Kcm Inc and choosing us as your preferred B2B service provider. Our enterprise is continually improving to provide you with the best possible experience and outstanding services. If you require any assistance in using our application, our support team is always available to help.
                                </p><Divider className='dividerHeader'></Divider><ConfigProvider
                                    theme={{
                                        token: {
                                            fontFamily: 'Jost',
                                            colorTextTertiary: 'black',
                                            colorPrimaryHover: '#000000',
                                            colorBgContainer: '#fafafa'
                                        },
                                    }}
                                >
                                        <Link reloadDocument to='/login'>
                                            <Button htmlType="submit">Click here to login!</Button>
                                        </Link>


                                    </ConfigProvider></>}


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
        </Layout >)
}

export default SignUp; 