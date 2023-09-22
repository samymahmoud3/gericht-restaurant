import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import images from '../../constants/images';
import data from '../../constants/data'
import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title='Menu that fits you palatte' />
        <h1 className='headtext__cormorant'>Today’s Special</h1>
      </div>

      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_salad flex__center'>
          <p className='app__specialMenu-menu_heading'>Salad & Rice</p>
          <div className='app__specialMenu_menu_items'>
            { data.cocktails.map((cocktail, index) => {
              return (
                <MenuItem key={cocktail.title + index} title= {cocktail.title} price= {cocktail.price} tags={cocktail.tags} />
              )
            })}
          </div>
        </div>

        <div className='app__specialMenu-menu_img'>
          <img src={ images.menu } alt='menu img' />
        </div>

        <div className='app__specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu-menu_heading'>Cocktails</p>
          <div className='app__specialMenu_menu_items'>
            { data.cocktails.map((cocktail, index) => {
              return (
                <MenuItem key={cocktail.title + index} title= {cocktail.title} price= {cocktail.price} tags={cocktail.tags} />
              )
            })}
          </div>
        </div>
      </div>
      <div style={ { marginTop: '15px' } }>
        <button type='button' className='custom__button' >View More</button>
      </div>
    </div>
  )
}

export default SpecialMenu;
