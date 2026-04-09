
import './App.css'
import PageHeader from './components/PageHeader/PageHeader';
import FormArea from './components/FormArea/FormArea';
import ItemRecado from './components/ItemRecado/ItemRecado';
import { useState } from 'react';

function App() {

  const [recados] = useState([
    { id: 1, text: "Entregar atividades", important: false },
    { id: 2, text: "Estudar para prova", important: true },

  ])

  return (
    <>
      <main>
        <PageHeader title="Página de recados"
          subtitle="Organize os comunicados da turma 😊" />
        <section className="container">
          <FormArea />
        </section>
        <section className="recados">
          <h2>Lista de recados: </h2>
          {recados.map((recado) => (
            <ItemRecado
              key={recado.id}
              recado={recado.text}
              important={recado.important}
            >
            </ItemRecado>
          ))}
        </section>
      </main>
    </>
  )
}

export default App
