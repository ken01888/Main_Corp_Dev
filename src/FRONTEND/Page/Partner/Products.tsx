import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table, Drawer, Dropdown, MenuProps, Popconfirm, Row } from 'antd'
import 'isomorphic-fetch';
import { ColumnsType } from 'antd/es/table';
import { DownOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import * as convert from 'convert-units'


interface DataType {
    key: number | string;
    product_name: number | string;
    total_cost: number | string;
    total_weight: number | string;
    sales_price: number | string;
    serving_size: number | string;
    units: number | string;
    total_input_count: number | string

}



const Products: React.FC = (props) => {
    const [InventoryList, setInventoryList] = React.useState<Array<DataType>>([])
    const [selectedRowAction, setSelectedRowActions] = React.useState<any>()
    const [updateInventoryForm, setUpdateInventoryForm] = React.useState<any>(false)
    const [viewInventoryStore, setViewInventoryStore] = React.useState<boolean>(false)
    const [userId, setUserId] = React.useState<number>()
    const [itemsUpdated, setItemsUpdated] = React.useState(false)
    const [addRecipes, setAddRecipes] = React.useState<boolean>(false)
    const [selectItems, setSelectItems] = React.useState([])
    const [displayAddProduct, setDisplayAddProduct] = React.useState<boolean>(false)
    const [formInputs, setFormInputs] = React.useState([])
    const [openInputsDrawer, setOpenInputsDrawer] = React.useState(false)
    const [deleteInput, setDeleteInput] = React.useState(false)




    const [addInventory] = Form.useForm();
    const [updateProduct] = Form.useForm();

    const [addFormInputs] = Form.useForm();
    const [viewEditFormInputs] = Form.useForm();









    // Retrieve Inventory information from database

    React.useEffect(() => {
        (
            async () => {
                const user: any = await window.localStorage.getItem('user')
                const newUser = await JSON.parse(user)
                setUserId(newUser.id)
                const dataReply = await fetch(`/getRecipeProduct`);
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
                const dataReply = await fetch(`/inventoryItemsForSelectRecipes`);

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
                const dataReply = await fetch(`/getRecipeProduct`);
                const newData = await dataReply.json();
                setInventoryList(newData)
            }
        )()


    }, [viewInventoryStore, updateInventoryForm, itemsUpdated, selectedRowAction, openInputsDrawer, deleteInput])

    /* Form Inventory Add*/

    const onInsertProductName = async (values: any) => {
        addInventory.resetFields();
        setViewInventoryStore(!viewInventoryStore)
        const dataReply = await fetch(`/insertProductName`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const dataParse = await dataReply.json();

    };

    const addInput = async (values: any) => {
        const newData = values.inputs
        if (newData == undefined || newData.length <= 0) {
            addFormInputs.resetFields()
            setAddRecipes(!addRecipes)

        } else {
            values.inputs.forEach((i, n, a) => {
                i.product_id = selectedRowAction
            })
            const dataReply = await fetch(`/insertProductInputs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (dataReply.ok === true) {
                const dataReply = await fetch(`/getRecipeProduct`);
                const newData = await dataReply.json();
                setInventoryList(newData)
            }

            setAddRecipes(!addRecipes)
            setItemsUpdated(!itemsUpdated)
            addFormInputs.resetFields()
        }

    };

    const onUpdateProduct = async (values: any) => {
        setDisplayAddProduct(!displayAddProduct)
        const dataReply = await fetch(`/updateProductInformation`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ values, id: selectedRowAction })
        });
        const dataParse = await dataReply.json();

        if (dataParse.affectedRows === 1) {
            const user: any = await window.localStorage.getItem('user')
            const newUser = await JSON.parse(user)
            setUserId(newUser.id)
            const dataReply = await fetch(`/getRecipeProduct`);
            const newData = await dataReply.json();
            setInventoryList(newData)
        }
        updateProduct.resetFields();


    };

    const onUpdateInput = async (values: any) => {

        const dataReply = await fetch(`/updateInputs`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        const dataReply1 = await fetch(`/getRecipeProduct`);
        const newData = await dataReply1.json();
        setInventoryList(newData)
        const dataReply2 = await fetch(`/allProductInputs?product_id=${values[0].product_id}`);
        const newData1 = await dataReply2.json();
        setSelectedRowActions(values[0].product_id)
        setFormInputs(newData1)


        setOpenInputsDrawer(!openInputsDrawer)

    };


    const rowSelection = {
        onSelect: (record, selected, selectedRows, nativeEvent) => {
            if (selected === true) {

                (
                    async () => {
                        const dataReply = await fetch(`/allProductInputs?product_id=${record.id}`);
                        const newData = await dataReply.json();
                        setSelectedRowActions(record.id)
                        setFormInputs(newData)

                    }
                )()
            } else if (selected == false) {
                setSelectedRowActions('')
            }
        },
        hideSelectAll: true
    };



    const itemDelete = async () => {
        const dataReply = await fetch(`/deleteProduct`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([selectedRowAction])
        });
        setDeleteInput(!deleteInput)



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
                <a onClick={() => { setAddRecipes(!addRecipes) }} >
                    Add Ingredients
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={() => { setDisplayAddProduct(!displayAddProduct) }} >
                    Update Product
                </a>
            ),
        },
        {
            key: '3',
            label: (

                <Popconfirm
                    placement="top"
                    title={"Deleted items will be lost forever."}
                    description={'Delete selected item?'}
                    onConfirm={itemDelete}
                    okText="Yes"
                    cancelText="No"
                >
                    <a>
                        Delete Product
                    </a>
                </Popconfirm>
            ),
        }

    ];


    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'product_name',
            className: 'columnLightBlue',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],




        },
        {
            title: 'Cost',
            dataIndex: 'total_cost',

            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            sorter: (a: any, b: any) => a.total_cost - b.total_cost,
            render: (_, record) => {
                return (
                    new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(record.total_cost))

                )
            }
        },
        {
            title: 'Inputs',
            dataIndex: 'total_input_count',


            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            sorter: (a: any, b: any) => a.total_input_count - b.total_input_count,
            render: (_, record) => {
                return (
                    <a onClick={() => { setOpenInputsDrawer(!openInputsDrawer) }}>{record.total_input_count}</a>

                )
            }

        },
        {
            title: 'Total Yield',
            dataIndex: 'total_weight',


            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    convert(record.total_weight).from('g').to('oz').toFixed(1) + " oz"

                )
            }
        },
        {
            title: 'Yields Per Unit',
            dataIndex: 'serving_size',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',


            sorter: (a: any, b: any) => a.serving_size - b.serving_size,

            render: (_, record) => {
                return (
                    convert(record.serving_size).from('g').to('oz').toFixed(1) + " oz"



                )
            }
        },

        {
            title: 'Waste',
            dataIndex: 'serving_size',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],


            sorter: (a: any, b: any) => a.serving_size - b.serving_size,

            render: (_, record) => {
                return (
                    convert(Number(Number(record.total_weight) % Number(record.serving_size))).from('g').to('oz').toFixed(1) + " oz"



                )
            }
        },


        {
            title: 'Units Produced',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    Math.floor((Number(record.total_weight) / Number(record.serving_size)))

                )
            }
        },
        {
            title: 'Units Per Sale',
            dataIndex: 'units',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',
            sorter: (a: any, b: any) => a.units - b.units,


        },
        {
            title: 'Unit Waste',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                


                return (
                    Number(Number(Number(record.total_weight) / Number(record.serving_size)) - Math.floor(Number(record.total_weight) / Number(record.serving_size))).toFixed(0)

                )
            }
        },
                {
            title: 'Total Sales Cycle',
            className: 'columnWidth',


            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const resultForCycles = Math.floor(Number((Number(record.total_weight) / Number(record.serving_size)) / Number(record.units)))
                if (resultForCycles == Infinity) {
                    return 0

                } else if (resultForCycles !== Infinity) {
                    return resultForCycles
                }




            }
        },

        {
            title: 'Retail Weight',
            dataIndex: 'serving_size',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],


            sorter: (a: any, b: any) => a.serving_size - b.serving_size,

            render: (_, record) => {
                return (
                    Number(Number(convert(record.serving_size).from('g').to('oz')) * Number(record.units)).toFixed(0) + ' oz'



                )
            }
        },


        {
            title: 'Cost Per Sale',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],


            render: (_, record) => {


                let productionCost = record.total_cost
                let units = record.units
                let productionYield = Number(Number(record.total_weight) / Number(record.serving_size)).toFixed(0)
                let finalCost: any = (Number(productionCost) * Number(Number(units) / Number(productionYield)))
                let costConversion = new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(finalCost))
                if (costConversion == '$NaN') {
                    return (
                        new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(0))
                    )
                } else {
                    return (
                        costConversion
                    )
                }

            }
        },


        {
            title: 'Price Per Sale',
            dataIndex: 'sales_price',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',


            sorter: (a: any, b: any) => a.sales_price - b.sales_price,


            render: (_, record) => {
                return (
                    new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(record.sales_price))

                )
            }
        },
        {
            title: 'Return on Sale',
            className: 'columnWidth',



            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            sorter: (a: any, b: any) => a.sales_price - b.sales_price,


            render: (_, record) => {
                let productionCost = record.total_cost
                let units = record.units
                let productionYield = Number(Number(record.total_weight) / Number(record.serving_size)).toFixed(0)
                let finalCost: any = (Number(productionCost) * Number(Number(units) / Number(productionYield))) || 0
                let totalReturn = Number(record.sales_price) - finalCost

                return (

                    new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(totalReturn))

                )
            }
        },
        {
            title: 'Margin Per Sale',
            className: 'columnWidth',


            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            sorter: (a: any, b: any) => a.sales_price - b.sales_price,

            render: (_, record: any) => {
                let productionCost = record.total_cost
                let units = record.units
                let productionYield = Number(Number(record.total_weight) / Number(record.serving_size)).toFixed(0)
                let finalCost: any = (Number(productionCost) * Number(Number(units) / Number(productionYield))) || 0
                let margin = (Number(record.sales_price) - Number(finalCost)) / Number(record.sales_price)


                return (

                    new Intl.NumberFormat("en-US", {
                        style: "percent",
                    }).format(margin)

                )
            }
        },

        {
            title: 'Action',
            className: 'columnWidth',


            render: (_, record: any) => {
                if (record.id === selectedRowAction) {
                    return (
                        <Dropdown menu={{ items }}>
                            <Button >
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



    const onDeleteInput = async (id: any) => {
        const dataReply = await fetch(`/deleteInputs`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([id])
        });
        const newResponse = await dataReply.json()

        setDeleteInput(!deleteInput)
    }


    return (




        <Row justify={'center'} gutter={[0, 75]} >

        
        <Col xs={22} md={18}>
            <Space wrap>

                <div className='clientPortalDiv'>


                    <Descriptions
                        title={<><h1 className='h1_Header_Client_Portal'>Design</h1>
                        </>} layout="vertical">
                        <Descriptions.Item span={3}>
                            <p>
                            The Design area is a crucial tool that enables you to create whole products by merging items from your stockpile. It helps you calculate various metrics such as cost, waste, sales, and nutrient payload. To start designing a product, click on the "Create" button, complete the form with the necessary details, and submit it. You can then edit the product by selecting the checkbox and modifying the corresponding row. To modify inputs or ingredients, navigate to the "Inputs" column and adjust the weight as needed.
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

                                    <Button icon={<PlusOutlined />} className='buttonBlack' onClick={() => setViewInventoryStore(!viewInventoryStore)}>Create</Button>
                                    {/* <Button icon={<SyncOutlined  />} className='buttonBlack'></Button> */}



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
                        <Table


                            scroll={{ x: '-webkit-fill-available' }}
                            rowKey={(record: any) => record.id}
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={InventoryList}
                            pagination={{ pageSize: 10 }}
                            bordered />
                    </ConfigProvider>
                </div>

                \


            </Space>

        </Col>





            {/* Create Inventory Modal */}






            <Modal
                title="Create Product"
                style={{ top: 10 }}
                open={viewInventoryStore}
                onCancel={() => setViewInventoryStore(!viewInventoryStore)}
                footer={null}
            >

                <Form
                    name="Recipe Item"
                    form={addInventory}
                    onFinish={onInsertProductName}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                    layout='vertical'
                    size='small'



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
                        <p className='breadcrumbsForm'><span>▶︎ </span> Name</p>

                        <Form.Item

                            label="What would you like to name your retail product? (Name)"
                            name="product_name"
                            rules={[{ required: true, message: 'Enter details' }]}
                            tooltip='Production Name'

                        >
                            <Input type='text' maxLength={45} showCount />

                        </Form.Item>


                        <p className='breadcrumbsForm'><span>▶︎ </span> Units Per Sale</p>
                        <Form.Item label={`${`How much of the manufactured weight is individually packaged? 
                                          Set the weight to the manufactured weight if selling one unit.`}`}
                            tooltip='Package Weight'
                        >
                            <Space.Compact>

                                <Form.Item
                                    name={['serving_size', 'amount']}
                                    initialValue={1}
                                    rules={[{ required: true, message: 'Enter details' }]}


                                >
                                    <InputNumber min={1} />
                                </Form.Item>
                                <Form.Item
                                    name={['serving_size', 'unit']}
                                    initialValue={'oz'}
                                    rules={[{ required: true, message: 'Enter details' }]}


                                >

                                    <Select
                                        placeholder='Unit'
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
                        <p className='breadcrumbsForm'> <span>▶︎</span>Yields Per Unit</p>

                        <Form.Item

                            label="What is the number of Units Manufactured that can be sold in a single transaction?"
                            tooltip='Retail Units'

                            name="units"
                            rules={[{ required: true, message: 'Enter details' }]}

                        >
                            <InputNumber min={0} />
                        </Form.Item>

                        <p className='breadcrumbsForm'> <span>▶︎ </span>Price Per Sale</p>


                        <Form.Item

                            label="What is the price that consumers will pay for your product? (Price)"
                            name="sales_price"
                            rules={[{ required: true, message: 'Enter details' }]}
                            tooltip='Retail Price'

                        >
                            <InputNumber min={0} />
                        </Form.Item>




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
                                <Button htmlType="submit" className='buttonBlack' >
                                    Upload
                                </Button>
                            </Form.Item>
                        </ConfigProvider>

                    </ConfigProvider>
                </Form>
            </Modal>

            {/* Update Inventory Modal */}

            <Modal
                title='Design products by combining items from the "Item" page.'
                style={{ top: 20 }}
                open={addRecipes}
                onCancel={() => setAddRecipes(!addRecipes)}
                footer={null}
                onOk={() => {
                    addFormInputs
                        .validateFields()
                        .then((values) => {
                            addFormInputs.resetFields();
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
                    form={addFormInputs}

                >
                    <Form.List name="inputs">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <div key={key}>

                                        <p>Add Item</p>

                                        <Space style={{ display: 'flex', marginBottom: 8, flexWrap: 'wrap' }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'inventory_item_id']}
                                                rules={[{ required: true, message: 'Missing item' }]}

                                            >
                                                <Select
                                                    placeholder='Select Item'
                                                    style={{ width: 120 }}
                                                    options={selectItems} />

                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'input_weight']}
                                                noStyle
                                                label="Weight"

                                            >
                                                <InputNumber placeholder='Weight' min={0} max={9999} step={5} type='number' />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'unit']}
                                                noStyle
                                                label="Unit"

                                            >
                                                <Select
                                                    placeholder='Unit'
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
                                        <PlusOutlined onClick={() => add()} />

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




            <Modal
                title="Update Product"
                style={{ top: 20 }}
                open={displayAddProduct}
                onCancel={() => setDisplayAddProduct(!displayAddProduct)}
                footer={null}
            >

                <Form
                    name="Update Product"
                    form={updateProduct}
                    onFinish={onUpdateProduct}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                    layout='vertical'
                    size='small'



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
                        <p className='breadcrumbsForm'><span>▶︎ </span> Name</p>

                        <Form.Item

                            label="What would you like to name your retail product? (Name)"
                            name="product_name"
                            tooltip='Production Name'

                        >
                            <Input type='text' maxLength={45} showCount />

                        </Form.Item>


                        <p className='breadcrumbsForm'><span>▶︎ </span> Yield Per Unit</p>
                        <Form.Item label={`${`How much of the manufactured weight is individually packaged? 
                                                Set the weight to the manufactured weight if selling one unit.`}`}
                            tooltip='Package Weight'
                        >
                            <Space.Compact>

                                <Form.Item
                                    name={['serving_size', 'amount']}


                                >
                                    <InputNumber min={1} />
                                </Form.Item>
                                <Form.Item
                                    name={['serving_size', 'unit']}


                                >

                                    <Select
                                        placeholder='Unit'
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
                        <p className='breadcrumbsForm'> <span>▶︎ </span>  Units Per Sale</p>

                        <Form.Item

                            label="What is the number of Units Manufactured that can be sold in a single transaction?"
                            tooltip='Retail Units'
                            name="units"

                        >
                            <InputNumber min={0} />
                        </Form.Item>

                        <p className='breadcrumbsForm'> <span>▶︎ </span>Price Per Sale</p>


                        <Form.Item

                            label="What is the price that consumers will pay for your product? (Price)"
                            name="sales_price"
                            tooltip='Retail Price'

                        >
                            <InputNumber min={0} />
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
                                <Button htmlType="submit" className='buttonBlack'>
                                    Update Product
                                </Button>
                            </ConfigProvider>
                        </Form.Item>
                    </ConfigProvider>
                </Form>
            </Modal>

            <Modal
                style={{ top: 20 }}
                open={openInputsDrawer}
                onCancel={() => setOpenInputsDrawer(!openInputsDrawer)}
                footer={null}
                onOk={() => {
                    addFormInputs
                        .validateFields()
                        .then((values) => {
                            addFormInputs.resetFields();
                            setSelectedRowActions(undefined)
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >



                <Form
                    name="Unpdate Inputs"
                    onFinish={onUpdateInput}
                    style={{ maxWidth: 600 }}
                    autoComplete="off"
                    form={viewEditFormInputs}
                >

                    {formInputs.map((i: any, n, a) => {

                        return (
                            <div key={i.id}>


                                <Space style={{ display: 'flex', marginBottom: 8, flexWrap: 'wrap' }} align="baseline">
                                    <Form.Item
                                        rules={[{ required: true, message: 'Missing item' }]}
                                        initialValue={i.id}
                                        name={[n, 'id']}
                                        hidden
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        rules={[{ required: true, message: 'Missing item' }]}
                                        initialValue={i.product_id}
                                        name={[n, 'product_id']}
                                        hidden
                                    >
                                        <Input />

                                    </Form.Item>
                                    <Form.Item
                                        rules={[{ required: true, message: 'Missing item' }]}
                                        initialValue={i.inventory_item_id}
                                        name={[n, 'inventory_item_id']}
                                        hidden
                                    >
                                        <Input />

                                    </Form.Item>
                                    <Form.Item
                                        rules={[{ required: true, message: 'Missing item' }]}
                                        initialValue={i.price_per_gram}
                                        name={[n, 'price_per_gram']}
                                        hidden
                                    >
                                        <Input />

                                    </Form.Item>
                                    <Form.Item
                                        rules={[{ required: true, message: 'Missing item' }]}
                                        initialValue={i.description}
                                        name={[n, 'description']}
                                    >
                                        <Select
                                            placeholder='Select Item'
                                            style={{ width: 150 }}
                                            options={selectItems} />
                                    </Form.Item>

                                    <Form.Item
                                        rules={[{ required: true, message: 'Missing item' }]}
                                        initialValue={convert(i.input_weight).from('g').to('oz').toFixed(0)}
                                        name={[n, 'amount']}



                                    >

                                        <InputNumber min={1} />


                                    </Form.Item>

                                    <Form.Item
                                        noStyle
                                        rules={[{ required: true, message: 'Missing item' }]}
                                        initialValue={'oz'}
                                        name={[n, 'unit']}

                                    >
                                        <Select
                                            placeholder='Unit'

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





                                    {new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(i.input_cost))}


                                    <MinusCircleOutlined onClick={() => onDeleteInput(i.id)} />

                                </Space>
                            </div>
                        )

                    }


                    )}





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



        </Row>

    )
}

export default Products;