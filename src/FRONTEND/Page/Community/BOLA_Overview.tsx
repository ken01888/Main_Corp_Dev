import React, { PureComponent } from 'react';
import { Col, Divider, Layout, Row, Space, Card, Alert, Form, ConfigProvider, Input, Select, InputNumber, Checkbox, DatePicker, Timeline, Image, Button, Popover, Meta, Avatar } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import 'isomorphic-fetch';
import relativeTime from 'dayjs/plugin/relativeTime'
import type { CollapseProps } from 'antd';
import Public_Footer from '../Components/Navigation/Footer';
import Main_Menu from '../Components/Navigation/Main_Menu';
import { motion } from 'framer-motion';
import { GenderIntersex, User } from '@phosphor-icons/react';
import community from '../400ppi/nutritionallabel.png'
import barcode from '../400ppi/barcode.png'

import dayjs from 'dayjs';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
    LineChart,
    ReferenceLine,
    Label,
    BarChart,
    Text,
    ReferenceArea,
    LabelList,
    Brush
} from 'recharts';
const data = [
    {
        name: 'F 19-30',
        OIL: 2000,
        MD: 1260,
        DV: 2000
    },
    {
        name: 'F 31-50',
        OIL: 1800,
        MD: 1260,
        DV: 2000
    },


];



const PrivacyPolicy = () => {
    const [reply, setReply] = React.useState()
    const [nutrientView, setNutrientView] = React.useState(false)
    const [background, SetBackground] = React.useState(false)

    document.title = 'Bite of Life Analytics'

    dayjs.extend(relativeTime)

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Health Vulnerabilities (HV)',
            children: <Alert
                description="Health vulnerabilities are specific characteristics, conditions, or behaviors that can increase the chance of developing health problems or make it hard to manage existing health issues. These can include genetic factors, chronic conditions, lifestyle habits such as smoking or poor diet, and environmental factors like pollution."
                type="warning"
                className='heroText'
            />,
        },
        {
            key: '2',
            label: 'Wealth Inequality (WI)',
            children: <Alert
                description="Wealth inequality is when some people have much more money than others. This can cause many problems, like poverty, lack of access to education and healthcare, and difficulties moving up in society. It can also lead to political problems and social unrest."
                type="warning"
                className='heroText'
            />,
        },
        {
            key: '3',
            label: 'Environmental Degradation (ED)',
            children: <Alert
                description="Environmental degradation is when human activities, such as pollution, deforestation, and climate change, harm the environment and its natural resources. This can cause serious problems for the planet, including loss of biodiversity, soil erosion, and water and air pollution."
                type="warning"
                className='heroText'
            />,
        },
        {
            key: '4',
            label: 'Housing Insecurity (HI)',
            children: <Alert
                description="Housing insecurity happens when people can't access safe, secure, and affordable housing. This can lead to homelessness, poor housing conditions, or not being able to pay rent or a mortgage."
                type="warning"
                className='heroText'
            />,
        },
    ];
    const onFinish = async (values: any) => {
        // const newDate = await dayjs(values.age).format('YYYY,MM,DD')
        // const newDay = dayjs(newDate).toNow(true)
        // delete values['age']
        // values.Newage = newDay.split(' ')[0]

        let newData = await fetch('/bolatestingroute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        let data = await newData.json()
        setReply(data)
        setNutrientView(true)
        SetBackground(true)

    };






    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    return (

        <Layout className='layout'>
            <Header className='header'>

                <Main_Menu />
            </Header>
            <Layout className='homeScreenDesktop'>

                <Content >
                    <Space wrap size={[0, 125]}>

                        <Row justify={'center'} align={'middle'} gutter={[0, 16]} className='sectionHeaderOtherBlue'>
                            <Col >
                                <h3>BoLA</h3>
                            </Col>
                        </Row>

                        {/* <Row justify={'space-evenly'} align={'middle'} gutter={[0, 50]} className='serviceSection'>

                            <Col xs={{ span: 22 }} md={{ span: 8 }} className='alignCol_1'>
                                <div >
                                    <h1></h1>
                                    <h2>AA:HV:01</h2>
                                    <p className='serviceDescription'>.</p>
                                    <Alert
                                        description=""
                                        type="warning"
                                        className='heroText'
                                    />

                                </div>

                            </Col>
                            <Col xs={{ span: 22 }} md={{ span: 6 }} >

                                <Timeline
                                    mode='left'
                                    items={[

                                        {
                                            color: "black",
                                            label: 'Operational Uses',
                                            className: 'timelineHeader'
                                        },
                                        {
                                            color: "#849FD1",
                                            children: 'Inventory Management',
                                            className: 'timelineIcon'
                                        },
                                        {
                                            color: "#849FD1",
                                            children: 'Product Design',
                                            className: 'timelineIcon'
                                        },
                                        {
                                            color: "#849FD1",
                                            children: 'Financial Analysis',
                                            className: 'timelineIcon'
                                        },
                                        {
                                            color: "#849FD1",
                                            children: 'Nutritional Analysis',
                                            className: 'timelineIcon'
                                        },
                                        {
                                            color: "black",
                                            label: 'Enterprises to Benefit',
                                            className: 'timelineHeader'
                                        },
                                        {
                                            color: "#849FD1",
                                            children: 'Farming and Agribusiness',
                                            className: 'timelineIcon'
                                        },
                                        {
                                            color: "#849FD1",
                                            children: 'School Lunch Programs',
                                            className: 'timelineIcon'
                                        },
                                        {
                                            color: "#849FD1",
                                            children: 'Medically Prescribed Diets',
                                            className: 'timelineIcon'
                                        },
                                        {
                                            color: "#849FD1",
                                            children: 'Entertainment Venues',
                                            className: 'timelineIcon'
                                        },
                                        {
                                            color: "#849FD1",
                                            children: 'Food Service ',
                                            className: 'timelineIcon'
                                        },
                                        {
                                            color: "#849FD1",
                                            children: 'Online Order Platforms',
                                            className: 'timelineIcon'
                                        },

                                    ]}
                                />

                            </Col>


                        </Row> */}

                        <Row justify={'center'} align={'top'} gutter={[0, 16]} >
                            <Col xs={22} md={20} style={{ borderBottom: '5px solid var(--light_blue)' }}>
                                {/* <motion.div className='logo'>
                                    <div style={{ height: 'fit-content' }}>
                                        <div className='logoBlue'></div>
                                        <div className='logoBeige'></div>
                                    </div>
                                    <div style={{ height: 'fit-content' }}>
                                        <div className='logoBeige'></div>
                                        <div className='logoBlue'></div>
                                    </div>
                                </motion.div> */}
                                <h1>Bite of Life Analytics (BoLA)</h1>
                                <Alert
                                    description='BoLA, or Bite of Life Analytics, stands as a cutting-edge business software designed to revolutionize on-premise research and development of consumable products. This innovative application is tailor-made to serve a diverse range of sectors, including Agriculture, Consumer Discretionary, Consumer Staples, Health Care and Arts, Entertainment, and Recreation. 
                                        '
                                    type="warning"
                                    className='heroText'
                                />
                            </Col>
                        </Row>

                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 16]} >

                            <Col xs={{ span: 22 }} md={{ span: 8 }} className='alignCol_1'>
                                <div >
                                    <h1>Inventory Management</h1>
                                    <Alert
                                        description='BoLA offers a robust inventory management system that helps businesses keep track of their stock levels and reduce waste. With BoLA, you can easily control stockpiles, categorize items, and utilize weight-based costing on each item in your inventory. This information helps you make informed decisions about ordering and restocking to eliminate waste and prevent stockouts. 
                                        '
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>


                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1' >
                                <Space wrap size={[50, 25]} align='center' style={{ justifyContent: 'center' }}>
                                    <Space wrap size={[25, 100]} align='center' >

                                        <div className='BoLADetailBoxBlue'>
                                            <p>
                                                Financial Analysis
                                            </p>

                                        </div>
                                        <div className='BoLADetailBox'>
                                            <p>
                                                Organize Inventory
                                            </p>

                                        </div>
                                    </Space>

                                    <Space wrap size={[25, 100]} align='center' >

                                        <div className='BoLADetailBox' >
                                            <p>
                                                Waste Reduction
                                            </p>

                                        </div>
                                        <div className='BoLADetailBoxBlue' >
                                            <p>
                                                Inventory Tracking
                                            </p>

                                        </div>

                                    </Space>

                                </Space>

                            </Col>
                        </Row>

                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 16]} >
                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1' >

                                <Image src={community} preview={false} style={{ width: 225 }}></Image>

                            </Col>

                            <Col xs={{ span: 22, order: 1 }} md={{ span: 8, order: 2 }} className='alignCol_1' >
                                <Space wrap size={[50, 25]} align='center' style={{ justifyContent: 'center' }}>


                                    <div >
                                        <h1>Nutritional Analysis</h1>
                                        <Alert
                                            description="BoLA's most important feature is its nutritional analytics functionality for final product builds. This feature allows producers and manufacturers of consumable products to analyze the nutrient content of their final product before production. The primary purpose of this feature is to mitigate risks by providing information to consumers before purchase and consumption. It also helps in the design process by providing nutrient readouts in an instance. 
            "
                                            type="warning"
                                            className='heroText'
                                        />


                                    </div>
                                </Space>


                            </Col>




                        </Row>

                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Interactive Barcode System</h1>
                                    <Alert
                                        description={`BoLA uses a barcode detection system to perform audits and deliver nutritional information to customers and staff in realtime. The system employs a mobile barcode scanner to recognize previously recorded inventory items and perform routine inventory audits. The tool also allows public stakeholders to compare the nutritional composition of food items created through our system with their specific nutrient intake requirements. This feature helps customers make informed food choices and meet their dietary needs.`}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <Space wrap size={[50, 25]} align='center' style={{ justifyContent: 'center' }} >
                                    <Image src={barcode} preview={false} style={{ width: 225 }}></Image>
                                </Space>



                            </Col>
                        </Row>

                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>

                                <div style={{ width: '-webkit-fill-available' }}>
                                    <Space wrap>
                                        <Popover content={<p className='popoverFont'>The Optimal Intake Level represents an individual's daily requirement of essential micro and macronutrients, factoring in age and gender. It serves as a personalized guideline, ensuring a balanced nutritional approach tailored to physiological needs for optimal health.</p>} title='Optimal Intake Level'>

                                            <p className='legendBeige'>
                                                Optimal Intake Level
                                            </p>
                                        </Popover>
                                        <Popover content={<p className='popoverFont'>Foodstuff refers to consumable products and items, encompassing a wide range of goods such as agricultural produce, processed foods, and culinary ingredients. </p>} title='Foodstuff'>

                                            <p className='legendBlue'>
                                                Foodstuff
                                            </p>
                                        </Popover>
                                        <Popover content={<p className='popoverFont'>Daily Values refer to the established nutritional guidelines for specific nutrients provided on food labels. These values, often based on a standard daily diet of 2,000 calories, serve as a reference point for consumers to understand the nutritional content of food products.</p>} title='Daily Values'>

                                            <p className='legendRed'>
                                                Daily Values
                                            </p>
                                        </Popover>

                                    </Space>

                                    <ResponsiveContainer width="100%" height={300} initialDimension={{ width: 300, height: 300 }}>

                                        <ComposedChart
                                            height={400}
                                            data={data}
                                            margin={{
                                                top: 20,
                                                right: 20,
                                                bottom: 20,
                                                left: 20,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name">
                                                <Label value="Females Age 19 - 30 and 31 - 50" offset={0} position="bottom" />
                                            </XAxis>
                                            <YAxis padding={{ top: 10, bottom: 10 }} label={{ value: 'Calories', angle: -90, position: 'insideBottomLeft' }} minTickGap={10} />


                                            <Tooltip wrapperStyle={{ border: '1px solid #4D4D4F' }} cursor={{ stroke: '#4D4D4F', strokeWidth: 1 }} />
                                            <Text scaleToFit />
                                            {/* <Legend verticalAlign="top" height={36}/> */}
                                            <Bar dataKey="OIL" barSize={20} fill="#849FD1" activeBar={{ stroke: '#4D4D4F', strokeWidth: 1 }} />
                                            <ReferenceLine y={2000} label="DV" stroke="#d19084" strokeDasharray="3 3" />
                                            <Scatter dataKey="MD" name='Double Quarter Pounder Meal' fill="#4D4D4F" />
                                        </ComposedChart>
                                    </ResponsiveContainer>

                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 1 }} md={{ span: 8, order: 2 }} className='alignCol_1'>
                                {/* <div >
                                    <h1>Waste Analysis</h1>
                                    <Alert
                                        description="BoLA is a utility that aims to minimize the amount of waste produced during item development and production. It achieves this by analyzing the weights of food, calculating serving sizes, and identifying the number of sales cycles generated during the product creation process. The calculations provide valuable insights into the amount of food waste generated and the missed sales opportunities."
                                        type="warning"
                                        className='heroText'
                                    />


                                </div> */}
                                <div >
                                    <h1>Population Mapping</h1>
                                    <Alert
                                        description={`BoLA's nutritional analytics capabilities go far beyond those of the Daily Values. With BoLA, you can access specific information about the health implications of your item. This utility enables the public to compare the nutrient levels contained in your finished product with their recommended daily intake. The analysis is performed based on an individual's age, gender, and lifestyle. 
                                        `}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>
                            </Col>
                        </Row>



                       

                        










                    </Space>

                </Content>
            </Layout>

            <Public_Footer />

        </Layout>

    )
}

export default PrivacyPolicy;