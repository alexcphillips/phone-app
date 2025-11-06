import { Image, SafeAreaView, Text, View } from "react-native";
import whalePicture from "../../assets/images/whale.png";

export default function ProfileScreen() {
    return (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
            <View style={{ alignItems: "center" }}>
                <Image
                    source={whalePicture}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <Text
                    style={{ fontSize: 24, fontWeight: "bold", marginTop: 8 }}
                >
                    Your Name
                </Text>
                <Text style={{ color: "#666", marginTop: 4 }}>4 friends</Text>
            </View>
        </SafeAreaView>
    );
}
