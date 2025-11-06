import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FeedScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
            <Text>Feed works!</Text>
        </SafeAreaView>
    );
}
