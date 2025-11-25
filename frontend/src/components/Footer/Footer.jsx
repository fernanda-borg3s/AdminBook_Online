import './Footer.css'
import Logo from '../../assets/Img/Logo.png'
import Github from '../../assets/Img/Github.png'
import Linkedin from '../../assets/Img/Linkedin.png'
import Codepen from '../../assets/Img/Codepen.png'




export default function Footer(){
    return(<>
    
    <footer>
        <div className='d-flex justify-content-center align-items-center pe-2 ps-2 pb-2'>
            <div>
                 <img alt="" src={Logo}   className="" />
                 <div className='text-footer'>
                    <p className='text-center fst-italic fs-5'>“We’re all inevitably connected in some away”</p>
                    <p className='text-end'>~ Anônimo</p>
                 </div>
                 <div className='rede-sociais'>
            <ul className='d-flex  justify-content-between align-items-start'>
                <li>
                    <a href="https://github.com/fernanda-borg3s"><img src={Github} alt="" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/fernanda-borges133/"><img src={Linkedin} alt="" /></a>
                </li>
                <li>
                    <a href=""><img src={Codepen} alt="" /></a>
                </li>
            </ul>
        </div>
            </div>
               
        
            </div>
           
        <div className='footer-name d-flex justify-content-center'>
            Desenvolvido por Fernanda Borges | 2025
        </div>
    </footer>
    </>)
}