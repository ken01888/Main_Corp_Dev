import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Space, Input, Table, Tooltip } from 'antd'
import 'isomorphic-fetch';
import { Inventory } from '../../Program_Flow/Inventory_Flow'

import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


interface DataType {
    key: number | string;
    supplier: number | string;
    brand: number | string;
    description: number | string;
    category: number | string | string;
    price: number | string;
    audit_reference_number: number | string;
    date_of_audit: number | string;
    in_stock: number | string;
    order_quantity: number | string


}



const InventoryAudit: React.FC = (props) => {
    const [InventoryList, setInventoryList] = React.useState<Array<DataType>>([])
    const [selectedRow, setSelectedRow] = React.useState<any>([])
    const [selectedRowAction, setSelectedRowActions] = React.useState<any>(null)
    const [updateInventoryForm, setUpdateInventoryForm] = React.useState<any>(false)
    const [viewInventoryStore, setViewInventoryStore] = React.useState<boolean>(false)


    const [updateInventory] = Form.useForm();



    // Retrieve Inventory information from database

    React.useEffect(() => {
        (
            async () => {

                const user: any = await window.localStorage.getItem('user')
                const newUser = await JSON.parse(user)

                const dataReply = await fetch(`http://localhost:8080/inventory_reference_information`);
                const newData = await dataReply.json();
                setInventoryList(newData)
            }
        )()
    }, [])

    /* Form Inventory Add*/



    React.useEffect(() => {
        (
            async () => {
                const dataReply = await fetch(`http://localhost:8080/inventory_reference_information`);
                const newData = await dataReply.json();
                setInventoryList(newData)
            }

        )()


    }, [viewInventoryStore, updateInventoryForm])



    /*Select table rows for update of product or delete*/







    /*Form Failure*/


    /*Form Delete */


    const onDeleteInventoryItem = async () => {
        const dataReply = await fetch(`http://localhost:8080/deleteInventoryAuditItems`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: selectedRow[1][0] })
        });
        const dataParse = await dataReply.json();
        if (dataParse === 1) {
            (
                async () => {
                    const dataReply = await fetch(`http://localhost:8080/inventory_reference_information`);
                    const newData = await dataReply.json();
                    setInventoryList(newData)
                }
            )()
        }

    };

    /*Form Update */

    const onItemUpdate = async (values: Object) => {
        setUpdateInventoryForm(!updateInventoryForm)

        const dataReply = await fetch(`http://localhost:8080/updateInventoryAuditItem`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ values, id: selectedRow[1][0] })
        });
        const dataParse = await dataReply.json();
        if (dataParse === 1) {
            (
                async () => {
                    const data = await new Inventory()
                    const newData = await data.getInventoryItems()
                    setInventoryList(newData.inventory)
                }
            )()
        }
        updateInventory.resetFields();
    };



    const rowSelection = {
        onChange: async (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            await setSelectedRow([selectedRows, selectedRowKeys])
            await setSelectedRowActions(selectedRowKeys[0])

        },
        hideSelectAll: true
    };



    const onUpdateFinishFailed = (errorInfo: any) => {
        updateInventory.resetFields();

        console.log('Failed:', errorInfo);
    };




    const columns: ColumnsType<DataType> = [
        {
            title: 'Date',
            dataIndex: 'date_of_audit',
            responsive: ['lg'],


        },
        {
            title: 'Reference Number',
            dataIndex: 'audit_reference_number',
            responsive: ['lg'],


        },
        {
            title: 'Supplier',
            dataIndex: 'supplier',
            responsive: ['lg'],
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            responsive: ['lg'],
        },
        {
            title: 'Description',
            dataIndex: 'description',
            responsive: ['lg'],

        },

        {
            title: 'Category',
            dataIndex: 'category',
            responsive: ['lg'],


        },
        {
            title: 'Price',
            dataIndex: 'price',
            responsive: ['lg'],


        },
        {
            title: 'On Hand',
            dataIndex: 'in_stock',
            responsive: ['lg'],


        },
        {
            title: 'Order Quantity',
            dataIndex: 'order_quantity',
            responsive: ['lg'],


        },



        {
            title: 'Action',
            render: (_, record: any) => {
                if (record.id === selectedRowAction) {
                    return (


                        <ConfigProvider
                            theme={{
                                token: {
                                    fontFamily: 'Jost',
                                    colorTextTertiary: 'black',
                                    colorPrimaryHover: '#000000',
                                    colorBgContainer: '#fafafa',
                                },
                            }}
                        >
                            <Space>
                                <Tooltip title="Delete selected item from audit record">
                                    <Button htmlType="submit" onClick={onDeleteInventoryItem} className='buttonBlackDrawer' icon={<DeleteOutlined />}>
                                    </Button>
                                </Tooltip>

                                <Tooltip title="Modify selected item">
                                    <Button htmlType="submit" onClick={() => { setUpdateInventoryForm(!updateInventoryForm) }} className='buttonBlackDrawer' icon={<EditOutlined />}>

                                    </Button>
                                </Tooltip>
                            </Space>
                        </ConfigProvider>




                    )
                } else {
                    return (
                        ''
                    )
                }

            }


            ,
        },
    ];



    const downloadQRCode = () => {
        const canvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
        if (canvas) {
            const url = canvas.toDataURL();
            const a = document.createElement('a');
            a.download = 'QRCode.png';
            a.href = url;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };


    return (




        <><Col xs={22} md={18}>
            <Space wrap>

                <div className='clientPortalDiv'>


                    <Descriptions
                        title={<><h1 className='h1_Header_Client_Portal'>Inventory Audit</h1>
                        </>} layout="vertical">
                        <Descriptions.Item span={3}>
                            <p>
                                After finishing an auditing session, you can check your Inventory Audits.
                                But before that, you need to add inventory items to your account. Once you are done with that,
                                you can get a QR Code or use the link available in the QR Code Generator section to access
                                your recording network.
                            </p>

                        </Descriptions.Item>
                    </Descriptions>





                </div>
                <div>
                    <ConfigProvider
                        theme={{
                            token: {
                                lineWidth: 2,
                                fontFamily: 'Jost',
                                fontSize: 14,
                                colorBorderSecondary: 'black'
                            },
                        }}
                    >
                        <Table rowKey={(record: any) => record.id}
                            rowSelection={rowSelection} columns={columns} dataSource={InventoryList} pagination={{ pageSize: 10 }} bordered />
                    </ConfigProvider>
                </div>


            </Space>

        </Col>

            {/* Update Inventory Modal */}

            <Modal
                title="Update Inventory Item"
                style={{ top: 20 }}
                open={updateInventoryForm}
                onCancel={() => setUpdateInventoryForm(!updateInventoryForm)}
                footer={null}
            >

                <p>It is essential to enter this information accurately to ensure its proper usage. If you require any help with data entry, please reach out to our support team.</p>

                {
                    selectedRow ?
                        <Form
                            name="Update"
                            style={{ maxWidth: 600 }}
                            form={updateInventory}
                            initialValues={{ reset: true }}
                            onFinish={onItemUpdate}
                            onFinishFailed={onUpdateFinishFailed}
                            autoComplete="on"
                            layout='horizontal'
                            size='middle'


                        >
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorPrimary: 'black',
                                        colorPrimaryHover: '#fafafa',
                                        lineWidth: 2,
                                        fontFamily: 'Jost',
                                        fontSize: 14,
                                    },
                                }}
                            >
                                <Form.Item
                                    label="Available"
                                    name="in_stock"
                                >
                                    <Input type='text' />
                                </Form.Item>

                                <Form.Item
                                    label="Order Quantity"
                                    name="order_quantity"
                                >
                                    <Input type='text' />
                                </Form.Item>



                                <Form.Item
                                >
                                    <Button htmlType="submit" className='buttonBlack' >

                                        Update
                                    </Button>
                                </Form.Item>
                            </ConfigProvider>
                        </Form> : ''
                }

            </Modal>


        </>

    )
}

export default InventoryAudit;