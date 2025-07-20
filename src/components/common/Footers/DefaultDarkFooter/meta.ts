export interface IContacts {
    email: string,
    phone: string
};

export interface IDefaultDarkFooterContentInfo {
    description: string;
    buttonsText: {
        support: string,
        privacy: string,
    },
    madeBy: {
        link: string,
        imagePath: string,
    },
};

export interface IDefaultDarkFooterContent {
    logoPath: string,
    contacts: IContacts,
    copyright: string,
    content: IDefaultDarkFooterContentInfo,
};

export interface IDefaultDarkFooterMeta {
    ru: IDefaultDarkFooterContent,
    kz: IDefaultDarkFooterContent,
};
