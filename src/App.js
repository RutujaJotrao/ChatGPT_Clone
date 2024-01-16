import React, { useState } from 'react';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import './App.css';
// import { sendMsgToOpenAI } from './openai';

function App() {
//   const [input, setInput] = useState('');
 
//   const handleSend = async () => {
//      const response = await sendMsgToOpenAI(input);
//      console.log(response);
//     };
    
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className='logo' />
            <span className="brand">ChatGPT</span>
          </div>

          <button className="midBtn">
            <img src={addBtn} alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is API?
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className='listItems'><img src={home} alt='Home' className='listitemsImg'/>Home</div>
          <div className='listItems'><img src={saved} alt='Saved' className='listitemsImg'/>Saved</div>        
          <div className='listItems'><img src={rocket} alt='Upgrade' className='listitemsImg'/>Upgrade Plan</div>
        </div>
      </div>

      <div className="main">
        <div className='chats'>
          <div className='chat'>
            <img src={userIcon} alt='' className='chatImg' />
            <p className='txt' style={{width:'200vh'}}>What is Lorem Ipsum?
            </p>
          </div>
          <div className='chat bot'>
            <img src={gptImgLogo} alt='' className='chatImg' />
            <p className='txt' style={{width:'400vh'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>

        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' name='' id='' placeholder='Send a message' />
            <button className='send'>
              <img src={sendBtn} alt='Send' />
            </button>
          </div>
          <p>ChatGPT may produce inaccurate information about your request. ChatGPT Jan 24 Version</p>
        </div>
      </div>
    </div>
  );
}

export default App;
