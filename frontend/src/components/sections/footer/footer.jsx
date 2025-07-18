import { ArrowBigDown, Instagram, Youtube } from 'lucide-react';
import style from'./footer.module.css'

export default function Footer(){
    return(
        <footer className={style.footer}>
            <div className={style.footer_details}>
                <div className={style.content}>
                    <h4>SIVA NAMBI SH0TS</h4>
                    <p>You will be sought after when needed</p>
                    <p>Explore.</p> 
                    <p>Learn.</p>
                    <p>Share.</p>
                        
                        
                    

                </div>
                <div className={style.contentt}>
                    <h4>QUICK LINKS</h4>
                    <ul>
                       <li><a>HOME</a></li>
                       <li><a>ABOUT</a></li>
                       <li><a>SERVICES</a></li>
                       <li><a>CONTACT</a></li>
                       <li><a>NAV</a></li>
                    </ul>
                </div>
                <div className={style.contenttt}>
                    <h4>SERVICES</h4>
                    <ul> 
                        <li><a>youtube live streaming</a></li>
                    </ul>
                </div>
            </div>
            <div className={style.link}>
              <div className={style.links}>
                 <a href="">sivanambishots@gmail.com</a>
              </div>
                <div className={style.links}>
                
                    <a href="https://www.instagram.com/siva_nambi_shots?igsh=aXcwMjFlOXUxaW9w"> <Instagram/></a>
                    <a href="https://www.youtube.com/@sivanambishots3922"> <Youtube/></a>
                    
                </div>
            </div>
            <div className={style.copyrights}>
                <ul>
                <li>&copy; 2025 SIVA NAMBI SHOTS. All rights reserved.</li>
                </ul>

            </div>
        </footer>
    )
}