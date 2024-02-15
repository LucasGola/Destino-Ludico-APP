import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, } from "react-native";
import timeline from '../../mocks/timeline.json'
import _ from "lodash";
import Timeline from "react-native-timeline-flatlist";
import images from '../../assets/index'

const OrderCard = () => {
    const data = [
        { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
        { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
        { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
        { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
        { time: '16:30', title: 'Event 5', description: 'Event 5 Description' }
    ]


    return (
        timeline.cards.map((card, index) => {
            return (
                <View style={styles.card} key={index}>
                    {card.timeline.map((timeline, index) => {
                        return (
                            <View>
                                <Text>Testeeee</Text>

                            </View>
                        )
                    })}
                </View>
            )
        })
    );
};

const styles = StyleSheet.create({
    card: {
        // backgroundColor: "#61dafb",
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: 'black'
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    timeline: {
        margin: 10,
    },
    timelineText: {
        color: '#fff'
    },
});

export default OrderCard;