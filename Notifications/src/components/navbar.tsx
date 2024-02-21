import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import MONO from '../assets/mono.png';
import FROG from '../assets/froggi.png';
import ELE from '../assets/elefan.png';
import MAR from '../assets/marsu.png';

export function Navbar ({ user }: { user: string }) {

  let perfil = MONO;

  switch (user) {
    case 'angelo':
      perfil = MAR;
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

  return (
    <nav className="p-4 flex items-center justify-end w-full h-16">
  
      <a className="text-black hover:text-gray-300 mr-4 text-lg mx-8 cursor-pointer"> {/* Ajusta el tamaño del texto */}
        <FontAwesomeIcon icon={faInfoCircle} size="lg" /> {/* Ajusta el tamaño del icono */}
      </a>

      <a className="text-black hover:text-gray-300 mr-4 text-lg mx-8 cursor-pointer"> {/* Ajusta el tamaño del texto */}
        <FontAwesomeIcon icon={faBell} size="lg" /> {/* Ajusta el tamaño del icono */}
      </a>

      <a className="p-1 bg-white hover:bg-gray-300 rounded-full mx-6 cursor-pointer">
        <img 
          src={perfil} 
          alt="foto del usuario" 
          className="w-12 h-12 rounded-full"
        />
      </a>

    </nav>
  );
}
