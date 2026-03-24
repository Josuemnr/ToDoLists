import { BrowserRouter, Route, Routes } from "react-router-dom";
import {About, Home, Search, Tasks} from "../pages";
export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/tasks/:id" element={<Tasks />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
}