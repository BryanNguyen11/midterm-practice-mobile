import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Alert, Image,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {

  const [products, setProducts] = useState([
    {  name: 'Tasty Donut', image: require('./assets/images/donut_red 1.png'),price:'$10.00',info:'spicy tasty donut fmaily', key: '1' },
    {  name: 'Tasty Donut', image: require('./assets/images/donut_yellow 1.png'),price:'$10.00',info:'spicy tasty donut fmaily', key: '2' },
    {  name: 'Tasty Donut', image: require('./assets/images/donut_red 1.png'),price:'$10.00',info:'spicy tasty donut fmaily', key: '3' },
    {  name: 'Tasty Donut', image: require('./assets/images/donut_yellow 1.png'),price:'$10.00',info:'spicy tasty donut fmaily', key: '4' },
    {  name: 'Tasty Donut', image: require('./assets/images/donut_red 1.png'),price:'$10.00',info:'spicy tasty donut fmaily', key: '5' },
    {  name: 'Tasty Donut', image: require('./assets/images/donut_yellow 1.png'),price:'$10.00',info:'spicy tasty donut fmaily', key: '6' },
    {  name: 'Tasty Donut', image: require('./assets/images/donut_red 1.png'),price:'$10.00',info:'spicy tasty donut fmaily', key: '7' },
    {  name: 'Tasty Donut', image: require('./assets/images/donut_yellow 1.png'),price:'$10.00',info:'spicy tasty donut fmaily', key: '8' },
    {  name: 'Tasty Donut', image: require('./assets/images/donut_red 1.png'),price:'$10.00',info:'spicy tasty donut fmaily', key: '9' },
    {  name: 'Tasty Donut', image: require('./assets/images/donut_yellow 1.png'),price:'$10.00',info:'spicy tasty donut fmaily', key: '10' },  
  ]);
  
  return (
    <View style={styles.container}>
      <Text style = {{fontSize:16,fontFamily:'Roboto'}}>Wellcome, Bryan!</Text>
      <Text style = {{fontSize:20,fontFamily:'Roboto',fontWeight:'bold',marginTop:10}}>Choice your best Food !</Text>
      <TextInput style = {{borderWidth:1,borderColor:'gray',width:266,height:46,marginTop:30,padding:10,borderRadius:10,color:'gray',fontSize:20}} placeholder = "Search food" />

        <View style={styles.selectionBar}>
          <TouchableOpacity onPress={() => {Alert.alert("Thông báo", "Bạn đã nhấn!")}}><View style={{borderWidth:2,borderBlockColor:'gray',width:100,height:35,alignItems:'center',borderRadius:10,backgroundColor:'#F1B000' }}><Text style={{padding:8,fontSize:14,fontWeight:'bold'}}>Donut</Text></View></TouchableOpacity>
          <TouchableOpacity><View style={{borderWidth:2,borderBlockColor:'gray',width:100,height:35,alignItems:'center',borderRadius:10,}}><Text style={{padding:8,fontSize:14,fontWeight:'bold'}}>Pink Donut</Text></View></TouchableOpacity>
          <TouchableOpacity><View style={{borderWidth:2,borderBlockColor:'gray',width:100,height:35,alignItems:'center',borderRadius:10,}}><Text style={{padding:8,fontSize:14,fontWeight:'bold'}}>Floating</Text></View></TouchableOpacity>
        </View>

        <View style={styles.listProd}>
          <FlatList
          data={products}
          renderItem={({ item }) => (
          <View style={styles.Prod}>
          
              <View style={{flexDirection:'row'}}>
                <Image source={item.image} style={{width:100,height:100,borderRadius:10}} />
                <View style={{justifyContent: 'space-around', marginLeft:20}}>
                  <Text style={{fontSize:20,fontFamily:'Roboto',fontWeight:'bold'}}>{item.name}</Text>
                  <Text style={{fontSize:14,fontFamily:'Roboto',fontWeight:'bold',color:'gray'}}>spicy tasty donut fmaily</Text>
                  <Text style={{fontSize:20,fontFamily:'Roboto',fontWeight:'bold'}}>$10.00</Text>
                </View>
                <TouchableOpacity style={{height:25,width:50, borderWidth:1,borderColor:"black",alignItems:'center',marginTop:80}}><Text>View</Text></TouchableOpacity>
              </View> 

          </View>
          )}/>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginr : 10,
    padding : 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  selectionBar:{
    width:340,
    marginTop:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  listProd:{
    flex:1,
    marginTop: 20,

  },
  Prod:{
    width:337,
    height:115,
    marginTop:10,
    padding:8,
    backgroundColor:'#F4DDDD',
    borderRadius:10,
    flexDirection:'row',
  }
});


{/* <Image source={require('./assets/images/donut_yellow 1.png')} style={{height:100,width:100,borderRadius:10}}/>
          
          <View style={{justifyContent: 'space-around', marginLeft:20}}>
            <Text style={{fontSize:20,fontFamily:'Roboto',fontWeight:'bold'}}>Tasty Donut</Text>
            <Text style={{fontSize:14,fontFamily:'Roboto',fontWeight:'bold',color:'gray'}}>spicy tasty donut fmaily</Text>
            <Text style={{fontSize:20,fontFamily:'Roboto',fontWeight:'bold'}}>$10.00</Text>
          </View>

          <TouchableOpacity style={{height:25,width:50, borderWidth:1,borderColor:"black",alignItems:'center',marginTop:80}}><Text>View</Text></TouchableOpacity> */}