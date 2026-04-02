
import './App.css'
import PageHeader from './components/PageHeader/PageHeader';
import FormArea from './components/FormArea/FormArea';

function App() {

  return (
    <>
      <main>
        <PageHeader title="Página de recados" 
        subtitle="Organize os comunicados da turma 😊"/>

        <FormArea />
      </main>
    </>
  )
}

export default App
