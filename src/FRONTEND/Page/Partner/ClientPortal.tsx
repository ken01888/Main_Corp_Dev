import * as React from 'react'
import { Col, Layout, Row, Image, Form, Input, Tag, ConfigProvider, FloatButton, Button, Descriptions, Space } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { Bank, Book, Question } from '@phosphor-icons/react'
import { FileTextOutlined, FolderOpenOutlined, FolderOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import 'isomorphic-fetch';
import { ClientMenu } from '../Components/Navigation/ClientMenu'
import { Link, NavLink, Outlet, useLoaderData, useParams } from 'react-router-dom'



const ClientPortal: React.FC = () => {
    const [businessName, setBusinessName] = React.useState();
    const [subInventory, setSubInventory] = React.useState(false);


    React.useEffect(() => {
        const user: any = window.localStorage.getItem('user')
        const newUser = JSON.parse(user)
        delete newUser.id
        delete newUser.access_token
        const newUserArray = Object.entries(newUser)
        setBusinessName(newUser.business_name)
    }, [])


    return (

        <Layout>

            <Header className='ClientPortalHeader'>
                <ClientMenu businessName={businessName} />
            </Header>
            <Layout >
                <Content >

                    <Row justify={'space-between'} className='ClientPortal' gutter={[0, 75]}>
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
                                onClick={() => setSubInventory(!subInventory)}
                                to={`store`}
                                className='clientMenuItem'
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#e8dac2" : "",
                                    };
                                }}
                            >
                                {subInventory?<FolderOpenOutlined size={16}/> : <FolderOutlined size={16}/>}Inventory
                            </NavLink>
                            {
                                subInventory ? <NavLink
                                    to={`inventoryaudits`}
                                    className='clientMenuItem'
                                    style={({ isActive, isPending }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            backgroundColor: isActive ? "#e8dac2" : "",
                                        };
                                    }}

                                >
                                    <FileTextOutlined />Audits
                                </NavLink> : ''
                            }


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