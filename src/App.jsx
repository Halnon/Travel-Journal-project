import NavBar from './components/NavBar';
import Card from './components/Card';
import './App.css'
import data from './data.js';

function App() {
  const CardMap = data.map((data) => {
    return <Card
            key={data.id}
            coverImg={data.coverImg}
            country={data.country}
            link={data.mapsLink}
            location={data.location}
            dates={data.dates}
            description={data.description}
            />
  })
  return (
    <> 
      <NavBar/>
      {CardMap}
    </>
  )
}

export default App