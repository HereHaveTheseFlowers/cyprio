import { Footer, Header, Button, FiltersTab, ObjectGrid } from '../../components';
import { useRef, useEffect } from 'react';

export default function Home() {
    const arrowRef = useRef(null);

    let lastScrollTimer = 0;
    useEffect(() => {
        window.onscroll = function() {
            lastScrollTimer++;
            if(lastScrollTimer > 10) {
                lastScrollTimer = 0;
                const distanceScrolled = document.documentElement.scrollTop;
                if (distanceScrolled > 30) {
                    if(arrowRef && arrowRef.current) arrowRef.current.style.opacity = '1';
                } else {
                    if(arrowRef && arrowRef.current) arrowRef.current.style.opacity = '0';
                }
            }
        }
        return () => {
            window.onscroll = null;
        }
    }, [])

    const handleArrow = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <Header logoSize={'big'} />
            <div style={{display: "flex"}}>

            <ObjectGrid />
            <FiltersTab />

            </div>
            <Footer />
        </>
    )
}
