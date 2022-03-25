import Header from './components/Header'
import Carousel from './components/Carousel'
import './App.css'
import Section from './components/Section'
import YoutubeEmbed from "./components/YoutubeEmbed";
import YECC_image from './components/Images/Presentation1.png'
import UAC_header from './components/Images/UAC2021.png'
import FirstSection from './components/FirstSection'
import Profile from './components/Profile';
import Flyer from './components/Images/1.1.png'
import Recruitment from './components/Recruitment';
import Footer from './components/Footer'

function App() {
  return (
    <div className="Section">
      <Header />

      <FirstSection title='What is UNSW ASEAN Society?' 
      content={
        <p style={{width: '47%'}}>ASEAN society is a UNSW based community and non-for profit organization that aims to facilitate discussions on South East Asia's region specific issues.</p>
      }
      video={<YoutubeEmbed embedId="dtai3mVeGMM" />}
      />

      <Section title='Previous Events' sectionNo='2' content={<Carousel/>}/>
      <Profile title='Meet Our Team' />
      <Recruitment title='Recruitment' />

      <Section title='O-Week Flyers' content={<img src={Flyer}/>}/>

      <Section title='YECC' content={<img src={YECC_image}/>} sectionNo='2'/>

      <Section title='UNSW ASEAN Conference 2021' 
      content={
        <img src={UAC_header} className='UAC_css'/>
      }
      sectionNo='3'
      />

      <Footer />
    </div>
  );
}

export default App;
