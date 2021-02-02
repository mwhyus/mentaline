import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICLogo, ILFirst } from '../../assets'

export default function Splash() {
    return (
        <View style={{ backgroundColor: '#FFFFFF'}}>

        <View style={styles.mainLogo}>
          <ICLogo />
        </View>
  
        <View style={styles.illustration}>
          <ILFirst />
        </View>
  
      </View>
    )
}

const styles = StyleSheet.create({
  mainLogo:{
    marginTop: 20,
    width: "100%",
    height: '10%'
  },

  illustration:{
    alignItems: 'center',
    width: '100%',
    height: '90%',
    marginTop: '35%'
  }
    
})
