import logo from './logo.svg';
import './App.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <CopyToClipboard text="Prueba de texto de lexfer">
        <p
          onClick={() => toast.success("Texto copiado", {position:"bottom-center"})}>Copy me!!</p>
      </CopyToClipboard>
      <Toaster />
    </div>
  );
}

export default App;
 