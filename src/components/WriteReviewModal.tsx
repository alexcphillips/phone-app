import React, { useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

interface Book {
    id: string;
    title: string;
}

interface WriteReviewModalProps {
    visible: boolean;
    onClose: () => void;
    book: Book;
    onSubmit: (bookId: string, review: string) => void;
}

export default function WriteReviewModal({
    visible,
    onClose,
    book,
    onSubmit,
}: WriteReviewModalProps) {
    const [reviewText, setReviewText] = useState("");

    const handleSubmit = () => {
        if (!reviewText.trim()) return;
        onSubmit(book.id, reviewText);
        setReviewText("");
        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Reviewing: {book.title}</Text>
                    <TextInput
                        placeholder="Write your review..."
                        style={styles.input}
                        multiline
                        value={reviewText}
                        onChangeText={setReviewText}
                    />
                    <Pressable style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Submit Review</Text>
                    </Pressable>

                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <Text style={{ color: "white" }}>Close</Text>
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
        maxHeight: "80%",
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
    },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 8,
        marginBottom: 12,
        minHeight: 80,
    },
    button: {
        backgroundColor: "#007AFF",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 8,
    },
    buttonText: { color: "white", fontWeight: "600" },
    closeButton: {
        backgroundColor: "#FF3B30",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 8,
    },
});
