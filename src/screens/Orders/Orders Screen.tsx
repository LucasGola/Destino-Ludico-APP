import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, } from "react-native";
import timeline from '../../mocks/timeline.json'
import _ from "lodash";
import images from "../../assets";

const OrderCard = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                backgroundColor="#61dafb"
            />
            {timeline.cards.map((card) => {
                return (
                    <View>
                        <View style={styles.card}>
                            <Image source={images[card.jogo]} style={styles.image} />
                            <Text style={styles.cardTitle}>Pedido Nº: {card.cardId}</Text>
                        </View>
                        <View>
                            <Text>{card.timeline[card.timeline.length - 1].description}</Text>
                            <Text>{card.timeline[card.timeline.length - 1].datetime}</Text>
                        </View>
                    </View>

                )
            })}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: 1
    },
    mainContainer: {
        marginTop: 50,
        margin: 30,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlignVertical: 'center'
    },
    timeline: {
        margin: 10,
    },
    timelineText: {
        color: '#fff'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 20,
        margin: 5
    },
});

export default OrderCard;