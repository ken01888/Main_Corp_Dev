import { Col, MenuProps, Row, Menu, RadioChangeEvent, DrawerProps, Drawer, Button, Space, Segmented, Avatar, List } from 'antd';
import * as React from 'react';

import { AppstoreOutlined, DownloadOutlined, KeyOutlined, MailOutlined, SettingOutlined, SolutionOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Buildings, DotsThreeCircleVertical, HouseLine, Key, Phone } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';



export const Menu_Home = () => {

    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<DrawerProps['placement']>('left');

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };

    return (
        <>
        <Row justify={'space-between'} className='webMenu'>
           

            <Col xs={8} className='menuLogoSide'>
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
            </Col>

     

            <Col xs={10} className='menu'>
            <Link to='/' onClick={showDrawer} className='menuMiddleItems'>
                    Enterprise
                </Link>
                <Link to='/' onClick={showDrawer} className='menuMiddleItems'>
                    Personal
                </Link>
                <Link to='/' onClick={showDrawer} className='menuMiddleItems'>
                    About Us
                </Link>
                <Link to='/' onClick={showDrawer} className='menuMiddleItems'>
                    FAQ
                </Link>
                <Link to='/' onClick={showDrawer} className='menuMiddleItems'>
                    Join
                </Link>
                <Link to='/' onClick={showDrawer} className='menuMiddleItems'>
                    Sign in
                </Link>

           



            </Col>

        </Row>

        <Row justify={'space-between'} className='mobileMenu'>
           

           <Col xs={8} className='menuLogoSide'>
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
           </Col>

    

           <Col xs={8} className='menu'>
          
           Menu



           </Col>

       </Row>


<Drawer
title="Directory"
placement='left'
closable={true}
onClose={onClose}
open={open}
key={placement}
>
{/* <Space >
<Link to={''}>Enroll</Link>
<Link to={''}>Access Your Account</Link>
<Link to={''}>Some contents...</Link>
</Space> */}
<Space direction="vertical">
    <Segmented
        options={[
            {
                label: (
                    <div style={{ padding: 4 }}>
                        <HouseLine size={16} weight="bold" />
                        <div>Home</div>
                    </div>
                ),
                value: 'Home',
            },
            {
                label: (
                    <div style={{ padding: 4 }}>
                        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                        <div>Enroll</div>
                    </div>
                ),
                value: 'Enroll',
            },
            {
                label: (
                    <div style={{ padding: 4 }}>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        <div>Access</div>
                    </div>
                ),
                value: 'Access',
            }
        ]}
    />
    <Segmented
        options={[
            {
                label: (
                    <div style={{ padding: 4 }}>
                        <div>Spring</div>
                        <div>Jan-Mar</div>
                    </div>
                ),
                value: 'spring',
            },
            {
                label: (
                    <div style={{ padding: 4 }}>
                        <div>Summer</div>
                        <div>Apr-Jun</div>
                    </div>
                ),
                value: 'summer',
            },
            {
                label: (
                    <div style={{ padding: 4 }}>
                        <div>Autumn</div>
                        <div>Jul-Sept</div>
                    </div>
                ),
                value: 'autumn',
            },

        ]}
    />
</Space>

</Drawer>
</>
    )
}

