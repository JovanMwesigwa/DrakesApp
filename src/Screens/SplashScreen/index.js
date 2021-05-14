/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import styles from './styles'

import { AppText } from '../../Components/'

const image = require('../../../assets/splashImage.png')

const AppSplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.imageStyles} />
            </View>
            <View style={styles.infoContainer}>
                <AppText {...styles.headerText}>
                    <AppText {...styles.liveText}>Live</AppText>
                    Store
                </AppText>
                <AppText fontSize={15} textAlign='center' color="#C7BBBB">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</AppText>
                <View style={styles.btn}>
                    <AppText fontSize={20} color="#C7BBBB" fontWeight='700'>Get Started</AppText>
                </View>
            </View>
        </View>
    )
}



export default AppSplashScreen
