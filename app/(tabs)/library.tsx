import { ScrollView, Text, View } from "react-native";

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
    return (
        <ScrollView
            contentContainerStyle={{
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 8,
            }}
        >
            {libraryBooks.map((book) => (
                <View
                    key={book.id}
                    style={{
                        width: 120,
                        height: 180,
                        backgroundColor: "pink",
                        margin: 8,
                    }}
                >
                    <Text>{book.title}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
