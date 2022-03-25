import Header from './components/Header'
import Carousel from './components/Carousel'
import './App.css'
import Section from './components/Section'
import YoutubeEmbed from "./components/YoutubeEmbed";
import FirstSection from './components/FirstSection'
import Profile from './components/Profile';
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

      <Section title='O-Week Flyers' content={
        // <div>
        //   <img src={`${process.env.PUBLIC_URL}/Images/1.1.png`} />
        //   <img src={`${process.env.PUBLIC_URL}/Images/2.1.png`} />
        // </div>
        <img src={`${process.env.PUBLIC_URL}/Images/1.1.png`} />
      
      }/>

      <Section title='YECC' content={<img src={`${process.env.PUBLIC_URL}/Images/Presentation1.png`}/>} sectionNo='2'/>

      <Section title='UNSW ASEAN Conference 2021' 
      content={
        <img src={`${process.env.PUBLIC_URL}/Images/UAC2021.png`} className='UAC_css'/>
      }
      sectionNo='3'
      />

      <Footer />
    </div>
  );
}

export default App;
