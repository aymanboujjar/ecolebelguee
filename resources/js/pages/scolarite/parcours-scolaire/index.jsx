import AppLayout from '@/layouts/app-layout';
import Banner from '@/components/banner';
import IntroSection from './partials/intro-section';
import MaternelleSection from './partials/maternelle-section';
import PrimaireSection from './partials/primaire-section';
import SecondaireSection from './partials/secondaire-section';
import OrientationSection from './partials/orientation-section';

export default function ParcoursScolaire() {
    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <Banner
                    title="Un parcours éducatif complet de 2 à 18 ans"
                    description="De la maternelle au secondaire, chaque étape répond à des objectifs précis et prépare la suivante"
                    buttonText="Découvrir nos valeurs"
                    buttonLink="#"
                />
                <IntroSection />
                <MaternelleSection />
                <PrimaireSection />
                <SecondaireSection />
                <OrientationSection />
            </div>
        </AppLayout>
    );
}
