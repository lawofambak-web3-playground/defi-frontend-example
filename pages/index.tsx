import Navbar from '../components/Navbar';
import SiteDescription from '../components/SiteDescription';
import TokenList from '../components/TokenList';
import SiteInfo from '../components/SiteInfo';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className='wrapper'>
      <Navbar />
      <SiteDescription />
      <TokenList />
      <SiteInfo />
      <ContactSection />
    </div>
  )
}
