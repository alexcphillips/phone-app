import BottomSheet from "@gorhom/bottom-sheet";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

interface Props {
    visible: boolean;
    library: any[];
    onClose: () => void;
    onSelectBook: (book: any) => void;
}

export default function SearchBookBottomSheet({
    visible,
    library,
    onClose,
    onSelectBook,
}: Props) {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["50%", "70%"], []);

    const [query, setQuery] = useState("");
    const [filteredBooks, setFilteredBooks] = useState<any[]>(library);

    useEffect(() => {
        setFilteredBooks(
            library.filter((b) =>
                b.title.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, library]);

    // Imperatively open/close bottom sheet when `visible` changes
    useEffect(() => {
        if (!bottomSheetRef.current) return;
        if (visible) bottomSheetRef.current.expand();
        else bottomSheetRef.current.close();
    }, [visible]);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1} // start closed
            snapPoints={snapPoints}
            enablePanDownToClose
            onClose={onClose}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Select a Book</Text>
                <TextInput
                    placeholder="Search by title..."
                    value={query}
                    onChangeText={setQuery}
                    style={styles.input}
                />
                <FlatList
                    data={filteredBooks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Pressable
                            style={styles.bookItem}
                            onPress={() => {
                                onSelectBook(item);
                                setQuery("");
                            }}
                        >
                            <Text>{item.title}</Text>
                        </Pressable>
                    )}
                />
                <Pressable style={styles.closeButton} onPress={onClose}>
                    <Text style={{ color: "white" }}>Close</Text>
                </Pressable>
            </View>
        </BottomSheet>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 8,
        marginBottom: 12,
    },
    bookItem: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    closeButton: {
        marginTop: 12,
        backgroundColor: "#007AFF",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
});
