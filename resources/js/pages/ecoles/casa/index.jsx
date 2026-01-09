import AppLayout from '@/layouts/app-layout';
import HeroSection from './partials/hero';
import OverviewSection from './partials/overview';
import StatisticsSection from './partials/statistics';
import SchedulesSection from './partials/schedules';
import CurriculumSection from './partials/curriculum';
import GallerySection from './partials/gallery';
import ServicesSection from './partials/services';

export default function Casa() {
    return (
        <AppLayout>
            <HeroSection />
            <OverviewSection />
            <StatisticsSection />
            <SchedulesSection />
            <CurriculumSection />
            <GallerySection />
            <ServicesSection />
        </AppLayout>
    );
}
