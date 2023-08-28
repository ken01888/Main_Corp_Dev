import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table, Drawer, QRCode, Tag, Tooltip, Dropdown, MenuProps } from 'antd'
import 'isomorphic-fetch';
import { Inventory } from '../../Program_Flow/Inventory_Flow'
import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, DownOutlined, EditOutlined, PlusOutlined, QrcodeOutlined, SettingOutlined } from '@ant-design/icons';
import * as convert from 'convert-units'


interface DataType {
    key: number | string;
    supplier: number | string;
    brand: number | string;
    description: number | string;
    package_per_container: number | string;
    category: number | string | string;
    total_package_weight: number | string;
    recommended_stock_level: number | string,
    price: number | string;
}



const StoreInventory: React.FC = (props) => {
    const [InventoryList, setInventoryList] = React.useState<Array<DataType>>([])
    const [selectedRow, setSelectedRow] = React.useState<any>([])
    const [selectedRowAction, setSelectedRowActions] = React.useState<any>(null)
    const [updateInventoryForm, setUpdateInventoryForm] = React.useState<any>(false)
    const [viewInventoryStore, setViewInventoryStore] = React.useState<boolean>(false)
    const [QRCodeGenerator, setQRCodeGenerator] = React.useState(false)
    const [userId, setUserId] = React.useState()
    const [userPin, setUserPin] = React.useState()
    const [addInventory] = Form.useForm();
    const [updateInventory] = Form.useForm();
    const [addNutrition] = Form.useForm();

    const [nutrition, setNutrition] = React.useState(false)



    // Retrieve Inventory information from database

    React.useEffect(() => {
        (
            async () => {

                const user: any = await window.localStorage.getItem('user')
                const newUser = await JSON.parse(user)
                setUserPin(newUser.pin)
                setUserId(newUser.id)
                const dataReply = await fetch(`http://localhost:8080/getInventoryItems`);
                const newData = await dataReply.json();
                setInventoryList(newData)
            }
        )()
    }, [])

    /* Form Inventory Add*/

    const onAddInventoryItems = async (values: any) => {
        console.log(values)
        addInventory.resetFields();
        setViewInventoryStore(!viewInventoryStore)
        values.business_id = userId;
        const dataReply = await fetch(`http://localhost:8080/insertInventoryItems`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const dataParse = await dataReply.json();

    };

    React.useEffect(() => {
        (
            async () => {

                const user: any = await window.localStorage.getItem('user')
                const newUser = await JSON.parse(user)
                setUserPin(newUser.pin)
                setUserId(newUser.id)
                const dataReply = await fetch(`http://localhost:8080/getInventoryItems`);
                const newData = await dataReply.json();
                setInventoryList(newData)
            }
        )()

    }, [viewInventoryStore, updateInventoryForm])



    /*Select table rows for update of product or delete*/







    /*Form Failure*/


    /*Form Delete */


    const onDeleteInventoryItem = async () => {
        const dataReply = await fetch(`http://localhost:8080/deleteInventoryItems`, {
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
                    const dataReply = await fetch(`http://localhost:8080/getInventoryItems`);
                    const newData = await dataReply.json();
                    setInventoryList(newData)
                }
            )()
        }

    };

    /*Form Update */

    const onItemUpdate = async (values: Object) => {
        setUpdateInventoryForm(!updateInventoryForm)

        const dataReply = await fetch(`http://localhost:8080/updateInventoryItem`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ values, id: selectedRow[1][0] })
        });
        const dataParse = await dataReply.json();
        console.log(dataParse)
        // if (dataParse.affectedRows === 1) {
        //     (
        //         async () => {

        //             const user: any = await window.localStorage.getItem('user')
        //             const newUser = await JSON.parse(user)
        //             setUserPin(newUser.pin)
        //             setUserId(newUser.id)
        //             const dataReply_1 = await fetch(`http://localhost:8080/getInventoryItems`);
        //             console.log(dataReply_1)
        //             const newData = await dataReply_1.json();
        //             setInventoryList(newData)
        //         }
        //     )()
        // }
        updateInventory.resetFields();
    };

    const onAddInventoryNutritionInformation = async (values) => {

        const dataReply = await fetch(`http://localhost:8080/addNutritionInformation`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ values, id: selectedRow[1][0] })
        });
        const dataParse = await dataReply.json();
        setNutrition(!nutrition)
        addNutrition.resetFields()

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
            title: 'Product',
            dataIndex: 'description',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },

        {
            title: 'Package Weight',
            dataIndex: 'total_package_weight',
            responsive: ['lg', 'xl', 'xxl'],
            sorter: (a: any, b: any) => a.total_package_weight - b.total_package_weight,
            render: (_, record) => {
                return (
                    record.total_package_weight + ' lb'
                )
            }
        },
        {
            title: 'Safety Stock',
            dataIndex: 'recommended_stock_level',
            responsive: ['lg', 'xl', 'xxl'],

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
                        title={<><h1 className='h1_Header_Client_Portal'>Inventory</h1>
                        </>} layout="vertical">
                        <Descriptions.Item span={3}>
                            <p>
                                To conduct regular inventory audits and effectively manage food costs for your business,
                                adding new items to the designated section is necessary. Please remember that only authorized
                                personnel with access to your company's "PIN" can conduct these audits. Additionally,
                                the SECURITY PIN can be changed at any time under the Account section for added security.
                            </p>

                        </Descriptions.Item>
                        <Descriptions.Item span={3}>

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
                                <Space wrap size={[25, 25]}>
                                    <Button icon={<PlusOutlined />} className='buttonBlack' onClick={() => setViewInventoryStore(!viewInventoryStore)}> Add Inventory Items</Button>
                                    <Button icon={<QrcodeOutlined />} className='buttonBeige' onClick={() => setQRCodeGenerator(!QRCodeGenerator)}>In-Store Digital Barcode</Button>
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
                                colorBorderSecondary: 'black'
                            },
                        }}
                    >
                        <Table rowKey={(record: any) => record.id}
                            scroll={{ x: '-webkit-fill-available' }}
                            rowSelection={rowSelection} columns={columns} dataSource={InventoryList} pagination={{ pageSize: 10 }} bordered />
                    </ConfigProvider>
                </div>


            </Space>

        </Col>



            {/* Nutrition Modal */}

            <Modal
                title="Nutritional Label"
                style={{ top: 10 }}
                open={nutrition}
                onCancel={() => setNutrition(!nutrition)}
                footer={null}
            >
                <p>To ensure accurate inventory information, please add the nutritional information for each item.
                    You can usually find this information on the back of the product's package, on the nutritional fact label.
                </p>
                <Form
                    name="Nutrition"
                    form={addNutrition}
                    onFinish={onAddInventoryNutritionInformation}
                    onFinishFailed={onFinishFailed}
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


                        <Form.Item label="Serving Size">
                            <Space.Compact>

                                <Form.Item
                                    name={['serving_size', 'amount']}
                                    noStyle
                                    initialValue={0}

                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['serving_size', 'unit']}
                                    noStyle
                                    initialValue={'g'}
                                >

                                    <Select>

                                        <Select.Option value="g">g</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>
                        <Form.Item label="Calories">
                            <Space.Compact>

                                <Form.Item
                                    name={['calories', 'amount']}
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['calories', 'unit']}
                                    noStyle
                                    initialValue={'kcal'}

                                >
                                    <Select >
                                        <Select.Option value="kcal">kcal</Select.Option>

                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>
                        <Form.Item label="Total Fat">
                            <Space.Compact>

                                <Form.Item
                                    name={['total_fat', 'amount']}
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['total_fat', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
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
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['saturated_fat', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
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
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['trans_fat', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
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
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['cholesterol', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
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
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['sodium', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
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
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['carbohydrates', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
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
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['fiber', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
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
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['sugar', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
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
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['added_sugar', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
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
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['protein', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
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
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['calcium', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
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
                                    noStyle
                                    initialValue={0}
                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['iron', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
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
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['potassium', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
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
                                    noStyle
                                    initialValue={0}



                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                                <Form.Item
                                    name={['vitamin_d', 'unit']}
                                    noStyle
                                    initialValue={'g'}

                                >
                                    <Select>
                                        <Select.Option value="mcg">mcg</Select.Option>
                                        <Select.Option value="mg">mg</Select.Option>
                                        <Select.Option value="g">g</Select.Option>

                                    </Select>
                                </Form.Item>
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item
                        >
                            <Button htmlType="submit" className='buttonBlack' >
                                Add Nutritional Information
                            </Button>
                        </Form.Item>

                    </ConfigProvider>
                </Form>
            </Modal>





            {/* Create Inventory Modal */}



            <Modal
                title="Add Inventory Item"
                style={{ top: 10 }}
                open={viewInventoryStore}
                onCancel={() => setViewInventoryStore(!viewInventoryStore)}
                footer={null}
            >

                <p>It is essential to enter this information accurately to ensure its proper usage.</p>
                <Form
                    name="Add"
                    form={addInventory}
                    onFinish={onAddInventoryItems}
                    onFinishFailed={onFinishFailed}
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

                            label="Supplier"
                            name="supplier"
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <Input type='text' />
                        </Form.Item>
                        <Form.Item

                            label="Description"
                            name="description"
                            rules={[{ required: true, message: 'Enter the required information' }]}

                        >
                            <Input type='text' />
                        </Form.Item>

                        <Form.Item

                            label="Brand"
                            name="brand"
                            rules={[{ required: true, message: 'Enter the required information' }]}

                        >
                            <Input type='text' />
                        </Form.Item>





                        <Form.Item

                            label="Total Weight Per Case"
                        >
                            <Space.Compact>
                                <Form.Item

                                    name={['total_package_weight', 'unit']}
                                    rules={[{ required: true, message: 'Enter the required information' }]}
                                    initialValue={0}
                                >
                                    <InputNumber min={0} />

                                </Form.Item>
                                <Form.Item

                                    name={['total_package_weight', 'weight']}
                                    rules={[{ required: true, message: 'Enter the required information' }]}
                                    initialValue={'lb'}

                                >
                                    <Select
                                        style={{ width: 120 }}
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

                        <Form.Item

                            label="Stock Level"
                            name="recommended_stock_level"
                            tooltip='Average number of items to keep on hand.'
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber stringMode={true} min={0} step={5} type='number' />
                        </Form.Item>
                        <Form.Item

                            label="Inventory category"
                            name="category"
                            rules={[{ required: true, message: 'Enter the required information' }]}

                        >
                            <Select
                                style={{ width: 200 }}
                                options={[
                                    {
                                        options: [

                                            { label: 'Meat & Seafood', value: 'meat & seafood' },
                                            { label: 'Dairy & Eggs', value: 'dairy & eggs' },
                                            { label: 'Fruits & Vegetables', value: 'Fruits & Vegetables' },
                                            { label: 'Bakery & Bread', value: 'bakery & bread' },
                                            { label: 'Beverage', value: 'beverage' },
                                            { label: 'Canned & Dry', value: 'canned & dry' },
                                            { label: 'Supplies & Equipment', value: 'suppliers & equipment' },

                                        ],
                                    }

                                ]}
                            />

                        </Form.Item>


                        <Form.Item

                            label="Price"
                            name="price"
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber stringMode={true} min={0} step={5} type='number' />
                        </Form.Item>




                        <Form.Item
                        >
                            <Button htmlType="submit" className='buttonBlack' >
                                Add Item
                            </Button>
                        </Form.Item>
                    </ConfigProvider>
                </Form>
            </Modal>

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
                                        lineWidth: 1,
                                        fontFamily: 'Jost',
                                        fontSize: 14,
                                    },
                                }}
                            >
                                <Form.Item
                                    label="Supplier"
                                    name="supplier"
                                >
                                    <Input type='text' />
                                </Form.Item>
                                <Form.Item
                                    label="Brand"
                                    name="brand"

                                >
                                    <Input type='text' />
                                </Form.Item>
                                <Form.Item
                                    label="Product"
                                    name="description"
                                >
                                    <Input type='text' />
                                </Form.Item>
                                <Form.Item

                                    label="Packages"
                                    name="package_per_container"
                                    tooltip='Number of individual packages per container'

                                >
                                    <InputNumber min={0} step={5} />
                                </Form.Item>
                                <Form.Item

                                    label="Inventory category"
                                    name="category"
                                >
                                    <Select
                                        style={{ width: 200 }}
                                        options={[
                                            {
                                                options: [

                                                    { label: 'Meat & Seafood', value: 'meat & seafood' },
                                                    { label: 'Dairy & Eggs', value: 'dairy & eggs' },
                                                    { label: 'Fruits & Vegetables', value: 'Fruits & Vegetables' },
                                                    { label: 'Bakery & Bread', value: 'bakery & bread' },
                                                    { label: 'Beverage', value: 'beverage' },
                                                    { label: 'Canned & Dry', value: 'canned & dry' },
                                                    { label: 'Supplies & Equipment', value: 'suppliers & equipment' },

                                                ],
                                            }

                                        ]}
                                    />

                                </Form.Item>
                                <Form.Item

                                    label="Safety Stock"
                                    name="recommended_stock_level"
                                    tooltip='Preferred inventory to keep on hand.'
                                >
                                    <InputNumber stringMode={true} min={0} step={5} type='number' />
                                </Form.Item>
                                <Form.Item

                                    label="Total package weight (lb)"
                                    name="total_package_weight"
                                    tooltip='Total weight of entire package in pounds.'

                                >
                                    <InputNumber min={0} step={5} type='number' />
                                </Form.Item>




                                <Form.Item

                                    label="Price"
                                    name="price"

                                >
                                    <InputNumber min={0} step={5} type='number' />
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
            <Drawer title="Inventory QRCode" placement="right" onClose={() => { setQRCodeGenerator(!QRCodeGenerator) }} open={QRCodeGenerator}

                extra={
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
                        <Button htmlType='button' className='buttonBlackDrawer' onClick={downloadQRCode}>
                            Download
                        </Button>
                    </ConfigProvider>

                }>
                <div id="myqrcode">
                    <p>To access your inventory record system, we offer two options. The first is to download the QR code and display it in a convenient location, such as your office or employee area. Alternatively, you can copy the link we provide. We advise that you only share your account <Tag color="#000000">PIN</Tag> with trusted team members for conducting regular inventory audits. This <Tag color="#000000">PIN</Tag> associates your checklist with your account. </p>
                    <QRCode value={`https://www.kcminc.io/inventory_check?business_id=${userId}`} bgColor="#fff" style={{ marginBottom: 16 }} />
                    <p>Your Account Pin: <span>{userPin}</span></p>
                    <p>Access Your Inventory Tracking Page: <span><a href={`https://www.kcminc.io/inventory_check?business_id=${userId}`} target='_blank'>View Page</a></span></p>


                </div>
            </Drawer>


        </>

    )
}

export default StoreInventory;