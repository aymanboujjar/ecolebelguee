import { Users, GraduationCap, Globe, MapPin } from 'lucide-react';

export default function StatisticsSection() {
    const stats = [
        {
            value: '935',
            label: 'Élèves',
            icon: Users,
            description: 'De 2 à 18 ans',
        },
        {
            value: '58',
            label: 'Enseignants',
            icon: GraduationCap,
            description: 'Qualifiés et certifiés',
        },
        {
            value: '58',
            label: 'Expatriés',
            icon: Globe,
            description: 'Professionnels internationaux',
        },
        {
            value: '7.5',
            label: 'Hectares',
            icon: MapPin,
            description: 'Campus spacieux',
        },
    ];

    return (
        <section className="border-t border-gray-200 bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                            Chiffres clés
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl">
                        Notre campus en chiffres
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-belgYellow hover:shadow-md"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white transition-colors group-hover:border-belgYellow group-hover:bg-belgYellow/5">
                                    <Icon className="h-6 w-6 text-belgBlack transition-colors group-hover:text-belgYellow" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="mb-1 text-3xl font-bold leading-none text-belgBlack md:text-4xl">
                                        {stat.value}
                                    </div>
                                    <div className="mb-0.5 text-base font-semibold text-belgBlack">
                                        {stat.label}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        {stat.description}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
