import * as React from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Carousel, Col, Layout, Row } from 'antd'
import {  Menu_Home } from './Components/Menu'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'



let history = createBrowserHistory()

const Home: React.FC = () => {








  return (
    <Layout>
      <Header className='header'>
     
            <Menu_Home />
       
      </Header>

      <Layout className='homeScreenDesktop'>
        <Sider>
          <p>Health,Nohn</p>
        </Sider>
        <Content >
          <p className='headerParagraph'>
            Nutrimap or Nutritional Mapping helps fight malnutrition and improve product quality
            by improving the nutrient content of food products. We help business
            find the manufacturers, distributors and products
            necessary to create nutrient rich products.
          </p>
        </Content>
        <Sider>
          <p className='headerParagraph'>
            Nutrimap or Nutritional Mapping helps fight malnutrition and improve product quality
            by improving the nutrient content of food products. We help business
            find the manufacturers, distributors and products
            necessary to create nutrient rich products.
          </p>
        </Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>

  )
}

export default Home