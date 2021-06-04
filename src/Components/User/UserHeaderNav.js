import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg';
import {ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg';
import {ReactComponent as AdicionarFoto} from '../../Assets/adicionar.svg';
import {ReactComponent as Sair} from '../../Assets/sair.svg';

import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
    const [mobile, setMobile] = React.useState(null);
    const { userLogout } = React.useContext(UserContext);

    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end activeClassName={styles.active}>
                <MinhasFotos />
                {mobile && 'Minhas fotos'}
            </NavLink>
            
            <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
                <Estatisticas />    
                {mobile && 'Estísticas'}
            </NavLink>
            
            <NavLink to="/conta/postar" activeClassName={styles.active}>
                <AdicionarFoto />
                {mobile && 'Adicionar Fotos'}
            </NavLink>
            
            <button onClick={userLogout}>
                {''}
                <Sair />
                {mobile && 'sair'}
            </button>
        </nav>
    )
}

export default UserHeaderNav;