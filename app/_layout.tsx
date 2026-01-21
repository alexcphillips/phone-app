import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Host } from "react-native-portalize";

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Host>
                <Slot />
            </Host>
        </GestureHandlerRootView>
    );
}
