import { Ionicons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { Tabs } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Portal } from "react-native-portalize";

export interface Book {
    id: string;
    title: string;
}

export default function TabsLayout() {
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [books] = useState<Book[]>([
        { id: "1", title: "Dune" },
        { id: "2", title: "The Hobbit" },
        { id: "3", title: "1984" },
    ]);

    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["50%"], []);

    useEffect(() => {
        if (!bottomSheetRef.current) return;
        if (bottomSheetVisible) bottomSheetRef.current.expand();
        else bottomSheetRef.current.close();
    }, [bottomSheetVisible]);

    return (
        <View style={{ flex: 1 }}>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { height: 60, backgroundColor: "#FFF0F5" },
                    tabBarActiveTintColor: "#FF607F",
                    tabBarInactiveTintColor: "#FFB6C1",
                }}
            >
                <Tabs.Screen
                    name="feed"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="library"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="book" size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person" size={size} color={color} />
                        ),
                    }}
                />
            </Tabs>

            <Pressable
                style={styles.fab}
                onPress={() => setBottomSheetVisible(true)}
            >
                <Ionicons name="add" size={28} color="white" />
            </Pressable>

            <Portal>
                <BottomSheet
                    ref={bottomSheetRef}
                    index={-1}
                    snapPoints={snapPoints}
                    enablePanDownToClose
                    onClose={() => setBottomSheetVisible(false)}
                >
                    <View style={{ flex: 1, padding: 16 }}>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 18,
                                marginBottom: 12,
                            }}
                        >
                            Select a Book
                        </Text>
                        <FlatList
                            data={books}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <Pressable
                                    onPress={() =>
                                        console.log("Selected", item.title)
                                    }
                                    style={{
                                        padding: 12,
                                        borderBottomWidth: 1,
                                        borderColor: "#eee",
                                    }}
                                >
                                    <Text>{item.title}</Text>
                                </Pressable>
                            )}
                        />
                    </View>
                </BottomSheet>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        bottom: 70,
        left: "50%",
        transform: [{ translateX: -30 }],
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#FF85A2",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
});
