import { StyleSheet } from "react-native"
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    label:{
        fontFamily: 'Inter',
        fontWeight: '400',
        color: '#36455A',
        fontSize: scaleFontSize(12),
        lineHeight: scaleFontSize(15),
    },
    input:{
        paddingVertical: verticalScale(12),
        borderBottomWidth: 1,
        borderBottomColor: 'reba(167, 167, 167, 0.5)',
        
    }
});

export default style;