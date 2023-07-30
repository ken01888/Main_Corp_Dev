import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table, Card, Avatar, Upload, Popconfirm } from 'antd'
import 'isomorphic-fetch';
import { useSearchParams } from "react-router-dom";
import { Divide } from '@phosphor-icons/react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'antd/es/form/Form';








const InventoryCheck: React.FC = (props) => {
    const [inventoryList, setInventoryList] = React.useState<any>([{}])
    const [business_id_number, setBusinessId] = React.useState();
    const [onHand, setOnHand] = React.useState('0')
    const [submitOrder, setSubmitOrder] = React.useState([])
    const [disableButton, setDisableButton] = React.useState<any[]>([]);


    // Retrieve Inventory information from database

    React.useEffect(() => {
        (
            async () => {
                let params = await new URLSearchParams(document.location.search);
                let urlid: any = await params.get("business_id");
                setBusinessId(urlid)
                const dataReply = await fetch(`http://localhost:8080/getInventoryItemsForDailyChecklist/${urlid}`)
                const newData = await dataReply.json()
                setInventoryList(newData)
            }
        
        )()
    }, [])




    /* Form Inventory Add*/

    const onAddInventoryItems = async (values: any) => {
        const dataReply = await fetch(`http://localhost:8080/insertInventoryChecklistItems`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        console.log(values)

        setDisableButton([...disableButton,values.inventory_item_id])



    };



    /*Form Failure*/

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };








    return (




        <>

            <Col xs={22} md={18}>

                <div className='clientPortalDiv'>


                    <Descriptions
                        title={<><h1 className='h1_Header_Client_Portal'>Inventory Audit Sheet</h1>
                        </>} layout="vertical">
                        <Descriptions.Item span={3}>
                            <p>
                            It is crucial to conduct regular inventory audits to ensure transparency in your product's stock level.
                             Review all items thoroughly before submitting the audit report to ensure accuracy. ⚠️ Please note that any 
                             item recorded for the day cannot be edited, so it is necessary to record all items, even if the stock level 
                             remains the same. This is a well-established best practice that should be followed.

                            </p>

                        </Descriptions.Item>


                    </Descriptions>


                    <Space wrap size={[125, 75]}>

                        <Form.Provider
                            onFormFinish={(name, info:any) => {
                                console.log(name,info)
                                

                            }}
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
                                            title={<p className='inventoryItemDescription'>{`${i + 1} . ${v.description}`}<span></span></p>}
                                            layout="vertical"
                                            bordered
                                            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 2 }}
                                            size='small'
                                        >
                                            <Descriptions.Item key={uuidv4()}
                                                label="Category">{String(v.category).toUpperCase()} {v.id}</Descriptions.Item>
                                            <Descriptions.Item key={uuidv4()}
                                                label="Supplier">{String(v.supplier).toUpperCase()}</Descriptions.Item>
                                            <Descriptions.Item key={uuidv4()}
                                                label="Brand">{String(v.brand).toUpperCase()}</Descriptions.Item>
                                            <Descriptions.Item key={uuidv4()}
                                                label="Required Stock Level">{String(v.stock_level).toUpperCase()}</Descriptions.Item>
                                            <Descriptions.Item key={uuidv4()}
                                                label="On Hand">
                                                <Form.Item
                                                    key={uuidv4()}
                                                    hidden
                                                    name={`business_id`}
                                                    initialValue={business_id_number}
                                                >
                                                    <InputNumber type='text' />
                                                </Form.Item>

                                                <Form.Item
                                                    hidden
                                                    name={`inventory_item_id`}
                                                    initialValue={v.id}
                                                >
                                                    <InputNumber type='text' />
                                                </Form.Item>

                                                <Form.Item

                                                    name={`in_stock`}
                                                    rules={[{ required: true, message: 'Enter the number of items ' }]}
                                                    initialValue={onHand}

                                                >
                                                    <InputNumber stringMode={true} min={0} step={10} disabled={disableButton.includes(v.id) ? true : false} />
                                                </Form.Item>
                                                <Form.Item
                                                    hidden
                                                    name={`stock_level`}
                                                    rules={[{ required: true, message: 'Enter the number of items ' }]}
                                                    initialValue={Number(v.stock_level)}
                                                >
                                                    <InputNumber stringMode={true} min={0} step={10} />
                                                </Form.Item>

                                            </Descriptions.Item>
                                            <Descriptions.Item key={uuidv4()}
                                                label="Order">
                                                <Form.Item>
                                                    <Button htmlType="submit" id={uuidv4()} disabled={disableButton.includes(v.id) ? true : false}>
                                                        Record
                                                    </Button>
                                                </Form.Item>
                                            </Descriptions.Item>


                                        </Descriptions>
                                    </Form>



                                ))
                            }
                        </Form.Provider>
                    </Space>






 

                </div>



            </Col >







        </>

    )
}

export default InventoryCheck;