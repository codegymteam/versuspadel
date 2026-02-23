export default function Footer() {
    return (
        <footer className="bg-slate-900 py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <div className="text-primary flex items-center justify-center py-1">
                        <span className="material-symbols-outlined !text-xl">sports_tennis</span>
                    </div>
                    <span className="text-white font-black tracking-tight text-sm">Versus Padel</span>
                </div>

                <p className="text-slate-400 font-medium text-sm text-center md:text-right">
                    © {new Date().getFullYear()} Versus Padel. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
