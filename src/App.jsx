import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import headerImage from './assets/img/headerImage.jpg';
import LocationInfo from "./components/LocationInfo";
import Pagination from "./components/Pagination";
import ResidentForm from "./components/ResidentForm";
import ResidentList from "./components/ResidentList";
import { getRandomNumber } from "./utils/handleRandom";

const RESIDENTS_PERPAGE = 12;

function App() {
  // Estado que almacena la informacion de la location.
  const [location, setLocation] = useState();
  // Estado que almacena el valor de el input no controlado.
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)


  // Funcion que se ejecuta en el submit de el formulario.
  const handleSubmit = () => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }


  // Funcion que obtiene los residentes nuevos dependiendo de la pagina actual.
  const pagination = () => {
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit)
    return newResidents
  }


  // Efecto que se ejecuta en el primer render y cuando cambia nameLocation.
  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`;
    axios.get(URL)
      .then((result) => setLocation(result.data))
      .catch((error) => console.log(error));
  }, [nameLocation]);


  return (
    <div className="App">
      <img src={headerImage} alt="" />
      <ResidentForm handleSubmit={handleSubmit} />
      <LocationInfo location={location} />
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} setPage={setPage} />
      <ResidentList pagination={pagination} />
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} setPage={setPage} />
    </div>
  );
}

export default App;
