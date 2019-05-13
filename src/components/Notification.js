import React , { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../styles/colors'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class Notification extends Component {
   render(){
       const { type, firstLine, secondeLine } = this.props
       return (
           <View>
              <View style={styles.notificationContent}>
                  <Text style={styles.errorText}>{type}</Text>
                  <Text>{firstLine}</Text>
                  <Text>{secondeLine}</Text>
              </View>
           </View>
       )
   } 
}

Notification.propTypes = {
    type: PropTypes.string,
    firstLine: PropTypes.string,
    secondeLine: PropTypes.string,
}

const styles = StyleSheet.create({
    notificationContent : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    errorText : {
        color: colors.darkOrange,
    },
});