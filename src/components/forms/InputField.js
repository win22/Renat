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
    constructor(props){
        super(props);
        this.state = {
            secureInput: props.inputType === 'text' || props.inputType === 'email'? false : true,
        };
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
    }

    // Methode pour afficher le mot de passe
    toggleShowPassword(){
        this.setState({ secureInput: !this.state.secureInput });
    }
    
    render(){
        const { labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType, custonStyle } = this.props;
        const { secureInput } = this.state;
        //Pour la taille de notre label
        const fontSize = labelTextSize || 14;
        const color = labelColor || colors.white;
        const inputColor = textColor || colors.white;
        const borderBottom = borderBottomColor || 'transparent';
        return(
            <View style={[custonStyle, styles.wrapper]}>
                <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
                {inputType === 'password' ? 
                <TouchableOpacity
                    onPress = {this.toggleShowPassword}
                    style={styles.showButton}>
                    <Text style={styles.showButtonText}>{secureInput ? 'Show' : 'Hide'}</Text>
                </TouchableOpacity>    
                :null }
                <TextInput 
                    style={[{color :inputColor, borderBottomColor : borderBottom},styles.inputField]}
                    secureTextEntry={secureInput}
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
    custonStyle:  PropTypes.object,
};

const styles = StyleSheet.create({
    //Pour l'alignement  des componenr
    wrapper: {
        display: 'flex',
    },
    //Pour les labels
    label: {
        fontWeight: '700',
        marginBottom: 10,
    },
    //Pour les input
    inputField : {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
    },

    showButton: {
            position: 'absolute',
            right: 0,
    },
    showButtonText: {
        color: colors.white,
        fontWeight: '700'
    }

    
});