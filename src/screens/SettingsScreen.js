import React from "react";
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

// Make a component
const SettingsScreen = ({ navigation }) => {
    return (
        <ScrollView style={{paddingTop: 44}}>
            <ListItem
              title="離線模式"
              rightIcon={{name:'do-not-disturb'}}
            />
            <ListItem
              title="文字大小"
              rightIcon={{name:'arrow-forward'}}

            />
            <ListItem
              title="藍芽控制器"
              rightIcon={{name:'arrow-forward'}}
            />
            <ListItem
              title="Siri語音捷徑"
              rightIcon={{name:'arrow-forward'}}
            />
            <ListItem
              title="登出"
              rightIcon={{ name: 'cancel' }}
            />
        </ScrollView>
    );
}

export default SettingsScreen;
