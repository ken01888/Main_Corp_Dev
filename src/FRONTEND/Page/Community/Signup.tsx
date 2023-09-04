import { Button, Checkbox, Col, Divider, Form, Input, Layout, Row, Select, ConfigProvider, Space, Alert } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Menu from '../Components/Navigation/Main_Menu';
import { useForm } from 'antd/es/form/Form';



const SignUp: React.FC = () => {
    const [showForm, setForm] = React.useState(true)
    const [emailVerified, setEmailVerified] = React.useState(false)
    document.title = 'Kcm Inc Service Registration'

    const onFinishLogin = async (values: any) => {

        let newData = await fetch('http://localhost:8080/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        let data = await newData.json()
        if (data === true) {
            setEmailVerified(!emailVerified)
        } else if (data === false) {
            setForm(!showForm)
        }
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


    const [form] = useForm()
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
                                        <h1>Become a client</h1><p>Kindly furnish us with the requested details to establish your account. Should you encounter any difficulties during the process, do not hesitate to reach out to our dedicated <Link to='/support'>support</Link> team for assistance. Thank you for choosing our services.
                                        </p><Divider className='dividerHeader'></Divider>
                                        <Form
                                            name="basic"
                                            initialValues={{ remember: true }}
                                            onFinish={onFinishLogin}
                                            onFinishFailed={onFinishFailed}
                                            autoComplete="one"
                                            size='large'
                                            form= {form}

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
                                                    label="Number of employees"
                                                    name="business_size"
                                                    rules={[{ required: true, message: 'How many employees do you have?' }]}
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
                                                    name="password"
                                                    label="Password"

                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'To ensure maximum security, it is necessary for your password to have at least one uppercase letter, one lowercase letter, one numerical digit, and one of the specified special characters:[!@#$&?]. Passwords must be at least 8 characters long.',
                                                            min: 8,
                                                            max: 8,
                                                            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&?]).{8}$/
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
                                                            validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Please read and accept our Terms of Service.')),
                                                        },
                                                    ]}
                                                >
                                                    <Checkbox >
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
                                                            validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Please read and accept our Terms of Service.')),
                                                        },
                                                    ]}
                                                >
                                                    <Checkbox >
                                                        I agree to the <Link style={{
                                                            fontSize: '1rem',
                                                            fontFamily: 'Jost',
                                                            color: 'black',
                                                            textDecoration: '2px underline #e8dac2'
                                                        }} reloadDocument to="/privacypolicy">Privacy Policy</Link>
                                                    </Checkbox>
                                                </Form.Item>
                                                {/* <Form.Item
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
                                            </Form.Item> */}


                                                <Form.Item
                                                >
                                                    <Button className='buttonBlack' htmlType="submit">
                                                        Verify
                                                    </Button>
                                                </Form.Item>

                                            </ConfigProvider>

                                            {
                                                emailVerified ? <Alert
                                                    message="This email address already registered. Please use a different one."
                                                    type="error"
                                                    closeIcon
                                                /> : ''
                                            }
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
                                            <Link to='/'>
                                                <Button htmlType="submit">Click here to login!</Button>
                                            </Link>


                                        </ConfigProvider></>}

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

export default SignUp; 