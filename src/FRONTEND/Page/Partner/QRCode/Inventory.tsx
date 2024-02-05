import * as React from 'react'
import { Row, Col, Form, ConfigProvider, Button, Descriptions, InputNumber, Divider, Alert, Result, Input, Tag, FloatButton, Tooltip, Space } from 'antd'
import 'isomorphic-fetch';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { QrcodeOutlined, ReconciliationOutlined } from '@ant-design/icons'
import * as dayjs from 'dayjs'
import { ArrowLineRight, Key, Keyhole, LockKeyOpen, LockSimple, SignIn, UploadSimple } from '@phosphor-icons/react';











const InventoryCheck: React.FC = (props) => {
    const [inventoryList, setInventoryList] = React.useState<any>([{}])
    const [business_id_number, setBusinessId] = React.useState();
    const [onHand, setOnHand] = React.useState('0')
    const [associate, setAssociate] = React.useState(false)
    const [verify, setVerify] = React.useState(false)
    const [disableButton, setDisableButton] = React.useState<any[]>([]);
    const [verify_associate] = Form.useForm();
    const [inventoryExist, setInventoryExist] = React.useState<boolean>()
    const [inventoryDate, setInventoryDate] = React.useState(dayjs().format('dddd, MMMM D, YYYY'))
    const [inventoryReferenceId, seInventoryReferenceId] = React.useState(uuidv4())
    let [inventoryLength, setInventoryLength] = React.useState(0)




    // Retrieve Inventory information from database

    React.useEffect(() => {
        (
            async () => {
                let params = await new URLSearchParams(document.location.search);
                let urlid: any = await params.get("business_id");
                setBusinessId(urlid)
                const dataReply = await fetch(`/getInventoryItemsForDailyChecklist/${urlid}`)
                const newData = await dataReply.json();
                if (newData.length <= 0) {
                    setInventoryExist(false)
                } else if (newData.length >= 1) {
                    setInventoryLength(newData.length)

                    setInventoryExist(true)
                    setInventoryList(newData)
                }
            }
        )()
    }, [])




    /* Form Inventory Add*/

    const onAddInventoryItems = async (values: any) => {
        setInventoryLength(inventoryLength - 1)
        const dataReply = await fetch(`/insertInventoryChecklistItems`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        setDisableButton([...disableButton, values.inventory_item_id])
        console.log(disableButton)
       

    };

    const onVerifyFinish = async (values: any) => {
        values.id = business_id_number
        const dataReply = await fetch(`/verify_associate_pin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const responce = await dataReply.json()

        if (responce === true) {
            setAssociate(true)
        }

        if (responce === false) {
            setVerify(!verify)
        }

    };



    /*Form Failure*/

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const SendNotificationInventory = async () => {
        const values: any = {}
        values.reference_number = inventoryReferenceId
        values.id = business_id_number
        const dataReply = await fetch(`/inventory_notification_to_business`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

    }





    return (




        <Row justify={'center'} gutter={[0, 75]} >



            {
                associate ?
                    <Col xs={22} md={12} className='layout'>
                        <h2 style={{ display: 'flex' }} className='footer_h1'>
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
                        </h2>
                        <h1>Digital Inventory Sheet</h1>
                        <Alert
                            description=" Maintaining an accurate record of one's possessions is of utmost importance.
                                Regularly assessing the contents of one's inventory, even after minor additions or subtractions,
                                is a prudent approach. Conducting such a review at least twice a week ensures that resources
                                are not being wasted and that everything remains in an orderly state."
                            type="warning"
                            className='heroText'
                        />
                        <Space size={[0, 25]} wrap>

                            <Tag color="error">Notice:</Tag>

                            <Alert
                                description="
       Make sure to check the On Hand amount is correct before submitting. Once an item is uploaded it can only be modified from the Stock Section in the User Dashboard."
                                type="warning"
                                className='heroText'
                            />
                        </Space>








                        {
                            inventoryExist ? <Form.Provider
                            >
                                {



                                    inventoryList.map((v, i, a) => (



                                        <Form
                                            key={uuidv4()}
                                            name={v.id}
                                            style={{ maxWidth: "fit-content" }}
                                            onFinish={onAddInventoryItems}
                                            onFinishFailed={onFinishFailed}
                                            autoComplete="on"
                                            layout='vertical'
                                            size='middle'
                                        >
                                            <Descriptions
                                                key={uuidv4()}
                                                title={<p >{`${i + 1} . ${v.description}`}</p>}
                                                layout="vertical"
                                                bordered
                                                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 2 }}
                                                size='small'
                                            >
                                                <Descriptions.Item key={uuidv4()}
                                                    label="Category">{String(v.category).toUpperCase()}</Descriptions.Item>
                                                <Descriptions.Item key={uuidv4()}
                                                    label="Supplier">{String(v.supplier).toUpperCase()}</Descriptions.Item>
                                                <Descriptions.Item key={uuidv4()}
                                                    label="Brand">{String(v.brand).toUpperCase()}</Descriptions.Item>
                                                <Descriptions.Item key={uuidv4()}
                                                    label="Required Stock Level">{String(v.recommended_stock_level).toUpperCase()}</Descriptions.Item>
                                                <Descriptions.Item key={uuidv4()}
                                                    label="On Hand">
                                                    <Form.Item
                                                        key={uuidv4()}
                                                        hidden
                                                        name={`date_of_audit`}
                                                        initialValue={inventoryDate}
                                                    >
                                                        <Input />

                                                    </Form.Item>
                                                    <Form.Item
                                                        key={uuidv4()}
                                                        hidden
                                                        name={`audit_reference_number`}
                                                        initialValue={inventoryReferenceId}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                    <Form.Item
                                                        key={uuidv4()}
                                                        hidden
                                                        name={`business_id`}
                                                        initialValue={business_id_number}
                                                    >
                                                        <Input />

                                                    </Form.Item>

                                                    <Form.Item
                                                        hidden
                                                        name={`inventory_item_id`}
                                                        initialValue={v.id}
                                                    >
                                                        <Input />

                                                    </Form.Item>

                                                    <Form.Item

                                                        name={`in_stock`}
                                                        rules={[{ required: true, message: 'Enter the number of items ' }]}
                                                        initialValue={onHand}

                                                    >
                                                        <InputNumber style={{
                                                            border: '1px solid #4D4D4F',
                                                            borderRadius: '1.5px',
                                                            fontSize: 14,
                                                            width: 325
                                                        }} stringMode={true} min={0} step={5} disabled={disableButton.includes(v.id) ? true : false} />
                                                    </Form.Item>
                                                    <Form.Item
                                                        hidden
                                                        name={`recommended_stock_level`}
                                                        rules={[{ required: true, message: 'Enter the number of items ' }]}
                                                        initialValue={Number(v.recommended_stock_level)}
                                                    >
                                                        <Input />

                                                    </Form.Item>

                                                </Descriptions.Item>
                                                <Descriptions.Item key={uuidv4()}
                                                    label="Order">
                                                    <Form.Item>
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
                                                        <Button htmlType="submit" id={uuidv4()} disabled={disableButton.includes(v.id) ? true : false}>
                                                            {disableButton.includes(v.id) ?


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
                                                                    <Tooltip placement="right" color='#849FD1' title={'Locked!'}>

                                                                        <LockSimple size={20} weight="bold" />
                                                                    </Tooltip>
                                                                </ConfigProvider>

                                                                :
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
                                                                    <Tooltip placement="right" color='#849FD1' title={'Record Audit'}>
                                                                        <UploadSimple size={20} weight="bold" />
                                                                    </Tooltip>
                                                                </ConfigProvider>



                                                            }
                                                        </Button>
                                                        </ConfigProvider>

                                                    </Form.Item>
                                                </Descriptions.Item>


                                            </Descriptions>
                                        </Form>



                                    ))

                                }
                            </Form.Provider> : <Result
                                icon={<QrcodeOutlined style={{ color: '#849FD1' }} />}
                                title="There aren't any items in your inventory at the moment. To be able to generate inspection sheets, kindly add items to your account through your business profile page. Thank you!"
                            />
                        }


                    </Col > :
                    <Col xs={22} md={8} className='layout'>
                        <motion.div className='form_login' initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .5 }}>

                            <h2 style={{ display: 'flex' }} className='footer_h1'>
                                <motion.div className='logo'>

                                    <div style={{ height: 'fit-content' }}>
                                        <div className='logoBlue'></div>
                                        <div className='logoBeige'></div>
                                    </div>
                                    <div style={{ height: 'fit-content' }}>
                                        <div className='logoBeige'></div>
                                        <div className='logoBlue'></div>

                                    </div>

                                </motion.div>Kcm Inc
                            </h2>
                            <h1>Enter your store pin here</h1>
                            <Alert
                                description="
                        To proceed, please enter the PIN associated with your business account. If you do not know the PIN, contact your administrator for assistance. Contact our support if you need help with issues after entering the correct PIN.
                        "
                                type="warning"
                                className='heroText'
                            />
                            <Divider className='dividerHeader'></Divider>
                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onVerifyFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="one"
                                layout='horizontal'
                                size='large'
                                form={verify_associate}

                            >
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorPrimary: 'black',
                                            lineWidth: 1,
                                            fontFamily: 'Jost',
                                            fontSize: 14,
                                        },
                                    }}
                                >
                                    <Form.Item
                                        name="pin"
                                        rules={[{ required: true, message: 'Enter the pin associated with your account' }]}
                                    >
                                        <InputNumber
                                            prefix={<Key size={20} color="#849FD1" weight="bold" />}
                                            style={{
                                                border: '1px solid #4D4D4F',
                                                borderRadius: '1.5px',
                                                fontSize: 14,
                                                width: 325
                                            }} controls={false}
                                            placeholder='Enter Security Pin' />
                                    </Form.Item>

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
                                            <Tooltip placement="right" color='#849FD1' title={'Verify'}>

                                                <Button icon={<ArrowLineRight size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack'></Button>
                                            </Tooltip>
                                        </ConfigProvider>

                                    </Form.Item>
                                </ConfigProvider>
                            </Form>

                            {
                                verify ? <Alert
                                    message="Security Pin not found! Try entering the PIN again, if the problem persists visit your dashboard and check that the PIN you entered is correct. Contact support at anytime for assistance."
                                    type="error"
                                    closeIcon
                                /> : ''
                            }
                        </motion.div>

                    </Col>
            }






            {
                // inventoryLength === 0 ? <FloatButton onClick={SendNotificationInventory} tooltip='Submit Inventory Items' shape='square' icon={<ReconciliationOutlined style={{ color: 'black' }} />} style={{ border: '1px solid black', backgroundColor: '#E8DAC2' }} /> : ''
            }
        </Row >

    )
}

export default InventoryCheck;