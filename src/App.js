//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Login from './Sidepages/Login'
import Settings from './Sidepages/settings';
import Media from './Sidepages/Media'
import Audio from './Sidepages/Audio'
import Templates from './Sidepages/Templates'
import Text from './Sidepages/Text'
import Elements from './Sidepages/Elements'
import Portal from './Sidepages/Portal'
import Subtitles from './Sidepages/SubTitles'
import  './sb-admin-2.min.css';




function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Portal/>}>
            <Route path="settings" element={<Settings/>} />
            <Route path="media" element={<Media/>} />
            <Route path="audio" element={<Audio/>} />
            <Route path="subtitles" element={<Subtitles/>} />
            <Route path="text" element={<Text/>} />
            <Route path="elements" element={<Elements/>} />
            <Route path="templates" element={<Templates/>} />
          </Route>
        </Routes> 
    </BrowserRouter>
  );
}
export default App;
