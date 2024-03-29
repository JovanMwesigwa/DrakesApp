/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

import styles from './styles.js'
import {AppText, CardInfoComponent, HeaderText, HotSalesComponent, IconCard, IconComponent, ProductCardComponent, SearchComponent} from '../../Components/index'
import globalStyles from '../../../config/GlobalStyles/styles.js';

const iphone = require('../../../assets/iphone.png')

const Home = () => {
    return (
        <ScrollView style={styles.container}> 

            <View style={styles.headerContainer}>  
                <View style={styles.icon} />
                <Entypo name='shopping-cart' size={25} color={globalStyles.darkBlue} />
            </View>
            
            <View style={styles.categoryContainer}> 
                <View style={styles.topContainer}>
                    <HeaderText>Select Category</HeaderText> 
                    <AppText color={globalStyles.red}>View all</AppText>
                </View>
                
                <View style={styles.categories}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <IconCard selected name='Phones' icon='phone-portrait-outline' />
                        <IconCard  name='Computer' icon="laptop-outline" />
                        <IconCard  name='Gifts' icon="ios-gift-outline" />
                        <IconCard  name='Kitchen'  icon="fast-food-outline" />
                        <IconCard  name='Kitchen' icon="fast-food-outline" />
                    </ScrollView>
                </View>

            </View>

            <View style={styles.searchContainer}>  
                <SearchComponent />
            </View>

            <View style={styles.salesContainer}>  

                <View style={styles.topContainer}>
                    <HeaderText>Hot Sales</HeaderText> 
                    <AppText color={globalStyles.red}>See more</AppText>
                </View>

                <View style={styles.hotSalesContainer}>
                    {/* <View style={styles.cardInfo}> */}
                        <CardInfoComponent />
                    {/* </View> */}
                    <Image source={iphone} style={styles.imageStyles}/>
                </View>

            </View>

            <View style={styles.feedContainer}>  

                <View style={styles.topContainer}>
                    <HeaderText>Best Sellers</HeaderText> 
                    <AppText color={globalStyles.red}>See more</AppText>
                </View>

                <View style={styles.productContainer}>
                    <ProductCardComponent />
                </View>

                <View style={styles.productContainer}>
                    <ProductCardComponent />
                </View>

                
            </View>


        </ScrollView>
    )
}

export default Home
