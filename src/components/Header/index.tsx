import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import SearchButton from './SearchButton';
import style from './Header.module.css';
import trayImg from '../../images/tray.svg';
import SearchInput from '../SearchBar';

type HeaderProps = {
  searchIcon?: boolean;
};

export default function Header({ searchIcon = true }: HeaderProps) {
  const [searchOn, setSearchOn] = useState(false);
  const navigate = useNavigate();
  return (
    <header className={ style.headerContainer }>
      <div className={ style.TopHeaderContainer }>
        <button
          className={ style.headerTitle }
          onClick={ () => navigate('/meals') }
        >
          <img src={ trayImg } alt="meal icon" />
          <h1
            data-testid="page-title"
            className={ style.heading }
          >
            <span className={ style.subtitleSpan }>app</span>
            {' '}
            <span className={ style.titleSpan }>receitas</span>
          </h1>
        </button>
        <div className={ style.icons }>
          { searchIcon && <SearchButton barVisible={ () => setSearchOn(!searchOn) } /> }
          <ProfileButton />
        </div>
      </div>
      { searchOn && <SearchInput /> }
    </header>
  );
}
