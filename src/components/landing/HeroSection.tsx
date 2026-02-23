/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
    return (
        <section className="p-4 lg:p-8 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gray-900 shadow-xl min-h-[480px] lg:min-h-[560px] flex flex-col justify-end">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Modern indoor padel court with glass walls"
                        className="w-full h-full object-cover opacity-80"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOaKNl3eMtsGLq9lVnqAZ7sWCCn8XJ6VTpgI0FZq_54P6HTfdXkm3sF59oy-Gr1C6NurIqJrQrUfvLBrbvofC5XRvM8RxnAVUCuVkb8ecig6rzT6DFLoGyTMrlZdGwP-GXEQkcqtF4frBdEurPtLL6Dw6MqtObJ2-RI-ifgRFlMigq_AK1VCDfzL1_WaOH0ASL-wPvwkCc_Uxh6gayXK6-lr0nK2OCGaqblS1kIyW0jMk32tqEWjR05WG99TQUfyJjNj3_s8TukzI7"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                </div>
                <div className="relative z-10 p-6 lg:p-12 flex flex-col gap-5 max-w-2xl">
                    <div className="space-y-3">
                        <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight">
                            Gestiona tu Club de Pádel como un <span className="text-primary">Pro</span>
                        </h1>
                        <p className="text-gray-200 text-base lg:text-lg font-normal leading-relaxed">
                            Automatiza reservas, organiza torneos y simplifica tu facturación en una sola app.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                        <a href="https://wa.me/5493584118627?text=Hola!%20Quiero%20saber%20mas%20info%20sobre%20VersusPadel" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-black font-bold text-lg h-14 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                            <span>Prueba Gratis</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
