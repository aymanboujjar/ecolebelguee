import { Users, UtensilsCrossed, Bus, TreePine, CheckCircle2 } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        {
            id: 'garderie',
            title: 'Garderie',
            icon: Users,
            features: [
                'Surveillance 30 min avant les cours',
                'Surveillance 30 min après les cours',
                'Garderie payante jusqu\'à 18h00',
            ],
            description:
                'L\'établissement assure la surveillance des élèves à raison de 30 minutes le matin avant l\'heure de début des cours et de 30 minutes après la fin des cours. Au-delà, une garderie payante est proposée jusqu\'à 18h00. Ce service permet aux élèves de rester à l\'école dans un cadre encadré et sécurisé, sous la responsabilité de l\'établissement.',
        },
        {
            id: 'restauration',
            title: 'Restauration scolaire',
            icon: UtensilsCrossed,
            features: [
                'Repas chaud préparé sur place',
                'Menus communiqués mensuellement',
                'Service par ProxyRest',
            ],
            description:
                'Un repas chaud est préparé et servi sur place (entrée, plat, dessert). Ce service de restauration est assuré par un prestataire externe spécialisé, la société ProxyRest, qui prépare et sert les repas. Les menus sont communiqués mensuellement aux parents. La cantine est un service facultatif, proposé sur inscription et payant directement auprès du prestataire.',
        },
        {
            id: 'transport',
            title: 'Transport',
            icon: Bus,
            features: [
                'Service organisé par RUN RUN',
                'Itinéraires optimisés',
                'Contractualisation directe',
            ],
            description:
                'Un service de transport scolaire est organisé à l\'école belge de Casablanca. Il est assuré par un prestataire externe spécialisé, la société RUN RUN, qui traite directement avec les parents souhaitant y souscrire. Ce service est payant et contractualisé directement entre les familles et le prestataire.',
        },
        {
            id: 'activites',
            title: 'Activités Extrascolaires',
            icon: TreePine,
            features: [
                'Activités variées et créatives',
                'Après les cours et mercredi après-midi',
                'Gestion par l\'EBM ExtraClub',
            ],
            description:
                'L\'EBM ExtraClub propose des activités variées, créatives, culturelles et sportives. Les activités extrascolaires ont lieu en fin de journée après les cours ainsi que le mercredi après-midi. La participation aux activités extrascolaires est facultative, payante et se fait sur inscription, selon les modalités communiquées aux familles en début d\'année scolaire.',
        },
    ];

    return (
        <section className="border-t border-gray-200 bg-white py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="mb-16 text-center">
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

                <div className="grid gap-8 md:grid-cols-2">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-8 transition-all hover:border-belgYellow hover:shadow-xl"
                            >
                                <div className="mb-6 flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-gray-200 bg-white transition-all group-hover:border-belgYellow group-hover:bg-belgYellow/5">
                                            <Icon className="h-8 w-8 text-belgBlack transition-colors group-hover:text-belgYellow" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-belgBlack md:text-3xl">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="mb-6 space-y-2">
                                    {service.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 text-gray-700"
                                        >
                                            <CheckCircle2 className="h-5 w-5 shrink-0 text-belgYellow" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-base leading-relaxed text-gray-700">
                                    {service.description}
                                </p>

                                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-belgYellow/5 transition-all group-hover:bg-belgYellow/10" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
