import React from "react";

export default function PlayerAppSection() {
    return (
        <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
            <div className="px-4 lg:px-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* App Mockup */}
                    <div className="order-2 lg:order-1 relative mx-auto lg:mx-0 w-full max-w-[320px]">
                        {/* Decorative background shape */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-3xl rounded-full" />

                        <div className="relative bg-slate-50 border-[6px] border-slate-900 rounded-[2.5rem] h-[600px] shadow-2xl overflow-hidden flex flex-col">
                            {/* App Header */}
                            <div className="bg-white px-5 pt-8 pb-4 shadow-sm z-10 text-center">
                                <h4 className="font-black text-slate-900 text-lg">Versus Padel</h4>
                                <p className="text-xs text-slate-500 font-medium">Reservas & Torneos</p>
                            </div>

                            {/* App Body */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-5 scrollbar-hide">

                                {/* Booking Card */}
                                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h5 className="font-bold text-slate-900 text-sm">Nuevo Turno</h5>
                                        <span className="material-symbols-outlined text-primary text-[18px]">calendar_month</span>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="bg-slate-50 rounded-lg p-2.5 flex items-center gap-3 border border-slate-100">
                                            <span className="material-symbols-outlined text-slate-400 text-[16px]">sports_tennis</span>
                                            <span className="text-xs font-semibold text-slate-700">Cancha 2</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="flex-1 bg-slate-50 rounded-lg p-2.5 flex items-center justify-center gap-2 border border-slate-100">
                                                <span className="text-xs font-semibold text-slate-700">14 Abril</span>
                                            </div>
                                            <div className="flex-1 bg-primary/10 rounded-lg p-2.5 flex items-center justify-center gap-2 border border-primary/20">
                                                <span className="text-xs font-bold text-primary-dark">18:00</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full bg-slate-900 text-white rounded-xl py-2.5 text-xs font-bold shadow-md hover:bg-slate-800 transition-colors">
                                        Confirmar Reserva
                                    </button>
                                </div>

                                {/* Tournament Card */}
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 shadow-md text-white">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <div className="inline-flex items-center gap-1.5 bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-bold mb-2">
                                                <span className="material-symbols-outlined !text-[12px] text-yellow-400">emoji_events</span>
                                                Torneo
                                            </div>
                                            <h5 className="font-black text-sm">Copa de Verano</h5>
                                        </div>
                                        <span className="text-xs font-medium text-slate-300">Cat: 7ma</span>
                                    </div>
                                    <button className="w-full bg-white text-slate-900 rounded-xl py-2 text-xs font-bold transition-transform active:scale-95">
                                        Inscribirse
                                    </button>
                                </div>

                            </div>

                            {/* App Navigation Bar */}
                            <div className="bg-white border-t border-slate-100 px-6 py-4 flex justify-between pb-6">
                                <div className="flex flex-col items-center gap-1 text-primary">
                                    <span className="material-symbols-outlined !text-[20px]">home</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 text-slate-300">
                                    <span className="material-symbols-outlined !text-[20px]">calendar_month</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 text-slate-300">
                                    <span className="material-symbols-outlined !text-[20px]">emoji_events</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 text-slate-300">
                                    <span className="material-symbols-outlined !text-[20px]">person</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary-dark font-bold text-sm tracking-tight border border-primary/20">
                            <span className="material-symbols-outlined !text-[18px]">smartphone</span>
                            <span>App para Jugadores</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                            Tus clientes reservan <br className="hidden lg:block" /> desde su celular
                        </h2>

                        <p className="text-slate-500 text-base leading-relaxed font-medium">
                            Olvídate de los mensajes de WhatsApp. Brinda a tus jugadores una App Web exclusiva
                            donde pueden autogestionarse de manera rápida y sencilla, las 24 horas del día.
                        </p>

                        <ul className="space-y-4 pt-4">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 text-slate-700">
                                    <span className="material-symbols-outlined !text-[20px]">calendar_add_on</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900">Reserva de Turnos</h5>
                                    <p className="text-sm font-medium text-slate-500">Selección de cancha, fecha y hora. La reserva se registra en tu agenda al instante.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 text-slate-700">
                                    <span className="material-symbols-outlined !text-[20px]">forward_to_inbox</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900">Notificaciones por Email</h5>
                                    <p className="text-sm font-medium text-slate-500">Cada reserva dispara un correo automático confirmando los detalles al jugador.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 text-slate-700">
                                    <span className="material-symbols-outlined !text-[20px]">emoji_events</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900">Inscripción a Torneos</h5>
                                    <p className="text-sm font-medium text-slate-500">Los jugadores pueden ver los torneos activos del club e inscribirse fácilmente.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
