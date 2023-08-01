import { Col, Row, RadioChangeEvent, DrawerProps, Drawer, Button, Space, Form, Input, ConfigProvider } from 'antd';
import * as React from 'react';

import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined,QrcodeOutlined } from '@ant-design/icons'





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


    const OnSuccessFullyLogin = (values: any) => {
        navigate(`/clientportal/${values.email}`)
    }
    return (
        <>
            <Row className='webMenu'>


                <Col xs={22} className='menuLogoSide'>
                    <Link to='/' className='menuMiddleItems' reloadDocument>

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
                            <NavLink to='/' reloadDocument> <Button htmlType="submit">Log In</Button></NavLink>


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
                            <NavLink to='/signup' reloadDocument><Button htmlType="submit">Sign Up</Button></NavLink>


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
                            <NavLink to='/support' reloadDocument><Button htmlType="submit">Support</Button></NavLink>


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
                            <Button htmlType="submit" icon={open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={showDrawer} >Menu</Button>

                        </ConfigProvider>

                    </div>

                </Col>





            </Row>


            <Drawer
                title='K.C. Morris Inc'
                placement='left'
                closable={true}
                onClose={onClose}
                open={open}
                key={placement}
                mask={false}
                headerStyle={{ background: '#fafafa' }}
                bodyStyle={{ background: '#fafafa' }}
            >

                <Row justify={'space-between'} className='ClientPortal' gutter={[0, 75]}>
                    <Col xs={22} md={4} >
                   

                        <NavLink
                            to={`/`}
                            className='clientMenuItem'
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    backgroundColor: isActive ? "#e8dac2" : "",
                                };
                            }}
                        >
                            Login
                        </NavLink>

                        <NavLink
                            to={`/signup`}
                            className='clientMenuItem'
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    backgroundColor: isActive ? "#e8dac2" : "",
                                };
                            }}
                        >
                            Registration
                        </NavLink>
                        <NavLink
                            to={`/termsofservice`}
                            className='clientMenuItem'
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    backgroundColor: isActive ? "#e8dac2" : "",
                                };
                            }}
                        >
                            Terms of Service
                        </NavLink>
                        <NavLink
                            to={`/privacypolicy`}
                            className='clientMenuItem'
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    backgroundColor: isActive ? "#e8dac2" : "",
                                };
                            }}
                        >
                            Privacy Policy
                        </NavLink>
                        <NavLink
                            to={`/support`}
                            className='clientMenuItem'
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    backgroundColor: isActive ? "#e8dac2" : "",
                                };
                            }}
                        >
                            Contact Us
                        </NavLink>


                    </Col>

                </Row>

                <Row gutter={[0,25]}>
                    <Col>
                  
                 
                   

                    </Col>
                    <Col>
                    <a href="mailto:ken@kcminc.io"><Button className='buttonBlack'>Email Us</Button></a>
                    <a href="tel:+1-404-740-0093"> <Button className='buttonBlack'>Call Us </Button></a>
                    </Col>
                    
                </Row>

            </Drawer>
        </>
    )
}


export default Main_Menu; 
