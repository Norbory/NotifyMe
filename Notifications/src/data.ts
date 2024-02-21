import { Post } from './types';
import MONO from './assets/mono.png';
import FROG from './assets/froggi.png';
import ELE from './assets/elefan.png';
import MAR from './assets/marsu.png';

export const posts: Post[] = [
    {
        "id":1,
        "username":"angelo",
        "fullname":"Angelo Mandros",
        "userImg": MONO,
        "postImg":"https://panel.carreraspopulares.com/imagesRV/O/2209/631a1d8048ab6.jpg"
    },

    {
        "id":2,
        "username":"angela_pazita",
        "fullname":"Angela Paz",
        "userImg": FROG,
        "postImg":"https://cdn3.iguzzini.com/getmedia/f5aba3b8-b154-4b37-b1e3-f703efec9713/03_Polimi?width=1500&height=1000"
    },

    {
        "id":3,
        "username":"alejo_cast",
        "fullname":"Alejandro Castro",
        "userImg": ELE,
        "postImg":"https://cayetano.edu.pe/wp-content/uploads/2023/08/df0eacd9-812b-4720-a6ad-a79e230abd00.jpeg"
    },

    {
        "id":4,
        "username":"bast_ion",
        "fullname":"Sebastian Misad",
        "userImg": MAR,
        "postImg":"https://portal.andina.pe/EDPfotografia2/Thumbnail/2008/03/12/000056510W.jpg"
    },

    {
        "id":5,
        "username":"rcarranza",
        "fullname":"Raymundo Carranza",
        "userImg": FROG,
        "postImg":"https://studycli.org/wp-content/uploads/2021/06/chinese-dragon-colorful.jpeg"
    }
]