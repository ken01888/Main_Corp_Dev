import { Button, Checkbox, Col, Divider, Form, Input, Layout, Row, Select, ConfigProvider, Space, Alert, InputNumber } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { Link } from 'react-router-dom';
import Main_Menu from '../Components/Navigation/Main_Menu';
import { useForm } from 'antd/es/form/Form';
import { IdentificationBadge, Buildings, MapPin, UsersFour, At, Fingerprint, Phone } from "@phosphor-icons/react";
import Menu from '../Components/Navigation/Main_Menu'
import { motion } from 'framer-motion';
import Public_Footer from '../Components/Navigation/Footer';




const SignUp: React.FC = () => {
    const [showForm, setForm] = React.useState(true)
    const [emailVerified, setEmailVerified] = React.useState(false)
    document.title = 'Registration'

    const onFinishLogin = async (values: any) => {
        console.log(values)
        let newData = await fetch('8080/registration', {
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
                        <Row justify={'center'} align={'middle'} gutter={[0, 16]} className='sectionHeaderOther'>
                            <Col >
                                <h3>
                                    Sign Up
                                </h3>
                            </Col>
                        </Row>


                        <Row justify={'center'} align={'middle'} gutter={[0, 16]} style={{ marginTop: '6rem' }} >



                            {showForm ?
                                <Col xs={{ span: 22 }} md={{ span: 8 }} >

                                    <>
                                        <Form
                                            name="basic"
                                            initialValues={{ remember: true }}
                                            onFinish={onFinishLogin}
                                            onFinishFailed={onFinishFailed}
                                            autoComplete="on"
                                            size='middle'
                                            form={form}
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
                                                <h3>Sign Up</h3>
                                            </span>
                                            <Alert
                                                description={"We provide account services to organizations operating across multiple industries. To get started, please provide us with your organization's details and contact information. Point all questions to our Support center."}
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
                                                    <Input type='text' placeholder="First Name" maxLength={25} showCount prefix={<IdentificationBadge size={20} color="#849FD1" weight="fill" />} style={{
                                                        border: '1px solid #4D4D4F',
                                                        borderRadius: '1.5px',
                                                        fontSize: 14
                                                    }} />
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
                                                    name="business_size"
                                                    rules={[{ required: true, message: 'How many employees do you have?' }]}
                                                >
                                                    <Select
                                                        suffixIcon={<UsersFour size={20} color="#849FD1" weight="fill" />}
                                                        placeholder="How many employees do you have? "
                                                        style={{
                                                            border: '1px solid #4D4D4F',
                                                            borderRadius: '1.5px',
                                                            fontSize: 14
                                                        }}
                                                        variant="borderless"

                                                    >
                                                        <Select.Option value="micro">Less than 10</Select.Option>
                                                        <Select.Option value="small">Between 10 and 50</Select.Option>
                                                        <Select.Option value="medium">Between 50 and 250 </Select.Option>
                                                        <Select.Option value="large">Over 250</Select.Option>
                                                    </Select>
                                                </Form.Item>


                                                <Form.Item

                                                    name="zipcode"
                                                    rules={[{ required: true, message: "What is your business's zip code?" }]}
                                                >

                                                    <InputNumber style={{
                                                        border: '1px solid #4D4D4F',
                                                        borderRadius: '1.5px',
                                                        fontSize: 14,
                                                        width: '-webkit-fill-available'
                                                    }} placeholder="Zipcode" maxLength={25} prefix={<MapPin size={20} color="#849FD1" weight="fill" />} stringMode={true} min={0} type='number' />

                                                </Form.Item>




                                                <Form.Item
                                                    name="phone_number"
                                                    rules={[{ required: true, message: 'Please input your 10 digit phone number!' }]}
                                                >
                                                    <Input style={{
                                                        border: '1px solid #4D4D4F',
                                                        borderRadius: '1.5px',
                                                        fontSize: 14
                                                    }} type='tel' placeholder="Phone Number" maxLength={25} showCount prefix={<Phone size={20} color="#849FD1" weight="fill" />} />
                                                </Form.Item>


                                                <Form.Item
                                                    name="email"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please enter a email address!',
                                                        },
                                                    ]}                                                    >
                                                    <Input type='text' style={{
                                                        border: '1px solid #4D4D4F',
                                                        borderRadius: '1.5px',
                                                        fontSize: 14
                                                    }} placeholder="Email Address" maxLength={45} showCount prefix={<At size={20} color="#849FD1" weight="fill" />} />
                                                </Form.Item>

                                                <Form.Item
                                                    name="password"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'To ensure maximum security, it is necessary for your password to have at least one uppercase letter, one lowercase letter, one numerical digit, and one of the specified special characters:[!@#$&?]. Passwords must be at max 8 characters long.',
                                                            min: 8,
                                                            max: 8,
                                                            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&?]).{8}$/
                                                        },
                                                    ]}
                                                    hasFeedback
                                                >
                                                    <Input.Password style={{
                                                        border: '1px solid #4D4D4F',
                                                        borderRadius: '1.5px',
                                                        fontSize: 14
                                                    }} placeholder="Password" maxLength={25} showCount prefix={<Fingerprint size={20} color="#849FD1" weight="fill" />} />

                                                </Form.Item>



                                                <Form.Item
                                                    dependencies={['password']}
                                                    name="confirm_password"
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

                                                                return Promise.reject(new Error('The  password that you entered do not match!'));
                                                            },
                                                        }),
                                                    ]}
                                                >
                                                    <Input.Password style={{
                                                        border: '1px solid #4D4D4F',
                                                        borderRadius: '1.5px',
                                                        fontSize: 14
                                                    }} placeholder="Confirm Password" maxLength={25} showCount prefix={<Fingerprint size={20} color="#849FD1" weight="fill" />} />

                                                </Form.Item>

                                                <div>
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
                                                            <a href='/termsofservice' className='anchorLinks'>
                                                                By checking the box, you indicate your agreement to abide by and adhere to the Terms of Service governing the use of our platform and services.
                                                            </a>
                                                        </Checkbox>
                                                    </Form.Item>
                                                    <Form.Item
                                                        name="privacy_policy"
                                                        valuePropName="checked"
                                                        rules={[
                                                            {
                                                                validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Please read and accept our Privacy Policy.')),
                                                            },
                                                        ]}
                                                    >
                                                        <Checkbox >
                                                            <a href='/privacypolicy' className='anchorLinks'>
                                                                By checking the box, you indicate your agreement to abide by and adhere to the Privacy Policy governing the use of our platform and services.
                                                            </a>
                                                        </Checkbox>
                                                    </Form.Item>
                                                </div>



                                                <Form.Item
                                                >
                                                    <button type="submit" className='buttonFormBeige'>
                                                        Submit
                                                    </button>
                                                </Form.Item>

                                            </ConfigProvider>

                                            {
                                                emailVerified ? <Alert
                                                    message="This email address already registered. Please use a different one."
                                                    type="error"
                                                    closeIcon
                                                /> : ''
                                            }
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
                                        <h3>We've created your account. </h3>
                                    </span>
                                    <Alert
                                        description="
                                        Welcome to the K.C. Morris Inc! We're delighted to have you on board. As a newly registered client, you've just taken the first step toward unlocking a world of innovative solutions and utilitarianism. We are here to help guide you on this journey. Your success is our priority, and we're here to empower you every step of the way. Real change takes a community, and we are happy to have you onboard.                     "
                                        type="warning"
                                        className='heroText'
                                    />

                                    <Link to='/'>
                                        <button type="submit" className='buttonFormBeige'>
                                            Go Back Home
                                        </button>
                                    </Link>



                                </Col>












                            }



                        </Row>


                </Content>

            </Layout>



        </Layout >)
}

export default SignUp; 