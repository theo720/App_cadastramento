import { StatusBar } from 'expo-status-bar';
import { Button, Image, Pressable, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import {
    useFonts, Inter_300Light, Inter_100Thin
} from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';

export function CLIENTES(props) {
  const navigation = useNavigation()
    let [fontsLoaded] = useFonts({
        Inter_300Light
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    
    return (
      <LinearGradient colors={["#4EBFFF", "#4EBFFF", "black"]} style={styles.container}  >
        <View style={styles.cont} >
          <StatusBar style="hidden" />
          <Image source={require('../../assets/Images/logo.png')} style={{ width:256 , height:256, resizeMode:'contain'}} />
          <Text style={{ color: "#70FFEE", width: 250, fontSize: 32, textAlign: "center" ,top:-35, fontFamily:'Inter_300Light', fontStyle:'italic'}}>Opções de cadastramento</Text>    
           </View>
        <View style={styles.But} /*container box Botões */>
          <View> 
            <Pressable onPress={ ()=> props.navigation.navigate('Cadastrar')} style={styles.Bott}>
              <Text style={styles.texto2}>Novo Cliente</Text>
            </Pressable>
          </View>
          <View style={{marginTop:'5%'}}> 
            <Pressable style={styles.Bott2}>
              <Text style={styles.texto2}>Lista de clientes</Text>
            </Pressable>
          </View>
        </View>
        <View     /*container box menu */> 
            <View style={{bottom:"15%", alignItems:'center', justifyContent:"center", backgroundColor:'#3680C3', width:180, height:120, borderRadius:25, flexDirection:'row'}}> 
            <View style={{right:'15%'}}>
              <TouchableOpacity onPress={()=> navigation.goBack()}>
              <Image source={require('../../assets/Images/home.png')} style={{ width: 64, height: 64, resizeMode: 'contain' }} />
                <Text style={styles.texto1}>Inicio</Text>
                </TouchableOpacity>
            </View>
            <View style={{
              left: '15%'}} >
              <TouchableOpacity >
              <Image source={require('../../assets/Images/cartao.png')} style={{ width: 64, height: 64, resizeMode: 'contain',tintColor:"#FF6C6C" }} />
                <Text style={styles.texto}>Clientes</Text>
                </TouchableOpacity>
            </View>
            
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
      top: "5%"
   
   },
  But: {
    flex: 1,
    alignItems: 'center',
    top: '10%'
      
   
   },
   Bott: {
    
     backgroundColor: '#1F888E',
     width: 230,
     height: 40,
     borderRadius:20
  
      
   
   },
   Bott2: {
    
    backgroundColor: '#2F7297',
    width: 230,
    height: 40,
    borderRadius:20
 
     
  
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
 