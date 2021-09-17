import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Appearance,
  TextInput
} from 'react-native';
import MainIcon from '../../components/icons/main-icon.svg';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { useForm, Controller } from 'react-hook-form';


const colorScheme = Appearance.getColorScheme();
const textColor = colorScheme === 'black' ? 'white' : 'black';

export default function RecoverPassword({navigation}) {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onBlur' })
    const onsubmit = data => { return data }
  return (
    <View style={{height: wp(180.8), backgroundColor: colorScheme === 'black' ? "black": "white"}}>
      <View style={styles.header}>
        <MainIcon
          height={wp(90)}
          style={{maxHeight: wp(18)}}
          width={wp(90)}
          fill={textColor}
        />
        <Text
          style={{
            fontSize: wp(6.5),
            color: textColor,
            textAlign: 'center',
            marginTop: wp(4.5),
          }}>
          RESTAURAR ACCESO
        </Text>
      </View>
      <View>
        <View>
        <Text
          style={{
            color: textColor,
            fontSize: wp(3.8),
            textAlign: 'center',
            marginHorizontal: wp(1),
          }}>
          Si tienes una cuenta de OnlyFans, recibirás un enlace para restablecer
          la contraseña en este correo electrónico.
        </Text>
        </View>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: { value: /^\S+@\S+$/i, message: 'Este no es un email válido' },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{width: wp(87), marginHorizontal: wp(6.2), marginTop: wp(14)}}>
            <TextInput
            style={styles.placeholder}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            placeholder="Correo"
            value={value}
          />
          <Text style={{marginRight: wp(5), textAlign: "right", color: colorScheme === 'black' ? '#e0e3e6' : '#8A96A3'}}>{value.length}/100</Text>
          {errors.email && <Text style={{color: textColor, position: "relative", bottom: wp(5.5)}}>Correo inválido</Text>}
          </View>
        )}
        name="email"
        defaultValue=""
        />
      </View>
      <View style={styles.buttons}>
          <TouchableOpacity activeOpacity={!isValid ? 1 : 0.7} onPress={(handleSubmit) => onsubmit(handleSubmit)}>
              <Text style={{color: "#00aff0", fontSize: wp(4.5)}}>ENVIAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={{color: textColor, fontSize: wp(4.5), }}>CANCELAR</Text>
          </TouchableOpacity>
      </View>
      <Text style={{
            color: textColor,
            fontSize: wp(4.2),
            textAlign: 'center',
            marginHorizontal: wp(8),
            marginBottom: wp(38)
          }}> Naguevona de mrc JSSJSJA perdiste la contraseña que gei.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: wp(40),
    marginTop: wp(10),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  placeholder: {
      borderWidth: 1.2,
      borderColor: "#cecece",
      borderRadius: 7
},
buttons: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginHorizontal: wp(6),
    position: 'relative',
    top: wp(68)
}
});
