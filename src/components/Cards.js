import React from 'react';
import "./Cards.css";
import CardItem from './CardItem';

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out these EPIC Destinations!</h1>
            <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                  <CardItem
                      src='/images/img-9.jpg'
                      text="Explore the hidden waterfall deep
                      inside Mt Kenya Highlands"
                      label="Adventure"
                      path='/services'
                  />
                  <CardItem
                      src='/images/img-2.jpg'
                      text="Marvel at the spectacular sunrise on a tropical beach"
                      label="Luxury"
                      path='/services'
                  />
              </ul>
              <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Birds walking on alkaline water at Lake Nakuru'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience breathtaking Natural Landscapes from the Top of Mt Kenya'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-mara.jpg'
              text='The quintessential Masai Mara safaris,thanks to its abundant wildlife and mild climate'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
            </div>
            </div>
        </div>
    );
}

export default Cards;
