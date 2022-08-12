import { StatusBar } from 'expo-status-bar';
import { Button, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import {
    useFonts, Inter_300Light, Inter_100Thin
} from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

export function CADASTRAR() {
  const { control, handleSubmit,  formState: { errors } } = useForm({defaultValues: {
    nome: '',
    idade: '',
    CPF: '',
    endereco: ''
  }})

  const navigation = useNavigation()
    let [fontsLoaded] = useFonts({
        Inter_300Light
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
  }
  function register(data) {
    console.log(data)
  }
    
    return (
      <LinearGradient colors={["#4EBFFF", "#4EBFFF", "black"]}  style={styles.container}  >
        <StatusBar style="hidden" />
        <View style={{ top: '10%', left: '40%' }}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/Images/botao-voltar.png')} style={{ width: 45, height: 45, resizeMode: 'contain' }} />
          </Pressable> 
        </View>
        <View style={styles.cont} > 
          <Image source={require('../../assets/Images/adicionar-usuario.png')} style={{  width:149 , height:149, resizeMode:'contain'}} />
          <Text style={{ color: "white", width: 250, fontSize: 32, textAlign: "center" ,top:'1%', fontFamily:'Inter_300Light', fontStyle:'italic'}}>Novo Cliente</Text>    
        </View>
        
            <View style={styles.But}>
          <View style={{flexDirection:'row'}}>
          <Text style={{ color: "white", width: 80, fontSize:18, textAlign: "center" ,top:'1%', fontFamily:'Inter_300Light', fontStyle:'italic'}}>Nome:</Text>
            <Controller
              control={control}
              name="nome"
              render={({ field: {value, onChange}}) => (
                <TextInput style={styles.Bott} placeholderTextColor='white' placeholder='Seu nome completo' value={value} onChangeText={onChange} />
    )}
            />            
          </View>    
          <View style={{flexDirection:'row', marginTop:'2%'}}>
          <Text style={{ color: "white", width: 80, fontSize:18, textAlign: "center" ,top:'1%', fontFamily:'Inter_300Light', fontStyle:'italic'}}>Idade:</Text>
            <Controller
              control={control}
              name="idade"
              render={({ field: {value, onChange}}) => (
                <TextInput style={styles.Bott} placeholderTextColor='white' placeholder='Coloque a sua idade' value={value} onChangeText={onChange} />
    )}
            />            
          </View> 
          <View style={{flexDirection:'row', marginTop:'2%'}}>
          <Text style={{ color: "white", width: 80, fontSize:18, textAlign: "center" ,top:'1%', fontFamily:'Inter_300Light', fontStyle:'italic'}}>CPF:</Text>
            <Controller
              control={control}
              name="CPF"
              render={({ field: {value, onChange}}) => (
                <TextInput style={styles.Bott} placeholderTextColor='white' placeholder='Coloque o seu CPF' value={value} onChangeText={onChange} />
    )}
            />            
          </View> 
          <View style={{flexDirection:'row', marginTop:'2%'}}>
          <Text style={{ color: "white", width: 80, fontSize:18, textAlign: "center" ,top:'1%', fontFamily:'Inter_300Light', fontStyle:'italic'}}>Endereço:</Text>
            <Controller
              control={control}
              name="endereco"
              render={({ field: {value, onChange}}) => (
                <TextInput style={styles.Bott} placeholderTextColor='white' placeholder='Coloque o seu endereço' value={value} onChangeText={onChange} />
    )}
            />            
      
          </View> 
          <View style={{flexDirection:'row', marginTop:'10%'}}>
            <Pressable style={styles.Bott2} onPress={(handleSubmit(register))}>
                  <Text style={styles.texto2}>Salvar</Text>
                </Pressable>           
          </View>
            </View>
        
 
      </LinearGradient>
    );
  
 }
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, cont: {
    flex: 1,
    alignItems: 'center',
      top: "10%"
   
   },
  But: {
    flex: 1,
    alignItems: 'center',
    bottom: '8%'
      
   
   },
   Bott: {
    
     backgroundColor: '#22BCD1',
     width: 230,
     height: 40,
     borderRadius: 20,
     paddingLeft: 25, 
     color: 'white',
     fontFamily:'Inter_300Light'
  
      
   
   },
   Bott2: {
    
    backgroundColor: '#1A77CD',
    width: 230,
    height: 40,
     borderRadius: 20
    
 
     
  
 },
  texto: {
    textAlign: 'center', fontSize:20,color:'#FF6C6C', fontFamily:'Inter_300Light',fontStyle:'italic'
    
  },
  texto1: {
    textAlign: 'center', fontSize:20,color:"white", fontFamily:'Inter_300Light',fontStyle:'italic'
    
   },
  
   texto2: {
     
 top:'10%',  alignItems:'center', textAlign: 'center', fontSize:20,color:"white", fontFamily:'Inter_300Light',fontStyle:'italic'
    
  }
 });
 