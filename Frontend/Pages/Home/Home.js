import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import {
    useFonts, Inter_300Light, Inter_100Thin
} from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';

function Next() {
 
  navigation.navigate('Clientes')
   
 }
export default function HOME() {
  const navigation = useNavigation();
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
         <Text style={{ color: "#70FFEE", width: 200, fontSize: 32, textAlign: "center" ,top:-35, fontFamily:'Inter_300Light', fontStyle:'italic'}}>Clientes</Text>    
         <Text style={{ color: "white", width: 200, fontSize: 29, textAlign: "center", top:-25, fontFamily:'Inter_300Light',  fontStyle:'italic' }}>Bem-vindo ao cadastramento</Text>
       
       </View>
       <View     /*container box menu */> 
           <View style={{bottom:'15%', alignItems:'center', justifyContent:"center", backgroundColor:'#3680C3', width:180, height:120, borderRadius:25, flexDirection:'row'}}> 
           <View style={{right:'15%'}}>
             <TouchableOpacity>
             <Image source={require('../../assets/Images/home.png')} style={{ width: 64, height: 64, resizeMode: 'contain', tintColor:"#FF6C6C" }} />
               <Text style={styles.texto}>Inicio</Text>
               </TouchableOpacity>
           </View>
           <View style={{
             left: '15%'}} >
             <TouchableOpacity onPress={()=>  navigation.navigate('Clientes')}>
             <Image source={require('../../assets/Images/cartao.png')} style={{ width: 64, height: 64, resizeMode: 'contain' }} />
               <Text style={styles.texto1}>Clientes</Text>
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
     top: '10%'
  
 },
 texto: {
   textAlign: 'center', fontSize:20,color:'#FF6C6C', fontFamily:'Inter_300Light',fontStyle:'italic'
   
 },
 texto1: {
   textAlign: 'center', fontSize:20,color:"white", fontFamily:'Inter_300Light',fontStyle:'italic'
   
 }
});
