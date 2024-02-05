import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Space, Input, Table, DatePicker, DatePickerProps, Dropdown, MenuProps, Tag, Row, Alert, Tooltip } from 'antd'
import 'isomorphic-fetch';

import { ColumnsType } from 'antd/es/table';
import { DownOutlined, Loading3QuartersOutlined, LoadingOutlined } from '@ant-design/icons';
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { ClockCounterClockwise, HashStraight, Plus, TextT, UploadSimple } from '@phosphor-icons/react';
dayjs.extend(relativeTime)



interface DataType {
    key: number | string;
    audit_reference_number: number | string;
    date_of_audit: number | string;
}

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
    const [updatedItem, setUpdatedItem] = React.useState(true);


    const [updateInventory] = Form.useForm();



    // Retrieve Inventory information from database
    React.useEffect(() => {
        (
            async () => {
                const dataReply = await fetch(`/inventoryPeriod`);
                const newData = await dataReply.json();
                const newDate_1 = newData.map((i, n, a) => {
                    return i.date_of_audit
                })
                setInventoryDate(newDate_1)
            }
        )()
    }, [])
    React.useEffect(() => {
        (
            async () => {
                const dataReply = await fetch(`/inventoryPeriod`);

                const newData = await dataReply.json();
                const newDate_1 = newData.map((i, n, a) => {
                    return i.date_of_audit
                })
                await setInventoryDate(newDate_1)
                setUpdatedItem(true)

            }
        )()
    }, [updatedItem])

    React.useEffect(() => {
        (
            async () => {
                const newDate = requestedDate
                const dataReply = await fetch(`/inventory_reference_information?auditDate=${newDate}`)
                const newData = await dataReply.json();
                const newArray = newData.map((i, n, a) => {
                    return i.price
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
        const dataReply = await fetch(`/inventory_reference_information?auditDate=${newDate}`)
        const newData1 = await dataReply.json();
        const newArray = newData1.map((i, n, a) => {
            return i.price
        })

        const sumWithInitial = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        setTotalCost(sumWithInitial)
        setInventoryList(newData1)
    }


    /*Form Delete */


    const onDeleteInventoryItem = async () => {
        setRowModify(!rowModify)
        const dataReply = await fetch(`/deleteInventoryAuditItems`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: selectedRow })
        });
        const dataParse = await dataReply.json();
        if (dataParse === 1) {
            (
                async () => {
                    const newDate = requestedDate
                    const dataReply = await fetch(`/inventory_reference_information?auditDate=${newDate}`)
                    const newData = await dataReply.json();
                    const newArray = newData.map((i, n, a) => {
                        return i.price
                    })

                    const sumWithInitial = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
                    setTotalCost(sumWithInitial)
                    setInventoryList(newData)
                }
            )()
        }

    };

    /*Form Update */

    const onItemUpdate = async (values: any) => {
        setRowModify(!rowModify)
        setUpdateInventoryForm(!updateInventoryForm)
        values.date_of_audit = dayjs(values.date_of_audit).format('dddd, MMMM D, YYYY')
        const dataReply = await fetch(`/updateInventoryAuditItem`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ values, id: selectedRow })
        });
        const dataParse = await dataReply.json();
        if (dataParse === 1) {
            (
                async () => {
                    const newDate = requestedDate
                    const dataReply = await fetch(`/inventory_reference_information?auditDate=${newDate}`)
                    const newData = await dataReply.json();
                    const newArray = newData.map((i, n, a) => {
                        return i.price
                    })

                    const sumWithInitial = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
                    setTotalCost(sumWithInitial)
                    setInventoryList(newData)

                }
            )()

        }

        updateInventory.resetFields();
    };

    const rowSelection = {
        onSelect: async (record, selected, selectedRows, nativeEvent) => {
            if (selected === true) {
                await setSelectedRowActions(record.id)
                await setSelectedRow(record.id)

            }

            else if (selected == false) {
                setSelectedRowActions('')
            }
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




                    )
                } else {
                    return (
                        ''
                    )
                }

            }


            ,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            className: 'columnLightBlue',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Product',
            dataIndex: 'description',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Available',
            dataIndex: 'in_stock',
            className: 'columnLightBlue',
            sorter: (a: any, b: any) => a.in_stock - b.in_stock,
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Purchase',
            dataIndex: 'order_quantity',
            sorter: (a: any, b: any) => a.order_quantity - b.order_quantity,
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Cost',
            dataIndex: 'price',
            className: 'columnLightBlue',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            sorter: (a: any, b: any) => a.price - b.price,
            render: (_, record) => {
                return (
                    new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(record.price))
                )
            }
        },
    ];
    return (




        <Row justify={'center'} gutter={[0, 75]} >

            <Col xs={22} md={18}>
                <Space wrap>

                    <div className='clientSectionsFormat'>


                        <div>
                            <h1>Audits</h1>

                            <Alert
                                description=
                                "The Audit tool helps track inventory, monitor costs and purchases, and review physical inventory checks. Access the tool by selecting a date highlighted in beige. Review the table containing each item recorded, its description, availability, and purchasing amounts. Make changes to availability, purchasing, audit date, or remove an item by clicking the box in the first column. Click reset to update the calendar and view changes. "
                                type="warning"
                                className='heroText'
                            />
                        </div>

                        <Descriptions>
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
                                    <Space align='end'>
                                        <DatePicker
                                            style={{
                                                border: '1px solid #4D4D4F',
                                                borderRadius: '1.5px',
                                                fontSize: 14,
                                                width: 160
                                            }}
                                            variant='borderless'
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
                                            <Space className='spaceDivForButtonOnStockPage' wrap size={[25, 25]}>
                                                <Tooltip placement="topLeft" color='#849FD1' title={'Reset Calendar'}>
                                                    <Button icon={<ClockCounterClockwise size={20} weight="bold" />} className='buttonFormBlack' onClick={() => { setUpdatedItem(false) }}></Button>
                                                    {/* <Button icon={<SyncOutlined  />} className='buttonBlack'></Button> */}
                                                </Tooltip>
                                            </Space>
                                        </ConfigProvider>
                                    </Space>
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
                                },
                            }}
                        >
                            <Table scroll={{ x: '-webkit-fill-available' }} rowKey={(record: any) => record.id}
                                rowSelection={rowSelection} columns={columns} dataSource={InventoryList} pagination={{ pageSize: 10 }} bordered footer={(record: any) =>
                                    InventoryList[0] ?
                                        <Descriptions>
                                            <Descriptions.Item label="Audit Date" span={2}>{record[0].date_of_audit}</Descriptions.Item>
                                            <Descriptions.Item label="Cost" span={1}>{new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(totalCost))}</Descriptions.Item>
                                            <Descriptions.Item label="Time Since Audit" span={3}>{dayjs(record[0].date_of_audit).fromNow(true)}</Descriptions.Item>




                                        </Descriptions> : ''}
                            />
                        </ConfigProvider>
                    </div>


                </Space>

            </Col>

            {/* Update Inventory Modal */}

            <Modal
                title={<h1>Modify Audit Record</h1>}
                style={{ top: 10 }}
                open={updateInventoryForm}
                onCancel={() => setUpdateInventoryForm(!updateInventoryForm)}
                footer={null}
            >

                <Alert
                    description="
                        It is essential to enter this information accurately to ensure its proper usage. If you require any help with data entry, please reach out to our support team.
                        "
                    type="warning"
                    className='heroText'
                />
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
                                    <Input style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14
                                    }} prefix={<TextT size={20} color="#849FD1" weight="bold" />} type='text' placeholder='Availability' maxLength={45} showCount />
                                </Form.Item>

                                <Form.Item
                                    label="Purchase Amount"
                                    name="order_quantity"
                                >
                                    <Input style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14
                                    }} 
                                    prefix={<HashStraight size={20} color="#849FD1" weight="bold" />}
                                    type='text' placeholder='Amount' maxLength={45} showCount />
                                </Form.Item>

                                <Form.Item
                                    label='Modify Date'
                                    name="date_of_audit"
                                >
                                    <DatePicker
                                             style={{
                                                border: '1px solid #4D4D4F',
                                                borderRadius: '1.5px',
                                                fontSize: 14,
                                                width: 325
                                            }}
                                            variant='borderless'
                                            placeholder='Date'
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
                            <Tooltip placement="right" color='#849FD1' title={'Save'}>

                                <Button icon={<UploadSimple size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack'></Button>
                            </Tooltip>
                        </ConfigProvider>
                                
                                </Form.Item>
                            </ConfigProvider>
                        </Form> : ''
                }

            </Modal>


        </Row>

    )
}

export default InventoryAudit;