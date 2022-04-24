import {Button, Form, Input, Modal} from "antd";
import {ChangeEvent, useState} from "react";
import {DeleteOutlined} from "@ant-design/icons";
import {Company, FormNameCompany, Props} from "./types";


const newCompanyAdd = {
    name: '',
    address: '',
    country: '',
}


export const CompaniesPage = ({title}: Props):JSX.Element => {

    const [form] = Form.useForm();
    const [newCompany, setNewCompany] = useState<Company>(newCompanyAdd)
    const [companies, setCompanies] = useState<ReadonlyArray<Company>>([]);
    const [modalActive, setModalActive] = useState(false);

    const onDelete = (index: number) => {
        setCompanies(companies.filter((company, companyIndex)=> companyIndex !== index))
    }

    const onClean = () => {
        setNewCompany(newCompany)
    }

    const onSubmit = ()=> {
        setCompanies((prev) => { return [...prev, newCompany] })
        setModalActive(false);
    }

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setNewCompany((prev) => { return { ...prev, [event.target.id]: event.target.value}})
    }

    return (
        <div
            style={{width: "60%",
                margin: "auto"
            }}
        >
            <h2>{title}</h2>
            <table>
                <th>№</th>
                <th>Name</th>
                <th>Address</th>
                <th>Country</th>
                <th>Actions</th>

                <tbody>
                {companies.map((company, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{company.name}</td>
                        <td>{company.address}</td>
                        <td>{company.country}</td>
                        <td>
                            <div
                                style={{marginLeft: '12px'}}
                            >
                                <Button
                                    type={'default'}
                                    icon={<DeleteOutlined/>}
                                    onClick={()=>onDelete(index)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal
                visible={modalActive}
                onCancel={()=>setModalActive(false)}
                footer={false}
                width={'50%'}
            >
                <Form
                    onFinish={onSubmit}
                    form={form}
                    style={{marginTop:'24px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        width: 'fit-content',
                        margin: 'auto'}}
                >
                    <Form.Item
                        name={FormNameCompany.name}
                        label='Name'
                        rules={[
                            {required: true,message: 'Fill this field'}
                        ]}
                    >
                        <Input
                            placeholder='Name'
                            style={{minWidth:'480px'}}
                            id='name'
                            onChange={onChangeInput}
                        />
                    </Form.Item>
                    <Form.Item
                        name={FormNameCompany.address}
                        label='Address'
                        rules={[
                            {required: true,message: 'Fill this field'}
                        ]}
                    >
                        <Input
                            placeholder='Address'
                            style={{minWidth:'480px'}}
                            id='address'
                            onChange={onChangeInput}
                        />
                    </Form.Item>
                    <Form.Item
                        name={FormNameCompany.country}
                        label='Country'
                        rules={[
                            {required: true,message: 'Fill this field'}
                        ]}
                    >
                        <Input
                            id='country'
                            onChange={onChangeInput}
                            placeholder='Country'
                            style={{minWidth:'480px'}}
                        />
                    </Form.Item>
                    <div
                        style={{display: "flex"}}
                    >
                        <Button htmlType={'submit'} type='primary'>Add</Button>
                        <Button
                            htmlType={'reset'}
                            onClick={onClean}
                            style={{
                                marginLeft: '12px'}}
                        >
                            Clean
                        </Button>
                    </div>
                </Form>
            </Modal>
            <div
                style={{
                    marginTop: '12px'}}
            >
                <Button type='primary' onClick={()=> setModalActive(true)}>Add+</Button>
            </div>
        </div>)
};
