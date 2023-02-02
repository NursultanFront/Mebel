import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import Image from 'next/image';
import Logo from '../../assets/img/logo.png';
import CatalogLogo from '../../assets/svg/CatalogLogo';
import Search from '../../assets/svg/Search';

import User from '../../assets/svg/User';
import Favourite from '../../assets/svg/Favourite';
import Basket from '../../assets/svg/Basket';
import Bonus from '../../assets/svg/Bonus';
import LocationCity from '../../assets/svg/Location';
import styles from './Header.module.scss';

// import DropDown from '../dropDown/Dropdown'

const Header = () => {
	return (
		<header className={cn(styles.header)}>
			<div className={cn('site-container', styles.header__wrapper)}>
				<div className={cn(styles.header__top)}>
					<div className={cn(styles.header__logo)}>
						<Link href={'#'}>
							<Image src={Logo} alt={'Logo'}></Image>
						</Link>
					</div>
					<div className={cn(styles.header__catalog)}>
						<Link href={'#'}>
							<CatalogLogo className='catalog'></CatalogLogo>
							<span>Каталог</span>
						</Link>
					</div>
					<div className={cn(styles.header__search, styles.search)}>
						<form action='#' className={cn(styles.search__form)}>
							<input
								className={cn(styles.search__input)}
								type='search'
								placeholder='Я хочу найти'
							/>
							<button className={cn(styles.search__btn)}>
								<Search></Search>
							</button>
						</form>
					</div>
					<div className={cn(styles.header__info)}>
						<p className={cn(styles.header__phone)}>8 (800) 100 33 81</p>
						<div className={cn(styles.header__days)}>
							Пн-Пт: с 9-00 до 19-00
						</div>
					</div>
					<div className={cn(styles.header__login)}>
						<Link href={'#'}>
							<User></User>
						</Link>
						<Link href={'#'}>
							<Favourite></Favourite>
						</Link>
						<Link href={'#'}>
							<Basket></Basket>
						</Link>
						<div className={cn(styles.header__bio)}>
							<span className={cn(styles.header__total)}>152 900 ₽</span>
							<Link href={'#'}>Мои покупки</Link>
						</div>
					</div>
				</div>

				<div className={cn(styles.header__bottom)}>
					<ul className={cn(styles.header__list)}>
						<li className={cn(styles.header__item)}>
							<Link href='#' className={cn(styles.header__link)}>
								<span>Магазины и контакты</span>
							</Link>
						</li>
						<li className={cn(styles.header__item)}>
							<Link href='#' className={cn(styles.header__link)}>
								<span>Сборка и доставка</span>
							</Link>
						</li>
						<li className={cn(styles.header__item)}>
							<Link href='#' className={cn(styles.header__link)}>
								<span>Акции и скидка</span>
							</Link>
						</li>
						<li className={cn(styles.header__item)}>
							<Link href='#' className={cn(styles.header__link)}>
								<span>О компании</span>
							</Link>
						</li>
						<li className={cn(styles.header__item)}>
							<Link href='#' className={cn(styles.header__link)}>
								<span>Сотрудничество</span>
							</Link>
						</li>
					</ul>
					<div className={cn()}>
						<Bonus></Bonus>
						Накопленные бонусы
					</div>
					<div className={cn(styles.header__dropdown)}>
						<LocationCity></LocationCity>
						<span>Ваш город</span>
						{/* <DropDown></DropDown> */}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
