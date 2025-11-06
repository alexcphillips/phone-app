import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        // wait a tick so root layout mounts
        const id = setTimeout(() => {
            router.replace("/feed");
        }, 0);

        return () => clearTimeout(id);
    }, [router]);

    return null;
}
