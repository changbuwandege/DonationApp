import React from "react";
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";
import style from "./style";

const Button = (props) =>{
    return (
        <Pressable 
            disabled={props.isDisabled} 
            style={[style.button, props.isDisabled && style.isDisabled]}
            onPress={()=>props.onPress()} 
            >
            <Text style={style.title}>{props.title}</Text>
        </Pressable>
    )
}

Button.default = {
    isDisabled: false,
    onPress: ()=>{console.log("Press")},
};
Button.propTypes = {
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func,
}


export default Button;