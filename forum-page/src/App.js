import './style.css';
import React from 'react';
import Navbar from './components/Navbar';



function App() {


  return (
    <React.Fragment>
        <header>
          <Navbar />
        </header>
        <main className='container'>
          <section className='content'>
            <div className='topic'>
              <article>
                <h1>Lampu webcam tiba-tiba menyala sendiri tanpa membuka
                  aplikasi webcam
                </h1>
                <p>Mau tanya, akhir-akhir ini webcam sering nyala sendiri. 
                  Apakah ada yang tahu penyebabnya dan solusi mengatasi hal itu? Apakah ada
                  kemungkinan laptop saya di-hack karena kasus terjadi tiap terkoneksi di internet.</p>
              </article>
            </div>
            <div className='comentainer'>
              <div className='comentitle'>
                Komentar
              </div>
              <div className='comentline'></div>
            </div>
          </section>
          <aside className='sidecontent'>

          </aside>
        </main>
    </React.Fragment>
  );
}



export default App;
