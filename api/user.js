import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

export const createUser = async (name, email, password) =>{
    try{
        console.log(email,password);
        const user = await auth().createUserWithEmailAndPassword(email,password);
        await user.user.updateProfile({displayName: name});
        console.log(user);
        return user;
    }catch(error){
        if(error.code === 'auth/email-already-in-use'){
            return {error:'邮箱已被注册！'};
        }else if(error.code === 'auth/invalid-email'){
            return {error:'请输入正确格式的邮箱！'};
        }
        return {error: '请求出现了问题。'};
    }
}

export const loginUser = async (email, password) => {
    try{
        const response = await auth().signInWithEmailAndPassword(email, password);
        const token = response.user.getIdToken();
        return{
            status: true,
            data: {
                displayName: response.user.displayName,
                email: response.user.email,
                token,
            }
        }
    }catch(error){
        return {status: false, error: error.message}
    }
}