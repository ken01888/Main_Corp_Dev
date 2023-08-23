import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table, Drawer, QRCode, Tag, Tooltip, Dropdown, MenuProps } from 'antd'
import 'isomorphic-fetch';
import { Inventory } from '../../Program_Flow/Inventory_Flow'
import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, DownOutlined, EditOutlined, MinusCircleOutlined, PlusOutlined, QrcodeOutlined } from '@ant-design/icons';
import * as convert from 'convert-units'


interface DataType {
    key: number | string;
    product_name: number | string;
    total_cost: number | string;
}



const Products: React.FC = (props) => {
    const [InventoryList, setInventoryList] = React.useState<Array<DataType>>([])
    const [selectedRowAction, setSelectedRowActions] = React.useState<any>()
    const [updateInventoryForm, setUpdateInventoryForm] = React.useState<any>(false)
    const [viewInventoryStore, setViewInventoryStore] = React.useState<boolean>(false)
    const [QRCodeGenerator, setQRCodeGenerator] = React.useState(false)
    const [userId, setUserId] = React.useState()
    const [itemsUpdated, setItemsUpdated] = React.useState(false)
    const [addRecipes, setAddRecipes] = React.useState<boolean>(false)
    const [selectItems, setSelectItems] = React.useState([])
    const [addInventory] = Form.useForm();
    const [FormInputs] = Form.useForm();



    // Retrieve Inventory information from database

    React.useEffect(() => {
        (
            async () => {
                const user: any = await window.localStorage.getItem('user')
                const newUser = await JSON.parse(user)
                setUserId(newUser.id)
                const dataReply = await fetch(`http://localhost:8080/getRecipeProduct`);
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
                setUserId(newUser.id)
                const dataReply = await fetch(`http://localhost:8080/inventoryItemsForSelectRecipes`);
                const newData = await dataReply.json();
                setSelectItems(newData)
            }
        )()
    }, [])

    React.useEffect(() => {
        (
            async () => {

                const user: any = await window.localStorage.getItem('user')
                const newUser = await JSON.parse(user)
                setUserId(newUser.id)
                const dataReply = await fetch(`http://localhost:8080/getRecipeProduct`);
                const newData = await dataReply.json();
                setInventoryList(newData)
            }
        )()


    }, [viewInventoryStore, updateInventoryForm, itemsUpdated, selectedRowAction])

    /* Form Inventory Add*/

    const onInsertProductName = async (values: any) => {
        addInventory.resetFields();
        setViewInventoryStore(!viewInventoryStore)
        values.business_id = userId;
        const dataReply = await fetch(`http://localhost:8080/insertProductName`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const dataParse = await dataReply.json();

    };

    const addInput = async (values: any) => {
        FormInputs.resetFields()
        values.inputs.forEach((i, n, a) => {
            i.product_id = selectedRowAction
        })
        const dataReply = await fetch(`http://localhost:8080/insertProductInputs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        console.log(dataReply)

        if (dataReply.ok === true){
            const dataReply = await fetch(`http://localhost:8080/getRecipeProduct`);
            const newData = await dataReply.json();
            setInventoryList(newData)
        }

        setAddRecipes(!addRecipes)
        setItemsUpdated(!itemsUpdated)

    };


    const rowSelection = {

        onSelect: (record, selected, selectedRows, nativeEvent) => {
            console.log(record.id,selected)
            if (selected === true){
                setSelectedRowActions(record.id)
            }else if (selected == false){
                setSelectedRowActions('')

            }
        },
        hideSelectAll: true
    };


    const onFinishFailed = (errorInfo: any) => {
        addInventory.resetFields();

        console.log('Failed:', errorInfo);
    };

    // const onUpdateFinishFailed = (errorInfo: any) => {
    //     updateInventory.resetFields();

    //     console.log('Failed:', errorInfo);
    // };


    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a onClick={() => { setUpdateInventoryForm(!updateInventoryForm) }} >
                    Modify Product
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={() => { setAddRecipes(!addRecipes) }} >
                    Add Input Products
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a onClick={() => { setUpdateInventoryForm(!updateInventoryForm) }} >
                    Delete
                </a>
            ),
        },

    ];


    const columns: ColumnsType<DataType> = [
        {
            title: 'Item',
            dataIndex: 'product_name',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],



        },
        {
            title: 'Cost',
            dataIndex: 'total_cost',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(record.total_cost))

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





    return (




        <><Col xs={22} md={18}>
            <Space wrap>

                <div className='clientPortalDiv'>


                    <Descriptions
                        title={<><h1 className='h1_Header_Client_Portal'>Recipes</h1>
                        </>} layout="vertical">
                        <Descriptions.Item span={3}>
                            <p>
                                Kindly take note of this section where you can record any modifications
                                to your final product as deemed necessary. To establish a build specification
                                for your product, it is essential to designate a name for it. Once you have named
                                your product, you may proceed to add other input items to further refine its features.
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
                                    {/* <Button className='tagReview' onClick={() => { setViewPersonalInformation(!ViewPersonalInformation) }}> View</Button> */}
                                    <Button icon={<PlusOutlined />} className='buttonBlack' onClick={() => setViewInventoryStore(!viewInventoryStore)}> Design Recipe Item</Button>
                                    <Button icon={<QrcodeOutlined />} className='buttonBlack' onClick={() => setQRCodeGenerator(!QRCodeGenerator)}>In-Store Digital Barcode</Button>
                                </Space>
                            </ConfigProvider>



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
                        <Table
                            rowKey={(record: any, index: any) => record.id}
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={InventoryList}
                            scroll={{ x: 250 }}
                            pagination={{ pageSize: 10 }}
                            bordered />
                    </ConfigProvider>
                </div>


            </Space>

        </Col>





            {/* Create Inventory Modal */}



            <Modal
                title="Add Recipe Item"
                style={{ top: 10 }}
                open={viewInventoryStore}
                onCancel={() => setViewInventoryStore(!viewInventoryStore)}
                footer={null}
            >

                <p>To start creating recipes, the first step is to name your product. Once you've accomplished this, you can proceed to input ingredients and check the total cost of the item.</p>
                <Form
                    name="Recipe Item"
                    form={addInventory}
                    onFinish={onInsertProductName}
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

                            label="Item Name"
                            name="product_name"
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <Input type='text' />
                        </Form.Item>

                        <Form.Item
                        >
                            <Button htmlType="submit" className='buttonBlack' >
                                Add Product
                            </Button>
                        </Form.Item>
                    </ConfigProvider>
                </Form>
            </Modal>

            {/* Update Inventory Modal */}

            <Modal
                title="Add Product Inputs"
                style={{ top: 20 }}
                open={addRecipes}
                onCancel={() => setAddRecipes(!addRecipes)}
                footer={null}
                onOk={() => {
                    FormInputs
                        .validateFields()
                        .then((values) => {
                            FormInputs.resetFields();
                            setSelectedRowActions(undefined)
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >



                <Form
                    name="Input Product"
                    onFinish={addInput}
                    style={{ maxWidth: 600 }}
                    autoComplete="off"
                    form={FormInputs}

                >
                    <Form.List name="inputs">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <div key={key}>


                                        <Space style={{ display: 'flex', marginBottom: 8, flexWrap: 'wrap' }} align="baseline">

                                            <Form.Item
                                                {...restField}
                                                name={[name, 'inventory_item_id']}
                                                rules={[{ required: true, message: 'Missing item' }]}
                                                label="Item selection"
                                            >
                                                <Select
                                                    style={{ width: 120 }}
                                                    options={selectItems} />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'input_weight']}
                                                noStyle
                                                initialValue={0}
                                            >
                                                <InputNumber min={0} max={9999} step={5} type='number' />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'unit']}
                                                noStyle
                                                initialValue={'g'}
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







                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    </div>
                                ))}
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
                                        <Button className='buttonBlack' onClick={() => add()} block icon={<PlusOutlined />}>
                                            Add Input
                                        </Button>
                                    </ConfigProvider>

                                </Form.Item>
                            </>
                        )}
                    </Form.List>

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
                            <Button htmlType="submit" className='buttonBlack'>
                                Submit
                            </Button>
                        </ConfigProvider>

                    </Form.Item>


                </Form>
            </Modal>



        </>

    )
}

export default Products;