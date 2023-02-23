import { useEffect } from 'react';
import Viewer from './Viewer';


function App() {
  useEffect(() => {
    document.title = "Cesium Map";
  })

  return (
    <div>
      <Viewer />
    </div>
  )
}

export default App
