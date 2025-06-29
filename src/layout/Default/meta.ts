export interface IContacts { email: string, phone: string };

export interface IDefaultDarkFooterMeta {
    logoPath: string,
    contacts: IContacts,
    copyright: string,
};

export const trafficLawsFooterMeta: IDefaultDarkFooterMeta = {
    logoPath: `./assets/images/sprite.svg#`,
    contacts: {
        email: "info@xraystand.kz",
        phone: "+7 (7172) 73-50-50",
    },
    copyright: "© X-Ray Stand. Все права защищены",
};
