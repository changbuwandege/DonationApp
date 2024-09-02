import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    imageContainer: {
        // 设置容器的宽高
        width: horizontalScale(130),
        height: verticalScale(130),
    },
    image:{
        width: '100%', // 使图片填充容器宽度
        height: '100%', // 使图片填充容器高度
        borderRadius: horizontalScale(20),
    },
    badge:{
        position: 'absolute',
        zIndex: 1,
        left: horizontalScale(13),
        top: verticalScale(10),
    },
    donationInformation:{
        marginTop: verticalScale(16),
    },
    price: {
        marginTop: verticalScale(5),
    },
})

export default style;