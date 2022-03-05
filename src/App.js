import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'

function App() {
  return (
    <div className="Section">
      <Header />
      <h2>What is UNSW ASEAN Society?</h2>
      <p>ASEAN society is a UNSW based community and non-for profit organization that aims to facilitate discussions on South East Asia's region specific issues.</p>
    
      <h1> Previous Events </h1>
      <Carousel />
      
      <h1> Meet Our Team </h1>
      <h1> Recruitment </h1>
      <h1> O-Week Flyers </h1>
      <h1> YECC </h1>
      <h1> UNSW ASEAN Conference 2021 </h1>

    </div>
  );
}

export default App;
