import NavBar from './components/NavBar';
import Card from './components/Card';
import './App.css'
import data from './data.js';

function App() {
  const cardMap = data.map((item) => {
    return <Card
            key={item.id}
            coverImg={item.coverImg}
            country={item.country}
            link={item.mapsLink}
            location={item.location}
            dates={item.dates}
            description={item.description}
            />
  })
  return (
    <> 
      <NavBar/>
      <cardMap/>
    </>
  )
}

export default App