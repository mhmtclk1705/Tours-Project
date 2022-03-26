import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return (
  <section>
    <div className="title">
      {/* css style capitalize */}
      <h2>ours tours</h2>
      <div className="underline"></div>
      </div>
      <div>
        {/* data içerisinde maple dolaştık sadece id kısmını aldık gerisini ...tour da bıraktık */}
        {tours.map((tour)=>{
          return (
            <Tour key = {tour.id} {...tour} removeTour = {removeTour}></Tour>
          )
        })}
    </div>
  </section>
  )
};

export default Tours;
