import * as React from 'react'
import { Col, Image, Form, Input, Tag, ConfigProvider, FloatButton, Button, Descriptions, Space } from 'antd'
import 'isomorphic-fetch';
import { useLoaderData, useParams } from 'react-router-dom';




const PrincipleAccountDetails: React.FC = (props) => {
    const [ViewPersonalInformation, setViewPersonalInformation] = React.useState<boolean>(false)
    const [EditPersonalInformation, setEditPersonalInformation] = React.useState<boolean>(true)
    const [clientInformation, setclientInformation] = React.useState<any>()



    React.useEffect(() => {
        const user: any = window.localStorage.getItem('user')
        const newUser = JSON.parse(user)
        delete newUser.id

        const newUserArray = Object.entries(newUser)
        setclientInformation(newUserArray)
    }, [])


    const onPrincipleUpdate = async (values: any) => {
        const dataReply = await fetch(`http://localhost:8000/updateClientinformation`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const dataParse = await dataReply.json()
        setEditPersonalInformation(!EditPersonalInformation)
        console.log(dataReply, dataParse)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };




    return (




        <Col xs={22} md={12}>
            <div className='clientPortalDiv'>
                <Form
                    name="client"
                    initialValues={{ remember: true }}
                    onFinish={onPrincipleUpdate}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='horizontal'
                    size='middle'
                >
                    <ConfigProvider
                        theme={{
                            token: {
                                fontFamily: 'Jost',
                                colorTextTertiary: 'black',
                                colorPrimaryHover: '#b4cbd4',
                                colorBgContainerDisabled: 'ffffff',

                            },
                        }}
                    >
                        <Descriptions
                            title={<><h1 className='h1_Header_Client_Portal'>Principal Profile</h1>
                            </>} layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>
                                    To view your information, click on "View" in the bottom left corner.
                                    If you need to make any changes, click on "Update" to modify your personal details.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>
                                <Space>
                                    <Button className='tagReview' onClick={() => { setViewPersonalInformation(!ViewPersonalInformation) }}> View</Button>
                                    <Button className='tagUpdate' onClick={() => { setEditPersonalInformation(!EditPersonalInformation) }}> Update</Button>
                                </Space>
                            </Descriptions.Item>






                            {ViewPersonalInformation ?

                                <>

                                    {clientInformation.map((i, n, a) => {
                                        return (

                                            <Descriptions.Item label={i[0].toUpperCase().replace('_', ' ')} key={n}>

                                                <Form.Item
                                                    name={i[0]}
                                                    key={n}
                                                    initialValue={i[1]}

                                                >

                                                    <Input key={n} bordered={EditPersonalInformation} placeholder={i[1]} disabled={EditPersonalInformation}></Input>
                                                </Form.Item>

                                            </Descriptions.Item>


                                        )
                                    })}


                                    {EditPersonalInformation ?
                                        ''
                                        :
                                        <Form.Item
                                        >
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
                                                <Button htmlType="submit">Submit Changes</Button>

                                            </ConfigProvider>
                                        </Form.Item>
                                    }
                                </>
                                : ''}
                        </Descriptions>
                    </ConfigProvider>
                </Form>
            </div>

            {/* 
            <FloatButton.Group shape="square" style={{ right: 24 }}>
                <FloatButton icon={<Image preview={false} ></Image>} />
                <FloatButton />
                <FloatButton.BackTop visibilityHeight={0} />
            </FloatButton.Group> */}
        </Col>

    )
}

export default PrincipleAccountDetails;