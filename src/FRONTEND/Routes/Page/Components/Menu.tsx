import { Col, MenuProps, Row, Menu } from 'antd';
import * as React from 'react';

import { AppstoreOutlined, KeyOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Key } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const items: MenuProps['items'] = [
    {
        label: '',
        key: 'logo',
        icon:
            <div className='logo'>
                <div>
                    <div className='logoBlue'></div>
                    <div className='logoBeige'></div>
                </div>
                <div>
                    <div className='logoBeige'></div>
                    <div className='logoBlue'></div>

                </div>
            </div>,
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined />,
        disabled: true,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
        key: 'alipay',
    },
];


export const Menu_Home = () => {

    const [current, setCurrent] = React.useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Row justify={'center'} >
            <Col xs={22} className='menu'>
                <motion.div className='logo'>
                    <div style={{ height: 'fit-content' }}>
                        <div className='logoBlue'></div>
                        <div className='logoBeige'></div>
                    </div>
                    <div style={{ height: 'fit-content' }}>
                        <div className='logoBeige'></div>
                        <div className='logoBlue'></div>

                    </div>
                </motion.div>
                <motion.div className='logo'>
                    
                <div style={{ height: 'fit-content' }}>
                    <Link to='/access'>Get access token</Link>

                </div>
                </motion.div>
            </Col>

        </Row>
    )
}

