import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const Soup = ({questions, currentScreen, setCurrentScreen, selectedAnswers, setSelectedAnswers}) => {
  function handleOptionClick(i){
    console.log('current score',i);
    setSelectedAnswers({
      ...selectedAnswers,
      [currentScreen]:i,
    });
  }
  useEffect(()=>{
    console.log(selectedAnswers);
  },[selectedAnswers])

  function handleNextQuestion(){
    console.log('current screen',currentScreen+1);
    setCurrentScreen(currentScreen+1);
  }
  
  return (
    <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Q U I Z</Text>
        </View>

        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>Take our soup quiz to find out which soup you should have for dinner.</Text>
        </View>

        <View style={styles.wrapper}>
        <View style={styles.RectangleShapeView}>
          <Text style={styles.RectangleText}>{questions[currentScreen].questionText}</Text>
          <View style={styles.Line}></View>

          {/* <TouchableOpacity style={styles.outer}> */}
          <View style={styles.optionsContainer}>
            {questions[currentScreen].answerOptions.map((answerOption, i) => (
            <View style={styles.option} key={answerOption.answerText}>
              <TouchableOpacity style={styles.outer} onPress={() => handleOptionClick(i)} key={i}>
                {i=== selectedAnswers[currentScreen] && <View style={styles.inner}></View>}
              </TouchableOpacity>
              <Text style={styles.answerText}>{answerOption.answerText}</Text>
            </View>
            ))}
          </View>
          {/* </TouchableOpacity> */}
            
          <TouchableOpacity style={styles.Button} onPress={()=>handleNextQuestion()}>
            <Text style={styles.buttonText}>NEXT QUESTION</Text>
          </TouchableOpacity>
        </View>
        </View>
          
     
    </View>
    )
}

export default Soup

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
    // flex: 2, 
    flexDirection: 'column',
    // height: '40%',
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
    justifyContent: 'center',
    
  },

  Line: {
    width: 280, 
    position: 'absolute',
    left: 25,
    bottom: 245,
    borderBottomWidth: 5,
    borderColor: 'lightblue',
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
    position: 'absolute',
    bottom: 50,
    left: 0, 
    // paddingTop: 20,
    width: 'auto',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 60, 
    
  },
  Button: {
    width: 260,
    height: 50,
    position: 'absolute',
        bottom: -26 , 
        left: 35,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 50/2,
    borderWidth: 5,
    borderColor: 'lightblue',
    backgroundColor: 'lightblue',
  },

  buttonText: {
    fontSize: 18, 
    fontWeight: '700',
    letterSpacing: 2, 
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', 

  }

  })