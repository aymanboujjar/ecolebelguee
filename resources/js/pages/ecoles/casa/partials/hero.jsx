export default function HeroSection() {
    return (
        <section className="relative min-h-[85vh] w-full overflow-hidden">
            {/* Full Background Image */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/images/casa/EBM-C_0013_1_cropped.jpg')",
                    }}
                />
                <div className="absolute inset-0 bg-belgBlack/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-[85vh] flex-col justify-center px-4 py-20 md:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-5xl">
                    <div className="mb-8 inline-block border-l-4 border-belgYellow pl-6">
                        <p className="text-sm font-semibold uppercase tracking-wider text-belgYellow">
                            Campus de Casablanca
                        </p>
                    </div>
                    
                    <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
                        Excellence académique
                        <br />
                        <span className="text-belgYellow">à Darbouazza</span>
                    </h1>
                    
                    <p className="mb-12 max-w-2xl text-xl leading-relaxed text-gray-100 md:text-2xl">
                        7,5 hectares d'espaces d'apprentissage modernes, 940 élèves de 2 à 18 ans, 
                        un environnement ouvert sur la nature avec une pédagogie innovante.
                    </p>
                </div>
            </div>
        </section>
    );
}
