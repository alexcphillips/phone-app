import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import whalePicture from "../../assets/images/whale.png";

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <Image source={whalePicture} style={styles.avatar} />
                <Text style={styles.name}>Cool Whale</Text>
                <View style={styles.stats}>
                    <Text style={styles.statText}>4 million friends</Text>
                    <Text style={styles.statText}>2 million books read</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "white", // #FFF0F5 very light pink background
    },
    topSection: {
        alignItems: "center",
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#FFB6C1", // soft pink border
        borderStyle: "solid",
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#FF85A2", // pink accent border
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 8,
        color: "#FF607F", // primary pink
    },
    stats: {
        marginTop: 4,
        alignItems: "center",
    },
    statText: {
        color: "#FF85A2", // softer pink for stats
        fontWeight: "500",
    },
});
