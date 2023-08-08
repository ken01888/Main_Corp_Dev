import { Col, Row, DrawerProps, Drawer, } from 'antd';
import * as React from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigate, } from "react-router-dom";






export const ClientMenu = (props) => {
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<DrawerProps['placement']>('left');

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

                    <motion.div className='logo'>

                        <div style={{ height: 'fit-content' }}>
                            <div className='logoBlue'></div>
                            <div className='logoBeige'></div>
                        </div>
                        <div style={{ height: 'fit-content' }}>
                            <div className='logoBeige'></div>
                            <div className='logoBlue'></div>

                        </div>
                        <span className='menuMiddleItems'>
                            {props.businessName}
                        </span>
                    </motion.div>

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
                        {props.businessName}
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
                {/* <Row justify={'space-between'} className='ClientPortal' gutter={[0, 75]}>
                        <Col xs={22} md={4} className='ClientSideItems'>
                            <NavLink
                                to={`account`}
                                className='clientMenuItem'
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#e8dac2" : "",
                                    };
                                }}
                            >
                                <UserOutlined />Account
                            </NavLink>
                         
                            <NavLink
                                to={`store`}
                                className='clientMenuItem'
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#e8dac2" : "",
                                    };
                                }}
                            >
                                <ShopOutlined size={16} />Inventory
                            </NavLink>

                        </Col>

                        <Col xs={22} md={18}>
                            <Outlet />

                        </Col>
                    </Row> */}

            </Drawer>
        </>
    )
}

