import { Users, UtensilsCrossed, TreePine, CheckCircle2 } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        {
            id: 'garderie',
            title: 'Garderie',
            icon: Users,
            features: [
                'Surveillance avant et après les cours',
                'Garderie payante disponible',
                'Encadrement sécurisé',
            ],
            description:
                'L\'établissement assure la surveillance des élèves avant et après les cours. Une garderie payante est proposée pour accompagner les familles dans leur organisation quotidienne. Ce service permet aux élèves de rester à l\'école dans un cadre encadré et sécurisé, sous la responsabilité de l\'établissement.',
        },
        {
            id: 'restauration',
            title: 'Restauration scolaire',
            icon: UtensilsCrossed,
            features: [
                'Repas chaud préparé sur place',
                'Menus équilibrés et variés',
                'Service de qualité',
            ],
            description:
                'Un service de restauration est proposé avec des repas chauds préparés et servis sur place. Les menus sont équilibrés et variés, répondant aux besoins nutritionnels des élèves. La cantine est un service facultatif, proposé sur inscription.',
        },
        {
            id: 'activites',
            title: 'Activités Extrascolaires',
            icon: TreePine,
            features: [
                'Activités variées et créatives',
                'Après les cours et mercredi après-midi',
                'Programme enrichissant',
            ],
            description:
                'Des activités extrascolaires variées, créatives, culturelles et sportives sont proposées. Les activités ont lieu en fin de journée après les cours ainsi que le mercredi après-midi. La participation aux activités extrascolaires est facultative, payante et se fait sur inscription.',
        },
    ];

    return (
        <section className="border-t border-gray-200 bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                            Services
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl">
                        Services et équipements
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700">
                        Des services complets pour accompagner les familles et enrichir l'expérience
                        éducative de nos élèves.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-belgYellow hover:shadow-lg"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white transition-all group-hover:border-belgYellow group-hover:bg-belgYellow/5">
                                        <Icon className="h-6 w-6 text-belgBlack transition-colors group-hover:text-belgYellow" />
                                    </div>
                                    <h3 className="text-xl font-bold text-belgBlack md:text-2xl">
                                        {service.title}
                                    </h3>
                                </div>

                                <div className="mb-4 flex-1 space-y-2">
                                    {service.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 text-gray-700"
                                        >
                                            <CheckCircle2 className="h-4 w-4 shrink-0 text-belgYellow" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-sm leading-relaxed text-gray-700">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

