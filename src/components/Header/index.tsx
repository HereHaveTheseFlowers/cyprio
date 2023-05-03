import { Button } from './../Button';
import { Anchor } from './../Anchor';
import { FormModal } from './../FormModal';
import { useNavigate } from 'react-router-dom';
import { RouterList } from '../../router/routerList';
import { useState } from 'react';
import { validateForm, validateInput } from '../../utils/validate';
import { debounce } from '../../utils/helpers';
import emailjs from '@emailjs/browser';
import store from '../../utils/Store';
import cart from '../../assets/img/213049_f07a_icon.png';

type HeaderProps = { 
    logoSize: 'small' | 'big';
}
function useForceUpdate(){
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}


export function Header(props: HeaderProps) {
    const { logoSize } = props;

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };
    const navigateAbout = () => navigate(RouterList.ABOUT);
    const navigateHome = () => navigate(RouterList.HOME);
    const navigateContacts = () => navigate(RouterList.CONTACTS)
    const navigateDelivery = () => navigate(RouterList.DELIVERY)
    const navigateUserPage = () => navigate(RouterList.USER);
    const navigateCartPage = () => navigate(RouterList.CART);
    const handleGoHome = () => {
        if(window.location.pathname === '/') {
            window.location.reload();
        } else {
            navigateHome();
        }
    };

    let buttonAboutClass = '';
    let buttonBack = null;
    if(window.location.pathname === '/about') {
        buttonAboutClass = 'button_state_chosen';
    } else if(window.location.pathname.includes('/object')) {
        buttonBack = (
          <button className="filters-tab__back-button" onClick={handleGoBack} aria-label="Иконка стрелочки назад">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20">
              <path d="m.96 10 7.19-7.19L9.7 4.37 5.29 8.8h23.75v2.4H5.29l4.41 4.39-1.57 1.6L.96 10Z"/>
            </svg>
          </button>
        )
    }

    const [isModalActive, setisModalActive] = useState(false);

    const handleOpenForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(e.ctrlKey) { navigate('/'+RouterList.ADMIN) }
        else { setisModalActive(true) }
    };

    const handleSendEmail: any = debounce((fd: FormData) => {
        
        const output: Record<string, string> = {};
        for(const data of fd) {
          output[data[0].toString()] = data[1].toString();
        }
        if(!output.objectname || !output.objectbrand || !output.objecturl) return;

        const templateParams = {
            objectName: output.objectname,
            objectBrand: output.objectbrand,
            objectLink: output.objecturl
        };
         
        emailjs.send('service_asau0qg', 'template_s6uv5nb', templateParams, 'lDpH5yv2tTiYLE_8v')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
    }, 2000)

    const handleLoginIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!e.target) return;
        const fd = new FormData(e.target as HTMLFormElement);
        if(fd && validateForm(fd)) {
            const output: any = {}
            for(const data of fd) {
                output[data[0].toString()] = data[1].toString();
            }
            if(!output.login || !output.password) return;
            if(output.login !== 'СЕРГЕЙ') {
                alert('Неправильный логин или пароль')
                return;
            }  
            store.set("login", output.login)
            navigateUserPage()
        }
    };

    const isMobile: boolean = window.matchMedia('(max-device-width: 480px)').matches;
    
    const isLoggedIn = store.getState().login !== undefined ? false : true

    const isCart = store.getState().cart !== undefined ? true : false
    const forceUpdate = useForceUpdate();
    store.on('cart', () => {
        forceUpdate();
    });

    return (
        <header className="header">
            <div className="header__logo" onClick={handleGoHome}>Cyprio</div>
            <div className="header__menu header__menu_left" style={{ marginRight: "800px"}}>
                <Button  onClick={()=>{navigateDelivery()}} style={{color: "white"}}>Доставка</Button>
                <Button  onClick={()=>{navigateContacts()}} style={{color: "white"}}>Контакты</Button>
            </div>
            { isMobile && buttonBack }
            <div className="header__menu header__menu_right">
            { !isLoggedIn && <Button  onClick={()=>{navigateUserPage()}} style={{color: "white"}}>Вы вошли</Button> }
            { isLoggedIn && <Button onClick={handleOpenForm} style={{color: "white"}}>Вход</Button> }
            { isCart && <Button onClick={()=>{navigateCartPage()}} style={{color: "white", display: "flex", alignItems: "spaceBetween"}}><img style={{height: "25px", }} src={cart}></img>({store.getState().cart.length})</Button> }
            
            
            </div>
            <FormModal active={isModalActive} setActive={setisModalActive} onSubmit={handleLoginIn}>
                <FormModal.InputField fieldtitle='Логин' name='login' type='text' autoComplete="off" />
                <FormModal.InputField fieldtitle='Пароль' name='password' type='password' autoComplete="off" />
                <FormModal.ButtonSubmit>Войти</FormModal.ButtonSubmit>
            </FormModal>
        </header>
    );
}
