type tagType = {
    tagName: string;
    bgColor: string;
    color: string;
};

type workButtonType = {
    label: string;
    bgColor: string;
    link: string;
    isActive: boolean;
}

export type worksSectionType = {
    tags: Array<tagType>;
    label: Array<string>;
    year: string;
    logo: string;
    button: workButtonType;
    bgColor: string;
};