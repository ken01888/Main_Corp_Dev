import { Col, MenuProps, Row, Menu, RadioChangeEvent, DrawerProps, Drawer, Button, Space, Segmented, Avatar, List, Image, Form, Input, ConfigProvider } from 'antd';
import * as React from 'react';

import { AppstoreOutlined, CaretDownOutlined, DownloadOutlined, KeyOutlined, MailOutlined, SettingOutlined, SolutionOutlined, StepForwardOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Buildings, Divide, DotsThreeCircleVertical, HouseLine, Key, Phone } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import user from '../../400ppi/user.png';
import { useNavigate } from "react-router-dom";






export const ClientMenu = (props) => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<DrawerProps['placement']>('left');
    const [info, setInfo] = React.useState<Array<string>>([])

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };





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

                        <span onClick={showDrawer} className='menuMiddleItems'>
                            <Image src={user} width={16} />{props.businessName}
                        </span>

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
                        <Link to='#' onClick={showDrawer} className='menuMiddleItems'>
                            Login
                        </Link>

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
                headerStyle={{ background: '#fafafa' }}
                bodyStyle={{ background: '#fafafa' }}
            >


            </Drawer>
        </>
    )
}

