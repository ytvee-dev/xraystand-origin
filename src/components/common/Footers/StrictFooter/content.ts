import type {IDefaultDarkFooterMeta} from "@components/common/Footers/StrictFooter/types.ts";
import { R2_BASE_URL } from "@utils/constants";

const madeBySrcLight = `${R2_BASE_URL}assets/images/madeByLight.avif`;
const madeBySrcDark = `${R2_BASE_URL}assets/images/madeByDark.avif`;

export const trafficLawsFooterMeta: IDefaultDarkFooterMeta = {
    ru: {
        logoPath: `${R2_BASE_URL}assets/images/sprite.svg#`,
        contacts: {
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
                privacy: "Политика конфиденциальности",
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
        logoPath: `${R2_BASE_URL}assets/images/sprite.svg#`,
        contacts: {
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
                privacy: "Құпиялық саясаты",
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
