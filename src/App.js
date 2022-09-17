import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component.jsx';
import { checkUserSession, setCurrentUser } from './store/user/user.actions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='register' element={<Authentication not_registered />} />
        <Route path='checkout' element={<Checkout />} />
        {/* /home/shop */}
      </Route>
    </Routes>
  );
};

export default App;

/*
userReducer.js => rootReducer.js => store.js => index.js (<Provider store={store})

user.action.js (setCurrUser)  => app.js

*/
