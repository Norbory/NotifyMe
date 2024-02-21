import { Post } from "../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export function Card({post}: {post: Post}) {
    return (
      <div>
        <div>
          <img src={post.userImg} alt='Imagen de usuario'/>
          <span>{post.fullname}</span>
        </div>
        <img src={post.postImg} alt='Imagen de publicación'/>
        <div>
          <a href="#"><FontAwesomeIcon icon={faThumbsUp} /></a>
          <a href="#"><FontAwesomeIcon icon={faComment} /></a>
          <a href="#"><FontAwesomeIcon icon={faPaperPlane} /></a>
        </div>
      </div>
    );
  }

