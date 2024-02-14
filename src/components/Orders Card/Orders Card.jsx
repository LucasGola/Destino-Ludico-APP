import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, } from "react-native";
import timeline from '../../mocks/timeline.json'
import _ from "lodash";

const OrderCard = () => {
    const RenderTimelineItem = (timeline, index) => {
        console.log(timeline)
        if (!_.isNil(timeline.timeline.datatime)) {
            return (
                <View style={styles.timeline}>
                    <Text style={styles.timelineText}>
                        {timeline.timeline.description}
                    </Text>
                    <Text style={styles.timelineText}>
                        {timeline.timeline.datatime}
                    </Text>
                </View>
            );
        } else {
            return (
                <View style={styles.timeline} key={index}>
                    <Text style={styles.timelineText}>{timeline.timeline.description}</Text>
                </View>
            );
        }
    };


    return (
        timeline.cards.map((card) => {
            return (
                <View style={styles.card}>
                    <Text style={styles.cardTitle} key={card.cardId}>{card.cardId}</Text>
                    {card.timeline.map((timeline, index) => {
                        return (
                            <RenderTimelineItem timeline={timeline} index={index} />
                        )
                    })}
                </View>
            )
        })
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#61dafb",
        padding: 10,
        margin: 5,
        borderRadius: 5,
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