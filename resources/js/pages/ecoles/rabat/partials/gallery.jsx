export default function GallerySection() {
    const images = [
        {
            src: '/assets/images/rabat/gallerry.jpg',
            alt: 'Groupe d\'élèves et enseignants',
        },
        {
            src: '/assets/images/rabat/gallerry (2).jpg',
            alt: 'Salle de classe maternelle',
        },
        {
            src: '/assets/images/rabat/gallerry (3).jpg',
            alt: 'Aire de jeux extérieure',
        },
        {
            src: '/assets/images/rabat/gallerry (4).jpg',
            alt: 'Vue aérienne du campus',
        },
        {
            src: '/assets/images/rabat/gallerry (5).jpg',
            alt: 'Salle informatique',
        },
        {
            src: '/assets/images/rabat/gallerry (6).jpg',
            alt: 'Espace extérieur de rassemblement',
        },
    ];

    return (
        <section className="border-t border-gray-200 bg-white py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="mb-12">
                    <div className="mb-4 inline-block border-l-4 border-belgYellow pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-belgBlack">
                            Découvrir
                        </p>
                    </div>
                    <h2 className="text-4xl font-bold text-belgBlack md:text-5xl lg:text-6xl">
                        Galerie du campus
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/3] overflow-hidden bg-gray-100"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

