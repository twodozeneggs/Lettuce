import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Quizwrapper from './Quizwrapper';
import { Navigation } from 'react-native-navigation';
import { StackActions } from '@react-navigation/native';


const lettuceRestaurants = [
    {
        Name: 'RPM Seafood', 
        minPoints: 22,
        maxPoints: 26
    },
    {
        Name: 'Hub 51', 
        minPoints: 17,
        maxPoints: 21
    },
    {
        Name: 'Beatrix', 
        minPoints: 11,
        maxPoints: 16
    },
    {
        Name: 'Tallboy', 
        minPoints: 6,
        maxPoints: 10
    },
    
]

export default function Results({currentScore, navigation}) {
    
    
    const [resultRestaurant, setResultRestaurant] = useState('');

    useEffect(()=>{
        lettuceRestaurants.map((lettuceRestaurant) => {
            if (currentScore >= lettuceRestaurant.minPoints && currentScore < lettuceRestaurant.maxPoints){
                setResultRestaurant(lettuceRestaurant.Name)
            }
        }) 
    },[currentScore])

    return (
    <View style={styles.restaurant}>
        <Text style={styles.soupTime}>IT'S SOUP TIME 🥳 come join us at</Text>
        <Text style={styles.restaurantText}>{resultRestaurant}</Text>
        <Text style={styles.flavourText}>...for a warm tummy and a big smile during the days three layers isn't enough.</Text>


        {/* <Button style={styles.Again} title="Try Again" onPress={() => navigation.navigate('Quizwrapper')} 
        /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    
    soupTime: {
        color: 'orange',
        fontSize: 42, 
        fontWeight: "500",
        textAlign: 'center'
      },

    restaurantText: {
        padding: 20,
        color: 'lightpink',
        fontSize: 52, 
        fontWeight: "700",
        textAlign: 'center',
      },

      flavourText: {
        color: 'orange',
        fontSize: 25, 
        fontWeight: "500",
        textAlign: 'center'
      },

    
    //   Again: {
    //     padding: 10,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     display: 'flex',
    //     borderRadius: 50/2,
    //     borderWidth: 5,
    //     borderColor: 'lightblue',
    //     backgroundColor: 'lightblue',
    //   },
})