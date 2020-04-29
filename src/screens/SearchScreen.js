import React from "react";
import { StyleSheet,ScrollView ,View} from 'react-native';
import { ListItem ,Text} from 'react-native-elements';

// Make a component
const SearchScreen = ({ navigation }) => {
    return (
        <ScrollView style={{paddingTop: 44}}>
         
            <ListItem
              title="l"
              leftIcon={{name:'search'}}
            />
            
      <Text style={style.bottom}>Contact us :（02）1234-5678</Text>
        </ScrollView>
    );
}


const style = StyleSheet.create({
  
  bottom:{
    marginTop:480,
    marginLeft:90
  },

  title:{
    width:120,
    height:22,
    marginTop:-20,
    marginLeft:80,
    fontSize:18,
    
    color:'#000',
    fontWeight:'bold'
  },
 
  cardContainerStyle: {
    height:100,                                           
        backgroundColor:'#f8f8f8',
  },
  cardSectionStyle: {
    
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 80,
    width: 80
  }
});
export default SearchScreen;
