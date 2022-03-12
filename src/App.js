import Header from './components/Header'
import Carousel from './components/Carousel'
import './App.css'
import Section from './components/Section'
import YoutubeEmbed from "./components/YoutubeEmbed";
import YECC_image from './components/Images/Presentation1.png'
import UAC_header from './components/Images/UAC2021.png'
import joinUs from './components/Images/Joinus.jpg'
import FirstSection from './components/FirstSection'

function App() {
  return (
    <div className="Section">
      <Header />

      <FirstSection title='What is UNSW ASEAN Society?' 
      content={
        <p>ASEAN society is a UNSW based community and non-for profit organization that aims to facilitate discussions on South East Asia's region specific issues.</p>
      }
      video={<YoutubeEmbed embedId="dtai3mVeGMM" />}
      />

      <Section title='Previous Events' sectionNo='2' content={<Carousel/>}/>

      <Section title='Meet Our Team' content={<p>asdsda </p>}/>
      <Section title='Recruitment' content='' sectionNo='2' backImage={joinUs} style={{ backgroundImage: `url(${joinUs})`, backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw'}}/>
      <Section title='O-Week Flyers' content=''/>
      <Section title='YECC' content={<img src={YECC_image}/>} sectionNo='2'/>
      <Section title='UNSW ASEAN Conference 2021' content={<img src={UAC_header} className='UAC_css'/>}/>

    </div>
  );
}

export default App;
