import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// Fetch url adress
const url = 'https://course-api.com/react-tours-project'
function App() {
  // fetch aşamasında loading ekranının ekranda çıkması için
  const [loading, setLoading] = useState(true);
  // data
  const [tours,setTours] = useState([]);
  
  // Tours un içerisinde not interested butonuna tıkladığımızda eğerki aynı id ye sahip değilse
  // newTours a atıyoruz aynı id li olanı seçmeyecek ve silecek 
  const removeTour = (id) => {
    const newTours = tours.filter ((tour) => tour.id !== id);
    setTours(newTours);
    // sonra da setTours ile tours un yeni hali newTours oluyor
  }

  const fetchTours = async () => {
  // fetch aşamasında loading ekranının ekranda çıkması için

    setLoading(true);
    try {
      // fetch aşaması
      const response = await fetch(url);
      const tours = await response.json();
      // console.log(tours);  
      // fetch sonrası setLoading false oluyor ekrandan gidiyor bilgiler ekrana geliyor
      setLoading(false)
      // tours un içerisindekiler listeleniyor
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error);
      
    }
    
  }
  // useEffect ile fetchTours başlatılıyor
  useEffect(() => {
    fetchTours();
  }, [])
  // eğer loading useState i true olursa Loading componenti çalışsın
  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }

  // bütün tours içerisindekiler silinirse ekrana bir uyarı yazısı gelsin ve refresh butonu gelsin
  // refresh butonuna tıklandığında fetchTours tekrar çalışsın ve yeniden bilgiler ekrana gelsin...
  if(tours.length === 0) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className='btn' onClick={fetchTours}>refresh</button>
      </div>
    </main>
  }
  // Tours componentinin içerisine data yı ve removeTour u props kullanarak gönderdik
  return <main>
    <Tours tours = {tours} removeTour = {removeTour}/>
  </main>
}

export default App
