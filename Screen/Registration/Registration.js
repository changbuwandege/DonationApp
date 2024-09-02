import {View, Text, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import {ScrollView} from 'react-native-gesture-handler';
import Input from '../../component/Input/Input';
import Header from '../../component/Header/Header';
import Button from '../../component/Button/Button';
import { Routes } from '../../navigation/Routes';
import { createUser } from '../../api/user';

const Registration = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'你好，欢迎加入'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'用户名：'}
            placeholder={'请输入你的用户名'}
            onChangeText={val => setName(val)}
          />
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
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {success.length > 0 && <Text style={style.success}>{success}</Text>}
        <View  style={globalStyle.marginBottom24}>
            <Button title={'注册'} onPress={
             async () => {
              let user =  await createUser(name, email, password);
              if(user.error){
                setError(user.error);
              }else{
                setError('');
                setSuccess('你已经注册成功！');
                setTimeout(() => navigation.navigate(Routes.Login), 3000);
              }
            }
            }/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Registration;
