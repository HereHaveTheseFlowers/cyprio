import { Button, ObjectGrid, FormModal } from '../../components';
import store from '../../utils/Store'
import { useNavigate } from 'react-router-dom';
import { RouterList } from '../../router/routerList';
import { useState } from 'react';
import { validateForm, validateInput } from '../../utils/validate';
import { fetchObjects } from '../../api/fetchObjects';
import React from 'react';

export default function UserPage() {
    
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate(RouterList.HOME);
    };

    const [isModalActive, setisModalActive] = useState(false);
    const handleOpenForm = () => {
        setisModalActive(true)
    }

    const handleAddObject = (e: React.FormEvent<HTMLElement>) => {

    }

    return (
        <>
            <div className='admin-edit'>

                <header className="admin-edit__header">
                    <Button onClick={navigateHome}>ВЕРНУТЬСЯ НА ГЛАВНУЮ</Button>
                    <h1 className="admin-edit__h1">ЛИЧНЫЙ КАБИНЕТ</h1>
                </header>

                <div style={{ fontSize: "24px", display: "flex", flexDirection: "column", gap: "5px" }}>
                    <span>ИМЯ: СЕРГЕЙ</span>
                    <span>ФАМИЛИЯ: КОЗЛОВ</span>
                    <span>ТЕЛЕФОН: +79588182423</span>
                    <span>ДАТА РОЖДЕНИЯ: 08.06.2001</span>
                </div>
                <br></br>
                <br></br>
                <div style={{ fontSize: "24px", display: "flex", flexDirection: "column", gap: "5px" }}>
                    АКТИВНЫЕ ЗАКАЗЫ:
                </div>
                
            </div>
        </>
    )
}
