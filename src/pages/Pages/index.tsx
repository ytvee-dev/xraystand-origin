import { type ReactElement } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DefaultLayout from "@layout/Default";
import ContentSection from "@components/common/Sections/DSContentSection";
import { paths } from "@router/routes";
import "./style.css";

interface IPageInfo {
    id: string;
    path: string;
    title: string;
    description: string;
    status: 'active' | 'in-progress' | 'disabled';
}

const pagesInfo: IPageInfo[] = [
    {
        id: paths.HOME.id,
        path: paths.HOME.path,
        title: "Главная страница",
        description: "Добро пожаловать на интерактивные стенды Xraystand",
        status: 'active'
    },
    {
        id: paths.TRAFFIC_LAWS_PAGE.id,
        path: paths.TRAFFIC_LAWS_PAGE.path,
        title: "Правила дорожного движения",
        description: "Изучение основ безопасности дорожного движения",
        status: 'active'
    },
    {
        id: paths.CHEMISTRY.id,
        path: paths.CHEMISTRY.path,
        title: "Химия",
        description: "Интерактивное изучение химических элементов и процессов",
        status: 'active'
    },
    {
        id: paths.RUS_LIT.id,
        path: paths.RUS_LIT.path,
        title: "Русская литература",
        description: "Знакомство с классическими произведениями русской литературы",
        status: 'active'
    },
    {
        id: paths.KAZAKH_ADEBIET.id,
        path: paths.KAZAKH_ADEBIET.path,
        title: "Казахская литература",
        description: "Изучение произведений казахских писателей и поэтов",
        status: 'active'
    },
    {
        id: paths.MATH.id,
        path: paths.MATH.path,
        title: "Математика",
        description: "Царица наук - от арифметики до высшей математики",
        status: 'active'
    },
    {
        id: paths.NUTRITION.id,
        path: paths.NUTRITION.path,
        title: "Здоровое питание",
        description: "Основы правильного питания и здорового образа жизни",
        status: 'active'
    },
    {
        id: paths.SAFETY_PRECAUTIONS.id,
        path: paths.SAFETY_PRECAUTIONS.path,
        title: "Техника безопасности в классе",
        description: "Правила безопасного поведения в учебных помещениях",
        status: 'in-progress'
    },
    {
        id: paths.KAZ_MUSIC.id,
        path: paths.KAZ_MUSIC.path,
        title: "Казахские музыкальные инструменты",
        description: "Традиционные музыкальные инструменты Казахстана",
        status: 'in-progress'
    }
];

const textContent = {
    title: "Все страницы",
    description: "Полный список доступных интерактивных стендов",
};

const PageCard = ({ page }: { page: IPageInfo }): ReactElement => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { y: -5, scale: 1.02 }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'active':
                return <span className="status-badge status-active">Доступно</span>;
            case 'in-progress':
                return <span className="status-badge status-in-progress">В разработке</span>;
            case 'disabled':
                return <span className="status-badge status-disabled">Недоступно</span>;
            default:
                return null;
        }
    };

    const CardContent = () => (
        <motion.div
            className={`page-card ${page.status}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{
                duration: 0.1,
                ease: "easeOut"
            }}
        >
            <div className="page-card-header">
                <h3 className="page-card-title">{page.title}</h3>
                {getStatusBadge(page.status)}
            </div>
            <p className="page-card-description">{page.description}</p>
            <div className="page-card-footer">
                <span className="page-card-path">{page.path}</span>
            </div>
        </motion.div>
    );

    if (page.status === 'active') {
        return (
            <Link to={page.path} className="page-card-link">
                <CardContent />
            </Link>
        );
    }

    return <CardContent />;
};

const Pages = (): ReactElement => {

    return (
        <DefaultLayout strictLanguage='ru'>
            <ContentSection textData={textContent}>
                <div className="pages-container">
                    <div className="pages-grid">
                        {pagesInfo.map((page) => (
                            <PageCard key={page.id} page={page} />
                        ))}
                    </div>
                </div>
            </ContentSection>
        </DefaultLayout>
    );
};

export default Pages;
