import * as React from 'react'
import { Col, Image, Form, Input, Tag, ConfigProvider, FloatButton, Button, Descriptions,Space } from 'antd'
import 'isomorphic-fetch';
import { useParams } from 'react-router-dom';




const PrincipleBillingDetails: React.FC = (props) => {
    const [ViewPersonalInformation, setViewPersonalInformation] = React.useState<boolean>(false)
    const [EditPersonalInformation, setEditPersonalInformation] = React.useState<boolean>(true)
    const [billingInformation, setbillingInformation] = React.useState<Array<string>>([])

    const id = 3;



    React.useEffect(() => {
        (async () => {
            const dataReply = await fetch(`http://localhost:80/client_portal/getPrincipleBillingInformation/3`)
            const newData = await dataReply.json()
            setbillingInformation(newData)

        })()
    }, [ViewPersonalInformation])



    const onBillingUpdate = async (values: any) => {
        const dataReply = await fetch(`http://localhost:80/client_portal/updatePrincipleBillingInformation/3`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })

        const dataParse = await dataReply.json()
        setEditPersonalInformation(!EditPersonalInformation)
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
                onFinish={onBillingUpdate}
                onFinishFailed={(error)=>{console.log(error)}}
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
                            colorBgContainerDisabled:'ffffff',

                        },
                    }}
                >
                    <Descriptions
                        title={<><h1 className='h1_Header_Client_Portal'>Billing Profile</h1>
                        </>} layout="vertical">
                        <Descriptions.Item span={3}>
                            <p>
                            To view your billing information, click on "View" in the bottom left corner. 
                            If you need to make any changes, click on "Update" to modify your billing details. 
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

                                {billingInformation.map((i, n, a) => {
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
                                    <Descriptions.Item span={3}>

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
                                    </Descriptions.Item>

                                }
                            </>
                            : ''}
                    </Descriptions>
                </ConfigProvider>
            </Form>
        </div>


        <FloatButton.Group shape="square" style={{ right: 24 }}>
            <FloatButton icon={<Image preview={false} ></Image>} />
            <FloatButton />
            <FloatButton.BackTop visibilityHeight={0} />
        </FloatButton.Group>
    </Col>
    )
}

export default PrincipleBillingDetails;