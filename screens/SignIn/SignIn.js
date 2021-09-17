/* Fundamental imports */
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Appearance } from 'react-native';
/* Icons & Buttons  */
import MainIcon from '../../components/icons/main-icon.svg';
import SignInButtonTwitter from '../../components/buttons/signIn/SignInTwitter';
import SignInButtonGoogle from '../../components/buttons/signIn/signInGoogle';
/* Adaptative design helper */
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
/* Better library for handle forms */
import { useForm, Controller } from 'react-hook-form';


/* ColoScheme helper */
const colorScheme = Appearance.getColorScheme();
const textColor =  (colorScheme === "black" ? "white" : "black")

function SignIn({navigation}) {

  return (
    <View style={styles.form}>
      <View>
        <MainIcon width={wp(75)} height={wp(19)} fill={(textColor)} />
        <Text style={{ fontSize: wp(4.6), marginTop: '5%', color: textColor }}>
          ¡Registrate para apoyar a tus creadores favoritos! (Arygameplays)
        </Text>
      </View>
      <SignInForm navigation={navigation}/>
      <View style={{marginTop: wp(10)}}>
      <SignInButtonTwitter />
      <SignInButtonGoogle />
      </View>
    </View>
  );
}

const SignInForm = ({navigation}) => {
  const { control, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onBlur' })
  const onsubmit = data => { return data }
  return (
    <View style={{ marginTop: wp(10) }}>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: { value: /^\S+@\S+$/i, message: 'Este no es un email válido' },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={Forms.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            placeholder="Correo"
            value={value}
          />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && <Text style={{color: textColor}}>Correo inválido</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
          minLenght: 8,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{ ...Forms.input, marginTop: wp(4) }}
            onBlur={onBlur}
            placeholder="Contraseña"
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && <Text style={{color: textColor}}>Contraseña inválida</Text>}
      <TouchableOpacity style={Forms.button} activeOpacity={!isValid ? 1 : 0.7} onPress={() => onsubmit(handleSubmit)} ><Text style={{color: "white"}}>INICIAR SESIÓN</Text></TouchableOpacity>
      <View style={Forms.links}>
        <TouchableOpacity ><Text style={Forms.link} onPress={() => navigation.navigate("RecoverPassword")}>¿Haz olvidado la contraseña?, pendejo</Text></TouchableOpacity>
        <TouchableOpacity ><Text style={{...Forms.link, marginTop: wp(2)}} onPress={() => navigation.navigate("SignUp")} >Registrate para ser mas virgen!</Text></TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  icon: {
    width: '65%',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    marginTop: '7%',
    textAlign: 'center',
  },
});

const Forms = StyleSheet.create({
  input: {
    width: wp(80),
    borderStyle: 'solid',
    borderColor: '#cecece',
    borderWidth: 1.5,
    borderRadius: 7,
  },
  button: {
    maxWidth: wp(80),
    backgroundColor: "#00aff0",
    maxHeight: wp(15),
    borderRadius: 35,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: wp(4.5)
  },
  links: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: wp(15),
    marginTop: wp(13)
  },
  link: {
    color: "#00aff0",
  }
});

export default SignIn;
/*

*/
