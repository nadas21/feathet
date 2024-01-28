import { Header } from "./All/Header"
import { Head } from "./All/Header/Head"
import { Section } from "./All/Header/Head/Section"
import { Ortasi } from "./All/Header/Ortasi"
import { Card } from "./Card"
import { Funter } from "./Funter"
import { Main } from "./Main/indec"
import { Room } from "./Room"
import { Start } from "./Start"




function App() {


  return (
    <>
     <Header/>
     <main>
      <Head/>
      <Section/>
      <Ortasi/>
      <Card/>
      <Main/>
      <Start/>
      <Room/>
      <Funter/>
     </main>
    </>
  )
}

export default App
