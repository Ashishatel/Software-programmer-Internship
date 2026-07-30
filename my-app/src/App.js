import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponent/Header";
import {Todos} from "./Mycomponent/Todos";
import {Footer} from "./Mycomponent/Footer";
function App() {

  let todo = [
    {
      sno: 1,
      title: "Go to market",
      desc: "you need something important"
    },
     {
      sno: 2,
      title: "Go to school",
      desc: "you need something important"
    } ,
    {
      sno: 3,
      title: "Go to temple",
      desc: "you need something important"
    },
  ]
  return (
    <>
     <Header title = "My Todos List"/>
    <Todos/>
     <Footer/>
    </>
  );
}

export default App;
