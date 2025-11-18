import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Login.css'
import LogoBanner from '../../assets/Img/LogoBanner.png'
import LogoNoBg from '../../assets/Img/LogoNoBg.png'
import About from '../../assets/Img/About.png'
import BookNoBg from '../../assets/Img/IconBookNoBg.png'

export default function Login(){
    const fazerLogin = () => {
        window.location.href = 'http://localhost:5173/home';
    }

    return (
        <>
        <nav className='nav-login d-flex justify-content-center align-items-center pt-3'>
            <div>
            <img alt="" src={LogoNoBg} width="230"  className="" />
            </div>
        </nav>
        <Container fluid className=''>
         
            <Row className='d-flex align-items-center justify-content-center flex-row p-5 row1-login'>
                <Col className='col-md-6'>
                <div>
                    <div className="titulo">
                        <h1>UM LIVRO,</h1>
                        <h2>UM NOVO MUNDO</h2>
                    </div>
                    <div className="text-start">
                        <p>Perdeu a conta de quantos livros já leu?</p>
                        <p>Com o <strong>AdminBook</strong>, você registra suas leituras, acompanha seu progresso e define metas para se desafiar. Compartilhe suas experiências e mergulhe em novas histórias. Cada livro é uma porta para um universo diferente</p>
                        <p>Comece agora e torne sua jornada literária ainda mais especial!</p>
                    </div>
                    <div className="btn-start d-flex align-items-center ">
                        <button className="btn-entrar" onClick={fazerLogin}>ENTRAR</button>
                        <button className="btn-registrar">REGISTRAR-SE</button>
                    </div>
                </div>
                </Col>
                <Col className='col-md-6 '>
                <div className='d-flex align-item-center justify-content-center w-100'>
                     <img alt="" src={LogoBanner} className='logo-banner' />
                </div>
                </Col>
            </Row>

            <Row className='row-about'>
                <div className='mt-4'>
                    <h1>AdminBooks</h1>
                </div>
                <div className='box-quadro1-quadro2 d-flex align-items-center justify-content-center'>
                    <div className='quadro1'>
                        <div className='my-name d-flex align-items-center justify-content-start'>
                            <div className='circle-full'></div>
                            <div className='pt-2 ps-3 mb-2'> <h3>Como surgiu a ideia?</h3> </div>
                        </div>
                        <div className='txt-about '>
                            <p>Tudo começou com uma leitora apaixonada e uma necessidade simples: acompanhar os livros que eu lia. Como programadora e amante da literatura, sempre quis um jeito fácil de registrar minhas leituras, acompanhar minha média anual e visualizar meu progresso. Mas nenhuma plataforma atendia exatamente ao que eu precisava—então, decidi criar a minha própria.</p>
                            <p>Assim nasceu o AdminBooks, um projeto pessoal criado para solucionar um problema do meu dia a dia e transformar minha paixão por livros em uma experiência bem organizada. Aqui, posso catalogar minhas leituras, acompanhar meu progresso e definir meus próprios desafios literários.</p>
                            <p>Além de facilitar minha rotina como leitora, esse projeto também é uma forma de praticar meus conhecimentos em programação e mostrar um pouco do que sei fazer. A cada funcionalidade desenvolvida, aprendo algo novo e deixo a plataforma do meu jeito, sempre buscando torná-la mais intuitiva e completa. </p>
                            <p>Sinta-se à vontade para explorar o site clicando no botão Entrar e conhecer um pouco do que posso criar!</p>
                        </div>
                        <div className='my-name d-flex align-items-center justify-content-end'>
                            <div className='circle-empty'></div>
                            <div className='pt-2 ps-3'>
                                <h3>Fernanda Borges</h3>
                            </div>
                        </div>
                        <div className='my-name'>
                            <h5 className='fst-italic'>Desenvolvedora Web e uma leitora voraz</h5>
                        </div>
                        
                       
                    </div>
                    <div className='quadro2'>
                        <div className="square-white"></div>
                        <div className='foto-about'>
                        <img alt="" src={About} />
                        
                        <div className='square-with-ft'>
                        
                        <div className='d-flex align-items-end h-100 w-100'>
                            <img alt="" className='book-square-orange' src={BookNoBg}  />
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
        </>
    )
}