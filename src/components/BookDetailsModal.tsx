import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface BookDetailsModalProps {
    visible: boolean;
    book: any;
    onClose: () => void;
    onWriteReview: () => void;
}

export default function BookDetailsModal({
    visible,
    book,
    onClose,
    onWriteReview,
}: BookDetailsModalProps) {
    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>{book.title}</Text>
                    {/* Add author, status, cover image if you want */}

                    <Pressable
                        style={styles.reviewButton}
                        onPress={onWriteReview}
                    >
                        <Text style={styles.buttonText}>Write a Review</Text>
                    </Pressable>

                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeText}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        maxHeight: "70%",
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#FF607F",
    },
    reviewButton: {
        backgroundColor: "#FF85A2",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginBottom: 12,
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 16,
    },
    closeButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#FFB6C1",
    },
    closeText: {
        color: "#FF607F",
        fontWeight: "600",
    },
});
