import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type RootStackParamList = {
    Home: undefined
    AddLift: undefined
}

type Lifts ={
    id: string
    address: string
    lastCheck: string
}

type NavigationHome = NativeStackNavigationProp<RootStackParamList, 'Home'>
type NavigationAddLift = NativeStackNavigationProp<RootStackParamList, 'AddLift'>




export {Lifts, RootStackParamList, NavigationHome, NavigationAddLift}