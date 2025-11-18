import  {useState} from 'react';
import axios from 'axios';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import IconCadastar from '../../assets/Img/IconRegisterBook.png'
import './ModalForm.css'
import { toast } from "react-toastify";

const baseURL = 'http://localhost:3000'
const ModalForm = ({ show, handleClose }) => {
  const [inputs, setInputs] = useState({
        titulo:"", 
        autor:"", 
        finalizado:"",
        data_mes:"", 
        data_ano:"", 
        genero:"",
        formato_livro:"",
        observacoes:""
  });
  const capitalizeWords = (str) => {
    return str
      .toLowerCase() // Converte tudo para minúsculo
      .split(' ') // Divide em palavras
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza a primeira letra de cada palavra
      .join(' '); // Junta as palavras de volta
  };
  const onChange = e => {
    const { name, value } = e.target;
 // Verifica se o campo deve ser capitalizado
 let newValue = value;
 if (name === "titulo" || name === "autor" || name === "genero" || name === "data_ano") {
   newValue = capitalizeWords(value); // Aplica capitalize apenas nos campos desejados
 }
   

    // Atualiza o estado com o valor capitalizado
    setInputs({ ...inputs, [name]: newValue });

  };
  
  const registrarLivro= async e => {
      e.preventDefault();
      const {
        titulo, 
        autor, 
        finalizado,
        data_mes, 
        data_ano, 
        genero,
        formato_livro,
        observacoes
      } = inputs;
    
    try {
        const body = {titulo, autor, finalizado, data_mes, data_ano, genero, formato_livro, observacoes};
  
        const response = await axios.post(`${baseURL}/livros/registrarLivro`, body, {
          headers: {
            "Content-type": "application/json"
          }
        });
        toast.success("Livro registrado com sucesso!");
        handleClose();
      } catch (err) {
        console.error("Erro ao registrar novo livro")
        // toast.error("Ocorreu um erro ao conectar ao servidor, tente novamente mais tarde")
      }
    }
  
  
  return (
    <>
    
    <Modal show={show} onHide={handleClose} size="lg" >
      <div className="box-form">
        <div className="titulo-cadastrar d-flex align-items-center justify-content-center mt-3 mb-3">
          <img src={IconCadastar} width="50" alt="" />
          <h1 className=''>Cadastrar Livro</h1>
        </div>
    
      <Modal.Body className=''>
      <Form >
      <Form.Group className="mb-3">
        <Form.Label>Título:</Form.Label>
        <Form.Control type="text" required placeholder="Título do Livro" name="titulo" onChange={onChange}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Autor(a):</Form.Label>
        <Form.Control type="text" required placeholder="Autor(a); Autor(a)" name="autor" onChange={onChange}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gênero Predominante:</Form.Label>
         <Form.Select aria-label="Gênero" required name="genero" onChange={onChange} >
                <option value="">Selecione</option>
                <option value="Ação, Aventura">Ação, Aventura</option>
                <option value="Artigos">Artigos</option>
                <option value="Autoajuda">Autoajuda</option>
                <option value="Biografias">Biografias</option>
                <option value="Clássicos">Clássicos</option>
                <option value="Comédia Romantica">Comédia Romantica</option>
                <option value="Dark Romance">Dark Romance</option>
                <option value="Didáticos">Didáticos</option>
                <option value="Fantasia">Fantasia</option>
                <option value="Ficção">Ficção</option>
                <option value="Ficção Científica">Ficção Científica</option>
                <option value="Gastronomia e Culinária">Gastronomia e Culinária</option>
                <option value="HQs, Mangás e Graphic Novels">HQs, Mangás e Graphic Novels</option>
                <option value="Internacional">Internacional</option>
                <option value="Jovem Adulto">Jovem Adulto</option>
                <option value="LGBTQIA+">LGBTQIA+</option>
                <option value="Literatura">Literatura</option>
                <option value="Novels">Novels</option>
                <option value="Policial, Suspense e Mistério">Policial, Suspense e Mistério</option>
                <option value="Religião e Espiritualidade">Religião e Espiritualidade</option>
                <option value="Romance">Romance</option>
                <option value="Romance Contêmporaneo">Romance Contêmporaneo</option>
                <option value="Romance Drama">Romance Drama</option>
                <option value="Romance Histórico">Romance Histórico</option>
                <option value="Romance Jovem">Romance Jovem</option>
                <option value="Suspense Psicológico">Suspense Psicológico</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Thriller Psicológico">Thriller Psicológico</option>
                <option value="Thriller, Horror">Thriller, Horror</option>
            </Form.Select>
      </Form.Group>
      <Row xs={1} md={4} className='mt-2'>
        <Col>
            <Form.Label>Livro Finalizado?</Form.Label>
            <Form.Select aria-label="Finalizado" required name="finalizado" onChange={onChange} >
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </Form.Select>
        </Col>
        <Col>
            <Form.Label >Mês</Form.Label>
            <Form.Select aria-label="mes" required name="data_mes" onChange={onChange} >
            <option value=''>Selecione</option>
                <option value='Sem Registro'>Sem Registro</option>
                <option value="Janeiro">Janeiro</option>
                <option value="Fevereiro">Fevereiro</option>
                <option value="Março">Março</option>
                <option value="Abril">Abril</option>
                <option value="Maio">Maio</option>
                <option value="Junho">Junho</option>
                <option value="Julho">Julho</option>
                <option value="Agosto">Agosto</option>
                <option value="Setembro">Setembro</option>
                <option value="Outubro">Outubro</option>
                <option value="Novembro">Novembro</option>
                <option value="Dezembro">Dezembro</option>
            </Form.Select>
        </Col>
        <Col>
        <Form.Group className="mb-3">
        <Form.Label>Ano:</Form.Label>
        <Form.Control type="text" required placeholder="AAAA ou Sem Registro" name="data_ano" onChange={onChange} />
      </Form.Group>
        </Col>
        <Col>
            <Form.Label>Formato:</Form.Label>
            <Form.Select aria-label="Formato" required name="formato_livro" onChange={onChange}>
                <option value="">Selecione</option>
                <option value="Digital">Digital</option>
                <option value="Físico">Físico</option>
            </Form.Select>
        </Col>
      </Row>
   
      <Form.Group className="mb-3" >
        <Form.Label>Observações</Form.Label>
        <Form.Control as="textarea" placeholder="Críticas, elogios, comentários, sugestões..." rows={3} name="observacoes" onChange={onChange}/>
      </Form.Group>
    
      </Form>
      </Modal.Body>
      <div className="btn-register-form d-flex align-items-center flex-column mt-3 mb-3">
       
        <button type='submit' className='btn-salvar' onClick={registrarLivro}>Registrar</button>
          <button className='btn-fechar' type='' onClick={handleClose}>Fechar</button>
      </div>
      </div>
    </Modal>
    
    </>
  );
};

export default ModalForm;