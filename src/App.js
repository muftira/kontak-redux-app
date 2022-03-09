import './App.css';
import { AddKontak, ListKontak } from './components';

function App() {
  return (
    <div className='h-screen w-screen bg-neutral-900 flex justify-center items-center'>
      <div>
        <h2 className='flex justify-center items-center mb-6 font-bold text-4xl text-white'>Kontak App</h2>
        
        <AddKontak/>
        
        <ListKontak/>
      </div>
    </div>
  );
}

export default App;
