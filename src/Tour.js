import React, { useState } from 'react';
// destructuring ile data içerisindeki propertyleri tanımladık son olarak removeTour u da buraya ekledik butona
// tıklandığında kullanılacağı için
const Tour = ({id, image, info, price, name, removeTour}) => {
  // readMore 200 karakterden sonrasını gizlemek için 
  const [readMore, setReadMore] = useState(false);

  return (
    // css yapısı gelen datayı tagler içerisine yolluyoruz
  <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">$ {price}</h4>
      </div>
      {/* 200 karakterden fazlasını ... ile gösterip readmore butonu ile genişletme durumu */}
      <p>{readMore ? info : `${info.substring(0,200)}...`}
      {/* eğer ki read more a basıldıysa show less ile 200 karaktere sınırlandırmak ve tam 
      tersi durumda genişletmek için  */}
      <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
      </p>
      {/* not interested a bastığımızda bastığımız tour u silmek için onCLick oluşturduk */}
      <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
    </footer>

  </article>
  )
};

export default Tour;
