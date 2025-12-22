export interface IContacts {
  email: string;
  phone: string;
}

export interface IDefaultDarkFooterContentInfo {
  description: string;
  buttonsText: {
    support: string;
    privacy: string;
  };
  madeBy: {
    link: string;
    imagePath: {
      light: string;
      dark: string;
    };
  };
  privacyPolicyText: {
    title: string;
    content: string;
  };
}

export interface IStrictFooterContent {
  logoPath: string;
  contacts: IContacts;
  copyright: string;
  content: IDefaultDarkFooterContentInfo;
}

export interface IDefaultDarkFooterMeta {
  ru: IStrictFooterContent;
  kz: IStrictFooterContent;
}
