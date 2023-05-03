import { Footer, Header, Button, Anchor, FiltersTab } from '../../components';
import store from '../../utils/Store';

export default function About() {
    return (
        <>
            <Header logoSize='small' />
            <FiltersTab noSticky={true} />
            <h1 className='about__h1'>
            МЫ НАХОДИМ КРУТЫЕ АКСЕССУАРЫ, ОДЕЖДУ, МЕБЕЛЬ РОССИЙСКОГО ПРОИЗВОДСТВА И ПРОДАЕМ ИХ ВАМ ТАК, ЧТОБЫ И САМИ ВЕЩИ, И ПРОЦЕСС ПОКУПКИ ПРИНОСИЛ ВАМ МНОГО УДОВОЛЬСТВИЯ.
            </h1>
            <br></br>
            <br></br>
            <span style={{fontSize: "18px"}}>ХОТИТЕ ПРОДАВАТЬ ВАШИ КЛАССНЫЕ ВЕЩИ У НАС? ПРИШЛИТЕ ПОДРОБНОЕ ОПИСАНИЕ, ФОТО И ЦЕНЫ НА ANYOBJECTS@GMAIL.COM. НАШ ОТДЕЛ ЗАКУПОК ОБЯЗАТЕЛЬНО ВСЕ ИЗУЧИТ, ПОСМОТРИТ И ОТВЕТИТ.</span>
            
            <br></br>
            <br></br><Footer />
        </>
    )
}
