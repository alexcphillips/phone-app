import React, { useState } from "react";
import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import BookDetailsModal from "../../src/components/BookDetailsModal";

const libraryBooks = [
    {
        id: "1",
        title: "Dune",
        cover: "https://covers.openlibrary.org/b/id/8105321-L.jpg",
        status: "READING",
        rating: 4,
    },
    {
        id: "2",
        title: "The Hobbit",
        cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
        status: "DONE",
        rating: 5,
    },
    {
        id: "3",
        title: "1984",
        cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        status: "WANT",
    },
];

export default function LibraryScreen() {
    const [selectedBook, setSelectedBook] = useState<
        (typeof libraryBooks)[0] | null
    >(null);
    const [detailsVisible, setDetailsVisible] = useState(false);

    const openDetails = (book: (typeof libraryBooks)[0]) => {
        setSelectedBook(book);
        setDetailsVisible(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                View your books by Status, Rating, or Date.
            </Text>
            <Text style={styles.subHeader}>
                Filter by Title, Genre, Author, Rating, Status.
            </Text>

            <FlatList
                data={libraryBooks}
                keyExtractor={(item) => item.id}
                numColumns={3}
                contentContainerStyle={styles.grid}
                renderItem={({ item }) => (
                    <Pressable
                        style={styles.card}
                        onPress={() => openDetails(item)}
                    >
                        <Image
                            source={{ uri: item.cover }}
                            style={styles.cover}
                        />
                        <Text numberOfLines={1} style={styles.title}>
                            {item.title}
                        </Text>
                        <View style={styles.statusBadge}>
                            <Text style={styles.statusText}>{item.status}</Text>
                        </View>
                    </Pressable>
                )}
            />

            {selectedBook && (
                <BookDetailsModal
                    visible={detailsVisible}
                    book={selectedBook}
                    onClose={() => setDetailsVisible(false)}
                    onWriteReview={() => {}}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 12, backgroundColor: "#FFF0F5" },
    header: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 4,
        color: "#FF607F",
    },
    subHeader: { fontSize: 14, marginBottom: 12, color: "#FF85A2" },
    grid: { paddingBottom: 100 },
    card: {
        width: 110,
        margin: 6,
        backgroundColor: "white",
        borderRadius: 12,
        overflow: "hidden",
        alignItems: "center",
        shadowColor: "#FF607F",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    cover: { width: 110, height: 150 },
    title: {
        fontSize: 12,
        fontWeight: "600",
        marginTop: 4,
        textAlign: "center",
    },
    statusBadge: {
        backgroundColor: "#FFB6C1",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 8,
        marginTop: 4,
    },
    statusText: { fontSize: 10, color: "black", fontWeight: "600" },
});
