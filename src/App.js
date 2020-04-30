import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './projects/Project'
import Header from './Components/Header'
import Footer from './Components/Footer'

const client = new ApolloClient({
  uri:'http://justins-portfolio.local/graphql'
})

function App() {
  return (
   <ApolloProvider client={client}>
     <BrowserRouter>
     <Header/>
       <main>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/projects/:slug" component={Project}/>
       </main>
     <Footer/>
     </BrowserRouter>
   </ApolloProvider>
  );
}

export default App;
