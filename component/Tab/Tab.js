import React,{useRef, useState} from "react";
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";
import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";

const Tab = (props) =>{
    // const textRef = useRef(null);
    const [width, setWidth] = useState(0);
    const paddingHorizontalWidth = 33;
    const tabWidth = {
        width: horizontalScale(paddingHorizontalWidth * 2 + width),
    };
    return (
        <Pressable 
            // disabled={props.isInactive}
            style={[style.tab, props.isInactive && style.inactiveTab, tabWidth]}
            onPress={()=>props.onPress(props.tabId)}
            >
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
            style={[style.title, props.isInactive && style.inactiveTitle]}>{props.title}</Text>
        </Pressable>
    );
};

Tab.default = {
    isInactive: false,
    onPress: ()=>{console.log('没有定义按钮')},
};
Tab.propTypes = {
    tabId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isInactive: PropTypes.bool,
    onPress: PropTypes.func,
};


export default Tab;