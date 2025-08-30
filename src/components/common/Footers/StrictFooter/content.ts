import madeBySrcLight from "@assets/madeByLight.avif";
import madeBySrcDark from "@assets/madeByDark.avif";
import type {IDefaultDarkFooterMeta} from "@components/common/Footers/StrictFooter/types.ts";

export const trafficLawsFooterMeta: IDefaultDarkFooterMeta = {
    ru: {
        logoPath: `./assets/icons/sprite.svg#`,
        contacts: {
            label: "Контакты",
            email: "info@xraystand.kz",
            phone: "+7 (7172) 73-50-50",
        },
        copyright: "© X-Ray Stand. Все права защищены",
        content: {
            description: "Данный продукт защищён авторским правом в соответствии " +
                "с Законом об авторском праве и смежных правах РК. Информация " +
                "носит ознакомительный характер.",
            buttonsText: {
                support: "Техподдержка",
                privacy: "Политика",
            },
            madeBy: {
                link: "https://ytvee.com/service",
                imagePath: {
                    light: madeBySrcLight,
                    dark: madeBySrcDark,
                },
            },
        }
    },
    kz: {
        logoPath: `./assets/icons/sprite.svg#`,
        contacts: {
            label: "Контактілер",
            email: "info@xraystand.kz",
            phone: "+7 (7172) 73-50-50",
        },
        copyright: "© X-Ray Stand. Барлық құқықтар қорғалған.",
        content: {
            description: "Осы өнім ҚР Авторлық құқық және сабақтас құқықтар " +
                "туралы Заңына сәйкес авторлық құқықпен қорғалған. " +
                "Ақпарат тек танысу мақсатында ұсынылған.",
            buttonsText: {
                support: "Техникалық қолдау",
                privacy: "Саясат",
            },
            madeBy: {
                link: "https://ytvee.com/service",
                imagePath: {
                    light: madeBySrcLight,
                    dark: madeBySrcDark,
                },
            },
        }
    },
};
