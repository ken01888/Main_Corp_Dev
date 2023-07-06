import { Col, MenuProps, Row, Menu, RadioChangeEvent, DrawerProps, Drawer, Button, Space, Segmented, Avatar, List, Image, Form, Input, ConfigProvider } from 'antd';
import * as React from 'react';

import { AppstoreOutlined, DownloadOutlined, KeyOutlined, MailOutlined, SettingOutlined, SolutionOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Buildings, Divide, DotsThreeCircleVertical, HouseLine, Key, Phone } from '@phosphor-icons/react';
import { Link, NavLink } from 'react-router-dom';
import login from '../../400ppi/login.png';
import client from '../../400ppi/client.png'
import { useNavigate } from "react-router-dom";





export const Menu_Home = () => {
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
const OnSuccessFullyLogin = (values:any) =>{
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
                        {/* <Link to='/login' onClick={showDrawer} className='menuMiddleItems'>
                            Signup
                        </Link> */}
                         <NavLink to='/1' onClick={showDrawer} className='menuMiddleItems'>
                            Login
                        </NavLink>

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
                        {/* <Link to='/login' onClick={showDrawer} className='menuMiddleItems'>
                            Signup
                        </Link> */}
                        <NavLink to='/1' onClick={showDrawer} className='menuMiddleItems'>
                            Login
                        </NavLink>

                    </div>

                </Col>



        

            </Row>


            <Drawer
                title='Enter your username and password to access the client portal. '
                placement='left'
                closable={true}
                onClose={onClose}
                open={open}
                key={placement}
                mask={false}
                headerStyle={{background:'#fafafa'}}
                bodyStyle={{background:'#fafafa'}}
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

