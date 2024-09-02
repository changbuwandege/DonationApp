import { StyleSheet } from "react-native";
import { scaleFontSize } from "../../assets/styles/scaling";


const style = StyleSheet.create({
    title1: {
        fontFamily: 'Inter',
        fontSize: scaleFontSize(24),
        lineHeight: scaleFontSize(29),
        fontWeight: '800',
        color: 'black',
    },
    title2: {
        fontFamily: 'Inter',
        fontSize: scaleFontSize(18),
        lineHeight: scaleFontSize(22),
        fontWeight: '600',
        color: 'black',
    },
    title3: {
        fontFamily: 'Inter',
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
        fontWeight: '400',
        color: 'black',
    },
})

export default style;