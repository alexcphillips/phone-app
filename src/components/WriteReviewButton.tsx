// WriteReviewButton.tsx
import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import SearchBookModal, { Book } from "./SearchBookModal";
import WriteReviewModal from "./WriteReviewModal";

interface WriteReviewButtonProps {
    bookId?: string; // optional, if known
    bookTitle?: string; // optional, can provide title if known
}

export default function WriteReviewButton({
    bookId,
    bookTitle,
}: WriteReviewButtonProps) {
    const [searchModalVisible, setSearchModalVisible] = useState(false);
    const [reviewModalVisible, setReviewModalVisible] = useState(false);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    // Example library
    const sampleBooks: Book[] = [
        { id: "1", title: "Dune" },
        { id: "2", title: "The Hobbit" },
        { id: "3", title: "1984" },
    ];

    const handlePress = () => {
        if (bookId) {
            // called at book level, we know the book and skip the search modal
            setSelectedBook({ id: bookId, title: bookTitle || "" });
            setReviewModalVisible(true);
        } else {
            // called at profile level, need to select book first
            setSearchModalVisible(true);
        }
    };

    const handleSelectBook = (book: Book) => {
        setSelectedBook(book);
        setSearchModalVisible(false);
        setReviewModalVisible(true);
    };

    const handleSubmitReview = (bookId: string, review: string) => {
        console.log("Submitted review for:", bookId, review);
        setReviewModalVisible(false);
    };

    return (
        <>
            <Pressable
                onPress={handlePress}
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.pressed,
                ]}
            >
                <Text style={styles.text}>Write Review</Text>
            </Pressable>

            <SearchBookModal
                visible={searchModalVisible}
                library={sampleBooks}
                onClose={() => setSearchModalVisible(false)}
                onSelectBook={handleSelectBook}
            />

            {selectedBook && (
                <WriteReviewModal
                    visible={reviewModalVisible}
                    onClose={() => setReviewModalVisible(false)}
                    book={selectedBook}
                    onSubmit={handleSubmitReview}
                />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007AFF",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 8,
    },
    pressed: { opacity: 0.6 },
    text: { color: "white", fontWeight: "600", fontSize: 16 },
});
