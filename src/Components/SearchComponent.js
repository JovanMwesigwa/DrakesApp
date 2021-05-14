/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet,  View, TextInput } from 'react-native'
import globalStyles from '../../config/GlobalStyles/styles'

const SearchComponent = () => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Search'
                placeholderTextColor={globalStyles.red}
                style={styles.inputStyles}
            />
            <View style={styles.btn}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 40,
        backgroundColor: globalStyles.red,
        height: 40,
        width: 40,
    },
    container : {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 18,
        justifyContent: 'space-between',
    },
    inputStyles: {
        backgroundColor: globalStyles.white,
        borderRadius: 25,
        paddingLeft: 80,
        width: '80%',
    }
})

export default SearchComponent
