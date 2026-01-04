import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ArticlesSection from '../components/ArticlesSection';
import CTASection from '../components/CTASection';
import BackgroundEffects from '../components/BackgroundEffects';

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>الرئيسية | خالد الدرعاني للمحاماة</title>
                <meta name="description" content="مكتب خالد الدرعاني للمحاماة والاستشارات القانونية - حلول قانونية ذكية لحماية مصالحكم." />
            </Helmet>

            <main className="relative">
                <BackgroundEffects />
                <Hero />
                <StatsSection />
                <WhyUs />
                <ServicesSection />
                <TestimonialsSection />
                <ArticlesSection />
                <CTASection />
            </main>
        </>
    );
};

export default Home;
