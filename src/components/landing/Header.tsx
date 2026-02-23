"use client";

import { useState, useEffect } from "react";

const navLinks = [
    { label: "Características", href: "#features" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Precios", href: "#pricing" },
    { label: "Contacto", href: "#contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add shadow on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menu on Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const handleNavClick = () => setMenuOpen(false);

    return (
        <>
            <header
                className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow duration-200 ${scrolled ? "shadow-sm" : ""
                    }`}
            >
                <div className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto w-full">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="text-primary flex items-center justify-center p-1">
                            <span className="material-symbols-outlined !text-2xl">sports_tennis</span>
                        </div>
                        <span className="text-slate-900 text-lg font-black tracking-tight">
                            Versus <span className="text-primary">Padel</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-150"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <a
                        href="#pricing"
                        className="hidden md:inline-flex bg-primary hover:bg-primary-dark text-black font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-150 active:scale-[0.98]"
                    >
                        Prueba Gratis
                    </a>

                    {/* Hamburger (mobile) */}
                    <button
                        className="md:hidden p-2 -mr-2 text-slate-700 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={menuOpen}
                    >
                        <span className="material-symbols-outlined">
                            {menuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </header>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            </div>

            {/* Mobile drawer */}
            <div
                className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl flex flex-col md:hidden transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                aria-label="Menú de navegación"
            >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <a href="#" className="flex items-center gap-2" onClick={handleNavClick}>
                        <span className="text-slate-900 font-black tracking-tight">
                            Versus <span className="text-primary">Padel</span>
                        </span>
                    </a>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Cerrar menú"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Drawer links */}
                <nav className="flex flex-col px-4 py-6 gap-1 flex-grow">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleNavClick}
                            className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 font-medium text-base hover:bg-gray-50 hover:text-slate-900 transition-colors duration-150"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Drawer CTA */}
                <div className="px-4 pb-8">
                    <a
                        href="#pricing"
                        onClick={handleNavClick}
                        className="block w-full text-center bg-primary hover:bg-primary-dark text-black font-bold py-3.5 rounded-xl transition-all duration-150 active:scale-[0.98]"
                    >
                        Prueba Gratis
                    </a>
                </div>
            </div>
        </>
    );
}
