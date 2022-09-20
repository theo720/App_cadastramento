import { React, Component } from "react";
import { NavigatorContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../Pages/Home/Home";
import { Clientes } from "../../Pages/Clientes/Clientes";

const  Slack = createNativeStackNavigator();
export function StackRoutes() {
    
        
        return (
            <NavigatorContainer>
                <Slack.Navigator>
                <Slack.Screen
                    name="Home"
                     component={Home}
                />
                <Slack.Screen
                    name="clientes"
                    component={Clientes}
                    />
                    </Slack.Navigator>
            </NavigatorContainer>
        );
    
}