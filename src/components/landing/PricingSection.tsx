const planFeatures = [
    "Gestión ilimitada de canchas y reservas",
    "Torneos: fixtures, categorías e inscripciones",
    "Notificaciones por Email",
    "Módulo de tienda/POS integrado",
    "Reportes y caja diaria",
    "Soporte técnico especializado",
];

export default function PricingSection() {
    return (
        <section id="pricing" className="bg-white py-16 lg:py-24 border-t border-slate-100">
            <div className="px-4 lg:px-8 max-w-6xl mx-auto space-y-12">
                <div className="space-y-3 max-w-2xl text-center mx-auto">
                    <h2 className="text-slate-900 text-3xl lg:text-4xl font-black tracking-tight">
                        Plan Simple y Transparente
                    </h2>
                    <p className="text-slate-500 text-sm lg:text-base font-medium">
                        Todo lo que tu club necesita, sin letras pequeñas ni costos ocultos.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-200 w-full max-w-lg relative overflow-hidden group hover:border-primary/50 transition-colors">
                        {/* Top highlight bar */}
                        <div className="absolute top-0 left-0 right-0 h-[6px] bg-primary" />

                        <div className="text-center mb-8 mt-2">
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Suscripción All-in-One</h3>
                            <p className="text-slate-500 font-medium text-sm">Acceso completo a todas las funcionalidades del sistema.</p>

                            <div className="mt-8 flex items-baseline justify-center gap-1">
                                <span className="text-6xl font-black text-slate-900 tracking-tighter">$20</span>
                                <span className="text-lg font-bold text-slate-400">/mes</span>
                            </div>
                            <div className="text-primary font-black uppercase tracking-widest text-xs mt-1">USD</div>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100 text-left">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Qué incluye</p>
                            <ul className="space-y-4">
                                {planFeatures.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary !text-[18px] shrink-0 font-bold mt-0.5">
                                            check
                                        </span>
                                        <span className="text-sm font-medium text-slate-700 leading-tight">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full py-4 rounded-xl bg-slate-900 hover:bg-black text-white text-lg font-black transition-all active:scale-[0.98] shadow-lg shadow-slate-900/20">
                            Comenzar Ahora
                        </button>

                        <p className="text-center text-xs font-medium text-slate-400 mt-4">
                            Cancela en cualquier momento. Sin tarjeta requerida.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
