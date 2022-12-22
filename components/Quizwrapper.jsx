import React, { useState, useEffect } from 'react'
import Results from './Results';
import { View, ImageBackground, StyleSheet} from 'react-native';
import BackgroundImage from '../assets/pattern.jpg';
import Soup from './Soup';


const questions = [
    {
  questionText: 'PICK A CITY YOU WOULD LIKE TO JET OFF TO:',
  answerOptions: [
    {answerText: 'Tokyo', points: 2 },
    {answerText: 'Paris', points: 4 },
    {answerText: 'Los Angeles', points: 1 },
    {answerText: 'Nashville', points: 3 }, 
  ]
    },
{
  questionText: 'ON THE SNOWIEST DAY OF THE YEAR, WHICH SHOW ARE YOU BINGING:',
  answerOptions: [
    {answerText: 'Stranger Things', points: 2 },
    {answerText: 'The Crown', points: 4 },
    {answerText: 'House of Cards', points: 1 },
    {answerText: 'Wednesday', points: 3 }, 
  ]
    },
{
  questionText: 'WHAT IS THE FIRST THING YOU REACH FOR IN THE MORNING?',
  answerOptions: [
    {answerText: 'Coffee', points: 1 },
    {answerText: 'Phone', points: 4 },
    {answerText: 'Glasses', points: 2 },
    {answerText: 'TV Remote', points: 3 }, 
  ]
    },
{
  questionText: 'IF YOU COULD BE ANY ANIMAL, WHICH WOULD YOU PICK?',
  answerOptions: [
    {answerText: 'Eagle', points: 1 },
    {answerText: 'Dog', points: 3 },
    {answerText: 'Deer', points: 4 },
    {answerText: 'Monkey', points: 2 }, 
  ]
    },
    {
  questionText: 'IF YOU COULD PICK A SUPERPOWER, WHAT WOULD IT BE?',
  answerOptions: [
    {answerText: 'Invisibility', points: 3 },
    {answerText: 'Mind Reading', points: 4 },
    {answerText: 'Telekinesis', points: 1 },
    {answerText: 'Flight', points: 2 }, 
  ]
    },

    {
  questionText: 'IF YOU WERE TO WRITE A BOOK ABOUT YOUR LIFE, WHAT GENRE WOULD IT BE?',
  answerOptions: [
    {answerText: 'Romance', points: 4 },
    {answerText: 'Thriller', points: 2 },
    {answerText: 'Comedy', points: 3 },
    {answerText: 'Adventure', points: 1 }, 
  ]
    },
  ];

export default function Quizwrapper() {

    const [currentScore, setCurrentScore] = useState(0);
    const [currentScreen, setCurrentScreen] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({0:null,1:null,2:null,3:null,4:null,5:null});



    useEffect(()=>{
        var score=0;
        for(var i=0;i<6;i++){
            var selectedAnswer = selectedAnswers[i];
            if(selectedAnswer !== null){
                score+= questions[i].answerOptions[selectedAnswer].points;
            }
        }
        setCurrentScore(score);

    },[selectedAnswers])

    function RenderPage(){
        if(currentScreen<6){
            return <Soup 
                currentScreen={currentScreen}
                setCurrentScreen={setCurrentScreen}
                selectedAnswers={selectedAnswers}
                setSelectedAnswers={setSelectedAnswers}
                questions={questions}
            ></Soup>;
        }else{
            return <Results
                currentScore={currentScore}
            ></Results>;
        }
    }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
        >
        <RenderPage/>
            
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {   
        flex: 1, 
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
      }, 
    
      backgroundImage:{
        flex: 1,
        width: "100%",
        alignItems:"center",
        justifyContent: "center",
      }, 
    
      titleBox: {
        height: "18%",
        width: "48%",
        paddingTop: 100,
        flexDirection: 'column',
        alignItems: "center",   
      },
    
      title: {
        fontSize: 52, 
        fontWeight: "700",
        flexDirection: 'column',
      },
    
      subtitle: { 
        flexDirection: 'column',
        width: "65%",
        paddingTop: 3,
        paddingBottom: 20,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: null,      
      },
      
      subtitleText: {
        color: 'black',
        fontSize: 24.8,
        fontWeight: '400',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      },
      
      RectangleShapeView: {
        // flex: 3, 
        marginTop: 10,
        marginBottom: 210, 
        width: 170 * 2, 
        height: 400,
        borderColor: 'lightblue',
        borderWidth: 5, 
        backgroundColor: '#FFFFFF',     
      },
    
      RectangleText: {
        paddingTop: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 23,
        letterSpacing: 3,
        fontWeight: '700',
        flexDirection: 'column',
      },
    
      Line: {
        color: 'lightblue',
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: "900",
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      answerText: {
        fontSize: 17, 
        fontWeight: '500',
        marginHorizontal: 10,
        // margin: 2,
        textAlign: 'right',
        alignItems: 'right',
        flexDirection: 'column',
      },
    
      wrapper:{
        flexDirection: 'column',
        justifyContent: "space-evenly",
        textAlign: 'center',
      },
    
      outer: {
        width: 30, 
        height: 30,
        borderWidth: 3, 
        borderRadius: 15, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderColor: 'lightblue',
      },
    
      inner: {
        display: 'flex',
        flexDirection: 'column',
        width: 15, 
        height: 15, 
        backgroundColor: 'lightblue',
        borderRadius: '10',
      },
      optionsContainer: {
        paddingTop: 20,
        width: 'auto',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // paddingHorizontal: 30,
      },
      option: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 60, 
        
      },
      Button: {
        position: 'absolute',
        bottom: 0, 
        left: 0,
        width: 300,
        // justifyContent: 'center',
        // alignItems: 'center',
        // display: 'flex',
        borderRadius: 50/2,
        borderWidth: 5,
        borderColor: 'lightblue',
        backgroundColor: 'lightblue',
      },
    
      buttonText: {
        fontSize: 18, 
        fontWeight: '500',
        letterSpacing: 3,  
    
      }
    
      })
