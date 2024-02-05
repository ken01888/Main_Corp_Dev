import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Modal, Select, Space, Input, InputNumber, Table, Drawer, QRCode, Tag, Dropdown, MenuProps, Alert, Row,Tooltip } from 'antd'
import 'isomorphic-fetch';
import { ColumnsType } from 'antd/es/table';
import * as convert from 'convert-units'
import { CheckSquare, DownloadSimple, HashStraight, PencilLine, Plus, QrCode, Syringe, TextT, UploadSimple } from '@phosphor-icons/react';


interface DataType {
    key: number | string;
    supplier: number | string;
    brand: number | string;
    description: number | string;
    category: number | string | string;
    total_package_weight: number | string;
    recommended_stock_level: number | string,
    price: number | string;
    price_per_gram: number | string;

}




const StoreInventory: React.FC = (props) => {
    const [InventoryList, setInventoryList] = React.useState<Array<DataType>>([])
    const [selectedRow, setSelectedRow] = React.useState<any>([])
    const [selectedRowAction, setSelectedRowActions] = React.useState<any>(null)
    const [updateInventoryForm, setUpdateInventoryForm] = React.useState<any>(false)
    const [viewInventoryStore, setViewInventoryStore] = React.useState<boolean>(false)
    const [QRCodeGenerator, setQRCodeGenerator] = React.useState(false)
    const [userId, setUserId] = React.useState(88)
    const [userPin, setUserPin] = React.useState(12345)
    const [nutrition, setNutrition] = React.useState(false)




    const [addInventory] = Form.useForm();
    const [updateInventory] = Form.useForm();
    const [formNutrition] = Form.useForm();

    // Retrieve Inventory information from database

    React.useEffect(() => {
        (
            async () => {

                const user: any = await window.localStorage.getItem('user')
                const newUser = await JSON.parse(user)
                // setUserPin(newUser.pin)
                // setUserId(newUser.id)
                const dataReply = await fetch('/getInventoryItems');
                const newData = await dataReply.json();
                setInventoryList(newData)
            }
        )()
    }, [])

    React.useEffect(() => {
        (
            async () => {

                const user: any = await window.localStorage.getItem('user')
                const newUser = await JSON.parse(user)
                setUserPin(newUser.pin)
                setUserId(newUser.id)
                const dataReply = await fetch('/getInventoryItems');
                const newData = await dataReply.json();

                setInventoryList(newData)
            }
        )()

    }, [viewInventoryStore, updateInventoryForm])

    /* Form Inventory Add*/

    const onAddInventoryItems = async (values: any) => {

        const dataReply = await fetch('/insertNewInventoryItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        const newData = await dataReply.json()

        setViewInventoryStore(!viewInventoryStore)


        addInventory.resetFields();
    };





    /*Select table rows for update of product or delete*/







    /*Form Failure*/


    /*Form Delete */


    const onDeleteInventoryItem = async () => {
        const dataReply = await fetch('/deleteInventoryItems', {
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

                    const user: any = await window.localStorage.getItem('user')
                    const newUser = await JSON.parse(user)
                    setUserPin(newUser.pin)
                    setUserId(newUser.id)
                    const dataReply = await fetch(`/getInventoryItems`);
                    const newData = await dataReply.json();
                    setInventoryList(newData)
                }
            )()
        }

    };

    /*Form Update */

    const onItemUpdate = async (values: any) => {
        const newArray = Object.values(values.total_package_weight)
        if (newArray[0] == undefined || newArray[1] == undefined) {
            delete values.total_package_weight
        }
        setUpdateInventoryForm(!updateInventoryForm)

        const dataReply = await fetch('/updateInventoryItem', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ values, id: selectedRow[1][0] })


        });
        const dataParse = await dataReply.json();
        if (dataParse.affectedRows === 1) {
            (
                async () => {
                    const dataReply_1 = await fetch('/getInventoryItems');
                    const newData = await dataReply_1.json();
                    setInventoryList(newData)
                }
            )()
        } else {
            setInventoryList([])
        }
        updateInventory.resetFields();

    };

    const onAddInventoryNutritionInformation = async (values) => {

        const dataReply = await fetch('/addNutritionInformation', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ values, id: selectedRow[1][0] })
        });
        const dataParse = await dataReply.json();
        setNutrition(!nutrition)
        formNutrition.resetFields()

    };






    const rowSelection = {
        onChange: async (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            await setSelectedRow([selectedRows, selectedRowKeys])
            await setSelectedRowActions(selectedRowKeys[0])

        },
        hideSelectAll: true
    };


    const onFinishFailed = (errorInfo: any) => {
        addInventory.resetFields();
        console.log('Failed:', errorInfo);
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
        },
        {
            key: '3',
            label: (
                <a onClick={() => { setNutrition(!nutrition) }} >
                    Nutrition
                </a>
            ),
        },

    ];


    const columns: ColumnsType<DataType> = [
        {
            title: 'Action',
            render: (_, record: any) => {
                if (record.id === selectedRowAction) {
                    return (
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
                        <Dropdown menu={{ items }}>
                            <Tooltip placement="topLeft" color='#849FD1' title={'Edit'}>
                         
                                <Button icon={<PencilLine size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack' >
                                </Button>
                              
                            </Tooltip>
                         
                        </Dropdown>
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
        {
            title: 'Item',
            dataIndex: 'description',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },

        {
            title: 'Brand',
            dataIndex: 'brand',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],

        },
        {
            title: 'Supplier',
            dataIndex: 'supplier',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Category',
            dataIndex: 'category',

            sorter: (a: any, b: any) => a.category - b.category,

            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    String(record.category).toUpperCase()
                )
            }



        },



        {
            title: 'Package Weight',
            dataIndex: 'total_package_weight',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            sorter: (a: any, b: any) => a.total_package_weight - b.total_package_weight,
            render: (_, record) => {
                return (
                    (convert(record.total_package_weight).from('g').to('lb')).toFixed(0) + ' lb'
                )
            }
        },
        {
            title: 'Safety Stock',
            dataIndex: 'recommended_stock_level',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],


            sorter: (a: any, b: any) => a.recommended_stock_level - b.recommended_stock_level,
            render: (_, record) => {
                return (
                    record.recommended_stock_level + ' cs'
                )
            }
        },
        {
            title: 'Price',
            dataIndex: 'price',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],

            sorter: (a: any, b: any) => a.price - b.price,
            render: (_, record) => {
                return (
                    new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(record.price))

                )
            }
        },
        {
            title: 'PPG',
            dataIndex: 'price_per_gram',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],

            sorter: (a: any, b: any) => a.price - b.price,
            render: (_, record) => {
                return (
                    new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD', minimumFractionDigits: 4 }).format(Number(record.price_per_gram))

                )
            }
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




        <Row justify={'center'} gutter={[0, 75]} >


            <Col xs={22} md={18}>
                <Space wrap>

                    <div className='clientSectionsFormat'>
                        <div >
                            <h1>Stock</h1>
                            <Alert
                                description="The Stock section is an essential tool for keeping track of and organizing your inventory. 
                                    To add items, click on the Add button and complete the form.
                                     Once you have entered the details, the item will appear in the table below. 
                                     If you need to make any changes to an item or add nutritional information, 
                                     simply check the item box to the left of the Action column to make your changes.
                               "
                                className='heroText'
                            />
                        </div>
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
                            <Space className='spaceDivForButtonOnStockPage' size={[25, 25]}>
                                <Tooltip placement="topLeft" color='#849FD1' title={'Add Item'}>
                                    <Button icon={<Plus size={20} weight='bold' />} className='buttonFormBlack' onClick={() => setViewInventoryStore(!viewInventoryStore)}></Button>
                                </Tooltip>
                                <Tooltip placement="topLeft" color='#849FD1' title={'Audit Barcode'}>

                                    <Button icon={<QrCode weight='bold' size={20} />} className='buttonFormBlack' onClick={() => setQRCodeGenerator(!QRCodeGenerator)}></Button>
                                </Tooltip>
                            </Space>
                        </ConfigProvider>
                    </div>
                    <div className='tableScrollDiv'>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Table: {
                                        lineWidth: 2,
                                        fontFamily: 'Jost',
                                        fontSize: 14,
                                        rowSelectedHoverBg: '#fafafa',

                                    },
                                }
                            }}
                        >
                            <Table rowKey={(record: any) => record.id}
                                scroll={{ x: '-webkit-fill-available' }}
                                rowSelection={rowSelection}
                                columns={columns}
                                dataSource={InventoryList}
                                pagination={{ pageSize: 10 }}
                                bordered />
                        </ConfigProvider>
                    </div>
                </Space>
            </Col>

            {/* Nutrition Modal */}
            <Modal
                title={<h1 >Nutrient Details</h1>}
                style={{ top: 10 }}
                open={nutrition}
                onCancel={() => setNutrition(!nutrition)}
                footer={null}
            >
                <Alert
                    description="To ensure accurate inventory information, please add the nutritional information for each item.
                                You can usually find this information on the back of the product's package, on the nutritional fact label.
                               "
                    className='heroText'
                />
                <Space wrap>
                    <Tag color="#000000">Food Fraud Warning</Tag>
                    <Alert
                        description="Economically motivated adulteration (EMA) is the intentional exclusion, removal, or substitution of a valuable ingredient or part of a food. Submitting false information is unlawful.
                               "
                        className='heroText'
                    />
                </Space>
                <Form
                    name="Nutrition"
                    form={formNutrition}
                    onFinish={onAddInventoryNutritionInformation}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                    layout='horizontal'
                    size='middle'
                >
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimaryHover: '#fafafa',
                                fontFamily: 'Jost',
                                fontSize: 14,
                            },
                        }}
                    >
                        <Form.Item label="Serving Size"
                        >
                            <Space.Compact>
                                <Form.Item
                                    name={['serving_size', 'amount']}
                                    rules={[{ required: true, message: 'Enter serving size information' }]}
                                    initialValue={1}
                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['serving_size', 'unit']}
                                    rules={[{ required: true, message: 'Enter serving size information' }]}
                                    initialValue={'g'}
                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}
                                    >
                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>
                        <Form.Item label="Calories">
                            <Space.Compact>
                                <Form.Item
                                    name={['calories', 'amount']}
                                    initialValue={0}
                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['calories', 'unit']}
                                    initialValue={'kcal'}

                                >

                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="kcal">kcal</Select.Option>

                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="Total Fat">
                            <Space.Compact>

                                <Form.Item
                                    name={['total_fat', 'amount']}
                                    initialValue={0}
                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['total_fat', 'unit']}
                                    initialValue={'g'}



                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="Saturated Fat">
                            <Space.Compact>

                                <Form.Item
                                    name={['saturated_fat', 'amount']}
                                    initialValue={0}
                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['saturated_fat', 'unit']}
                                    initialValue={'g'}

                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="Trans Fat">
                            <Space.Compact>

                                <Form.Item
                                    name={['trans_fat', 'amount']}

                                    initialValue={0}

                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['trans_fat', 'unit']}
                                    initialValue={'g'}



                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="Cholesterol">
                            <Space.Compact>

                                <Form.Item
                                    name={['cholesterol', 'amount']}
                                    initialValue={0}
                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['cholesterol', 'unit']}
                                    initialValue={'mg'}
                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>


                        <Form.Item label="Sodium">
                            <Space.Compact>

                                <Form.Item
                                    name={['sodium', 'amount']}

                                    initialValue={0}



                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['sodium', 'unit']}
                                    initialValue={'mg'}



                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="Carbohydrates">
                            <Space.Compact>

                                <Form.Item
                                    name={['carbohydrates', 'amount']}
                                    initialValue={0}
                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['carbohydrates', 'unit']}
                                    initialValue={'g'}

                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="Dietary Fiber">
                            <Space.Compact>

                                <Form.Item
                                    name={['fiber', 'amount']}
                                    initialValue={0}
                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['fiber', 'unit']}
                                    initialValue={'g'}

                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="Sugar">
                            <Space.Compact>

                                <Form.Item
                                    name={['sugar', 'amount']}
                                    initialValue={0}

                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['sugar', 'unit']}
                                    initialValue={'g'}

                                >

                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >

                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>

                                    </Select>

                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="Added Sugar">
                            <Space.Compact>

                                <Form.Item
                                    name={['added_sugar', 'amount']}
                                    initialValue={0}




                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['added_sugar', 'unit']}
                                    initialValue={'g'}



                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="Protein">
                            <Space.Compact>

                                <Form.Item
                                    name={['protein', 'amount']}
                                    initialValue={0}




                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['protein', 'unit']}
                                    initialValue={'g'}



                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="Calcium">
                            <Space.Compact>

                                <Form.Item
                                    name={['calcium', 'amount']}


                                    initialValue={0}


                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['calcium', 'unit']}
                                    initialValue={'mg'}



                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="Iron">
                            <Space.Compact>
                                <Form.Item
                                    name={['iron', 'amount']}
                                    initialValue={0}

                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['iron', 'unit']}
                                    initialValue={'mcg'}



                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="Potassium">
                            <Space.Compact>

                                <Form.Item
                                    name={['potassium', 'amount']}
                                    initialValue={0}
                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['potassium', 'unit']}
                                    initialValue={'mg'}
                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="Vitamin D">
                            <Space.Compact>

                                <Form.Item
                                    name={['vitamin_d', 'amount']}
                                    initialValue={0}
                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                </Form.Item>
                                <Form.Item
                                    name={['vitamin_d', 'unit']}
                                    initialValue={'mcg'}
                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}

                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>

                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>
                        <Form.Item
                            name={'allergies'}
                            label='Allergies'
                        >
                            <Select
                                style={{
                                    border: '1px solid #4D4D4F',
                                    borderRadius: '1.5px',
                                    fontSize: 14,
                                    width: 160
                                }}
                                variant='borderless'
                                suffixIcon={<Syringe size={20} color="#849FD1" weight="bold" />}
                                mode="tags"
                            >
                                <Select.Option value="milk">Milk</Select.Option>
                                <Select.Option value="egg">Egg</Select.Option>
                                <Select.Option value="fish">Fish</Select.Option>
                                <Select.Option value="shellfish">Shellfish</Select.Option>
                                <Select.Option value="tree_nuts">Tree nuts</Select.Option>
                                <Select.Option value="wheat">Wheat</Select.Option>
                                <Select.Option value="peanuts">Peanut</Select.Option>
                                <Select.Option value="soybeans">Soybeans</Select.Option>
                                <Select.Option value="Sesame">Sesame</Select.Option>
                                <Select.Option value="allergy_free">Allergy Free</Select.Option>
                            </Select>
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

                                    <Button icon={<UploadSimple size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack' ></Button>
                                </Tooltip>
                            </ConfigProvider>


                        </Form.Item>

                    </ConfigProvider>
                </Form>
            </Modal>





            {/* Create Inventory Modal */}



            <Modal
                title={<h1>
                    Add Stock Item</h1>}
                style={{ top: 10 }}
                open={viewInventoryStore}
                onCancel={() => setViewInventoryStore(!viewInventoryStore)}
                footer={null}
            >

                <Form
                    name="Add"
                    form={addInventory}
                    onFinish={onAddInventoryItems}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                    layout='vertical'
                    size='middle'




                >
                    <ConfigProvider
                        theme={{
                            token: {
                                lineWidth: 1,
                                fontFamily: 'Jost',
                                fontSize: 14,
                            },
                        }}
                    >
                        <Alert
                            description="
                      Input the name listed on the manufacturing label. This is the specific name that identifies your product.
                      "
                            type="warning"
                            className='heroText'
                        />
                        <Form.Item
                            name="description"
                            rules={[{ required: true, message: 'What is the name of the input product?' }]}
                        >
                            <Input style={{
                                border: '1px solid #4D4D4F',
                                borderRadius: '1.5px',
                                fontSize: 14,
                                width: 325
                            }} type='text' maxLength={25} placeholder="Name" showCount prefix={<TextT size={20} color="#849FD1" weight="bold" />} />
                        </Form.Item>


                        <Alert
                            description="
                            Enter the brand name of the item. Examples include Nike, Coca-Cola, Nestle, Kellogg's, etc.
                            "
                            type="warning"
                            className='heroText'
                        />
                        <Form.Item

                            name="brand"
                            rules={[{ required: true, message: 'Enter the required information' }]}

                        >
                            <Input style={{
                                border: '1px solid #4D4D4F',
                                borderRadius: '1.5px',
                                fontSize: 14,
                                width: 325
                            }} type='text' placeholder="Brand" maxLength={25} showCount prefix={<TextT size={20} color="#849FD1" weight="bold" />} />
                        </Form.Item>

                        <Alert
                            description="
                            Enter the name of the manufacturer, supplier, or distributor - the company that produced the food product.
                            "
                            type="warning"
                            className='heroText'
                        />

                        <Form.Item

                            name="supplier"
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <Input style={{
                                border: '1px solid #4D4D4F',
                                borderRadius: '1.5px',
                                fontSize: 14,
                                width: 325
                            }} type='text' placeholder="Supplier" prefix={<TextT size={20} color="#849FD1" weight="bold" />} />
                        </Form.Item>


                        <Alert
                            description="
                            Choose a category for the item you are adding. This will assist in grouping products with similar characteristics.
                            "
                            type="warning"
                            className='heroText'
                        />

                        <Form.Item

                            name="category"
                            rules={[{ required: true, message: 'Enter the required information' }]}

                        >
                            <Select
                                style={{
                                    border: '1px solid #4D4D4F',
                                    borderRadius: '1.5px',
                                    fontSize: 14,
                                    width: 325
                                }}
                                variant="borderless"
                                suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}
                                placeholder="Category"
                            >
                                <Select.Option value="Meat & Seafood">Meat & Seafood</Select.Option>
                                <Select.Option value="Dairy & Eggs">Dairy & Eggs</Select.Option>
                                <Select.Option value="Fruits & Vegetables">Fruits & Vegetables</Select.Option>
                                <Select.Option value="Bakery & Bread">Bakery & Bread</Select.Option>
                                <Select.Option value="Beverage">Beverage</Select.Option>
                                <Select.Option value="Canned & Dry">Canned & Dry</Select.Option>
                                <Select.Option value="Supplies & Equipment">Supplies & Equipment</Select.Option>
                            </Select>
                        </Form.Item>



                        <Alert
                            description="
                            Enter the net package weight. This is the amount of food in the package or shipment, measured in mass units.
                            "
                            type="warning"
                            className='heroText'
                        />

                        <Form.Item
                        >
                            <Space.Compact>

                                <Form.Item

                                    name={['total_package_weight', 'unit']}
                                    rules={[{ required: true, message: 'Enter the required information' }]}
                                    initialValue={0}
                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }} placeholder="Amount" maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />

                                </Form.Item>

                                <Form.Item

                                    name={['total_package_weight', 'weight']}
                                    rules={[{ required: true, message: 'Enter the required information' }]}
                                    initialValue={'lb'}

                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 160
                                        }}
                                        variant="borderless"
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}
                                        placeholder="Weight"
                                    >
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>
                                        <Select.Option value="kg">kg</Select.Option>
                                        <Select.Option value="oz">oz</Select.Option>
                                        <Select.Option value="lb">lb</Select.Option>
                                        <Select.Option value="mt">mt</Select.Option>
                                        <Select.Option value="t">t</Select.Option>
                                    </Select>
                                </Form.Item>



                            </Space.Compact>

                        </Form.Item>
                        <Alert
                            description="
                            Enter your safety stock. Safety stock is the minimum quantity of an item stored in your stockpile to prevent shortages.
                            "
                            type="warning"
                            className='heroText'
                        />


                        <Form.Item

                            name="recommended_stock_level"
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber style={{
                                border: '1px solid #4D4D4F',
                                borderRadius: '1.5px',
                                fontSize: 14,
                                width: 325
                            }} placeholder="Stock Level" maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} step={5} type='number' />
                        </Form.Item>


                        <Alert
                            description="
                            Enter the purchasing price of the item. The purchasing price is the amount of money that the item costs to acquire from the supplier or manufacturer.
                            "
                            type="warning"
                            className='heroText'
                        />
                        <Form.Item

                            name="price"
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber style={{
                                border: '1px solid #4D4D4F',
                                borderRadius: '1.5px',
                                fontSize: 14,
                                width: 325
                            }} placeholder="Price" maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} step={5} type='number' />
                        </Form.Item>
                    </ConfigProvider>
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
                        <Form.Item
                        >
                            <Tooltip placement="right" color='#849FD1' title={'Save'}>

                                <Button icon={<UploadSimple size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack' ></Button>
                            </Tooltip>
                        </Form.Item>
                    </ConfigProvider>
                </Form>
            </Modal>

            {/* Update Inventory Modal */}

            <Modal
                title={<h1 >Modify Stock Item</h1>}
                style={{ top: 20 }}
                open={updateInventoryForm}
                onCancel={() => setUpdateInventoryForm(!updateInventoryForm)}
                footer={null}

            >
                <Alert
                    description="
                            To update any information associated with a previously submitted item, do so from this area. Make the necessary modifications to the item's details, such as the name, description, or price, and then click the Record  button to save your changes. Double-check all the information before submitting it again to ensure it's accurate and up-to-date.
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
                                        lineWidth: 1,
                                        fontFamily: 'Jost',
                                        fontSize: 14,
                                    },
                                }}
                            >
                                <Alert
                                    description="
                      Input the name listed on the manufacturing label. This is the specific name that identifies your product.
                      "
                                    type="warning"
                                    className='heroText'
                                />

                                <Form.Item

                                    name="description"
                                >
                                    <Input style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 325
                                    }} type='text' placeholder="Name" maxLength={25} showCount prefix={<TextT size={20} color="#849FD1" weight="bold" />} />
                                </Form.Item>
                                <Alert
                                    description="
                            Enter the brand name of the item. Examples include Coca-Cola, Nestle, Kellogg's, etc.
                            "
                                    type="warning"
                                    className='heroText'
                                />
                                <Form.Item
                                    name="brand"

                                >
                                    <Input style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 325
                                    }} type='text' placeholder="Brand" maxLength={25} showCount prefix={<TextT size={20} color="#849FD1" weight="bold" />} />
                                </Form.Item>

                                <Alert
                                    description="
                            Enter the name of the manufacturer, supplier, or distributor - the company that produced the food product.
                            "
                                    type="warning"
                                    className='heroText'
                                />

                                <Form.Item

                                    name="supplier"
                                >
                                    <Input style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 325
                                    }} type='text' placeholder="Supplier" maxLength={25} showCount prefix={<TextT size={20} color="#849FD1" weight="bold" />} />
                                </Form.Item>

                                <Alert
                                    description="
                            Choose a category for the item you are adding. This will assist in grouping products with similar characteristics.
                            "
                                    type="warning"
                                    className='heroText'
                                />

                                <Form.Item


                                    name="category"
                                >
                                    <Select
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 325
                                        }}
                                        variant='borderless'
                                        suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}
                                        placeholder="Category"
                                    >
                                        <Select.Option value="Meat & Seafood">Meat & Seafood</Select.Option>
                                        <Select.Option value="Dairy & Eggs">Dairy & Eggs</Select.Option>
                                        <Select.Option value="Fruits & Vegetables">Fruits & Vegetables</Select.Option>
                                        <Select.Option value="Bakery & Bread">Bakery & Bread</Select.Option>
                                        <Select.Option value="Beverage">Beverage</Select.Option>
                                        <Select.Option value="Canned & Dry">Canned & Dry</Select.Option>
                                        <Select.Option value="Supplies & Equipment">Supplies & Equipment</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Alert
                                    description="
                            Enter the net package weight. This is the amount of food in the package or shipment, measured in mass units.
                            "
                                    type="warning"
                                    className='heroText'
                                />

                                <Form.Item

                                >
                                    <Space.Compact>
                                        <Form.Item

                                            name={['total_package_weight', 'unit']}
                                        >
                                            <InputNumber style={{
                                                border: '1px solid #4D4D4F',
                                                borderRadius: '1.5px',
                                                fontSize: 14,
                                                width: 160
                                            }} placeholder="Amount" maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />

                                        </Form.Item>

                                        <Form.Item

                                            name={['total_package_weight', 'weight']}

                                        >
                                            <Select
                                                style={{
                                                    border: '1px solid #4D4D4F',
                                                    borderRadius: '1.5px',
                                                    fontSize: 14,
                                                    width: 160
                                                }}
                                                variant='borderless'
                                                suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}
                                                placeholder="Unit"
                                            >
                                                <Select.Option value="mcg">mcg</Select.Option>
                                                <Select.Option value="mg">mg</Select.Option>
                                                <Select.Option value="g">g</Select.Option>
                                                <Select.Option value="kg">kg</Select.Option>
                                                <Select.Option value="oz">oz</Select.Option>
                                                <Select.Option value="lb">lb</Select.Option>
                                                <Select.Option value="mt">mt</Select.Option>
                                                <Select.Option value="t">t</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Space.Compact>
                                </Form.Item>


                                <Alert
                                    description="
                            Enter your safety stock. Safety stock is the minimum quantity of an item stored in your stockpile to prevent shortages.
                            "
                                    type="warning"
                                    className='heroText'
                                />
                                <Form.Item

                                    name="recommended_stock_level"

                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 325
                                    }} placeholder="Safety Stock" maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} step={5} type='number' />
                                </Form.Item>
                                <Alert
                                    description="
                            Enter the purchasing price of the item. The purchasing price is the amount of money that the item costs to acquire from the supplier or manufacturer.
                            "
                                    type="warning"
                                    className='heroText'
                                />

                                <Form.Item
                                    name="price"
                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 325
                                    }} placeholder="Price" maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} step={5} type='number' />
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
                                        <Form.Item
                                        >
                                            <Tooltip placement="right" color='#849FD1' title={'Save'}>

                                                <Button icon={<UploadSimple size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack' ></Button>
                                            </Tooltip>
                                        </Form.Item>
                                    </ConfigProvider>
                                </Form.Item>
                            </ConfigProvider>
                        </Form> : ''
                }

            </Modal>
            <Drawer title={<h1>Barcode</h1>} placement="right" onClose={() => { setQRCodeGenerator(!QRCodeGenerator) }} open={QRCodeGenerator}

            >
                <div id="myqrcode">
                    <Alert
                        description="
                            We provide two convenient ways to access your inventory auditing system. The first option is to download the QR code and display it in a visible location, such as your office or employee area. The second option is to copy the link we provide below. To download the QR code, simply click on the Download button. 
                            "
                        type="warning"
                        className='heroText'
                    />

                    <QRCode value={`https://www.kcminc.io/inventorycheck?business_id=${userId}`} bgColor="#fff" style={{ marginBottom: 16 }} />

                    <p>Your Account Pin: <span>{userPin}</span></p>
                    <p>Auditing System Link: <span><a href={`/inventorycheck?business_id=${userId}`} target='_blank'>{`inventorycheck?business_id=${userId}`}</a></span></p>
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
                        <Tooltip placement="right" color='#849FD1' title={'Download'}>

                            <Button icon={<DownloadSimple size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack' ></Button>
                        </Tooltip>
                    </ConfigProvider>



                </div>
            </Drawer>


        </Row>

    )
}

export default StoreInventory;