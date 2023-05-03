import { Button, ObjectGrid, FormModal, Header, FiltersTab, Footer } from '../../components';
import store from '../../utils/Store'
import { useNavigate } from 'react-router-dom';
import { RouterList } from '../../router/routerList';
import { useState } from 'react';
import { validateForm, validateInput } from '../../utils/validate';
import { fetchObjects } from '../../api/fetchObjects';
import React from 'react';

export default function ContactsPage() {
    
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate(RouterList.HOME);
    };

    return (
        <>
            <div className='admin-edit'>

            <Header logoSize='small' />

            <div style={{display: "flex"}}>

                <div style={{ fontSize: "24px", display: "flex", flexDirection: "column", gap: "5px", width: "1000px" }}>
                    
            <h1 className='about__h1'>
                Контакты
            </h1>
                    <br></br>
                    <span>coderedorder@gmail.com</span>
                    <span>Пн-Пт: 11:00-21:00</span>
                    <span>+7 (967) 288-39-44</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                
            <FiltersTab noSticky={true} />
            </div>
            </div>
            <Footer></Footer>
        </>
    )
}
