import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    TextInput,
    StyleSheet, 
    TouchableOpacity,
} from 'react-native'
import colors from '../../styles/colors';

export default class InputField extends Component {
    render(){
        const { labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType } = this.props;
        //Pour la taille de notre label
        const fontSize = labelTextSize || 14;
        const color = labelColor || colors.white;
        const inputColor = textColor || colors.white;
        const borderBottom = borderBottomColor || 'transparent';
        return(
            <View style={styles.wrapper}>
                <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
                <TextInput 
                    style={[{color :inputColor, borderBottomColor : borderBottom},styles.inputField]}
                    secureTextEntry={inputType === 'password'}
                    />
            </View>
        );

    }
}
InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor:  PropTypes.string,
    borderBottomWidth: PropTypes.string,
    inputType: PropTypes.string,
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },
    label: {
        fontWeight: '700',
        marginBottom: 10,
    },
    inputField : {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,




    }

    
});