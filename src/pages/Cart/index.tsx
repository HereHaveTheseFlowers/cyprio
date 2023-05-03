import { useState } from 'react';
import { Footer, Header, Button, Anchor, FiltersTab } from '../../components';
import store from '../../utils/Store';
import type { ObjectProps } from '../../api/fetchObjects';
import { ObjectCard } from '../../components/ObjectGrid';

function useForceUpdate(){
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

export default function Cart() {
    const forceUpdate = useForceUpdate();
    store.on('cart', ()=>{forceUpdate()})

    let totalPrice = 0;

    let currentCart = store.getState().cart;
    let objectsList = store.getState().objects
    if(!currentCart) currentCart = []
    if(!objectsList) objectsList = []

    const cartList: ObjectProps[] = [];
    
    for(let cartObject of currentCart) {
        Object.entries(store.getState().objects).forEach(entry => {
            const [key, value] = entry;
            if(cartObject === value.name) {
                cartList.push(value)
                totalPrice += Number(value.price.replace(" ", ""))
            }
        })
    }
    const handleDeleteObject = (name: string) => {
        const oldCart = store.getState().cart;
        oldCart.splice(oldCart.findIndex((element: string) => element === name), 1)
        store.set("cart", oldCart)
    }

    return (
        <>
            <Header logoSize='small' />
            <div style={{display: "flex"}}>
                <div style={{width: "1100px"}}>
            <h1 className='about__h1'>
                КОРЗИНА
            </h1>
            <br></br>
            <br></br>
                {
                     cartList.map((object, index) => (
                        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}><ObjectCard 
                            key={index}
                            objectkey={"1"}
                            mode={"cart"}

                            name={object.name}
                            price={object.price}
                            brand={object.brand}
                            category={object.category}
                            description={object.description}
                            additionalInfo={object.additionalInfo}
                            url={object.url}
                            urlText={object.urlText}
                            altText={object.altText}

                            mainImage={object.mainImage}
                            previewImage={object.previewImage}
                        />
                        <br></br>
                        <Button style={{background: "black", height: "50px"}}onClick={()=>{handleDeleteObject(object.name)}}>УБРАТЬ</Button>
                        <span style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>ЦЕНА: {object.price}</span>
                        </div>
                    ))
                }
                <br></br>
            <br></br>
            <span style={{fontWeight: "700"}}>ИТОГО: {totalPrice}</span>
            <br></br><br></br>
            <Button style={{fontSize: "40px", background: "black", padding: "5px"}}>ОПЛАТИТЬ</Button>
            <br></br><br></br>
            </div>
            <FiltersTab noSticky={true} />
            </div>
            <br></br><Footer />
        </>
    )
}
