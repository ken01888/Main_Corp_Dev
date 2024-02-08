import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Select, Space, InputNumber, Row, Alert, Tooltip, Badge, DescriptionsProps, Layout } from 'antd'
import 'isomorphic-fetch';

import { Content, Header } from 'antd/es/layout/layout';
import Main_Menu from '../Components/Navigation/Main_Menu';
import Public_Footer from '../Components/Navigation/Footer';
import { ArrowLineRight, GenderIntersex, HashStraight, Question, User } from '@phosphor-icons/react';

import { motion } from 'framer-motion';


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



const PublicHealthDiagnostic: React.FC = (props) => {
    const [inventoryList, setInventoryList] = React.useState<any>([{}])
    const [business_id_number, setBusinessId] = React.useState();
    const [inventoryExist, setInventoryExist] = React.useState<boolean>()
    const [person, setPerson] = React.useState([
        "____",
        {
            "status": "____",
            "color": "black"
        },
        {
            "MinimumHealthyWeight": "____",
            "MediumHealthyWeight": "____",
            "MaximumHealthyWeight": "____"
        },
        "_____",
        [
            [
                {
                    "age": 12,
                    "gender": "male",
                    "lifestyle":"Sedentary",
                    "Calories": {
                        "value": "____",
                        "unit": "Kcal",
                        "dv": 2000,
                        "mc": 63
                    },
                    "Total Fat": {
                        "value": "____",
                        "unit": "Grams",
                        "dv": 78,
                        "mc": 63
                    },
                    "Saturated Fat": {
                        "value": "____",
                        "unit": "Grams",
                        "dv": 20,
                        "mc": 24
                    },
                    "Trans Fat": {
                        "value": "____",
                        "unit": "Grams",
                        "dv": 20,
                        "mc": 24
                    },
                    "Cholesterol": {
                        "value": "____",
                        "unit": "Grams",
                        "dv": 300,
                        "mc": 525
                    },
                    "Sodium": {
                        "value": "____",
                        "unit": "MG",
                        "dv": 2300,
                        "mc": 2070
                    },
                    "Carbohydrates": {
                        "value": "____",
                        "unit": "G",
                        "dv": 275,
                        "mc": 158
                    },
                    "Added Sugar": {
                        "value": "____",
                        "unit": "G",
                        "dv": 50,
                        "mc": 41
                    },
                    "Fiber": {
                        "value": "____",
                        "unit": "G",
                        "dv": 50,
                        "mc": 36
                    },
                    "Protein": {
                        "value": "____",
                        "unit": "G",
                        "dv": 50,
                        "mc": 36
                    },
                    "Vitamin D": {
                        "value": "____",
                        "unit": "MCG",
                        "dv": 20,
                        "mc": 2
                    },
                    "Calcium": {
                        "value": "____",
                        "unit": "MG",
                        "dv": 1300,
                        "mc": 280
                    },
                    "Iron": {
                        "value": "____",
                        "unit": "MG",
                        "dv": 18,
                        "mc": 7.5
                    },
                    "Potassium": {
                        "value": "____",
                        "unit": "MG",
                        "dv": 4700,
                        "mc": 980
                    }
                }
            ],
            [
                {
                    "Name": "age"
                },
                {
                    "Name": "gender"
                },
                {
                    "Name": "Calories",
                    "Distinct": "2123",
                    "Unit": "Kcal",
                    "DV": 2000,
                    "McDonaldsBigBreakfast": 63
                },
                {
                    "Name": "Total Fat",
                    "Distinct": "83",
                    "Unit": "Grams",
                    "DV": 78,
                    "McDonaldsBigBreakfast": 63
                },
                {
                    "Name": "Saturated Fat",
                    "Distinct": "21",
                    "Unit": "Grams",
                    "DV": 20,
                    "McDonaldsBigBreakfast": 24
                },
                {
                    "Name": "Cholesterol",
                    "Distinct": 5,
                    "Unit": "Grams",
                    "DV": 300,
                    "McDonaldsBigBreakfast": 525
                },
                {
                    "Name": "Sodium",
                    "Distinct": 1800,
                    "Unit": "MG",
                    "DV": 2300,
                    "McDonaldsBigBreakfast": 2070
                },
                {
                    "Name": "Carbohydrates",
                    "Distinct": "239",
                    "Unit": "G",
                    "DV": 275,
                    "McDonaldsBigBreakfast": 158
                },
                {
                    "Name": "Added Sugar",
                    "Distinct": "48",
                    "Unit": "G",
                    "DV": 50,
                    "McDonaldsBigBreakfast": 41
                },
                {
                    "Name": "Protein",
                    "Distinct": "53",
                    "Unit": "G",
                    "DV": 50,
                    "McDonaldsBigBreakfast": 36
                },
                {
                    "Name": "Vitamin D",
                    "Distinct": 600,
                    "Unit": "MCG",
                    "DV": 20,
                    "McDonaldsBigBreakfast": 2
                },
                {
                    "Name": "Calcium",
                    "Distinct": 1300,
                    "Unit": "MG",
                    "DV": 1300,
                    "McDonaldsBigBreakfast": 280
                },
                {
                    "Name": "Iron",
                    "Distinct": 8,
                    "Unit": "MG",
                    "DV": 18,
                    "McDonaldsBigBreakfast": 7.5
                },
                {
                    "Name": "Potassium",
                    "Distinct": 2500,
                    "Unit": "MG",
                    "DV": 4700,
                    "McDonaldsBigBreakfast": 980
                }
            ]
        ]
    ])
    const [userPass, setUserPass] = React.useState(false)

    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Weight Category',
            children: <ConfigProvider
                theme={{
                    components: {
                        Badge: {
                            statusSize: 16
                        },
                    },
                }}
            >
                <Badge status="processing" text={person[1]['status']} color={person[1]['color']} />
            </ConfigProvider>,
            span: 1,
        },
        {
            key: '2',
            label: `Body Mass Index (BMI)`,
            children: `${person[0]}`,
            span: 1,
        },
        {
            key: '3',
            label: 'Basal Metabolic Rate (BMR)',
            children: `${person[3]} Kcal`,
        },
        {
            key: '8',
            label:<h3>Low Weight</h3>,
            children: ``,
            span:3,
        },

        {
            key: '4',
            label: 'Healthy Low Weight',
            children: `${person[2]['MinimumHealthyWeight']} LB`,
        },
        {
            key: '5',
            label: 'Healthy Medium Weight',
            children: `${person[2]['MediumHealthyWeight']} LB`,
            span: 1,
        },
        {
            key: '6',
            label: 'Healthy High Weight',
            children: `${person[2]['MaximumHealthyWeight']} LB`,
        },
        {
            key: '7',
            label: 'Recommended Daily Nutrient Intake',
            span: 3,
            children: (
                <>
                    Calories: {person[4][0][0]['Calories'].value} Kcal
                    <br />
                    Total Fat:  {person[4][0][0]['Total Fat'].value} G
                    <br />
                    Saturated Fat:  {person[4][0][0]['Saturated Fat'].value} G
                    <br />
                    Cholesterol:  {person[4][0][0]['Calories'].value} G
                    <br />
                    Sodium:  {person[4][0][0]['Calories'].value} MG
                    <br />
                    Carbohydrates:  {person[4][0][0]['Calories'].value} G
                    <br />
                    Fiber:  {person[4][0][0]['Fiber'].value} G
                    <br />
                    Added Sugar:  {person[4][0][0]['Added Sugar'].value} G
                    <br />

                    Protein:  {person[4][0][0]['Protein'].value} G
                    <br />
                    Vitamin {person[4][0][0]['Vitamin D'].value} MCG
                    <br />
                    Calcium:  {person[4][0][0]['Calcium'].value} MG
                    <br />
                    Iron:  {person[4][0][0]['Iron'].value} MG
                    <br />
                    Potassium:  {person[4][0][0]['Potassium'].value} MG
                    <br />
                </>
            ),
        },
    ];








    const stylePlay = () => {
        return {
            borderColor: 'blue'
        }
    }

    const onFinish = async (values: any) => {    
        let newData = await fetch(`/bolatestingroute`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })

        const data1 = await newData.json()
        setPerson(data1)

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
                    <Space wrap size={[0, 100]}>

                        <Row justify={'center'} align={'middle'} gutter={[0, 16]} className='sectionHeaderOtherBlue'>
                            <Col >
                                <h3>Personal Health Assessment</h3>
                            </Col>
                        </Row>

                        <Row justify={'center'} align={'top'} gutter={[0, 16]} >
                            <Col xs={22} md={20} style={{ borderBottom: '5px solid var(--light_blue)' }}>

                                <h1>Personal Health Assessment</h1>
                                <Alert
                                    description="
                                    The Personal Health Assessment (PHA) serves as a  tool for health maintenance, offering individuals a comprehensive understanding of their present health status. The PHA paints a holistic picture of an individual's well-being. To initiate this process, kindly fill out the form below, and your assessment results will be promptly displayed in the Health Score Card section. This personalized approach empowers individuals to proactively engage with their health and make informed decisions based on the insights from the assessment.  
                                    "
                                    type="warning"
                                    className='heroText'
                                />

                            </Col>
                        </Row>




                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 100]}>
                            <Col xs={22} md={8} className='layout'>

                                <motion.div className='form_login' initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: .5 }}>
                                    < Form
                                        name="basic"
                                        initialValues={{ remember: true }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="on"
                                        size='middle'
                                        className='formStyles'
                                    >
                                        <h2 style={{ display: 'flex' }} className='footer_h1'>
                                            <motion.div className='logo'>
                                                <div style={{ height: 'fit-content' }}>
                                                    <div className='logoBlue'></div>
                                                    <div className='logoBeige'></div>
                                                </div>
                                                <div style={{ height: 'fit-content' }}>
                                                    <div className='logoBeige'></div>
                                                    <div className='logoBlue'></div>

                                                </div>

                                            </motion.div>Kcm Inc
                                        </h2>
                                        <Alert
                                            description="
                                            To receive your Health Score Card, kindly provide the requested information below. Please note that we prioritize the privacy and security of your data. If you have specific health concerns, we recommend consulting with a qualified healthcare professional for personalized advice tailored to your individual needs.                                                         "
                                            type="warning"
                                            className='heroText'
                                        />

                                        <ConfigProvider
                                            theme={{
                                                token: {
                                                    colorPrimary: '#d9d9d9',
                                                    lineWidth: 1,
                                                    fontFamily: 'Jost',
                                                    fontSize: 14,

                                                },
                                            }}
                                        >
                                            <Alert
                                                description="How old are you? Ages: [2 - 125]"
                                                type="warning"
                                                className='heroText'
                                            />
                                            <Form.Item
                                                name="age"
                                                rules={[{ required: true }]}
                                                style={{ width: '17rem' }}
                                            >
                                                <InputNumber style={{
                                                    border: '1px solid #4D4D4F',
                                                    borderRadius: '1.5px',
                                                    fontSize: 14,
                                                    width: 325
                                                }} placeholder="Age" maxLength={25} prefix={<User size={20} color="#849FD1" weight="bold" />} min={2} max={125} type='number' />
                                            </Form.Item>
                                            <Alert
                                                description="What is your gender? "
                                                type="warning"
                                                className='heroText'
                                            />
                                            <Form.Item
                                                name="gender"
                                                rules={[{ required: true }]}
                                                style={{ width: '17rem' }}
                                            >
                                                <Select
                                                    suffixIcon={<GenderIntersex size={20} color="#849FD1" weight="bold" />}
                                                    placeholder="Gender:"
                                                    style={{
                                                        border: '1px solid #4D4D4F',
                                                        borderRadius: '1.5px',
                                                        fontSize: 14,
                                                        width: 325

                                                    }}
                                                    variant="borderless"
                                                >
                                                    <Select.Option value="male">Male</Select.Option>
                                                    <Select.Option value="female">Female</Select.Option>
                                                </Select>
                                            </Form.Item>
                                            <Alert
                                                description="What is your weight - in pounds (LB)? "
                                                type="warning"
                                                className='heroText'
                                            />
                                            <Form.Item
                                                name="weight"
                                                rules={[{ required: true }]}
                                                style={{ width: 325 }}
                                            >
                                                <InputNumber style={{
                                                    border: '1px solid #4D4D4F',
                                                    borderRadius: '1.5px',
                                                    fontSize: 14,
                                                    width: 325
                                                }} placeholder="Pounds" max={1000} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} min={0} type='number' />
                                            </Form.Item>
                                            <Alert
                                                description="What is your height - in feet and inches?"
                                                type="warning"
                                                className='heroText'
                                            />
                                            <Form.Item>
                                                <Space.Compact>
                                                    <Form.Item
                                                        name={['height', 'feet']}
                                                        rules={[{ required: true, message: 'Enter details' }]}
                                                    >
                                                        <InputNumber style={{
                                                            border: '1px solid #4D4D4F',
                                                            borderRadius: '1.5px',
                                                            fontSize: 14,
                                                            width: 162.5
                                                        }} placeholder="Feet" max={10} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} min={0} type='number' />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name={['height', 'inches']}
                                                        rules={[{ required: true, message: 'Enter details' }]}
                                                    >
                                                        <InputNumber style={{
                                                            border: '1px solid #4D4D4F',
                                                            borderRadius: '1.5px',
                                                            fontSize: 14,
                                                            width: 162.5
                                                        }} placeholder="Inches" max={11} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} min={0} type='number' />

                                                    </Form.Item>
                                                </Space.Compact>

                                            </Form.Item>
                                            <Tooltip placement="top" title={'The activity continuum ranges from a [Sedentary Lifestyle] involving minimal or no physical activity, such as sitting or lying down for most of the day, which is associated with a higher risk of health problems. Moving up, [Light Physical Activity] encompasses efforts like casual walking or light household chores that slightly increase heart rate. [Moderate Physical Activity] involves pursuits like brisk walking or cycling that raise heart rate and breathing but still allow for conversation. Progressing further, [Vigorous Physical Activity], like running or swimming, significantly raises heart rate and may impede conversation. Finally, [Very Vigorous Physical Activity], including sports training, high-intensity interval training (HIIT), or competitive sports, represents highly intense and challenging activities.'}>
                                                <Question size={20} weight="bold" />
                                            </Tooltip>

                                            <Alert
                                                description="Select the choice that best describes your level of activity or lifestyle?"
                                                type="warning"
                                                className='heroText'
                                            />
                                            <Form.Item
                                                name="life_style"
                                                rules={[{ required: true }]}
                                                style={{ width: '17rem' }}


                                            >
                                                <Select
                                                    suffixIcon={<GenderIntersex size={20} color="#849FD1" weight="bold" />}
                                                    placeholder="Lifestyle:"
                                                    style={{
                                                        border: '1px solid #4D4D4F',
                                                        borderRadius: '1.5px',
                                                        fontSize: 14,
                                                        width: 325

                                                    }}
                                                    variant="borderless"
                                                >
                                                    <Select.Option value="Sedentary">Sedentary Lifestyle</Select.Option>
                                                    <Select.Option value="Light activity">Light Physical Activity</Select.Option>
                                                    <Select.Option value="Moderately active">Moderate Physical Activity</Select.Option>

                                                    <Select.Option value="Very active">Vigorous Physical Activity</Select.Option>

                                                    <Select.Option value="Extra active">Very Vigorous Physical Activity</Select.Option>

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
                                                        <Button icon={<ArrowLineRight size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack'></Button>
                                                    </Tooltip>
                                                </ConfigProvider>

                                            </Form.Item>

                                        </ConfigProvider>
                                    </Form>


                                </motion.div>

                            </Col>
                            <Col xs={22} md={8} >
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Descriptions: {
                                                /* here is your component tokens */
                                            },

                                        },
                                        token: {
                                            borderRadiusLG: 2.5,
                                            lineWidth: 1,
                                            colorSplit: '#d9d9d9',
                                            colorTextTertiary: 'black',
                                            colorPrimaryHover: '#000000',
                                            colorBgContainer: '#fafafa'
                                        },
                                    }}
                                >




                                    <Descriptions layout='vertical' title={<h3>Health Score Card</h3>} bordered items={items} />
                                    <Space size={[25, 25]} wrap style={{ marginTop: 25 }}>
                                        <Tooltip placement="bottom" title={"Body Mass Index (BMI), is a numeric indicator used the assess an individual weight status. The BMI categories are as follows: Underweight: BMI less than 18.5; Normal weight: BMI between 18.5 and 24.9; Overweight: BMI between 25 and 29.9; Obesity: BMI 30 or greater. While BMI provides a quick assessment of general body weight, it doesn't account for factors like muscle mass or fat distribution."}>
                                            <Button icon={<Question size={20} weight="bold" />} htmlType="button" className='buttonFormBlack'> BMI </Button>
                                        </Tooltip>
                                        <Tooltip placement="bottom" title={"Basal Metabolic Rate (BMR) is the amount of energy expended by the body at rest in order to maintain basic physiological functions such as breathing, circulation, and cell production. It represents the minimum number of calories your body needs to support these essential functions while at complete rest. BMR is influenced by factors such as age, gender, weight, height, and body composition."}>
                                            <Button icon={<Question size={20} weight="bold" />} htmlType="button" className='buttonFormBlack'> BMR </Button>
                                        </Tooltip>
                                    </Space>
                                </ConfigProvider>
                            </Col>

                        </Row>
                    </Space>

                </Content>
            </Layout>

            <Public_Footer />

        </Layout>















    )
}

export default PublicHealthDiagnostic;