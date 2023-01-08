import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import HomePageHeader from './HomePageHeader';
import './StyleHomePage.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Pencil, ThreeDotsVertical, TrashFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    let navigate = useNavigate();
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            <ThreeDotsVertical style={{ 'fontSize': '2em' }} />
        </a>
    ));

    const openEditForm = (row) => {
        let path = `/studentForm`;
        navigate(path, { state: { id: row.id } });
    }

    const deleteStudent = (row) => {
        console.log('ck', row)
    }
    const dummyData = [
        { name: 'Mohit', email: 'asy@gmail.com', rollNo: '009' },
        { name: 'Mohit', email: 'asy@gmail.com', rollNo: '009' },
        { name: 'Mohit', email: 'asy@gmail.com', rollNo: '009' },
        { name: 'Mohit', email: 'asy@gmail.com', rollNo: '009' },
        { name: 'Mohit', email: 'asy@gmail.com', rollNo: '009' },
        { name: 'Mohit', email: 'asy@gmail.com', rollNo: '009' },
        { name: 'Mohit', email: 'asy@gmail.com', rollNo: '009' },
        { name: 'Mohit', email: 'asy@gmail.com', rollNo: '009' },
        { name: 'Mohit', email: 'asy@gmail.com', rollNo: '009' },
        { name: 'Mohit', email: 'asy@gmail.com', rollNo: '009' },
        { name: 'Mohit', email: 'asy@gmail.com', rollNo: '009' },
        { name: 'Mohit', email: 'asy@gmail.com', rollNo: '009' },
    ]
    const columns = [
        {
            name: 'User Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Role No',
            selector: 'rollNo',
            sortable: true,
        },
        {
            button: true,
            cell: function RoleButtonItem(row) {
                return (
                    <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} />
                        <Dropdown.Menu size="sm" title="">
                            <Dropdown.Item onClick={() => openEditForm(row)}><Pencil style={{ 'fontSize': '1.5em', color: 'blue' }} /></Dropdown.Item>
                            <Dropdown.Item onClick={() => deleteStudent(row)}><TrashFill style={{ 'fontSize': '1.5em', color: 'blue' }} /></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                );
            },
        },
    ];
    return (
        <div className='MainContainer'>
            <HomePageHeader />
            <div className='homePageMainDiv'>
                <DataTable
                    columns={columns}
                    data={dummyData}
                    pagination={true}
                    paginationRowsPerPageOptions={[10, 20, 30]}
                    noDataComponent="There is no Admin User data."
                    className='dataTable'
                />
            </div>
        </div>
    )
}
