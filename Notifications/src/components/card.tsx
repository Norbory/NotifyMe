/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Post } from "../types";
import { Socket } from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export function Card({post, socket, user}: {post: Post, socket: Socket | null, user: string}) {

  const [likes, setLikes] = useState<number>(0);
  const [state, setState] = useState<boolean>(false);

  const onHandleLike = (type:number) => {
    setLikes(likes + 1);
    setState(!state);
    socket?.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg mb-4 shadow-md w-4/5">
      {/* Información del usuario */}
      <div className="flex items-center p-4">
        <img 
          src={post.userImg} 
          alt='Imagen de usuario'
          className="w-10 h-10 rounded-full mr-4"
        />
        <span className="font-semibold text-sm">{post.fullname}</span>
      </div>
      
      {/* Imagen de la publicación */}
      <img 
        src={post.postImg} 
        alt='Imagen de publicación'
        className="w-full object-cover"
      />
      <p className="px-3 text-left text-gray-600 text-lg py-4">
        {post.description}
      </p>
      {/* Botones de interacción */}
      <div className="flex justify-between p-4 md:mb-2">
        <div>
          <p className="text-xs md:text-lg"> {likes} <span>Me Gusta</span></p>
        </div>
        <div className="flex items-center">
          <button 
            onClick={() => onHandleLike(1)}
            className={`mr-4 ${state ? 'text-red-500 pointer-events-none' : 'text-gray-700 hover:text-red-500'}`}
          >
            <FontAwesomeIcon icon={faHeart} className="text-md md:text-lg" />
          </button>
          <button 
            className="mr-4 text-gray-700 hover:text-blue-500"
            onClick={() => onHandleLike(2)}
          >
            <FontAwesomeIcon icon={faComment} className="text-md md:text-lg" />
          </button>
          <button 
            className="text-gray-700 hover:text-blue-500"
            onClick={() => onHandleLike(3)}
          >
            <FontAwesomeIcon icon={faPaperPlane} className="text-md md:text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
