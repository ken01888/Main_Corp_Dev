import { Col, Row, RadioChangeEvent, DrawerProps, Drawer, Button, Space, Form, Input, ConfigProvider, Dropdown } from 'antd';
import * as React from 'react';

import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons'
import type { MenuProps } from 'antd';
import { ChatCircleDots, ChatsCircle, DotsThreeCircleVertical, DotsThreeOutline, DotsThreeOutlineVertical, Envelope, EnvelopeSimple, Headset, UserCircle } from "@phosphor-icons/react";






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

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'Health',
            children: [
                {
                    key: '1-1',
                    label: (<a href='/bola_overview'>Bite of Life Analytics (BoLA)</a>),
                },

            ],
        },
        // {
        //     key: '2',
        //     label: 'Wealth',
        //     disabled: true,
        //     children: [
        //         {
        //             key: '2-1',
        //             label: '3rd menu item',
        //         },
        //         {
        //             key: '2-2',
        //             label: '4th menu item',
        //         },
        //     ],
        // },
        // {
        //     key: '3',
        //     label: 'Housing',
        //     disabled: true,
        //     children: [
        //         {
        //             key: '3-1',
        //             label: '5d menu item',
        //         },
        //         {
        //             key: '3-2',
        //             label: '6th menu item',
        //         },
        //     ],
        // },
        // {
        //     key: '4',
        //     label: 'Learning',
        //     disabled: true,
        //     children: [
        //         {
        //             key: '3-1',
        //             label: '5d menu item',
        //         },
        //         {
        //             key: '3-2',
        //             label: '6th menu item',
        //         },
        //     ],
        // },
    ];

    return (
        <>
            <Row className='webMenu' justify={'space-between'}>


                <Col xs={2} className='menuLogoSide'>
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
                        Kcm Inc.
                    </Link>
                </Col>

                <Col xs={12} className='menuLogoSide'>

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
                            <a href='/' className='anchorLinks'> Home</a>


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
                            <Dropdown menu={{ items }} trigger={['click']} placement="bottom" arrow>

                                <a onClick={(e) => e.preventDefault()} className='anchorLinks'>

                                    <Space>
                                        Utilities
                                        <DownOutlined />
                                    </Space>

                                </a>

                            </Dropdown>

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
                            <a href='/aboutus' className='anchorLinks'>About Us</a>



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

                            <a href='/support' className='anchorLinks'>


                                Support



                            </a>



                        </ConfigProvider>





                        {/* <ConfigProvider
                            theme={{
                                token: {
                                    fontFamily: 'Jost',
                                    colorTextTertiary: 'black',
                                    colorPrimaryHover: '#000000',
                                    colorBgContainer: '#fafafa'

                                },
                            }}
                        >
                            <a href='/newsroom' className='anchorLinks'>Newsroom</a>


                        </ConfigProvider> */}


                    </div>

                </Col>


                <Col xs={4} className='menuLogoSide'>

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

                            <a href='/signup' className='anchorLinks'>

                                Sign Up




                            </a>


                        </ConfigProvider>


                        {/* <ConfigProvider
                            theme={{
                                token: {
                                    fontFamily: 'Jost',
                                    colorTextTertiary: 'black',
                                    colorPrimaryHover: '#000000',
                                    colorBgContainer: '#fafafa'

                                },
                            }}
                        >

                            <a href='/login' className='anchorLinks'>

                                Login




                            </a>


                        </ConfigProvider> */}



                    </div>

                </Col>
                {/* <Col xs={6} className='menuLogoSide'>

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
                            <NavLink to='/signup' reloadDocument><Button className='menuButtonLinks' htmlType="submit">Sign Up</Button></NavLink>


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
                            <NavLink to='/login' reloadDocument> <Button className='menuTextLinks' htmlType="submit" icon={<UserCircle size={28} weight="fill" />}></Button></NavLink>


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
                            <NavLink to='/support' reloadDocument> <Button className='menuTextLinks' htmlType="submit" icon={<EnvelopeSimple size={28} weight="fill" />}></Button></NavLink>


                        </ConfigProvider>



                    </div>

                </Col> */}





            </Row>

            <Row justify={'space-between'} className='mobileMenu'>


                <Col xs={23} className='menuLogoSide'>
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
                        Kcm Inc.
                    </Link>



                </Col>
                <Col xs={1} className='menuLogoSide'>


                    <div className='menuItemsDiv'>


                        <Button htmlType="button" className='menuTextLinksMobile' icon={open ? <DotsThreeCircleVertical size={20} color="#4d4d4f" weight="fill" /> : <DotsThreeOutline size={20} color="#4d4d4f" weight="fill" className='menuTextLinksMobile' />} onClick={showDrawer} ></Button>


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

            >

                <Row justify={'space-between'} className='ClientPortal' gutter={[0, 75]}>
                    <Col xs={22} md={4} className='menuMobileDrawerBody'>



                        <NavLink
                            to={`/`}
                            className='anchorLinks'
                            style={({ isActive, isPending }) => {
                                return {
                                    textDecoration: isActive ? "underline solid var(--light_grey)" : "",
                                    fontWeight: isActive ? 600 : 300,
                                };
                            }}
                        >
                            Home
                        </NavLink>

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
                            <Dropdown menu={{ items }} trigger={['click']} placement="bottomLeft" arrow>

                                <a onClick={(e) => e.preventDefault()} className='anchorLinks' style={{ width: 'fit-content' }}>

                                    <Space>
                                        Utilities
                                        <DownOutlined />
                                    </Space>

                                </a>

                            </Dropdown>

                        </ConfigProvider>
                        <NavLink
                            to={`/aboutus`}
                            className='anchorLinks'
                            style={({ isActive, isPending }) => {
                                return {
                                    textDecoration: isActive ? "underline solid var(--light_grey)" : "",
                                    fontWeight: isActive ? 600 : 300,
                                };
                            }}
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to={`/termsofservice`}
                            className='anchorLinks'
                            style={({ isActive, isPending }) => {
                                return {
                                    textDecoration: isActive ? "underline solid var(--light_grey)" : "",
                                    fontWeight: isActive ? 600 : 300,
                                };
                            }}
                        >
                            Terms of Service
                        </NavLink>
                        <NavLink
                            to={`/privacypolicy`}
                            className='anchorLinks'
                            style={({ isActive, isPending }) => {
                                return {
                                    textDecoration: isActive ? "underline solid var(--light_grey)" : "",
                                    fontWeight: isActive ? 600 : 300,
                                };
                            }}
                        >
                            Privacy Policy
                        </NavLink>





                        <a className='anchorLinks' href="mailto:ken@kcminc.io">Email</a>
                        <a className='anchorLinks' href="tel:+1-404-740-0093">Call</a>
                        <a href='/support' className='anchorLinks'>


                            <ChatCircleDots size={20} color="#849FD1" weight="fill" />



                        </a>

                    </Col>

                </Row>



            </Drawer>
        </>
    )
}


export default Main_Menu; 
