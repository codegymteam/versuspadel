const contacts = [
    {
        initials: "MC",
        name: "Martín Carnino",
        role: "Co-Founder",
        phone: "+54 9 358 411-8627",
        phoneHref: "https://wa.me/5493584118627",
        email: "martincarnino2001@gmail.com",
        emailHref: "mailto:martincarnino2001@gmail.com",
    },
    {
        initials: "FS",
        name: "Facundo Sanchez",
        role: "Co-Founder",
        phone: "+54 9 353 429-2557",
        phoneHref: "https://wa.me/5493534292557",
        email: "facusanchez105@gmail.com",
        emailHref: "mailto:facusanchez105@gmail.com",
    },
];

export default function ContactSection() {
    return (
        <section id="contact" className="bg-slate-50 py-16 lg:py-24 border-t border-slate-100">
            <div className="px-4 lg:px-8 max-w-6xl mx-auto space-y-12">
                <div className="space-y-3 max-w-2xl text-center mx-auto">
                    <h2 className="text-slate-900 text-3xl lg:text-4xl font-black tracking-tight">
                        Hablemos
                    </h2>
                    <p className="text-slate-500 text-sm lg:text-base font-medium">
                        Estamos aquí para ayudarte a transformar tu club. Habla directamente con nosotros.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {contacts.map((contact) => (
                        <div
                            key={contact.email}
                            className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 flex flex-col gap-6 relative overflow-hidden"
                        >
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-xl">
                                    {contact.initials}
                                </div>
                                <div>
                                    <h3 className="text-slate-900 font-bold text-lg">{contact.name}</h3>
                                    <p className="text-slate-500 text-sm font-medium">{contact.role}</p>
                                </div>
                            </div>

                            <div className="space-y-3 relative z-10">
                                <a
                                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group"
                                    href={contact.phoneHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-colors group-hover:bg-primary/10">
                                        <img src="/social.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                                    </div>
                                    <span className="text-slate-700 text-sm font-semibold">{contact.phone}</span>
                                </a>
                                <a
                                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group"
                                    href={contact.emailHref}
                                >
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 transition-colors">
                                        <span className="material-symbols-outlined !text-[18px]">mail</span>
                                    </div>
                                    <span className="text-slate-700 text-sm font-semibold">{contact.email}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
