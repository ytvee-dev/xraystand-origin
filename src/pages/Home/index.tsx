import React from "react";
import CoverSection from "@modules/home/Sections/CoverSection";
import NutritionLogo from "@modules/nutrition/components/NutritionLogo";
import HomeNav from "@modules/home/components/HomeNav";
import BrightnessLayout from "@layout/Brightness";
import './style.css';

const HomePage: React.FC = () => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return(
        <BrightnessLayout
            logo={<NutritionLogo/>}
            navigation={<HomeNav onNavigate={scrollTo}/>}
            stickyHeader={true}
        >
            <div className="home-page">
                <section id="home-welcome" className="home-section">
                    <CoverSection className='home-cover-section' />
                </section>
                
                <section id="home-about" className="home-section">
                    <div className="section-content">
                        <h2>О проекте</h2>
                        <p>Добро пожаловать в образовательную платформу! Здесь вы найдете увлекательные материалы по различным предметам и темам.</p>
                    </div>
                </section>
                
                <section id="home-features" className="home-section">
                    <div className="section-content">
                        <h2>Возможности</h2>
                        <ul>
                            <li>Интерактивные уроки</li>
                            <li>Многоязычная поддержка</li>
                            <li>Адаптивный дизайн</li>
                            <li>Современные технологии обучения</li>
                        </ul>
                    </div>
                </section>
                
                <section id="home-contact" className="home-section">
                    <div className="section-content">
                        <h2>Контакты</h2>
                        <p>Свяжитесь с нами для получения дополнительной информации о проекте.</p>
                        <p>Email: info@example.com</p>
                    </div>
                </section>
            </div>
        </BrightnessLayout>
    );
};

export default HomePage;
