import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard';
import Users from './users'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Createuser from './createuser';
import Userview from './userview';


function App() {

  return (

    <BrowserRouter>
      <div id='wrapper'>
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/users" element={<Users />} />
                <Route path="/users-create" element={<Createuser />} />
                 <Route path="/users-view/:" element={<Userview />}/>
             </Routes>
            </div>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
