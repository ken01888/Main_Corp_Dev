import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table, Tag, Dropdown, MenuProps, Popconfirm, Drawer, QRCode, Row, Alert, Tooltip } from 'antd'
import 'isomorphic-fetch';
import { ColumnsType } from 'antd/es/table';
import { DownOutlined, MinusCircleOutlined, PlusOutlined, QrcodeOutlined } from '@ant-design/icons';
import * as convert from 'convert-units'
import { QrCode } from '@phosphor-icons/react';


interface DataType {
    key: number | string;
    business_id: number | string,
    product_name: number | string,
    total_cost: number | string,
    total_input_count: number | string,
    total_weight: number | string,
    sales_price: number | string,
    calories: number | string,
    total_fat: number | string,
    saturated_fat: number | string,
    trans_fat: number | string,
    cholesterol: number | string,
    sodium: number | string,
    carbohydrates: number | string,
    fiber: number | string,
    sugar: number | string,
    added_sugar: number | string,
    protein: number | string,
    calcium: number | string,
    iron: number | string,
    potassium: number | string,
    vitamin_d: number | string,
    allergies: number | string,
    serving_size: number | string,
    units: number | string
}



const Products: React.FC = (props) => {
    const [InventoryList, setInventoryList] = React.useState<Array<DataType>>([])
    const [selectedRowAction, setSelectedRowActions] = React.useState<any>()
    const [QRCodeGenerator, setQRCodeGenerator] = React.useState(false)
    const [userId, setUserId] = React.useState()
    const [addRecipes, setAddRecipes] = React.useState<boolean>(false)
    const [displayAddProduct, setDisplayAddProduct] = React.useState<boolean>(false)
    const [addInventory] = Form.useForm();






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








    const rowSelection = {

        onSelect: (record, selected, selectedRows, nativeEvent) => {
            if (selected === true) {
                setSelectedRowActions(record.id)
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
        const newResponse = await dataReply.json()
        const deleteResponse = await fetch(`/getRecipeProduct`);
        const newData = await deleteResponse.json();
        setInventoryList(newData)

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
                    title={"Deleted Item's will be lost forever."}
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
        },

    ];


    const columns: ColumnsType<DataType> = [

        {
            title: 'Name',
            dataIndex: 'product_name',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Retail Weight',
            dataIndex: 'total_weight',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    Number(Number(convert(record.serving_size).from('g').to('oz')) * Number(record.units)).toFixed(0) + ' oz'

                )
            }
        },
        {
            title: 'Calories from Fat',
            dataIndex: 'total_fat',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {

                const newResult = ((Number(record.total_fat) / Number(record.total_weight)) * (Number(record.serving_size) * Number(record.units))) * 9

                return (
                    Math.floor(newResult).toFixed(0)


                )
            }
        },
        {
            title: 'Calories from Carbohydrates',
            dataIndex: 'carbohydrates',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],

            render: (_, record) => {

                const newResult = ((Number(record.carbohydrates) / Number(record.total_weight)) * (Number(record.serving_size) * Number(record.units))) * 4

                return (
                    Math.floor(newResult).toFixed(0)


                )
            }
        },
        {
            title: 'Calories from Protein',
            dataIndex: 'protein',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],

            render: (_, record) => {

                const newResult = ((Number(record.protein) / Number(record.total_weight)) * (Number(record.serving_size) * Number(record.units))) * 4

                return (
                    Math.floor(newResult).toFixed(0)


                )
            }
        },
        {
            title: 'Total Calories',
            dataIndex: 'calories',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                return (

                    Math.floor(Number((Number(record.calories) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' kcal'



                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: () => {
                return (

                    '2000 kcal'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.calories) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

                return (

                    (Number(totalCalories) / 2000 * 100).toFixed(0)

                )
            }
        },

        {
            title: 'Total Fat',
            dataIndex: 'total_fat',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.total_fat) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' g'
                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	78 g'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.total_fat) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

                return (

                    (Number(totalCalories) / 78 * 100).toFixed(0)

                )
            }
        },

        {
            title: 'Saturated Fat',
            dataIndex: 'saturated_fat',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.saturated_fat) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' g'
                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	20 g'
                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.saturated_fat) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))
                return (

                    (Number(totalCalories) / 20 * 100).toFixed(0)

                )
            }
        },
        {
            title: 'Trans Fat',
            dataIndex: 'trans_fat',
            className: 'columnLightBeige',

            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.trans_fat) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' g'
                )
            }
        },
        {
            title: 'Cholesterol ',
            dataIndex: 'cholesterol',
            className: 'columnLightBeige',

            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.cholesterol) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' mg'
                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (
                    '	300 mg'
                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.cholesterol) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

                return (

                    (Number(totalCalories) / 300 * 100).toFixed(0)

                )
            }
        },
        {
            title: 'Sodium ',
            dataIndex: 'sodium',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.sodium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' mg'
                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	2300 mg'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.sodium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

                return (

                    (Number(totalCalories) / 2300 * 100).toFixed(0)

                )
            }
        },
        {
            title: 'Carbohydrates ',
            className: 'columnLightBeige',

            dataIndex: 'carbohydrates',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.carbohydrates) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' g'
                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	275 g'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.carbohydrates) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

                return (

                    (Number(totalCalories) / 275 * 100).toFixed(0)

                )
            }
        },

        {
            title: 'Fiber ',
            dataIndex: 'fiber',
            className: 'columnLightBeige',

            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.fiber) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' g'
                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	28 g'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.fiber) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

                return (

                    (Number(totalCalories) / 28 * 100).toFixed(0)

                )
            }
        },
        {
            title: 'Sugar ',
            dataIndex: 'sugar',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',


            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.sugar) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' g'
                )
            }
        },
        {
            title: 'Added Sugar ',
            dataIndex: 'added_sugar',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.added_sugar) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' g'
                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	50 g'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.added_sugar) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

                return (

                    (Number(totalCalories) / 50 * 100).toFixed(0)

                )
            }
        },
        {
            title: 'Protein ',
            dataIndex: 'protein',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.protein) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' g'
                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	50 g'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.protein) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

                return (

                    (Number(totalCalories) / 50 * 100).toFixed(0)

                )
            }
        },
        {
            title: 'Calcium ',
            dataIndex: 'calcium',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.calcium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' mg'
                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	1300 mg'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.calcium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

                return (

                    (Number(totalCalories) / 1300 * 100).toFixed(0)

                )
            }
        },
        {
            title: 'Iron ',
            dataIndex: 'iron',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.iron) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' mg'
                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	18 g'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.iron) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

                return (

                    (Number(totalCalories) / 18 * 100).toFixed(0)

                )
            }
        },
        {
            title: 'Potassium ',
            dataIndex: 'potassium',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.potassium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' mg'
                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	4700 mg'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.potassium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

                return (

                    (Number(totalCalories) / 4700 * 100).toFixed(0)

                )
            }
        },
        {
            title: 'Vitamin D ',
            dataIndex: 'vitamin_d',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                return (
                    Math.floor(Number((Number(record.vitamin_d) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units))) + ' mcg'
                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (
                    '	20 mcg'
                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.vitamin_d) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

                return (

                    (Number(totalCalories) / 20 * 100).toFixed(0)

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
                            <h1>Nutrition</h1>

                            <Alert
                                description="The Nutrition section provides information on nutrients in products made using the Design page, similar to traditional product packaging. By comparing nutrient content to recommended Daily Values, users can make informed decisions about their diet and health. To use, locate your product name, check serving size, modify nutrient content, and download a barcode or URL for customers to access nutritional information. Place the barcode or URL in a visible location for easy access to essential information about nutrient composition."
                                type="warning"
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
                            <Tooltip placement="topLeft" color='#849FD1' title={'Download Nutrition Barcode'}>

                                <Button icon={<QrCode weight='bold' size={20} />} className='buttonFormBlack' onClick={() => setQRCodeGenerator(!QRCodeGenerator)}></Button>
                            </Tooltip>

                        </ConfigProvider>
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
                                // rowSelection={rowSelection}
                                columns={columns}
                                dataSource={InventoryList}
                                pagination={{ pageSize: 10 }}
                                bordered />
                        </ConfigProvider>
                    </div>




                </Space>

            </Col>
            <Drawer title="Inventory QRCode" placement="right" onClose={() => { setQRCodeGenerator(!QRCodeGenerator) }} open={QRCodeGenerator}>
                <div id="myqrcode">
                    <p> Click the download button to save your a digital QRCode to your device. The file can be added to instore or online view points for customer access.</p>
                    <QRCode value={`https://www.kcminc.io/nutrients?business_id=${userId}`} bgColor="#fff" style={{ marginBottom: 16 }} />
                    <p>Access your Nutritional Fact Panel: <span><a href={`/nutrients?business_id=${userId}`} target='_blank'>View Page</a></span></p>
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
                        <Tooltip placement="topLeft" color='#849FD1' title={'Download'}>
                            <Button icon={<QrCode weight='bold' size={20} />} className='buttonFormBlack' onClick={() => {downloadQRCode}}></Button>
                        </Tooltip>
               
                    </ConfigProvider>

                </div>
            </Drawer>



        </Row>

    )
}

export default Products;