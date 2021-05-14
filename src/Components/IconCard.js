/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppText } from '.'
import globalStyles from '../../config/GlobalStyles/styles'

const IconCard = ({ name, selected }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.topContainer}>
                <View style={[styles.iconContainer, {backgroundColor: selected ?  globalStyles.red :'white'}]}>

                </View>
                <AppText color={selected ? globalStyles.red : globalStyles.darkBlue } fontSize={15} textAlign='center'>{name}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 150,
        width: 80,
        marginRight: 15
    },
    iconContainer: {
        borderRadius: 50,
        elevation: 2,
        height: 80,
        marginBottom: 5,
        width: 80,
    },
    topContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    }
})

export default IconCard
