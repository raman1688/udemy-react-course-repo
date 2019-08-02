import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { currentUserSelector } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

//import { auth, createUserProfileDocument} from './firebase/firebase.utils';

const App = ({ checkUserSession, currentUser }) => {

  //unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);  
    
 

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={ () => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />) } />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}

  const mapStateToProps = createStructuredSelector({
     currentUser: currentUserSelector //,
    // collections: collectionSelectorForPreview
  }); 

  const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
  })

export default connect(mapStateToProps, mapDispatchToProps)(App);