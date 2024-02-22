/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import { Socket } from 'socket.io-client';
import MONO from '../assets/mono.png';
import FROG from '../assets/froggi.png';
import ELE from '../assets/elefan.png';
import MAR from '../assets/marsu.png';
import { useEffect, useState } from 'react';

export function Navbar ({user, socket}: {user: string, socket: Socket | null}) {

  let perfil = MONO;

  switch (user) {
    case 'angelo':
      perfil = MONO;
      break;
    case 'angela_pazita':
      perfil = FROG;
      break;
    case 'alejo_cast':
      perfil = ELE;
      break;
    case 'bast_ion':
      perfil = MAR;
      break;
    case 'rcarranza':
      perfil = FROG;
      break;
    default:
      perfil = MONO;
  }

  const [notification, setNotification] = useState<any[]>([]);

  useEffect(() => {
    const handleNotification = (data: any) => {
      setNotification(prev => [...prev, data]);
    };

    socket?.on("getNotification", handleNotification);

    return () => {
      // Limpiar la suscripción al desmontar el componente
      socket?.off("getNotification", handleNotification);
    };
  }, [socket]);


  console.log(notification);

  return (
    <nav className="p-4 flex items-center justify-end h-16 bg-inherit sm:w-full">
  
      <a className="text-black hover:text-gray-300 mr-4 md:text-2xl text-lg mx-8 cursor-pointer"> {/* Ajusta el tamaño del texto */}
        <FontAwesomeIcon icon={faInfoCircle} /> {/* Ajusta el tamaño del icono */}
      </a>

      <a className="text-black hover:text-gray-300 mr-4 md:text-2xl text-lg mx-8 cursor-pointer"> {/* Ajusta el tamaño del texto */}
        <FontAwesomeIcon icon={faBell} /> {/* Ajusta el tamaño del icono */}
      </a>

      <a className="p-1 bg-white hover:bg-gray-300 rounded-full mx-6 cursor-pointer">
        <img 
          src={perfil} 
          alt="foto del usuario" 
          className="md:w-12 md:h-12 w-8 h-8 rounded-full"
        />
      </a>

    </nav>
  );
}
