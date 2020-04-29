import React, { Component } from 'react';
import { StyleSheet,ScrollView,View } from 'react-native';
import { Tile, ListItem, Icon ,Text} from 'react-native-elements';

import me from '../json/me.json';

// Make a component
const MeScreen = ({ navigation }) => {
    return (
      <View style={style.allback}>
      <ScrollView>
        <Tile
          imageSrc={require('../../assets/user.png')}
          featured
        
          
        />
      <View style={style.back}>
            <ListItem
            title="性別"
            rightTitle={me.gender}
            hideChevron
          />
          <ListItem
            title="身高體重"
            rightTitle={me.login.username}
            hideChevron
          />
          <ListItem
            title="Email"
            rightTitle={me.email}
            hideChevron
          />
           <ListItem
            title="年齡"
            rightTitle={me.location.postcode}
            hideChevron
          />

            <ListItem
            title="Birthday"
            rightTitle={me.dob}
            hideChevron
          />
          <ListItem
            title="疾病史"
            rightTitle={me.location.city}
            hideChevron
          />
           <ListItem
            title="過敏"
            rightTitle={me.location.state}
            hideChevron
          />
          </View>
      </ScrollView>
      </View>
    );
}

const style = StyleSheet.create({
   
  
});
export default MeScreen;
