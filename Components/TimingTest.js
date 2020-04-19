// Components/Test.js

import React from 'react'
import { StyleSheet, View,Platform ,Animated,Easing } from 'react-native'


class TimingTest extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            topPosition: new Animated.Value(0),

        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.topPosition,
            {
                toValue: 100,
                duration: 3000, // Le temps est en milliseconds ici (3000ms = 3sec)
                easing: Easing.linear,
            }
        ).start() // N'oubliez pas de lancer votre animation avec la fonction start()
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Animated.View style={[styles.animation_view, { top: this.state.topPosition}]}></Animated.View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subview_container: {
        ...Platform.select({
            ios:{
                backgroundColor:'red',
                height:50,
                width:100,


            },
            android:{
                backgroundColor:'blue',
                height:100,
                width:50,
            }}

        )  },
    animation_view: {
        backgroundColor: 'red',
        width: 100,
        height: 100
    }



})

export default TimingTest