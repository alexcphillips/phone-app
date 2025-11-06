// src/components/BookCard.tsx
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// Props interface
interface BookCardProps {
    title: string;
    cover: string;
    status: "WANT" | "READING" | "DONE";
    rating?: number;
}

// Minimal status badge component
const StatusBadge = ({ status }: { status: "WANT" | "READING" | "DONE" }) => {
    let bgColor;
    switch (status) {
        case "WANT":
            bgColor = "#FFD700"; // yellow
            break;
        case "READING":
            bgColor = "#1E90FF"; // blue
            break;
        case "DONE":
            bgColor = "#32CD32"; // green
            break;
    }
    return (
        <View style={[styles.badge, { backgroundColor: bgColor }]}>
            <Text style={styles.badgeText}>{status}</Text>
        </View>
    );
};

// BookCard component
export default function BookCard({
    title,
    cover,
    status,
    rating,
}: BookCardProps) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: cover }} style={styles.cover} />
            <Text style={styles.title} numberOfLines={2}>
                {title}
            </Text>
            <StatusBadge status={status} />
            {rating !== undefined && (
                <Text style={styles.rating}>Rating: {rating} ★</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 120,
        margin: 8,
    },
    cover: {
        width: 120,
        height: 180,
        borderRadius: 6,
        backgroundColor: "#eee", // placeholder while loading
    },
    title: {
        marginTop: 4,
        fontWeight: "bold",
        fontSize: 14,
    },
    badge: {
        marginTop: 2,
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
        alignSelf: "flex-start",
    },
    badgeText: {
        color: "white",
        fontSize: 12,
    },
    rating: {
        marginTop: 2,
        fontSize: 12,
        color: "#555",
    },
});
