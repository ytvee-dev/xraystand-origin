import { type ReactElement } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DefaultLayout from "@layout/Default";
import ContentSection from "@components/common/Sections/DSContentSection";
import { paths } from "@router/routes";
import "./style.css";

type TPageStatus = "active" | "in-progress" | "disabled";

interface IPageInfo {
    id: string;
    path: string;
    title: string;
    description: string;
    status: TPageStatus;
    isClickable: boolean;
}

const pagesInfo: IPageInfo[] = [
    {
        id: paths.HOME.id,
        path: paths.HOME.path,
        title: "Главная страница",
        description: "Добро пожаловать на интерактивные стенды Xraystand",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.TRAFFIC_LAWS_PAGE.id,
        path: paths.TRAFFIC_LAWS_PAGE.path,
        title: "Правила дорожного движения",
        description: "Изучение основ безопасности дорожного движения",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.CHEMISTRY.id,
        path: paths.CHEMISTRY.path,
        title: "Химия",
        description:
            "Интерактивное изучение химических элементов и процессов",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.RUS_LIT.id,
        path: paths.RUS_LIT.path,
        title: "Русская литература",
        description:
            "Знакомство с классическими произведениями русской литературы",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.KAZAKH_ADEBIET.id,
        path: paths.KAZAKH_ADEBIET.path,
        title: "Казахская литература",
        description:
            "Изучение произведений казахских писателей и поэтов",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.MATH.id,
        path: paths.MATH.path,
        title: "Математика",
        description:
            "Царица наук - от арифметики до высшей математики",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.NUTRITION.id,
        path: paths.NUTRITION.path,
        title: "Здоровое питание",
        description:
            "Основы правильного питания и здорового образа жизни",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.SAFETY_PRECAUTIONS.id,
        path: paths.SAFETY_PRECAUTIONS.path,
        title: "Техника безопасности в классе",
        description:
            "Правила безопасного поведения в учебных помещениях",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.FIRE_SAFETY.id,
        path: paths.FIRE_SAFETY.path,
        title: "Пожарная безопасность",
        description: "Описание правил пожарной безопасности",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.KAZ_MUSIC.id,
        path: paths.KAZ_MUSIC.path,
        title: "Казахские музыкальные инструменты",
        description:
            "Традиционные музыкальные инструменты Казахстана",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.PHYSICS.id,
        path: paths.PHYSICS.path,
        title: "Физика",
        description:
            "Наука о природе, движении, взаимодействии и изменениях в мире",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.ENGLISH.id,
        path: paths.ENGLISH.path,
        title: "Английский язык",
        description: "Интерактивные материалы для изучения английского языка",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.BIOLOGY.id,
        path: paths.BIOLOGY.path,
        title: "Биология",
        description:
            "Эволюционный путь жизни и устройство живых организмов",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.SEASONS.id,
        path: paths.SEASONS.path,
        title: "Начальное образование",
        description: "Интерактивная страница о временах года",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.KAZ_TARIH.id,
        path: paths.KAZ_TARIH.path,
        title: "История Казахстана",
        description:
            "Ключевые периоды, события и личности истории Казахстана",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.NVP.id,
        path: paths.NVP.path,
        title: "Начальная военная подготовка",
        description: "Материалы по основам военной подготовки",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.EMOTIONAL_INTELLIGENCE.id,
        path: paths.EMOTIONAL_INTELLIGENCE.path,
        title: "Эмоциональный интеллект",
        description:
            "Интерактивные материалы о распознавании, понимании и управлении эмоциями",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.CARDIOVASCULAR_SYSTEM.id,
        path: paths.CARDIOVASCULAR_SYSTEM.path,
        title: "Сердечно-сосудистая система",
        description:
            "Интерактивные материалы о здоровье сердца и сердечно-сосудистых заболеваниях",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.AI.id,
        path: paths.AI.path,
        title: "Искусственный интеллект",
        description:
            "Интерактивные материалы об искусственном интеллекте и современных технологиях",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.AI_PROFESSION.id,
        path: paths.AI_PROFESSION.path,
        title: "ИИ и выбор профессии",
        description:
            "Как выбрать профессию и подготовиться к изменениям на рынке труда в эпоху искусственного интеллекта",
        status: "active",
        isClickable: true,
    },
    {
        id: paths.SAFETY_IN_NATURE.id,
        path: paths.SAFETY_IN_NATURE.path,
        title: "Безопасность на природе",
        description: "Безопасность на природе",
        status: "active",
        isClickable: true,

    },
    {
        id: paths.IMPLEMENTATION.id,
        path: paths.IMPLEMENTATION.path,
        title: "Implementation",
        description: "Служебная страница с черновыми материалами",
        status: "in-progress",
        isClickable: true,
    },
    {
        id: paths.DEMO.id,
        path: paths.DEMO.path,
        title: "Демонстрация",
        description: "Служебная демонстрационная страница",
        status: "in-progress",
        isClickable: true,
    },
];

const textContent = {
    title: "Все страницы",
    description: "Полный список доступных интерактивных стендов",
};

const statusLabels: Record<TPageStatus, string> = {
    active: "Доступно",
    "in-progress": "В разработке",
    disabled: "Недоступно",
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -5, scale: 1.02 },
};

const PageCard = ({ page }: { page: IPageInfo }): ReactElement => {
    const card = (
        <motion.div
            className={`page-card ${page.status}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={page.isClickable ? "hover" : undefined}
            transition={{
                duration: 0.1,
                ease: "easeOut",
            }}
        >
            <div className="page-card-header">
                <h3 className="page-card-title">{page.title}</h3>
                <span className={`status-badge status-${page.status}`}>
                    {statusLabels[page.status]}
                </span>
            </div>
            <p className="page-card-description">{page.description}</p>
            <div className="page-card-footer">
                <span className="page-card-path">{page.path}</span>
            </div>
        </motion.div>
    );

    if (!page.isClickable) {
        return card;
    }

    return (
        <Link to={page.path} className="page-card-link">
            {card}
        </Link>
    );
};

const Pages = (): ReactElement => {
    return (
        <DefaultLayout strictLanguage="ru">
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
