import DeviceInfo from "react-native-device-info";
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

//小屏幕（宽度 ≤ 375 像素）且没有刘海。
const isSmall = (width <= 375) && !DeviceInfo.hasNotch();

//基准宽度计算
const guidelineBaseWidth = () => {
    if(isSmall){
        return 330;
    }
    return 350;
};

//基准高度计算
const guidelineBaseHeight = () => {
    if(isSmall) {
        return 550;
    } else if(width > 410){
        return 620;
    }
    return 680;
};

//基准字体大小计算
const guidelineBaseFonts = () =>{
    if(width > 410){
        return 430;
    }
    return 400;
};

const horizontalScale = size => (width / guidelineBaseWidth()) * size;
const verticalScale = size => (height / guidelineBaseHeight()) * size;
const scaleFontSize = size => Math.round((size * width) / guidelineBaseFonts());

export {horizontalScale, verticalScale, scaleFontSize};