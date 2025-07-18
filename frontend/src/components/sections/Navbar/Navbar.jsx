import { FacebookIcon, Instagram, TwitterIcon, YoutubeIcon } from 'lucide-react';
import style from './navbar.module.css'

export default function Navbar (){
    return(
        <nav className={style.navbar}>
             <h4>SIVA NAMBI SHOTS</h4> 


            <ul className={style.ul}>
                <li> <a>Home</a></li>
                <li> <a >About</a></li>
                <li> <a >Services</a></li>
                <li> <a >Contact</a></li>
                <li> <a >nav</a></li>
            </ul>

            <div className={style.links}>
                <a href="https://www.instagram.com/siva_nambi_shots?igsh=aXcwMjFlOXUxaW9w"><Instagram/></a>
                <a href="https://www.youtube.com/@sivanambishots3922"><YoutubeIcon/></a>
                
            </div>
        </nav>
        
    )
}