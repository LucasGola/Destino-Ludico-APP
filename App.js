import React, { useState } from 'react';
import {
    StyleSheet, SafeAreaView, StatusBar, ScrollView,
} from 'react-native';
import timeline from './src/mocks/timeline.json'
import Card from './src/components/Orders Card/Orders Card';

const App = () => {
    return (
        <ScrollView>
            <SafeAreaView
                style={styles.mainContainer}
            >
                <StatusBar
                    backgroundColor="#61dafb"
                />
                <Card />
            </SafeAreaView >
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 70,
        margin: 40,
    },
});

export default App;