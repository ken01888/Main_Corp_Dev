import * as React from 'react'
import { Col, Layout, Row, Image, Form, Input, Tag, ConfigProvider, FloatButton, Button, Descriptions } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import { Bank, Book, Question } from '@phosphor-icons/react'
import { ShopOutlined, UserOutlined } from '@ant-design/icons';
import 'isomorphic-fetch';
import { ClientMenu } from '../Components/Menus.tsx/ClientMenu'
import { NavLink, Outlet, useLoaderData, useParams } from 'react-router-dom'




const ClientPortal: React.FC = () => {



    // React.useEffect(() => {
    //     (async () => {
          
    //         const dataReply = await fetch(`http://localhost:8080/client_portal/getPrincipleInformation/${params}`)
    //         const newData = await dataReply.json()
    //         console.log(newData)

    //     })()
    // }, [])




    return (

        <Layout>

            <Header className='ClientPortalHeader'>
                <ClientMenu />
            </Header>
            <Layout >
                <Content >

                    <Row justify={'space-between'} className='ClientPortal' gutter={[0, 75]}>
                        <Col xs={22} md={4} className='ClientSideItems'>
                            <NavLink
                                to={`account/`}
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
                                to={`billing/`}
                                className='clientMenuItem'
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#e8dac2" : "",
                                    };
                                }}
                            >
                                <Bank size={16} />Billing
                            </NavLink>
                            <NavLink
                                to={`services/`}
                                className='clientMenuItem'
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#e8dac2" : "",
                                    };
                                }}
                            >
                                 <ShopOutlined size={16} />Services
                            </NavLink>


                     
                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    <Book size={16} />
                                    Research
                                </button>
                            </a>
                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    <Question size={16} />Support
                                </button>
                            </a>
                        </Col>
                     
                        <Col xs={18}>
                        <Outlet />

                        </Col>
                    </Row>
                </Content>
            </Layout>


            <FloatButton.Group shape="square" style={{ right: 24 }}>
                <FloatButton icon={<Image preview={false} ></Image>} />
                <FloatButton />
                <FloatButton.BackTop visibilityHeight={0} />
            </FloatButton.Group>
        </Layout >

    )
}

export default ClientPortal