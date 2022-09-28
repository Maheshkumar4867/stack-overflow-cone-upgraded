import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { steps, theme, config} from './pages/ChatBot/ChatBot.js'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <ThemeProvider theme={theme}>
            <ChatBot headerTitle="StackBot" steps={steps} {...config} speechSynthesis={{ enable: true, lang: 'en' }} recognitionEnable={true} />
        </ThemeProvider>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
