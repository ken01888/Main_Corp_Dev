import * as React from 'react'
import { Col,Image, Form, Input, Tag, ConfigProvider, FloatButton, Button, Descriptions } from 'antd'
import 'isomorphic-fetch';
import { useParams } from 'react-router-dom';




const PrincipleAccountDetails: React.FC = (props) => {
    const [ViewPersonalInformation, setViewPersonalInformation] = React.useState<boolean>(false)
    const [EditPersonalInformation, setEditPersonalInformation] = React.useState<boolean>(true)
    const [clientInformation, setclientInformation] = React.useState<Array<string>>([])

const {id} = useParams();



    React.useEffect(() => {
        (async () => {
            const dataReply = await fetch(`http://localhost:80/client_portal/getPrincipleInformation/${id}`)
            const newData = await dataReply.json()
            setclientInformation(newData)

        })()
    }, [ViewPersonalInformation])



    const onPrincipleUpdate = async (values: any) => {
        const dataReply = await fetch(`http://localhost:80/client_portal/updateClientinformation/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })

        const dataParse = await dataReply.json()
        setEditPersonalInformation(!EditPersonalInformation)
        console.log(dataParse)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };




    return (




        <Col xs={22} md={18}>
            <div className='clientPortalDiv'>
                <Form
                    name="client"
                    style={{ maxWidth: 600 }}
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

                            },
                        }}
                    >
                        <Descriptions
                            extra={
                                <>
                                    <Tag className='tagReview' onClick={() => { setViewPersonalInformation(!ViewPersonalInformation) }} bordered={false} > View</Tag>
                                    <Tag className='tagUpdate' onClick={() => { setEditPersonalInformation(!EditPersonalInformation) }} bordered={false} > Update</Tag>
                                </>}

                            title={<><h1 className='h1_Header_Client_Portal'>Principal Profile</h1>
                            </>} layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>
                                    In this section, you can easily manage and update your personal information.
                                    To view your information, click on "View" in the top right corner.
                                    If you need to make any changes, click on "Update" to modify your personal details.
                                </p>


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


            <FloatButton.Group shape="square" style={{ right: 24 }}>
                <FloatButton icon={<Image preview={false} ></Image>} />
                <FloatButton />
                <FloatButton.BackTop visibilityHeight={0} />
            </FloatButton.Group>
        </Col>

    )
}

export default PrincipleAccountDetails;