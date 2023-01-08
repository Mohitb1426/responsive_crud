import React from 'react';
import { Button } from 'react-bootstrap';
import './StyleHomePage.css';
import { useNavigate } from "react-router-dom";

export default function HomePageHeader() {
    let navigate = useNavigate();
    const openStudentForm = () => {
        let path = `/studentForm`;
        navigate(path);
    }
    return (
        <div className='homePageContainer'>
            <div className='homePageHeaderContainer'>
                <label className='headerTitleText'>
                    Students Data
                </label>
                <Button onClick={openStudentForm}>Add New Student</Button>
            </div>
        </div>
    )
}
