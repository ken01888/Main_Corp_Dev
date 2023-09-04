import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Space, Input, Table, Tooltip, Calendar, DatePicker, DatePickerProps, Dropdown, MenuProps } from 'antd'
import 'isomorphic-fetch';
import { Inventory } from '../../Program_Flow/Inventory_Flow'

import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, DownOutlined, EditOutlined, SmileOutlined } from '@ant-design/icons';
import * as dayjs from 'dayjs'
import { CalendarMode } from 'antd/es/calendar/generateCalendar';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)



// interface DataType {
//     key: number | string;
//     audit_reference_number: number | string;
//     date_of_audit: number | string;
// }

interface DataType {
    key: number | string;
    supplier: number | string;
    brand: number | string;
    description: number | string;
    category: number | string | string;
    price: number | string;
    in_stock: number | string;
    order_quantity: number | string
}




const InventoryAudit: React.FC = (props) => {
    const [InventoryList, setInventoryList] = React.useState<Array<DataType>>([])
    const [selectedRow, setSelectedRow] = React.useState<any>([])
    const [selectedRowAction, setSelectedRowActions] = React.useState<any>(null)
    const [updateInventoryForm, setUpdateInventoryForm] = React.useState<any>(false)
    const [inventoryDate, setInventoryDate] = React.useState<any>([])
    const [requestedDate, setrequestedDate] = React.useState<any>()
    const [rowModify, setRowModify] = React.useState(false)
    const [totalCost, setTotalCost] = React.useState('')


    const [updateInventory] = Form.useForm();



    // Retrieve Inventory information from database
    React.useEffect(() => {
        (
            async () => {

                const dataReply = await fetch(`http://localhost:8080/inventoryPeriod`);
                const newData = await dataReply.json();
                const newDate = newData.map((i, n, a) => {
                    return i.date_of_audit
                })
                setInventoryDate(newDate)
            }
        )()
    }, [])

    React.useEffect(() => {
        (
            async () => {
                const newDate = requestedDate
                const dataReply = await fetch(`http://localhost:8080/inventory_reference_information?auditDate=${newDate}`)
                const newData = await dataReply.json();
                const newArray = newData.map((i, n, a) => {
                    return i.price * i.order_quantity
                })
                const sumWithInitial = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
                setTotalCost(sumWithInitial)
                setInventoryList(newData)
            }
        )()
    }, [inventoryDate, rowModify, totalCost])



    const onChange: DatePickerProps['onChange'] = async (date, dateString) => {
        const newDate = await dayjs(dateString).format('dddd, MMMM D, YYYY')
        setrequestedDate(newDate)
        const dataReply = await fetch(`http://localhost:8080/inventory_reference_information?auditDate=${newDate}`)
        const newData = await dataReply.json();
        const newArray = newData.map((i, n, a) => {
            return i.price * i.order_quantity
        })

        const sumWithInitial = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        setTotalCost(sumWithInitial)
        setInventoryList(newData)
    }


    /*Form Delete */


    const onDeleteInventoryItem = async () => {
        setRowModify(!rowModify)
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
                    const newDate = requestedDate
                    const dataReply = await fetch(`http://localhost:8080/inventory_reference_information?auditDate=${newDate}`)
                    const newData = await dataReply.json();
                    const newArray = newData.map((i, n, a) => {
                        return i.price * i.order_quantity
                    })

                    const sumWithInitial = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
                    setTotalCost(sumWithInitial)
                    setInventoryList(newData)
                }
            )()
        }

    };

    /*Form Update */

    const onItemUpdate = async (values: Object) => {
        setRowModify(!rowModify)
        setUpdateInventoryForm(!updateInventoryForm)

        // const dataReply = await fetch(`http://localhost:8080/updateInventoryAuditItem`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ values, id: selectedRow[1][0] })
        // });
        // const dataParse = await dataReply.json();
        // if (dataParse === 1) {
        //     (
        //         async () => {
        //             const newDate = requestedDate
        //             const dataReply = await fetch(`http://localhost:8080/inventory_reference_information?auditDate=${newDate}`)
        //             const newData = await dataReply.json();
        //             const newArray = newData.map((i, n, a) => {
        //                 return i.price * i.order_quantity
        //             })

        //             const sumWithInitial = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        //             setTotalCost(sumWithInitial)
        //             setInventoryList(newData)
        //         }
        //     )()
        // }
        console.log(updateInventory)
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


    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a onClick={onDeleteInventoryItem}  >
                    Delete
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={() => { setUpdateInventoryForm(!updateInventoryForm) }} >
                    Modify
                </a>
            ),
        }
    ];


    const columns: ColumnsType<DataType> = [
        {
            title: 'Category',
            dataIndex: 'category',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Supplier',
            dataIndex: 'supplier',
            responsive: ['lg', 'xl', 'xxl'],
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            responsive: ['lg', 'xl', 'xxl'],
        },
        {
            title: 'Description',
            dataIndex: 'description',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],

        },
        {
            title: 'Available',
            dataIndex: 'in_stock',
            responsive: ['lg', 'xl', 'xxl'],



        },
        {
            title: 'Acquire',
            dataIndex: 'order_quantity',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],

        },
        {
            title: 'Cost',
            dataIndex: 'order_quantity',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(record.order_quantity) * Number(record.price))

                )
            }
        },



        {
            title: 'Action',
            render: (_, record: any) => {
                if (record.id === selectedRowAction) {
                    return (

                        <Dropdown menu={{ items }}>
                            <Button>
                                <Space>
                                    Edit
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                        // <ConfigProvider
                        //     theme={{
                        //         token: {
                        //             fontFamily: 'Jost',
                        //             colorTextTertiary: 'black',
                        //             colorPrimaryHover: '#white',
                        //             colorBgContainer: '#fafafa',
                        //         },
                        //     }}
                        // >
                        //     <Space>
                        //         <Tooltip title="Delete selected item from audit record">

                        //         </Tooltip>

                        //         <Tooltip title="Modify selected item">

                        //         </Tooltip>
                        //     </Space>
                        // </ConfigProvider>




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




    return (




        <><Col xs={22} md={18}>
            <Space wrap size={[12,64]}>

                <div className='clientPortalDiv'>


                    <Descriptions
                        title={<><h1 className='h1_Header_Client_Portal'>Audits</h1>
                        </>} layout="vertical">
                        <Descriptions.Item span={3}>
                            <p>
                                In this section, you can review previous inventory audits by
                                selecting a specific date. The previous audits will be clearly
                                marked for easy identification, allowing for comprehensive monitoring
                                of the inventory management processes and real time modifications.

                            </p>



                        </Descriptions.Item>
                        <Descriptions.Item span={3}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        fontFamily: 'Jost',
                                        colorTextTertiary: 'black',
                                        colorBgContainer: '#fafafa',
                                        colorPrimary: 'black'
                                    },
                                }}
                            >
                                <DatePicker
                                    onChange={onChange}
                                    cellRender={(current, info) => {
                                        if (info.type !== 'date') return info.originNode;
                                        const style: React.CSSProperties = {};
                                        inventoryDate.map((i, n, a) => {
                                            if (current.format('dddd, MMMM D, YYYY') === i) {
                                                style.fontFamily = 'Jost';
                                                style.background = 'var(--light_beige)';
                                                style.color = 'black';
                                                style.fontWeight = 900
                                            }
                                        })
                                        return (
                                            <div className="ant-picker-cell-inner" style={style}>
                                                {current.date()}
                                            </div>
                                        );
                                    }}
                                />

                            </ConfigProvider>

                        </Descriptions.Item>


                    </Descriptions>





                </div>

                <div className='tableScrollDiv'>
                    <ConfigProvider
                        theme={{
                            token: {
                                lineWidth: 1,
                                fontFamily: 'Jost',
                                fontSize: 14,
                                colorBorderSecondary: 'black'
                            },
                        }}
                    >
                        <Table  scroll={{ x: '-webkit-fill-available' }} rowKey={(record: any) => record.id}
                            rowSelection={rowSelection} columns={columns} dataSource={InventoryList} pagination={{ pageSize: 10 }} bordered footer={(record: any) =>
                                InventoryList[0] ?
                                    <Descriptions>
                                        <Descriptions.Item label="Audit Date" span={2}>{record[0].date_of_audit}</Descriptions.Item>
                                        <Descriptions.Item label="Cost" span={1}>{new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(totalCost))}</Descriptions.Item>
                                        <Descriptions.Item label="Reference Number" span={3}>{record[0].audit_reference_number}</Descriptions.Item>
                                        <Descriptions.Item label="Time Since Audit" span={3}>{dayjs(record[0].date_of_audit).fromNow(true)}</Descriptions.Item>



                                    </Descriptions> : ''}
                        />
                    </ConfigProvider>
                </div>


            </Space>

        </Col>

            {/* Update Inventory Modal */}

            <Modal
                title="Update Inventory Item"
                style={{ top: 10 }}
                open={updateInventoryForm}
                onCancel={() => setUpdateInventoryForm(!updateInventoryForm)}
                footer={null}
            >

                <p>It is essential to enter this information accurately to ensure its proper usage. If you require any help with data entry, please reach out to our support team.</p>

                {
                    selectedRow ?
                        <Form
                            name="Update"
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