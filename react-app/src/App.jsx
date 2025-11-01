import NavBar from './components/layout/NavBar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Pillars from './sections/Pillars.jsx';
import Practice from './sections/Practice.jsx';
import Experience from './sections/Experience.jsx';
import Tracks from './sections/Tracks.jsx';
import Integrations from './sections/Integrations.jsx';
import Partner from './sections/Partner.jsx';
import { content } from './content/siteContent.js';

function App() {
  return (
    <>
      <NavBar links={content.navigation} />
      <main>
        <Hero content={content.hero} />
        <Pillars items={content.pillars} />
        <Practice topics={content.practiceTopics} />
        <Experience highlights={content.experienceHighlights} />
        <Tracks items={content.tracks} />
        <Integrations logos={content.integrationLogos} />
        <Partner content={content.partner} />
      </main>
      <Footer columns={content.footer.columns} note={content.footer.note} />
    </>
  );
}

export default App;
