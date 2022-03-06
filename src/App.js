import Header from './components/Header'
import Carousel from './components/Carousel'
import './App.css'
import Section from './components/Section'

function App() {
  return (
    <div className="Section">
      <Header />
      <h2 className='first_title'>What is UNSW ASEAN Society?</h2>
      <p>ASEAN society is a UNSW based community and non-for profit organization that aims to facilitate discussions on South East Asia's region specific issues.</p>
      {/* https://youtu.be/dtai3mVeGMM */}

      <Section title='What is UNSW ASEAN Society?' content={<p>ASEAN society is a UNSW based community and non-for profit organization that aims to facilitate discussions on South East Asia's region specific issues.</p>}/>

      <h1 className='second_title'> Previous Events </h1>
      <Carousel />
      
      <h1 className='first_title'> Meet Our Team </h1>
      <h1 className='second_title'> Recruitment </h1>
      <h1 className='first_title'> O-Week Flyers </h1>
      <h1 className='second_title'> YECC </h1>
      <h1 className='first_title'> UNSW ASEAN Conference 2021 </h1>

    </div>
  );
}

export default App;
