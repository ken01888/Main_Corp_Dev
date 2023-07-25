import { Col, Row, Menu, RadioChangeEvent, DrawerProps, Drawer, Button, Space, Form, Input, ConfigProvider } from 'antd';
import * as React from 'react';

import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";





const Main_Menu = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<DrawerProps['placement']>('left');

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };
    const OnSuccessFullyLogin = (values: any) => {
        console.log(values)
        navigate(`/clientportal/${values.email}`)
    }
    return (
        <>
            <Row className='webMenu'>


                <Col xs={22} className='menuLogoSide'>
                    <Link to='/' className='menuMiddleItems'>

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
                    </Link>

                    <div className='menuItemsDiv'>
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
                            <NavLink to='/login'> <Button htmlType="submit">Log In</Button></NavLink>


                        </ConfigProvider>
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
                            <NavLink to='/signup'><Button htmlType="submit">Sign Up</Button></NavLink>


                        </ConfigProvider>
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
                            <NavLink to='/support'><Button htmlType="submit">Support</Button></NavLink>


                        </ConfigProvider>

                    </div>

                </Col>





            </Row>

            <Row justify={'space-between'} className='mobileMenu'>


                <Col xs={22} className='menuLogoSide'>
                    <Link to='/' className='menuMiddleItems'>

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
                    </Link>

                    <div className='menuItemsDiv'>

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
                            <Button htmlType="submit">Login</Button>

                        </ConfigProvider>

                    </div>

                </Col>





            </Row>


            <Drawer
                title='Enter your email and password to access your Private Client Portal. '
                placement='left'
                closable={true}
                onClose={onClose}
                open={open}
                key={placement}
                mask={false}
                headerStyle={{ background: '#fafafa' }}
                bodyStyle={{ background: '#fafafa' }}
            >

                <Form
                    name="login_form"
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={OnSuccessFullyLogin}
                    //   onFinishFailed={onFinishFailed}
                    autoComplete="on"
                    layout='horizontal'
                    size='middle'
                >
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: '#B4CBD4',
                                colorPrimaryHover: '#B4CBD4',
                                lineWidth: 2,
                                fontFamily: 'Nunito Sans',
                                fontSize: 14,
                            },
                        }}
                    >
                        <Form.Item

                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Input the email address you used to register the account!' }]}
                        >
                            <Input type='email' />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Input your password!' }]}
                        >
                            <Input.Password type='password' visibilityToggle={true} />
                        </Form.Item>







                        <Form.Item
                            className='formLoginButtons'
                        >
                            <Space>
                                <button className='buttonBlack' type="submit">
                                    Login
                                </button>
                                <button className='buttonBlack' type="submit">
                                    Reset Password!
                                </button>
                            </Space>

                        </Form.Item>
                    </ConfigProvider>
                </Form>

            </Drawer>
        </>
    )
}


export default Main_Menu; 
