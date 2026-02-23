const features = [
    {
        icon: "calendar_month",
        title: "Gestión de Canchas",
        description:
            "Control total en tiempo real. Sistema visual de reservas y notificaciones automáticas por Email.",
    },
    {
        icon: "emoji_events",
        title: "Torneos Americanos",
        description:
            "Crea torneos, gestiona categorías e inscripciones online.",
    },
    {
        icon: "attach_money",
        title: "Facturación Simple",
        description:
            "Controla la caja diaria y exporta informes contables con un solo clic.",
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="bg-slate-50 py-16 lg:py-24 border-t border-slate-100">
            <div className="px-4 lg:px-8 max-w-6xl mx-auto space-y-12">
                <div className="space-y-3 max-w-2xl text-center mx-auto">
                    <h2 className="text-slate-900 text-3xl lg:text-4xl font-black tracking-tight">
                        Características Principales
                    </h2>
                    <p className="text-slate-500 text-sm lg:text-base font-medium">
                        Todo lo que necesitas para llevar tu club al siguiente nivel.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-white p-8 rounded-2xl shadow-[0_8px_32px_-4px_rgba(19,236,91,0.15)] border border-primary/30 flex flex-col items-start gap-5 relative overflow-hidden"
                        >
                            {/* Minimalist accent line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/80 to-primary/20" />

                            <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0">
                                <span className="material-symbols-outlined !text-4xl">{feature.icon}</span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-slate-900 text-xl font-bold tracking-tight">{feature.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
