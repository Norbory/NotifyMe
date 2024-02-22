/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import {
  Navbar, 
  Card,
  Footer
} from './components';
import { posts } from './data';
import { Post } from "./types";
import { io, Socket } from 'socket.io-client';

import './App.css'

function App() {


  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    setSocket(io('http://localhost:5000')); // Conectar al servidor
  }, []);

  const inputRef = useRef<HTMLInputElement>(null); // Referencia al input

  useEffect(() => {
    // Enfocar el input cuando la página se carga
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Enviar el formulario si se presiona la tecla Enter
    if (event.key === 'Enter') {
      setUser(username);
    }
  };
  useEffect(() => {
    socket?.emit("addUser", user); // Enviar el nombre de usuario al servidor
  }, [socket, user]);

  return (
    <div className='container flex flex-col flex-1 self-center'>
      {user ? (
        <>
          <Navbar user={user} socket={socket} />
          <h1 className='mb-4 md:mb-8 text-lg font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl'>Welcome, {user.toUpperCase()}</h1>
          <div className='flex flex-col justify-center items-center'>
            {posts.map((post: Post) => 
              (<Card key={post.id} post={post} socket={socket} user={user} />)
            )}
          </div>
          <Footer />
        </>
      ) : (
        <div className=''>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Good Ideas 
            </span>
            <span> </span>
            are better shared
          </h1>
          <div className='login flex flex-col items-center justify-center my-12'>
            <input 
              type="text" 
              placeholder='username' 
              className='px-4 py-2 mb-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500' 
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress} // Manejar el evento keypress
              ref={inputRef} // Referenciar el input
            />
            <button 
              className='px-4 py-2 mx-4 hover:bg-blue-500 bg-blue-600 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              onClick={() => setUser(username)}  
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
