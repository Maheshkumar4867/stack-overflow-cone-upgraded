import { Link } from 'react-router-dom';
import AskQuestion from '../AskQuestion/AskQuestion';

const style = {
    textDecoration: "none",
    padding: "15px 15px",
    backgroundColor: "#EF6C00",
    color: 'black',
    border: 'none',
    borderRadius: '20px',
    fontSize: '15px',
    cursor: 'pointer'
  }

export const steps = [
      {
          id: '0',
          message: 'Hey Buddy!',

          trigger: '1',
      },
    {
          id: '1',

          message: 'What should I call you?',
          trigger: '2'
      },
    {
          id: '2',

          user: true,
          trigger: '3',
      },
    {
          id: '3',
          message: " Hi {previousValue}, how can I help you?",
          trigger: '4'
      },
    {
          id: '4',
          options: [
        { value: 1, label: 'Ask me a Question (Bot)', trigger: '6' },
              { value: 2, label: 'Ask a Question (Publicly)', component: <div><Link to='/AskQuestion'><button style={style}>Click here to ask a Question</button></Link></div>, trigger: '5'},
              { value: 3, label: 'LogIn OR SignUp', component: <Link to='/Auth'><button style={style}>Click here to LogIn or SignUp</button></Link>, trigger: '5' },
              { value: 4, label: 'View other Users', component: <Link to='/Users'><button style={style}>Click here to see all other Users</button></Link>, trigger: '5' },
              { value: 5, label: 'View all Questions',component: <Link to='/Questions'><button style={style}>Click here to see all other Questions</button></Link>, trigger: '5' },
          ],
      },
      {
          id: '5',
          message: 'Is there anything else that I can do for you?',
      trigger: '4',
      },
      {
          id: '6',
          component: (
        <AskQuestion/>
      ),
      trigger: '7',
      },
      {
          id: '7',
      message: "Question asked?",
      trigger: '8',
      },
      {
          id: '8',
      options: [
        {value: 1, label: 'Done !!', trigger: '9'}
      ],
      },
      {
          id: '9',
          message: "I don't seem to know the answer to this particular question. I will list it publicly for other users to help you out!!",
      trigger: '5',
      },
      {
          id: '10',
          message: "Bye, have a nice day!!",
      end: true
      },
  ];

export const theme = {
    background: '#f5f8fb',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: 'black',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

export const config = {
    botDelay: 2000,
    floating: true,
  };