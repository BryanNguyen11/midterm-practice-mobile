import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {{fontSize:16,fontFamily:'Roboto'}}>Wellcome, Bryan!</Text>
      <Text style = {{fontSize:20,fontFamily:'Roboto',fontWeight:'bold',marginTop:10}}>Choice your best Food !</Text>
      <TextInput style = {{borderWidth:1,borderColor:'gray',width:266,height:46,marginTop:30,padding:10,borderRadius:10,color:'gray',fontSize:20}} placeholder = "Search food" />

        <View style={styles.selectionBar}>
          <TouchableOpacity><View style={{borderWidth:2,borderBlockColor:'gray',width:100,height:35,alignItems:'center',borderRadius:10,backgroundColor:'#F1B000' }}><Text style={{padding:8,fontSize:14,fontWeight:'bold'}}>Donut</Text></View></TouchableOpacity>
          <TouchableOpacity><View style={{borderWidth:2,borderBlockColor:'gray',width:100,height:35,alignItems:'center',borderRadius:10,}}><Text style={{padding:8,fontSize:14,fontWeight:'bold'}}>Pink Donut</Text></View></TouchableOpacity>
          <TouchableOpacity><View style={{borderWidth:2,borderBlockColor:'gray',width:100,height:35,alignItems:'center',borderRadius:10,}}><Text style={{padding:8,fontSize:14,fontWeight:'bold'}}>Floating</Text></View></TouchableOpacity>
        </View>

        <View style={styles.listProd}>
          

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

  }
});
