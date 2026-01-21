import { StyleSheet } from "react-native";

interface FeedItemProps {
    title: string;
    cover: string;
    status: "WANT" | "READING" | "DONE";
    rating?: number;
}

export default function FeedItem({}: FeedItemProps) {}

const styles = StyleSheet.create({
    card: {
        width: 120,
        margin: 8,
    },
});
