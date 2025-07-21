import { FacebookIcon, Instagram, TwitterIcon, YoutubeIcon } from 'lucide-react';
import style from './navbar.module.css'

export default function Navbar (){
    return(
        <nav className={style.navbar}>
             <h4>SIVA NAMBI SHOTS</h4> 


            <ul className={style.ul}>
                <li className={style.navli}> <a>Home</a></li>
                <li className={style.navli}> <a >About</a></li>
                <li className={style.navli}> <a >Services</a></li>
                <li className={style.navli}> <a >Contact</a></li>
                <li className={style.navli}> <a >nav</a></li>
            </ul>

            <div className={style.links}>
                <a href="https://www.instagram.com/siva_nambi_shots?igsh=aXcwMjFlOXUxaW9w"><Instagram/></a>
                <a href="https://www.youtube.com/@sivanambishots3922"><YoutubeIcon/></a>
                
            </div>
        </nav>
        
    )
}