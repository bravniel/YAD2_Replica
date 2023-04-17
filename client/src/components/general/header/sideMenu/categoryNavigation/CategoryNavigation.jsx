import React from 'react';
import { pageContent } from '../../../../../utils/utils';
import IconedNavLink from '../../iconedNavLink/IcondNavLink';
import CategoryNavigationItem from './categoryNavigationItem/CategoryNavigationItem';

export default function CategoryNavigation({ handleBurgerButtonClick }) {
  return (
    <div className='category-navigation'>
      <div className='title'>ניווט לפי קטגוריות</div>
      <ul className='nav-bar'>
        {pageContent.map((item, index) => {
          return item.category != 'more' ? (
            <li key={index} className='nav-bar-item'>
              <CategoryNavigationItem
                item={item}
                handleBurgerButtonClick={handleBurgerButtonClick}
              />
            </li>
          ) : (
            item.rightItems.map((item, index) => {
              return (
                <li key={index} className='nav-bar-item'>
                  <IconedNavLink key={index} to={item.path} text={item.title} />
                </li>
              );
            })
          );
        })}
      </ul>
    </div>
  );
}
