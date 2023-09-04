import { Col, Row, DrawerProps, Drawer, Space, FloatButton, ConfigProvider, Button, } from 'antd';
import * as React from 'react';

import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate, } from "react-router-dom";
import { FileTextOutlined, FolderOpenOutlined, FolderOutlined, InfoCircleOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import { CirclesFour, CirclesThreePlus, DotsThreeOutline, Lifebuoy } from '@phosphor-icons/react';






export const ClientMenu = (props) => {
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<DrawerProps['placement']>('left');
    const [subInventory, setSubInventory] = React.useState(false);



    const onClose = () => {
        setOpen(false);
    };





    return (
        <>
            <Row className='webMenu' justify={'space-between'}>


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

                    </motion.div>
                    <span className='menuMiddleItems'>
                        {props.businessName}
                    </span>

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
                    {open ? <CirclesFour size={24} color="#4D4D4F" weight="fill" onClick={() => setOpen(!open)} /> : <DotsThreeOutline size={24} color="#4D4D4F" weight="fill" onClick={() => setOpen(!open)} />}





                </Col>

            </Row>


            <Drawer
                title={`${props.businessName}`}
                placement='bottom'
                onClose={onClose}
                open={open}
                closable={false}
                key={placement}
                mask={false}
                headerStyle={{ background: '#fafafa' }}
                bodyStyle={{ background: '#fafafa' }}
                maskClosable
            >
                <Row justify={'space-between'} gutter={[0, 75]}>
                    <Col xs={22} md={3}>
                        <NavLink
                            to={`account`}
                            className='clientMenuItem'
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                };
                            }}
                        >
                            <UserOutlined />Account
                        </NavLink>

                        <NavLink
                            onClick={() => setSubInventory(!subInventory)}
                            to={`#`}
                            className='clientMenuItem'
                            style={({ isActive, isPending }) => {
                                <span className={isActive ? "active" : ""}>Tasks</span>

                                return {
                                    fontWeight: isActive ? "bold" : "",
                                };
                            }}
                        >
                            {subInventory ? <FolderOpenOutlined size={16} /> : <FolderOutlined size={16} />}Inventory
                        </NavLink>
                        {
                            subInventory ?

                                <Space wrap size={[55, 0]}>
                                    <NavLink
                                        to={`store`}
                                        className='clientMenuItem'
                                        style={({ isActive, isPending }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                backgroundColor: isActive ? "#fafafa" : "#fafafa",
                                                textDecoration: isActive ? "2.5px underline #b4cbd4" : ""


                                            };
                                        }}
                                    >
                                        <FileTextOutlined />Items
                                    </NavLink>

                                    <NavLink
                                        to={`products`}
                                        className='clientMenuItem'
                                        style={({ isActive, isPending }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                backgroundColor: isActive ? "#fafafa" : "#fafafa",
                                                textDecoration: isActive ? "2.5px underline #b4cbd4" : ""
                                            };
                                        }}

                                    >
                                        <FileTextOutlined />Products
                                    </NavLink>
                                    <NavLink
                                        to={`inventoryaudits`}
                                        className='clientMenuItem'
                                        style={({ isActive, isPending }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                backgroundColor: isActive ? "#fafafa" : "#fafafa",
                                                textDecoration: isActive ? "2.5px underline #b4cbd4" : ""
                                            };
                                        }}

                                    >
                                        <FileTextOutlined />Audits
                                    </NavLink>
                                    <NavLink
                                        to={`nutrition`}
                                        className='clientMenuItem'
                                        style={({ isActive, isPending }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                backgroundColor: isActive ? "#fafafa" : "#fafafa",
                                                textDecoration: isActive ? "2.5px underline #b4cbd4" : ""
                                            };
                                        }}

                                    >
                                        <FileTextOutlined />Nutrition
                                    </NavLink>
                                </Space>

                                : ''
                        }


                    </Col>


                </Row>
                <ConfigProvider
                    theme={{
                        token: {
                            fontFamily: 'Jost',
                            colorTextTertiary: 'black',
                            colorBgContainer: '#fafafa',
                            colorFillContent: '#E8DAC2'
                        },
                    }}
                >


                    <Button onClick={() => setOpen(!open)} className='buttonBlack' htmlType="submit">
                        Close
                    </Button>
                </ConfigProvider>
            </Drawer>


        </>
    )
}

