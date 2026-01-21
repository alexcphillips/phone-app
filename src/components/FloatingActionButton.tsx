import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, ViewStyle } from "react-native";

interface FloatingActionButtonProps {
    onPress: () => void;
    style?: ViewStyle | ViewStyle[];
}

export default function FloatingActionButton({
    onPress,
    style,
}: FloatingActionButtonProps) {
    return (
        <Pressable onPress={onPress} style={[styles.button, style]}>
            <Ionicons name="add" size={28} color="white" />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#FF85A2",
        shadowColor: "#FF85A2",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
    },
});
