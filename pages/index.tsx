import Navbar from '../components/Navbar';
import SiteDescription from '../components/SiteDescription';
import TokenList from '../components/TokenList';

export default function Home() {
  return (
    <div className='wrapper'>
      <Navbar />
      <SiteDescription />
      <TokenList />
    </div>
  )
}
