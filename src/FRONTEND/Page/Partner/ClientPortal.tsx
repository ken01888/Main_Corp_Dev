import * as React from 'react'
import { Col, Layout, Row, Space } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import { FileTextOutlined, FolderOpenOutlined, FolderOutlined, UserOutlined } from '@ant-design/icons';
import 'isomorphic-fetch';
import { ClientMenu } from '../Components/Navigation/ClientMenu'
import { NavLink, Outlet } from 'react-router-dom'
import { ArrowFatLeft } from '@phosphor-icons/react';
import { motion } from 'framer-motion';



const ClientPortal: React.FC = () => {
    const [businessName, setBusinessName] = React.useState();
    const [subInventory, setSubInventory] = React.useState(false);


    // React.useEffect(() => {
    //     const user: any = window.localStorage.getItem('user')
    //     const newUser = JSON.parse(user)
    //     delete newUser.id
    //     delete newUser.access_token
    //     const newUserArray = Object.entries(newUser)
    //     setBusinessName(newUser.business_name)
    // }, [])


    return (

        <Layout>
            <Layout >
                <Content >

                    <Row className='ClientPortal' gutter={[0, 75]}>
                        <Col xs={22} md={3} className='ClientSideItems'>

                            <Space style={{ marginBottom: 25 }}>
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
                            </Space>

                            <Space wrap size={[0, 25]}>

                                <NavLink
                                    to={`account`}
                                    className='clientMenuItem'
                                    style={({ isActive, isPending }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            backgroundColor: isActive ? '#E8DAC2' : "",
                                        };
                                    }}
                                >
                                    <UserOutlined />Account
                                </NavLink>

                                <NavLink
                                    onClick={() => setSubInventory(!subInventory)}
                                    to={`bolamanual`}

                                    className='clientMenuItem'
                                    style={({ isActive, isPending }) => {

                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            backgroundColor: isActive ? '#E8DAC2' : "",
                                        };
                                    }}
                                >
                                    {subInventory ? <FolderOpenOutlined size={16} /> : <FolderOutlined size={16} />}BoLA
                                </NavLink>
                                {
                                    subInventory ?

                                        <Space  wrap size='large'>
                                            <NavLink
                                                to={`store`}
                                                className='clientMenuItem'
                                                style={({ isActive, isPending }) => {
                                                    return {
                                                        fontWeight: isActive ? "bold" : "",
                                                        backgroundColor: isActive ? '#E8DAC2' : "",



                                                    };
                                                }}
                                            >
                                                Stock


                                            </NavLink>

                                            <NavLink
                                                to={`products`}
                                                className='clientMenuItem'
                                                style={({ isActive, isPending }) => {
                                                    return {
                                                        fontWeight: isActive ? "bold" : "",
                                                        backgroundColor: isActive ? '#E8DAC2' : "",
                                                    };
                                                }}

                                            >
                                                Design
                                            </NavLink>
                                            <NavLink
                                                to={`nutrition`}
                                                className='clientMenuItem'
                                                style={({ isActive, isPending }) => {
                                                    return {
                                                        fontWeight: isActive ? "bold" : "",
                                                        backgroundColor: isActive ? '#E8DAC2' : "",
                                                    };
                                                }}

                                            >
                                                Nutrition
                                            </NavLink>
                                            <NavLink
                                                to={`inventoryaudits`}
                                                className='clientMenuItem'
                                                style={({ isActive, isPending }) => {
                                                    return {
                                                        fontWeight: isActive ? "bold" : "",
                                                        backgroundColor: isActive ? '#E8DAC2' : "",
                                                    };
                                                }}

                                            >
                                                Audit
                                            </NavLink>

                                        </Space>

                                        : ''
                                }

                            </Space>

                        </Col>

                        <Col xs={22} md={18}>
                            <Outlet />

                        </Col>


                    </Row>

                </Content>
            </Layout>


        </Layout >

    )
}

export default ClientPortal