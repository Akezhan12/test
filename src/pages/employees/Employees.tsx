import {Button, Form, Input, Modal} from "antd";
import {ChangeEvent,useState} from "react";
import {DeleteOutlined} from "@ant-design/icons";
import {Employee, FormName, Props} from "./types";

import './Employees.css';


const newEmployeeEmpty = {
    name: '',
    surname: '',
    monthlySalary: '',
    earlySalary: '',
    taxesByCompany: '',
    taxesByEmployee: '',
    age: '',

}

export const EmployeesPage=({title}: Props): JSX.Element => {

    const [form] = Form.useForm();
    const [newEmployee, setNewEmployee] = useState<Employee>(newEmployeeEmpty)
    const [employees, setEmployees] = useState<ReadonlyArray<Employee>>([]);
    const [modalActive, setModalActive] = useState(false);

    const onDelete = (index: number) => {
        setEmployees(employees.filter((employee, employeeIndex)=> employeeIndex !== index))
    }

    const onClean = () => {
        setNewEmployee(newEmployee)
    }

    const onSubmit = ()=> {
        setEmployees((prev) => { return [...prev, newEmployee] })
        setModalActive(false);
    }

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setNewEmployee((prev) => { return { ...prev, [event.target.id]: event.target.value}})
    }

    return (
        <div
            style={{
                width:'60%',
                margin: 'auto',
            }}
        >
            <h2>{title}</h2>
            <table>
                <th>№</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>EarlySalary</th>
                <th>MonthlySalary</th>
                <th>TaxesByEmployee</th>
                <th>TaxesByCompany</th>
                <th>Actions</th>

                <tbody>
                {employees.map((employee, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{employee.name}</td>
                        <td>{employee.surname}</td>
                        <td>{employee.age}</td>
                        <td>{employee.earlySalary}</td>
                        <td>{employee.monthlySalary}</td>
                        <td>{employee.taxesByEmployee}</td>
                        <td>{employee.taxesByCompany}</td>
                        <td>
                            <div>
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
                    style={{
                        marginTop:'24px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        width: 'fit-content',
                        margin: 'auto'}}
                >
                    <Form.Item
                        name={FormName.name}
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
                        name={FormName.surname}
                        label='Surname'
                        rules={[
                            {required: true,message: 'Fill this field'}
                        ]}
                    >
                        <Input
                            placeholder='Surname'
                            style={{minWidth:'480px'}}
                            id='surname'
                            onChange={onChangeInput}
                        />
                    </Form.Item>
                    <Form.Item
                        name={FormName.age}
                        label='Age'
                        rules={[
                            {required: true,message: 'Fill this field'}
                        ]}
                    >
                        <Input
                            type='number'
                            id='age'
                            onChange={onChangeInput}
                            placeholder='Age'
                            style={{minWidth:'480px'}}
                        />
                    </Form.Item>
                    <Form.Item
                        name={FormName.monthlySalary}
                        label='MonthlySalary'
                        rules={[
                            {required: true,message: 'Fill this field'}
                        ]}
                    >
                        <Input
                            type='number'
                            id='monthlySalary'
                            onChange={onChangeInput}
                            style={{minWidth:'480px'}}
                            placeholder='MonthlySalary'
                        />
                    </Form.Item>
                    <Form.Item
                        name={FormName.earlySalary}
                        label='EarlySalary'
                        rules={[
                            {required: true,message: 'Fill this field'}
                        ]}
                    >
                        <Input
                            type='number'
                            id='earlySalary'
                            onChange={onChangeInput}
                            placeholder='EarlySalary'
                            style={{minWidth:'480px'}}
                        />
                    </Form.Item>
                    <Form.Item
                        name={FormName.taxesByCompany}
                        label='TaxesByCompany'
                        rules={[
                            {required: true,message: 'Fill this field'}
                        ]}
                    >
                        <Input
                            type='number'
                            placeholder='TaxesByCompany'
                            style={{minWidth:'480px'}}
                            id='taxesByCompany'
                            onChange={onChangeInput}
                        />
                    </Form.Item>
                    <Form.Item
                        name={FormName.taxesByEmployee}
                        label='TaxesByEmployee'
                        rules={[
                            {required: true,message: 'Fill this field'}
                        ]}
                    >
                        <Input
                            type='number'
                            style={{minWidth:'480px'}}
                            placeholder='TaxesByEmployee'
                            id='taxesByEmployee'
                            onChange={onChangeInput}
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
            <div>
                <Button className='btn-add' type='primary' onClick={()=> setModalActive(true)}>Add+</Button>
            </div>
        </div>)
}
