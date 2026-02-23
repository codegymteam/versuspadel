export default function DashboardSection() {
    const barHeights = ["40%", "65%", "50%", "80%", "95%", "70%"];
    const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    return (
        <section id="dashboard" className="bg-white py-16 lg:py-24">
            <div className="px-4 lg:px-8 max-w-6xl mx-auto space-y-12">
                <div className="space-y-3 max-w-2xl text-center mx-auto">
                    <h2 className="text-slate-900 text-3xl lg:text-4xl font-black tracking-tight">
                        Dashboard &amp; Analytics
                    </h2>
                    <p className="text-slate-500 text-sm lg:text-base font-medium">
                        Toma decisiones basadas en datos reales de tu club.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Chart Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-md shadow-slate-200/50 border border-slate-200">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h4 className="text-base font-bold text-slate-900">
                                    Ingresos Mensuales
                                </h4>
                                <div className="flex items-center gap-1 text-xs bg-primary/10 text-primary-dark px-2.5 py-1.5 rounded-lg font-bold">
                                    <span className="material-symbols-outlined !text-[14px]">moving</span>
                                    +15%
                                </div>
                            </div>
                            <div className="h-48 flex items-end justify-between gap-3 px-1">
                                {barHeights.map((height, i) => (
                                    <div
                                        key={i}
                                        className={`w-full rounded-md transition-all duration-300 relative group cursor-pointer ${i === 4
                                            ? "bg-primary shadow-[0_4px_16px_rgba(19,236,91,0.3)]"
                                            : "bg-slate-100 hover:bg-primary/40"
                                            }`}
                                        style={{ height }}
                                    >
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between text-xs text-slate-400 font-semibold px-2">
                                {days.map((d) => (
                                    <span key={d}>{d}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats + Checklist Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-md shadow-slate-200/50 border border-slate-200 flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-3">
                                    <span className="material-symbols-outlined">trending_up</span>
                                </div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Ventas</p>
                                <p className="text-3xl font-black text-slate-900 tracking-tight">87%</p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-3">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Reservas</p>
                                <p className="text-3xl font-black text-slate-900 tracking-tight">$12k</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-600 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary-dark !text-[14px] font-bold">check</span>
                                    </div>
                                    Métricas de venta de productos
                                </li>
                                <li className="flex items-center gap-3 text-slate-600 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary-dark !text-[14px] font-bold">check</span>
                                    </div>
                                    Reportes de ingresos por reservas
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
