export default function POSSection() {
    return (
        <section className="bg-slate-50 border-t border-slate-100 py-16 lg:py-24 relative overflow-hidden">
            {/* Minimalist decorative elements */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none rounded-full blur-3xl -mr-32 -mt-32" />

            <div className="px-4 lg:px-8 max-w-6xl mx-auto">
                <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg shadow-slate-200/50 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Text */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary-dark font-bold text-sm tracking-tight border border-primary/20">
                                <span className="material-symbols-outlined !text-[18px]">point_of_sale</span>
                                <span>Shop & POS</span>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                                Módulo Tienda Integrado
                            </h2>

                            <p className="text-slate-500 text-base leading-relaxed font-medium">
                                Gestiona el inventario de tu tienda (palas, grips, bebidas) y centraliza todas las
                                ventas en un único reporte financiero, manteniéndolo todo unificado y bajo control.
                            </p>

                            {/* Minimalist feature badges */}
                            <div className="flex flex-wrap gap-4 pt-2">
                                <div className="flex items-center gap-2 pr-4 py-2 text-sm text-slate-700 font-semibold">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-primary border border-slate-100">
                                        <span className="material-symbols-outlined !text-[16px]">inventory_2</span>
                                    </div>
                                    Control de Stock
                                </div>
                                <div className="flex items-center gap-2 pr-4 py-2 text-sm text-slate-700 font-semibold">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-primary border border-slate-100">
                                        <span className="material-symbols-outlined !text-[16px]">receipt_long</span>
                                    </div>
                                    Ventas Unificadas
                                </div>
                            </div>
                        </div>

                        {/* Product list mockup */}
                        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-5">Productos Recientes</h3>

                            <div className="space-y-1">
                                {/* Product Item 1 */}
                                <div className="flex items-center justify-between p-3 bg-white hover:border-primary border border-transparent rounded-xl transition-colors cursor-pointer group shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">sports_tennis</span>
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-slate-900">Pala Pro Carbon</p>
                                            <p className="text-xs font-medium text-slate-500">Stock: <span className="text-orange-500">4 un</span></p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-lg font-black text-slate-900">$120.00</span>
                                    </div>
                                </div>

                                <div className="h-2" />

                                {/* Product Item 2 */}
                                <div className="flex items-center justify-between p-3 bg-white hover:border-primary border border-transparent rounded-xl transition-colors cursor-pointer group shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">water_drop</span>
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-slate-900">Bebida Isotónica</p>
                                            <p className="text-xs font-medium text-slate-500">Stock: <span className="text-green-500">48 un</span></p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-lg font-black text-slate-900">$3.50</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-4 py-3 rounded-xl border-2 border-dashed border-slate-300 text-slate-400 font-bold hover:border-primary hover:text-primary transition-colors bg-white">
                                + Agregar Producto
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
