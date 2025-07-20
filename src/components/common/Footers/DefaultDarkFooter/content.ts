import madeBySrc from "@assets/images/madeby.png";
import type {IDefaultDarkFooterMeta} from "@components/common/Footers/DefaultDarkFooter/meta.ts";

export const trafficLawsFooterMeta: IDefaultDarkFooterMeta = {
    ru: {
        logoPath: `./assets/images/sprite.svg#`,
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
                link: "https://info.ytvee.com/service",
                imagePath: madeBySrc,
            },
        }
    },
    kz: {
        logoPath: `./assets/images/sprite.svg#`,
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
                link: "https://info.ytvee.com/service",
                imagePath: madeBySrc,
            },
        }
    },
};
