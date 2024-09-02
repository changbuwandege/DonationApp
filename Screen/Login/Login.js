import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import {ScrollView} from 'react-native-gesture-handler';
import Input from '../../component/Input/Input';
import Header from '../../component/Header/Header';
import Button from '../../component/Button/Button';
import { Routes } from '../../navigation/Routes';
import { loginUser } from '../../api/user';
import { useDispatch } from 'react-redux';
import logIn from '../../redux/reducers/User';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  //   console.log(email);
  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'欢迎回来'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'邮箱：'}
            placeholder={'请输入你的邮箱地址'}
            keyboardType={'email-address'}
            onChangeText={val => setEmail(val)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            secureTextEntry={true}
            label={'密码：'}
            placeholder={'******'}
            onChangeText={val => setPassword(val)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button title={'登录'} onPress={
          async () =>{
            let user = await loginUser(email, password);
            if(!user.state){
              setError(user.error);
            }else{
              setError('');
              dispatch(logIn(user.data));
              navigation.navigate(Routes.Home);
            }
            }
          }/>
        </View>
        <Pressable 
        style={style.registrationButton} 
        onPress={() => {
            navigation.navigate(Routes.Registration);
        }}
        >
          <Header type={3} title={'还没有账号？'} color={'#156CF7'} />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Login;
