import React from "react";
import Navigation from "./Navigation"; // Assuming Navigation component is in the same directory
import StartMessage from "./StartMessage";
import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div id='homepage'>
            <Navigation />
            <StartMessage />
        </div>
    );
}