import ErrorImg from '../../assets/Img/BgError.png';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
   <div className='bg-error'>
    <img src={ErrorImg} alt="" srcset="" />
    <div className='container-error-text'>
      <div className='d-flex align-items-center flex-column p-0'>
        <h1>404</h1>
        <h2 className='f-bold mt-1'>PAGE NOT FOUND</h2>
      </div>
      <div className='d-flex align-items-center flex-column p-0 mt-3'>
         <p className='p-1 m-0'>Ah não! Algo deu errado!</p>
         <p className='ms-3 text-center'>Acabamos nos perdendo entre tantos livros. Enquanto isso, que tal escolher um e relaxar?</p>
        <a href="/home">Voltar para início</a>
      </div>
    </div>
   </div>
      
    
  );
};

export default ErrorPage;
