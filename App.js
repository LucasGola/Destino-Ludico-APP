import React, { useState } from 'react';
import {
    StyleSheet, SafeAreaView, StatusBar, ScrollView, View,
} from 'react-native';
import timeline from './src/mocks/timeline.json'
import Card from './src/components/Orders Card/Orders Card';
import OrderCard from './src/screens/Orders/Orders Screen';

const App = () => {
    return (
        <OrderCard />
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 70,
        margin: 40,
    },
});

export default App;