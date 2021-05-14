/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

import globalStyles from '../../config/GlobalStyles/styles'

const IconComponent = ({antDesign, name, red, rounded,}) => {
    return (
        <View style={[styles.container, { borderRadius: rounded ? 20 : 10 ,backgroundColor: red ? globalStyles.red : globalStyles.darkBlue }]}>
            {
                antDesign ? 
                <AntDesign name={name} size={20} color={globalStyles.white} /> :
                <Entypo name={name} size={20} color={globalStyles.white} /> 
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        width: 40,
    }
})

export default IconComponent
