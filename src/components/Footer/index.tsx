import { useEffect } from 'react';
import checkFlexGap from '../../utils/checkFlexGap';
import { Anchor } from './../Anchor';

export function Footer() {
  useEffect(() => {
    if(!checkFlexGap()) {
      document.querySelector('.filters-tab__filters')?.classList.add("no-flexbox-gap")
      document.querySelector('.filters-tab')?.classList.add("no-flexbox-gap")
    } 
  });
  return (
    <footer className="footer">
        <span>Cyprio</span>
        <span>coderedorder@gmail.com</span>
    </footer>
  );
}
