import { Button, ObjectGrid, FormModal, FiltersTab, Header, Footer } from '../../components';
import store from '../../utils/Store'
import { useNavigate } from 'react-router-dom';
import { RouterList } from '../../router/routerList';
import { useState } from 'react';
import { validateForm, validateInput } from '../../utils/validate';
import { fetchObjects } from '../../api/fetchObjects';
import React from 'react';

export default function DeliveryPage() {
    
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate(RouterList.HOME);
    };

    return (
        <>
            <div className='admin-edit'>

            <Header logoSize='small' />

            <div style={{display: "flex"}}>


            
                
                <div style={{ fontSize: "18px", display: "flex", flexDirection: "column", gap: "5px" }}>
            <h1 className='about__h1'>
                Доставка
            </h1>
                <br></br>
                    <br></br>
                    <br></br>
                    <span style={{fontWeight: "600"}}>Курьерская доставка</span>
                    <br></br>
                    <span>Срок доставки 1-3 рабочих дня* с момента оформления заказа;</span>
                    <br></br>
                    <span>Доставка курьером по Москве. Доставка за МКАД оплачивается отдельно (25р/км.);</span>
                    <br></br>
                    <span>Стоимость доставки – 400 рублей;</span>
                    <span>Время доставки: с 11-00 до 21-00, без выходных;</span>
                    <br></br>
                    <span>Есть возможность примерить вещи перед покупкой и взять лишь те, которые подошли (только для жителей Москвы). Время примерки: 15-20 мин;</span>
                    <span>Максимальное количество вещей – 5шт;</span>
                    <span>Если вы полностью отказываетесь от покупки, то доставка считается платной и составит 400 рублей.</span>
                    <br></br>
                    

                    <span>* — В период распродаж или дополнительных скидок срок обработки и доставки может быть незначительно увеличен.</span>
                    <br></br>
                    <br></br>

                    <span style={{fontWeight: "600"}}>Возврат товара</span>
                    <br></br>
                    <span>Вызов курьера для возврата товара (только по Москве и 10 км от МКАД);</span>
                    <br></br>
                    <span>Возврат (по нашей вине - дефект, брак и т.д.): БЕСПЛАТНО;</span>
                    <br></br>
                    <span>Обмен (по желанию покупателя - не подошёл размер, цвет и т.д.): 400 рублей.</span>

                    <br></br><br></br>

                    <span style={{fontWeight: "600"}}>Доставка Почтой России (по всей России)</span>
                    <br></br>
                    <span>ВАЖНО: Данный способ доставки возможен только с полной предоплатой в момент оформления заказа;</span>
                    <br></br>
                    <span>Стоимость доставки Почтой России – 300 рублей.</span>
                    <br></br>
                    <span>БЕСПЛАТНО при покупке от 5000 рублей.</span>
                    <br></br>
                    <span>Отправка: ускоренная бандеролью 1 класса, во все регионы России;</span>
                    <br></br>
                    <span>Отслеживание посылки: трек код предоставляется через 3-5 дней после отправки заказа на вашу эл. почту и по смс. А так же, вы всегда можете проверить статус заказа по его номеру на главной странице нашего сайта.</span>
                    <br></br>
                    <span>Услуга примерки отсутствует.</span>
                    <br></br>
                    <span>Время доставки: до 14 дней, в зависимости от удалённости адресата от г. Москвы;</span>
                    <br></br>
                    <span>В случае не подошедшего товара, возврат осуществляется на обратный адрес, указанный на почтовом пакете Почтой России;</span>
                    <br></br>
                    <span>Стоимость пересылки не подошедшего размера оплачивается покупателем.</span>
                    <br></br><br></br>
                </div>
            <FiltersTab noSticky={true} />
                </div>
            </div>
            <Footer></Footer>

        </>
    )
}
