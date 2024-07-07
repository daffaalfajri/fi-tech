import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import MainPage from "./pages/MainPage";
import DashboardPage from "./pages/dashboard";
import LoginPage from "./pages/login";

export default function App() {

    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/admin" element={<LoginPage />} />

                </Routes>
            </Router>
        </ThemeProvider>
    );
}
