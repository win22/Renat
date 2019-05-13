import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';
  import colors from '../styles/colors'; 
  import InputField from '../components/forms/InputField';
  import NextArrowButton from  '../components/buttons/NextArrowButton';
  import Notification  from '../components/Notification';

  export default class Login extends Component {
            handleNextButton(){
                    alert('Next Button Pressed');
            }
      render(){
        
          return(
            <KeyboardAvoidingView  
            style={styles.wrapper}
            behavior = 'padding'
            >
            <View style = {styles.scrollViewWrapper}>
                <ScrollView style ={styles.scrollView}>
                    <Text style = {styles.loginHeader}>  
                        Login
                    </Text>
                    <InputField 
                    labelText="Email Address"
                    labelTextSize={14}
                    labelColor = { colors.white} 
                    textColor={colors.white}
                    borderBottomColor = {colors.white}
                    inputType = "email"
                    custonStyle= {{marginBottom: 30}}
                    />

                    <InputField 
                    labelText="Password"
                    labelTextSize={14}
                    labelColor = { colors.white}
                    textColor={colors.white}
                    borderBottomColor = {colors.white}
                    inputType = "password"
                    custonStyle= {{marginBottom: 30}}
                    />
                </ScrollView>
                <View style={styles.NextButton}>
                    <NextArrowButton 
                        handleNextButton={this.handleNextButton}/>
                </View>
                <View>
                    <Notification
                        type="Error"
                        firstLine="Those credentials don't look right."
                        secondLine="Please try again."

                        />
                </View>
            </View>         
            </KeyboardAvoidingView>
          )
          
      }
  }

 const styles = StyleSheet.create({
    wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.green01,
    },
    scrollViewWrapper:{
        marginTop: 70,
        flex: 1,
    },
    loginHeader:{
        fontSize: 34,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,

    },
    scrollView: {
        paddingLeft: 30, 
        paddingRight: 30,
        paddingTop: 20,
    },
    NextButton :{
        alignItems: 'flex-end',
        bottom: 10,
        right: 20,
    },


  })