import { View, Image } from 'react-native';
import { Tabs , Redirect} from 'expo-router';

import { icons } from '../../'


const TabIcon = ({}) => {
  return (
    <View>
      <Image 
        source={}
      />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title:'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (

            )
          }}
        
        />
         
      </Tabs>
    </>
  )
}

export default TabsLayout