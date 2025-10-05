export interface IContacts {
    email: string,
    phone: string
};

export interface IHomeFooterContent {
    logoPath: string,
    contacts: IContacts,
    policy: string,
    year: string,
    company: string,
    companyLabel: string,
    copyright: string,
    madeBy: {
        link: string,
        label: string,
        author: string,
    },
    privacyPolicyText: {
        title: string,
        content: string,
    },
};

export interface IHomeFooterMeta {
    ru: IHomeFooterContent,
    kz: IHomeFooterContent,
};
