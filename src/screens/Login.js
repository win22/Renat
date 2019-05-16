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
  import Loader from '../components/Loader';
  export default class Login extends Component {
      constructor(props) {
          super(props);
          this.state = {
              formValid: true,
              validEmail: false,
              emailAddress: '',
              validPassword: false,
              loadingVisible : false,

          }
          this.handleCloseNotification = this.handleCloseNotification.bind(this);
          this.handleEmailChange = this.handleEmailChange.bind(this);
          this.handleNextButton = this.handleNextButton.bind(this);
          this.handlePasswordChange =  this.handlePasswordChange.bind(this);
          this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
      };
      handleNextButton(){
          this.setState({ loadingVisible: true });
          setTimeout(() => {
              if (this.state.emailAddress === 'sagesse@gmail.com' && this.state.validPassword) {
                  alert('success');
                  this.setState({formValid: true,  loadingVisible : false});
              } else {
                  this.setState({formValid: false,  loadingVisible : false});
              }
          }, 2000);
      }
      handleCloseNotification() {
          this.setState({ formValid: true });
      }



      handleEmailChange(email){
          const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          const { validEmail } = this.state;
          this.setState({ emailAddress: email });

          if (!validEmail) {
              if (emailCheckRegex.test(email)) {
                  this.setState({ validEmail: true });
              }
          } else if (!emailCheckRegex.test(email)) {
              this.setState({ validEmail: false });
          }
      }

      /*Methode permettant de valider la longeur du mot de passe*/
      handlePasswordChange(password){
          if(!this.state.validPassword){
              if(password.length > 4) {
                  this.setState({validPassword: true});
              }
          } else if(password <= 4) {
              this.setState({validPassword: false});
          }
      }

      toggleNextButtonState(){
          const { validEmail, validPassword} = this.state;
          if( validEmail && validPassword){
              return false;
          }

          return true;
      }
      render(){
          const { formValid, loadingVisible, validEmail, validPassword  } = this.state;
          const showNotification = formValid ? false : true;
          const background = formValid ? colors.green01 : colors.darkOrange;
          const notificationMarginTop = showNotification ? 10 : 0;
          return(
            <KeyboardAvoidingView
                style={[{ backgroundColor: background }, styles.wrapper]}
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
                    onChangeText = {this.handleEmailChange}
                    showCheckmark={validEmail}
//                    autoFocus={true}
                    />

                    <InputField
                    labelText="Password"
                    labelTextSize={14}
                    labelColor = { colors.white}
                    textColor={colors.white}
                    borderBottomColor = {colors.white}
                    inputType = "password"
                    custonStyle= {{marginBottom: 30}}
                    onChangeText = {this.handlePasswordChange}
                    showCheckmark={validPassword}
                    />
                </ScrollView>
                    <NextArrowButton
                        handleNextButton={this.handleNextButton}
                        disabled={this.toggleNextButtonState()}
                    />
                <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
                    <Notification
                        showNotification={showNotification}
                        handleCloseNotification={this.handleCloseNotification}
                        type="Error: "
                        firstLine="Those credentials don't look right."
                        secondLine="Please try again."
                    />
                </View>
            </View>
            <Loader
                modalVisible={loadingVisible}
                animationType="fade"
            />
            </KeyboardAvoidingView>
          )

      }
  }

 const styles = StyleSheet.create({
    wrapper: {
    display: 'flex',
    flex: 1,

    },
    scrollViewWrapper:{
        marginTop: 70,
        flex: 1,
    },
     scrollView: {
         paddingLeft: 30,
         paddingRight: 30,
         paddingTop: 20,
         flex:1,
     },
    loginHeader:{
        fontSize: 34,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
     notificationWrapper: {
        position: 'absolute',
        bottom: 0,
     }
  });