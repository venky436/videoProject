
import './App.css';

import { LoginScreen } from './Screens/LoginScreen';

import Video from './video_natture.mp4'



import { BrowserRouter, Switch, Route, } from "react-router-dom";
import { Header } from './components/Header/Header';
import { PigGame } from './components/PigGame/PigGame';
import { Body } from './components/Body/Body';
import { CartScreen } from './Screens/CartScreen';
import { LikedScreen } from './Screens/LikedScreen';
import { Footer } from './components/Footer';
import { ViewScreen } from './Screens/ViewScreen';

import { BrandScreen } from './Screens/BrandScreen';

import { AddProductScreen } from './Screens/AddProductScreen';
import { RegisterScreen } from './Screens/RegisterScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <video autoPlay loop muted className='video'>
           <source src={Video} type='video/mp4'/>
         </video> */}
        <Header />

        {/* <PigGame/> */}
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/cart" component={CartScreen} />
          <Route path="/like" component={LikedScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/product/:id" component={ViewScreen} />
          <Route path="/brand/:id" component={BrandScreen} />
          <Route path="/add/product" component={AddProductScreen} />
          <Route path="/user/register" component={RegisterScreen} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
