import React,{useRef, useState} from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";

const Badge = (props) =>{
    // const textRef = useRef(null);
    const [width, setWidth] = useState(0);
    const paddingHorizontalWidth = 10;
    const tabWidth = {
        width: horizontalScale(paddingHorizontalWidth * 2 + width),
    };
    return (
        <View style={[style.badge, tabWidth]}>
            <Text
            onTextLayout={ event =>{
                const lines = event.nativeEvent.lines;
                if (lines && lines.length > 0) {
                    setWidth(lines[0].width);
                } else {
                    console.warn("No lines available in the event");
                }
            }}
            // ref={textRef}
            style={style.title}>{props.title}</Text>
        </View>
    );
};


Badge.propTypes = {
    title: PropTypes.string.isRequired,
};


export default Badge;