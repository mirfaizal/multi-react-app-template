import React from "react";

import Styles from '../Header.scss';
import Logo from './lfg_white.svg';

export interface IHeaderProps {
  title?: string;
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  title = 'Remote Education ',
}) => (
  <header className={Styles.header}>
    <a href={'/'}>
      {/* <Logo className={Styles['header__logo']} /> */}
    </a>

    <h1 className={Styles['header__title']}>{title}</h1>
    <a href={'/'} className={Styles['header__home-link']}>
      {/* <Icon className='mt-0 mr-1' name='home' color='white' /> */}
      <span className={Styles['header__home-text']}>Home</span>
    </a>
  </header>
);

export default Header;
