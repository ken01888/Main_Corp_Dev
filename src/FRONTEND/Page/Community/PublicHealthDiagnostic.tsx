import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Select, Space, InputNumber, Row, Alert, Tooltip, Badge, DescriptionsProps, Layout, Card, Statistic } from 'antd'
import 'isomorphic-fetch';

import { Content, Header } from 'antd/es/layout/layout';
import Main_Menu from '../Components/Navigation/Main_Menu';
import Public_Footer from '../Components/Navigation/Footer';
import { ArrowLineRight, ArrowsLeftRight, GenderIntersex, HashStraight, MapPin, Question, User } from '@phosphor-icons/react';

import { motion } from 'framer-motion';
import { ArrowUpOutlined } from '@ant-design/icons';


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
    const [displayResults,setResults] = React.useState<boolean>(false)
    const [person, setPerson] = React.useState([
        "",
        {
            "status": "",
            "color": "black",
            "indicator": ''
        },
        {
            "CurrentWeight": "",
            "MinimumHealthyWeight": "",
            "MediumHealthyWeight": "",
            "MaximumHealthyWeight": ""
        },
        "",
        [
            [
                {
                    "age": 12,
                    "gender": "male",
                    "lifestyle": "Sedentary",
                    "Calories": {
                        "value": "",

                        "unit": "Kcal",
                        "dv": 2000,
                        "mc": 63
                    },
                    "Total Fat": {
                        "value": "",
                        "unit": "Grams",
                        "dv": 78,
                        "mc": 63
                    },
                    "Saturated Fat": {
                        "value": "",
                        "unit": "Grams",
                        "dv": 20,
                        "mc": 24
                    },
                    "Trans Fat": {
                        "value": "",
                        "unit": "Grams",
                        "dv": 20,
                        "mc": 24
                    },
                    "Cholesterol": {
                        "value": "",
                        "unit": "Grams",
                        "dv": 300,
                        "mc": 525
                    },
                    "Sodium": {
                        "value": "",
                        "unit": "MG",
                        "dv": 2300,
                        "mc": 2070
                    },
                    "Carbohydrates": {
                        "value": "",
                        "unit": "G",
                        "dv": 275,
                        "mc": 158
                    },
                    "Added Sugar": {
                        "value": "",
                        "unit": "G",
                        "dv": 50,
                        "mc": 41
                    },
                    "Fiber": {
                        "value": "",
                        "unit": "G",
                        "dv": 50,
                        "mc": 36
                    },
                    "Protein": {
                        "value": "",
                        "unit": "G",
                        "dv": 50,
                        "mc": 36
                    },
                    "Vitamin D": {
                        "value": "",
                        "unit": "MCG",
                        "dv": 20,
                        "mc": 2
                    },
                    "Calcium": {
                        "value": "",
                        "unit": "MG",
                        "dv": 1300,
                        "mc": 280
                    },
                    "Iron": {
                        "value": "",
                        "unit": "MG",
                        "dv": 18,
                        "mc": 7.5
                    },
                    "Potassium": {
                        "value": "",
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
            ],

        ],
        '',
        [[
            '0', '0', '0', '0', '0', '0'
        ]]
    ])







    const onFinish = async (values: any) => {
        let newData = await fetch(`/bolatestingroute`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const data1 = await newData.json()
        if(data1){
            setResults(!displayResults)
        }
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

                        <Row justify={'center'} align={'top'} gutter={[0, 16]} className='sectionHeaderOtherBlue'>
                            <Col >
                                <h3>Personal Health Assessment</h3>
                            </Col>
                        </Row>

                        <Row justify={'center'} align={'top'} gutter={[0, 16]} >
                            <Col xs={22} md={20} style={{ borderBottom: '5px solid var(--light_blue)' }}>

                                <h1>Personal Health Assessment</h1>
                                <Alert
                                    description="
                                    The Personal Health Assessment (PHA) serves as a  tool for health maintenance, offering individuals a comprehensive understanding of their present health status. The PHA paints a holistic picture of an individual's well-being. To initiate this process, kindly fill out the form below, and your assessment results will be promptly displayed in the Health Scorecard section. This personalized approach empowers individuals to proactively engage with their health and make informed decisions based on the insights from the assessment.  
                                    "
                                    type="warning"
                                    className='heroText'
                                />

                            </Col>
                        </Row>




                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 50]}>
                            <Col xs={22} md={8} >

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
                                            To receive your Health Scorecard, kindly provide the requested information below. Please note that we prioritize the privacy and security of your data. If you have specific health concerns, we recommend consulting with a qualified healthcare professional for personalized advice tailored to your individual needs.                                                         "
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
                                                description="1. How old are you? Ages: [2 - 125]"
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
                                                    width: 250
                                                }} placeholder="Age" maxLength={25} prefix={<User size={20} color="#849FD1" weight="bold" />} min={2} max={125} type='number' />
                                            </Form.Item>
                                            <Alert
                                                description="2. What is your gender? "
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
                                                        width: 250

                                                    }}
                                                    variant="borderless"
                                                >
                                                    <Select.Option value="male">Male</Select.Option>
                                                    <Select.Option value="female">Female</Select.Option>
                                                </Select>
                                            </Form.Item>
                                            <Alert
                                                description="3. What is your weight - in pounds (LB)? "
                                                type="warning"
                                                className='heroText'
                                            />
                                            <Form.Item
                                                name="weight"
                                                rules={[{ required: true }]}
                                                style={{ width: 250 }}
                                            >
                                                <InputNumber style={{
                                                    border: '1px solid #4D4D4F',
                                                    borderRadius: '1.5px',
                                                    fontSize: 14,
                                                    width: 250
                                                }} placeholder="Pounds" max={1000} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} min={0} type='number' />
                                            </Form.Item>
                                            <Alert
                                                description="4. What is your height - in feet and inches?"
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
                                                            width: 125
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
                                                            width: 125
                                                        }} placeholder="Inches" max={11} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} min={0} type='number' />

                                                    </Form.Item>
                                                </Space.Compact>

                                            </Form.Item>
                                            <Tooltip placement="top" title={'The activity continuum ranges from a [Sedentary Lifestyle] involving minimal or no physical activity, such as sitting or lying down for most of the day, which is associated with a higher risk of health problems. Moving up, [Light Physical Activity] encompasses efforts like casual walking or light household chores that slightly increase heart rate. [Moderate Physical Activity] involves pursuits like brisk walking or cycling that raise heart rate and breathing but still allow for conversation. Progressing further, [Vigorous Physical Activity], like running or swimming, significantly raises heart rate and may impede conversation. Finally, [Very Vigorous Physical Activity], including sports training, high-intensity interval training (HIIT), or competitive sports, represents highly intense and challenging activities.'}>
                                                <Question size={20} weight="bold" />
                                            </Tooltip>

                                            <Alert
                                                description="5. Select the choice that best describes your level of activity or lifestyle?"
                                                type="warning"
                                                className='heroText'
                                            />
                                            <Form.Item
                                                name="life_style"
                                                rules={[{ required: true,message: 'Enter your lifestyle type' }]}
                                                style={{ width: '17rem' }}


                                            >
                                                <Select
                                                    suffixIcon={<GenderIntersex size={20} color="#849FD1" weight="bold" />}
                                                    placeholder="Lifestyle:"
                                                    style={{
                                                        border: '1px solid #4D4D4F',
                                                        borderRadius: '1.5px',
                                                        fontSize: 14,
                                                        width: 250

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
                                            <Alert
                                                description="6. In which zip code are you currently located?"
                                                type="warning"
                                                className='heroText'
                                            />
                                            <Form.Item
                                                name="location"
                                                rules={[{ required: true,message: 'Enter the zip code you live in' }]}
                                                style={{ width: '17rem' }}
                                            >
                                                <InputNumber style={{
                                                    border: '1px solid #4D4D4F',
                                                    borderRadius: '1.5px',
                                                    fontSize: 14,
                                                    width: 250
                                                }} placeholder="Zip code:" maxLength={25} prefix={<MapPin size={20} color="#849FD1" weight="bold" />} type='number' />
                                            </Form.Item>

                                            <Form.Item
                                            >
                                                <button type="submit" className='buttonFormBeige'>
                                                   Results
                                                </button>
                                            </Form.Item>
                                        </ConfigProvider>
                                    </Form>


                                </motion.div>

                            </Col>


                        </Row>



                        {displayResults? <> <Row justify={'center'} align={'middle'}  >
                            <Col xs={22} md={20} >



                                <h1>Weight Assessment</h1>

                                <Alert
                                    description={<p>
                                        The Weight Assessment is a valuable tool for health insights, utilizing submitted information to focus on the Body Mass Index (BMI) and comprehensively evaluate body fatness. It goes beyond providing a numerical result, and interpreting the BMI to signal warning signs about current health. The assessment also recommends specific weight ranges tailored to individual circumstances, aiming to address diet-related health challenges. By incorporating these recommendations, individuals can make informed lifestyle decisions, emphasizing the importance of maintaining a healthy weight for overall well-being and reducing associated health risks. Recognizing that body weight plays a crucial role in health, the assessment aligns with broader considerations about BMI limitations, the impact of excess weight on cardiovascular health, the risk of type 2 diabetes, joint stress, respiratory function, and mental health.
                                    </p>}
                                    type="warning"
                                    className='heroText'
                                />




                            </Col>



                        </Row>



                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 50]} >
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[0, 25]} wrap>
                                    <Space size={[0, 25]} direction='vertical' wrap>
                                        <div>
                                            <h3>Status</h3>
                                        </div>
                                        <div>
                                            <h1>Weight Class</h1>
                                        </div>

                                        <Alert
                                            description={person[1]['text']}
                                            type="warning"
                                            className='heroText'
                                        />
                                    </Space>
                                </Space>
                            </Col>
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[15, 25]} wrap direction='vertical'>
                                    <ConfigProvider
                                        theme={{
                                            components: {
                                                Badge: {
                                                    statusSize: 64
                                                },
                                            },
                                        }}
                                    >
                                        <div>
                                            <h1 style={{ color: person[1]['color'] }}>{person[1]['status']}</h1>
                                        </div>
                                    </ConfigProvider>
                                </Space>
                            </Col>
                        </Row>
                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 50]} >
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[0, 25]} wrap>
                                    <Space size={[0, 25]} direction='vertical' wrap>
                                        <div>
                                            <h3>BMI</h3>
                                        </div>
                                        <div>
                                            <h1>Body Mass Index</h1>
                                        </div>

                                        <Alert
                                            description="Body Mass Index (BMI) is a straightforward tool for assessing whether an individual has a healthy body weight in relation to their height. The resulting numerical value is categorized into different ranges, indicating underweight, normal weight, overweight, or obesity. For instance, a BMI less than 18.5 suggests underweight, 18.5 to 24.9 indicates normal weight, 25 to 29.9 signals overweight, and 30 or greater signifies obesity. Consulting with a healthcare professional provides a more comprehensive assessment of overall health and body composition, as factors like muscle mass can influence BMI results."
                                            type="warning"
                                            className='heroText'
                                        />
                                    </Space>
                                </Space>
                            </Col>
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[15, 25]} wrap direction='vertical'>
                                    <ConfigProvider
                                        theme={{
                                            components: {
                                                Badge: {
                                                    textFontSize: 32,
                                                    indicatorHeight: 96
                                                },
                                            },
                                        }}
                                    >
                                        <Badge status="processing" color={person[1]['color']} count={person[0]} />
                                    </ConfigProvider>
                                </Space>
                            </Col>
                        </Row>

                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 50]} >
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[0, 25]} wrap>
                                    <Space size={[0, 25]} direction='vertical' wrap>
                                        <div>
                                            <h3>Recommendation</h3>
                                        </div>
                                        <div>
                                            <h1>Weight Management</h1>
                                        </div>

                                        <Alert
                                            description="The forward-looking recommendation section is designed to provide valuable insights. It helps you determine your optimal weight limit by carefully considering factors such as your current life stage. Additionally, it takes into account specific anthropometric (height and weight) measurements to offer personalized guidance.


                                            "
                                            type="warning"
                                            className='heroText'
                                        />
                                    </Space>
                                </Space>
                            </Col>
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[15, 25]} wrap direction='vertical'>
                                    <Space size={[15, 25]} wrap direction='horizontal'>
                                        <Card bordered={false}>
                                            <Statistic
                                                title="Current Weight"
                                                value={person[2]['CurrentWeight']}
                                                suffix="LB"
                                            />
                                        </Card>
                                    </Space>
                                    <Space size={[15, 25]} wrap direction='horizontal'>

                                        <Card bordered={false}>
                                            <Statistic
                                                title="Healthy Low Weight"
                                                value={person[2]['MinimumHealthyWeight'][0]}
                                                suffix="LB"
                                            />
                                            <Statistic
                                                title="Healthy High Weight"
                                                value={person[2]['MaximumHealthyWeight'][0]}
                                                suffix="LB"
                                            />
                                        </Card>
                                        <Card bordered={false}>
                                            <Statistic
                                                title="Low Weight Change"
                                                value={person[2]['MinimumHealthyWeight'][1]}
                                                prefix={person[1]['indicator']}
                                                suffix="LB"
                                            />
                                            <Statistic
                                                title="High Weight Change"
                                                value={person[2]['MaximumHealthyWeight'][1]}
                                                prefix={person[1]['indicator']}
                                                suffix="LB"
                                            />
                                        </Card>
                                    </Space>

                                </Space>
                            </Col>
                        </Row>
                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 50]} >
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[0, 25]} wrap>
                                    <Space size={[0, 25]} direction='vertical' wrap>
                                        <div>
                                            <h3>Weight Management Plan</h3>
                                        </div>
                                        <div>
                                            <h1>6 Month Weight Statement</h1>
                                        </div>

                                        <Alert
                                            description="The 6 Month Weight Assessment is a structured weight management program aimed at assisting you in reaching an optimal weight. By adhering to the Daily Calorie Intake Adjustment outlined in the Calorie Assessment and Plan Section, you can anticipate progress towards the displayed weights. This is a gradual process contingent upon your capacity to modify eating habits and elevate your activity level. Consider revisiting the form and adjusting your lifestyle (Question 5) to explore how changes in your activity level can expedite achieving a healthier weight."
                                            type="warning"
                                            className='heroText'
                                        />
                                    </Space>
                                </Space>
                            </Col>
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[15, 25]} wrap direction='vertical'>

                                    <Space size={[15, 25]} wrap direction='horizontal'>

                                        <Card bordered={false}>
                                            <Statistic
                                                title="Month 1"
                                                value={person[6][0][0]}
                                                suffix="LB"
                                            />

                                        </Card>
                                        <Card bordered={false}>

                                            <Statistic
                                                title="Month 2"
                                                value={person[6][0][1]}
                                                suffix="LB"
                                            />
                                        </Card>
                                    </Space>

                                    <Space size={[15, 25]} wrap direction='horizontal'>

                                        <Card bordered={false}>
                                            <Statistic
                                                title="Month 3"
                                                value={person[6][0][2]}
                                                suffix="LB"
                                            />

                                        </Card>
                                        <Card bordered={false}>

                                            <Statistic
                                                title="Month 4"
                                                value={person[6][0][3]}
                                                suffix="LB"
                                            />
                                        </Card>
                                    </Space>

                                    <Space size={[15, 25]} wrap direction='horizontal'>

                                        <Card bordered={false}>
                                            <Statistic
                                                title="Month 5"
                                                value={person[6][0][4]}
                                                suffix="LB"
                                            />

                                        </Card>
                                        <Card bordered={false}>

                                            <Statistic
                                                title="Month 6"
                                                value={person[6][0][5]}
                                                suffix="LB"
                                            />
                                        </Card>
                                    </Space>

                                </Space>
                            </Col>
                        </Row>


                        <Row justify={'center'} align={'middle'}  >
                            <Col xs={22} md={20} >



                                <h1>Calorie Assessment and Plan</h1>

                                <Alert
                                    description={<p>

                                        The Calorie Assessment and Plan sections offer valuable insights into your body's specific calorie requirements. Each individual's energy needs are influenced by factors such as body type and stage of life. Consuming calories beyond what is necessary for maintaining normal bodily functions, considering one's lifestyle, leads to the accumulation of stored fat ( overweight or obesity). The results provided aim to serve as a foundation for future dietary planning. This proactive approach is designed to prevent the unnecessary buildup of fat deposits and provide you with a personalized plan to bring your body weight within healthy ranges.
                                    </p>}
                                    type="warning"
                                    className='heroText'
                                />




                            </Col>



                        </Row>



                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 50]} >
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[0, 25]} wrap>
                                    <Space size={[0, 25]} direction='vertical' wrap>
                                        <div>
                                            <h3>BMR</h3>
                                        </div>
                                        <div>
                                            <h1>Basal Metabolic Rate</h1>
                                        </div>

                                        <Alert
                                            description="BMR, or Basal Metabolic Rate, is like the energy your body needs to keep the lights on when you're not doing anything. It's the calories required for essential functions such as breathing, circulating blood, and keeping your organs working while you're at rest. Think of it as the energy your body uses just to stay alive. Everyone's BMR is different and depends on things like age, gender, weight, and height. Knowing your BMR helps you understand the minimum calories your body needs, which is useful for figuring out how much food and energy you need every day, including what you burn during activities and exercise.                                            "
                                            type="warning"
                                            className='heroText'
                                        />
                                    </Space>
                                </Space>
                            </Col>
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[15, 25]} wrap direction='vertical'>

                                    <Card bordered={false}>
                                        <Statistic
                                            title="BMR"
                                            value={person[3]}
                                            precision={2}
                                            suffix="KCAL"
                                        />
                                    </Card>

                                </Space>
                            </Col>
                        </Row>
                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 50]} >
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[0, 25]} wrap>
                                    <Space size={[0, 25]} direction='vertical' wrap>
                                        <div>
                                            <h3>TDEE</h3>
                                        </div>
                                        <div>
                                            <h1>Dietary Calories - Total Daily Energy Expenditure</h1>
                                        </div>

                                        <Alert
                                            description="TDEE, or Total Daily Energy Expenditure, is the total number of calories your body needs in a day. It includes the energy required for basic functions at rest (BMR) and the calories burned through daily activities and exercise. To maintain your current weight, aim to eat around the same number of calories as your TDEE. If you want to lose or gain weight, adjust your calorie intake accordingly. Calculating TDEE involves considering your BMR and how active you are during the day. It gives you a personalized estimate of your daily calorie needs."

                                            type="warning"
                                            className='heroText'
                                        />
                                    </Space>
                                </Space>
                            </Col>
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[15, 25]} wrap direction='vertical'>

                                    <Card bordered={false}>
                                        <Statistic
                                            title="TDEE"
                                            value={person[4][0][0]['Calories'].value}
                                            precision={2}
                                            suffix="KCAL"
                                        />
                                    </Card>

                                </Space>
                            </Col>
                        </Row>

                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 50]} >
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[0, 25]} wrap>
                                    <Space size={[0, 25]} direction='vertical' wrap>
                                        <div>
                                            <h3>Recommendation</h3>
                                        </div>
                                        <div>
                                            <h1>Daily Calorie Intake Adjustment</h1>
                                        </div>

                                        <Alert
                                            description="Optimizing your daily caloric intake is a pivotal factor for attaining a healthy weight range. The Daily Calorie Intake Adjustment is a key metric, calculated based on the disparity between your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE), rooted in scientific principles. A positive adjustment points towards an elevation in daily calorie consumption, indicating adherence to a High Calorie Diet, while a negative adjustment signifies a reduction, suggestive of a Low Calorie Diet. Aligning your daily calorie intake with this calculated figure significantly enhances your likelihood of reaching your 6-month weight goal."
                                            type="warning"
                                            className='heroText'
                                        />
                                    </Space>
                                </Space>
                            </Col>
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[15, 25]} wrap direction='vertical'>

                                    <Card bordered={false}>
                                        <Statistic
                                            title="Energy Adjustment"
                                            value={person[5]}
                                            precision={2}
                                            suffix="KCAL"
                                            prefix={person[1]['indicator']}
                                        />
                                    </Card>

                                </Space>
                            </Col>
                        </Row>





                        <Row justify={'center'} align={'middle'}  >
                            <Col xs={22} md={20} >



                                <h1>Nutritional Intake Assessment</h1>

                                <Alert
                                    description={<p>Individuals have distinct nutritional requirements shaped by their life stage, lifestyle, gender and physical characteristics. While many people rely on Daily Values (DVs) as general guidelines for making dietary decisions, it's essential to recognize that these values are broad recommendations designed for the average person and may not address individualized nutritional needs. Additionally, incorporating Recommended Dietary Allowances (RDAs) can provide a more comprehensive understanding of your specific nutrient requirements. The following results are tailored to you and calculated based on your unique personal requirements, ensuring a more precise and personalized approach to meeting your nutritional needs and life maintenance. </p>}
                                    type="warning"
                                    className='heroText'
                                />




                            </Col>



                        </Row>



                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 50]} >
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[0, 25]} wrap>
                                    <Space size={[0, 25]} direction='vertical' wrap>
                                        <div>
                                            <h3>Macronutrients</h3>
                                        </div>
                                        <div>
                                            <h1>Protein,Fats,Sugar and Fiber</h1>
                                        </div>

                                        <Alert
                                            description="Macronutrients are essential nutrients, including carbohydrates for energy, proteins for tissue repair, and fats for various functions like energy storage, all crucial for maintaining overall health. Balancing their intake through a well-rounded diet is key to meeting individual nutritional needs."
                                            type="warning"
                                            className='heroText'
                                        />
                                    </Space>
                                </Space>
                            </Col>
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[15, 25]} wrap direction='vertical'>

                                    <Space size={[15, 25]} wrap direction='horizontal'>

                                        <Card bordered={false}>
                                            <Statistic
                                                title="Protein"
                                                value={person[4][0][0]['Protein'].value}
                                                suffix="G"
                                            />

                                        </Card>
                                        <Card bordered={false}>

                                            <Statistic
                                                title="Cholesterol"
                                                value={person[4][0][0]['Cholesterol'].value}
                                                suffix="G"
                                            />
                                        </Card>

                                    </Space>

                                    <Space size={[15, 25]} wrap direction='horizontal'>

                                        <Card bordered={false}>
                                            <Statistic
                                                title="Total Fat"
                                                value={person[4][0][0]['Total Fat'].value}
                                                suffix="G"
                                            />

                                        </Card>
                                        <Card bordered={false}>

                                            <Statistic
                                                title="Saturated Fat"
                                                value={person[4][0][0]['Saturated Fat'].value}
                                                suffix="G"
                                            />
                                        </Card>
                                    </Space>

                                    <Space size={[15, 25]} wrap direction='horizontal'>


                                        <Card bordered={false}>

                                            <Statistic
                                                title="Carbohydrates"
                                                value={person[4][0][0]['Carbohydrates'].value}
                                                suffix="G"
                                            />
                                        </Card>
                                        <Card bordered={false}>
                                            <Statistic
                                                title="Added Sugar"
                                                value={person[4][0][0]['Added Sugar'].value}
                                                suffix="G"
                                            />

                                        </Card>

                                    </Space>
                                    <Space size={[15, 25]} wrap direction='horizontal'>


                                        <Card bordered={false}>

                                            <Statistic
                                                title="Fiber"
                                                value={person[4][0][0]['Fiber'].value}
                                                suffix="G"
                                            />
                                        </Card>


                                    </Space>

                                </Space>
                            </Col>
                        </Row>
                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 50]} >
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[0, 25]} wrap>
                                    <Space size={[0, 25]} direction='vertical' wrap>
                                        <div>
                                            <h3>Micronutrients</h3>
                                        </div>
                                        <div>
                                            <h1>Vitamins and Minerals</h1>
                                        </div>

                                        <Alert
                                            description="Micronutrients are essential nutrients that the human body needs in smaller quantities for various physiological functions. These include vitamins and minerals, which play critical roles in processes such as metabolism, immune function, and overall growth and development. Micronutrients are obtained through a diverse and balanced diet, and each has specific functions in the body. Examples of micronutrients include vitamins such as vitamin A, C, and D, as well as minerals like iron, calcium, and zinc. Ensuring an adequate intake of micronutrients is vital for maintaining optimal health and preventing deficiencies or health issues"

                                            type="warning"
                                            className='heroText'
                                        />
                                    </Space>
                                </Space>
                            </Col>
                            <Col xs={{ span: 22 }} md={{ span: 8 }}>
                                <Space size={[15, 25]} wrap direction='vertical'>

                                    <Space size={[15, 25]} wrap direction='horizontal'>
                                        <Card bordered={false}>
                                            <Statistic
                                                title="Sodium"
                                                value={person[4][0][0]['Sodium'].value}
                                                suffix="MG"
                                            />
                                        </Card>
                                        <Card bordered={false}>
                                            <Statistic
                                                title="Vitamin D"
                                                value={person[4][0][0]['Vitamin D'].value}
                                                suffix="MCG"
                                            />
                                        </Card>
                                    </Space>
                                    <Space size={[15, 25]} wrap direction='horizontal'>
                                        <Card bordered={false}>
                                            <Statistic
                                                title="Calcium"
                                                value={person[4][0][0]['Calcium'].value}
                                                suffix="MG"
                                            />
                                        </Card>
                                        <Card bordered={false}>
                                            <Statistic
                                                title="Iron"
                                                value={person[4][0][0]['Iron'].value}
                                                suffix="MG"
                                            />
                                        </Card>
                                    </Space>
                                    <Space size={[15, 25]} wrap direction='horizontal'>
                                        <Card bordered={false}>

                                            <Statistic
                                                title="Potassium"
                                                value={person[4][0][0]['Potassium'].value}
                                                suffix="MG"
                                            />
                                        </Card>

                                    </Space>

                                </Space>
                            </Col>
                        </Row></> :''}
                       

                    </Space>

                </Content>
            </Layout>
            <Public_Footer />

        </Layout>

















    )
}

export default PublicHealthDiagnostic;