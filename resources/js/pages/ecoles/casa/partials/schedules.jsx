import { Clock, Calendar, Bell } from 'lucide-react';

export default function SchedulesSection() {
    return (
        <section className="border-t border-gray-200 bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                            Organisation
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl">
                        Horaires et planning
                    </h2>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
                    {/* Left Column - Image with Info Cards */}
                    <div className="flex flex-col space-y-6">
                        <div className="relative flex-1 overflow-hidden rounded-lg">
                            <img
                                src="/assets/images/casa/EBM-C_0010_1_cropped.jpg"
                                alt="Horaires"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-belgBlack/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="flex items-center gap-3 text-white">
                                    <Clock className="h-6 w-6" />
                                    <div>
                                        <div className="text-sm font-medium opacity-90">
                                            Organisation scolaire
                                        </div>
                                        <div className="text-lg font-bold">
                                            Du lundi au vendredi
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-lg border border-gray-200 bg-white p-6">
                                <div className="mb-2 flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-belgYellow" />
                                    <h3 className="font-semibold text-belgBlack">
                                        Semaine
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-700">
                                    Lundi au vendredi
                                </p>
                            </div>
                            <div className="rounded-lg border border-gray-200 bg-white p-6">
                                <div className="mb-2 flex items-center gap-2">
                                    <Bell className="h-5 w-5 text-belgYellow" />
                                    <h3 className="font-semibold text-belgBlack">
                                        Mercredi
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-700">
                                    Fin à mi-journée
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="flex flex-col justify-center h-full">
                        <div className="mb-8 space-y-6">
                            <div>
                                <h3 className="mb-3 text-2xl font-bold text-belgBlack">
                                    Organisation hebdomadaire
                                </h3>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    L'école belge de Casablanca organise son enseignement du lundi au
                                    vendredi. Le mercredi, les cours prennent fin à la mi-journée,
                                    permettant aux élèves de participer à des activités extrascolaires
                                    ou de se reposer.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-3 text-2xl font-bold text-belgBlack">
                                    Horaires adaptés
                                </h3>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Les horaires sont adaptés à chaque section (fondamentale et
                                    secondaire) pour répondre aux besoins spécifiques de chaque niveau
                                    d'enseignement et à l'âge des élèves.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border-2 border-belgYellow bg-belgYellow/5 p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-belgYellow">
                                    <Clock className="h-6 w-6 text-belgBlack" />
                                </div>
                                <div>
                                    <h4 className="mb-2 font-bold text-belgBlack">
                                        Horaires détaillés
                                    </h4>
                                    <p className="text-sm text-gray-700">
                                        Consultez les sections ci-dessous pour connaître les horaires
                                        précis de chaque niveau d'enseignement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
