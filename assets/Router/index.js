import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  Home  from '../Pages/Home';
import  Profil  from '../Pages/Profil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const IconBottom = (props) => {
    const { color, focused } = props.data
    let colorSelected = focused ? color : '#D2D2D2'
    return (
        <View>
            
            <Image source={props.image} style={{ width: 20, height: 20, tintColor: colorSelected }} />
        </View>
    )
}

const MainApp = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#2DDA93',
            style: { 
                paddingVertical:0,
                height: 50,
             }
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    title: "Dashboard",
                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('../Icons/home.png')} />
                    )
                }}/>
            <Tab.Screen name="Profil" component={Profil}
                options={{
                    title: "Profil",
                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('../Icons/user.png')} />
                    )
                }} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainApp" component={MainApp} 
                options={{ 
                    headerShown : false
                }} 
            />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
