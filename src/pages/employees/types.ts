import {ModalProps} from "antd";

export type Props = ModalProps &{
    readonly title: string;
}

export type Employee = {
    readonly name: string,
    readonly surname: string,
    readonly monthlySalary: string,
    readonly earlySalary: string,
    readonly taxesByCompany: string,
    readonly taxesByEmployee: string,
    readonly age: string
}


export enum FormName {
    name,
    surname,
    monthlySalary,
    earlySalary,
    taxesByCompany,
    taxesByEmployee,
    age
}
