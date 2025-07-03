// src/Components/RouteLoader.jsx or .tsx
import { useNavigation } from "react-router-dom";
import "../loader/loader.css"

const RouteLoader = () => {
    const navigation = useNavigation();

    if (navigation.state === "idle") return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white/80 backdrop-blur-md">
            <div className="loader"></div>
        </div>
    );
};

export default RouteLoader;
