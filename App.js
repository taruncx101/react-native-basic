/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Tarun Kumar Gorai,\n' +
    ':)  :) :) :)',
});

type Props = {};
class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

export default class App extends Component {
  render() {
    return (
        <FlexDimensionsBasics/>
        // <Basic/>
    );
  }
}

class Basic extends Component{
    render(){
        return(<View >
            <View >
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Text/>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
                <Text/>
                <View style={styles.container}>
                    <Blink text='I love to blink' />
                    <Blink text='Yes blinking is so great' />
                    <Blink text='Why did they ever take this out of HTML' />
                    <Blink text='Look at me look at me look at me' />
                    <Text/>
                    <Text style={styles.red}>just red</Text>
                    <Text style={styles.bigBlue}>just bigBlue</Text>
                    <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
                    <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
                    <Text/>
                </View>

            </View>
            <View>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
            </View>

        </View>)
    }
}

class FlexDimensionsBasics extends Component {
    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                    </View>
                </View>

            </View>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

    }

    componentDidMount(){
        // Toggle the state every second
        // setInterval(() => (
        //     this.setState(previousState => (
        //         { isShowingText: !previousState.isShowingText }
        //     ))
        // ), 1000);
    }

    render() {
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text>{this.props.text}</Text>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});
