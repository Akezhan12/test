
export type Props = {
    readonly title?: string;
};

export  type Company = {
    readonly name: string,
    readonly address: string,
    readonly country: string,
}

export enum FormNameCompany {
    name,
    address,
    country
}
