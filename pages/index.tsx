import Navbar from '../components/Navbar';
import SiteDescription from '../components/SiteDescription';
import TokenList from '../components/TokenList';
import SiteInfo from '../components/SiteInfo';

export default function Home() {
  return (
    <div className='wrapper'>
      <Navbar />
      <SiteDescription />
      <TokenList />
      <SiteInfo />
    </div>
  )
}
