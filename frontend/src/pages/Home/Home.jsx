
import { useState, useEffect } from 'react';
import Cards from '../../components/Cards/Cards.jsx'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { toast } from "react-toastify";
import Tabela from '../../components/Tabela/Tabela'
import Grafico from '../../components/Graficos/Graficos.jsx'
import './Home.css'
import ModalForm from '../../components/ModalForm/ModalForm.jsx';
import Paginacao from '../../components/Paginacao/Paginacao.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Search from '../../components/Search/Search.jsx';
import livrosService from '../../services/livrosService.js';
const ITEMS_PER_PAGE = 12;


export default function Home(){

const [todosLivros, setTodosLivros] = useState([]);
useEffect(() => {
  const dataAllLivro = async () => {
    try {
      const data = await livrosService.getAllLivros();
      setTodosLivros(data.data); 
      
    } catch (error) {
      // console.error('Erro ao recuperar dados:', error);
      toast.error("Ocorreu um erro ao conectar ao servidor, tente novamente mais tarde")
     }
  }
  dataAllLivro();
  }, []);
  // Contando a quantidade de vezes que cada ano aparece
       const contagemPorAno = {};
       todosLivros.forEach(item => {
         contagemPorAno[item.data_ano] = (contagemPorAno[item.data_ano] || 0) + 1; // Incrementa a contagemPorAno para o ano
       });
    

    const anosLabels = Object.keys(contagemPorAno);
    const livrosLidosData = anosLabels.map(ano => contagemPorAno[ano]);
    // console.log(livrosLidosData)
    
  const dataBar = {
    labels: anosLabels,
    datasets: [
      {
        label: 'Total de livros',
        data: livrosLidosData,
        backgroundColor: '#EDA361',
        borderWidth: 1,
        labelcolor:'#0e345a'
        
      },
    ],
};

const optionsBar = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      
    },
  },
};


const contagemGeneros = {};
todosLivros.forEach(livro => {
    contagemGeneros[livro.genero] = (contagemGeneros[livro.genero] || 0) + 1;
});

// Preparar dados para o gráfico
const labels = Object.keys(contagemGeneros).sort();
const dadosDoughnut = labels.map(label => contagemGeneros[label]);

const dataDoughnut = {
    labels: labels,
    datasets: [
        {
            label: 'Quantidade',
            data: dadosDoughnut,
            backgroundColor: [
                '#f8f8f8',
                '#eda2617b',
                '#eda261ae',
                '#eda261e1',
                '#eda361',
                '#0e345a7b',
                '#0e345a8d',
                '#0e345a97',
                '#0e345aa4',
                '#0e345ac3',
                '#0e345ad1',
                '#0e345a',
               
            ],
            hoverOffset: 4,
        
        },
    ],
};

const optionsDoughnut = {
  responsive:true,
  plugins: {
    legend: {
      display:false,
    },
    title: {
      display: false,
    },
  },
};


const contagemFormatoLivro = {};
todosLivros.forEach(livro => {
    contagemFormatoLivro[livro.formato_livro] = (contagemFormatoLivro[livro.formato_livro] || 0) + 1;
});

// Preparar dados para o gráfico
const labelsPie = Object.keys(contagemFormatoLivro).sort();
// const dadosDoughnut = Object.values(contagemFormatoLivro);
const dadosPie = labelsPie.map(label => contagemFormatoLivro[label]);

const dataPie = {
  labels: labelsPie,
      datasets: [
        {
          label: 'Qtd de livros',
          data: dadosPie,
          backgroundColor: [
            '#0e345a',
            '#eda361',
          ],
        },
      ],
    };
  
    // Opções do gráfico
    const optionsPie = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
         
        },
      },
    };

const contagemAutores = {};
todosLivros.forEach(livro => {
    contagemAutores[livro.autor] = (contagemAutores[livro.autor] || 0) + 1;
});
// Transformar o objeto em um array de [autor, contagem]
const autoresArray = Object.entries(contagemAutores);
// Ordenar o array pela contagem (do maior para o menor)
autoresArray.sort((a, b) => b[1] - a[1]);
// Pegar os cinco primeiros autores
const cincoPrimeirosAutores = autoresArray.slice(0, 10);
// Separar os nomes dos autores e suas contagens
const labelsAutores = cincoPrimeirosAutores.map(autor => autor[0]);
const dadosAutores = cincoPrimeirosAutores.map(autor => autor[1]);



///////////////// MODAL DO FORMULARIO
const [showModal, setShowModal] = useState(false);

const handleShow = () => setShowModal(true);
const handleClose = () => setShowModal(false);
///////////////// FIM MODAL DO FORMULARIO
  
  const mesesMapeados = {
    'Janeiro': '0',
    'Fevereiro': '1',
    'Março': '2',
    'Abril': '3',
    'Maio': '4',
    'Junho': '5',
    'Julho': '6',
    'Agosto': '7',
    'Setembro': '8',
    'Outubro': '9',
    'Novembro': '10',
    'Dezembro': '11'
  };
  
  const dataAtual = new Date();
  const mesAtual = dataAtual.getMonth()
  const anoAtual = dataAtual.getFullYear()
//quantidade total todos livros
const countQtdTotalLivro = todosLivros.length;
   //total do mes
   const nomeMesAtual = Object.keys(mesesMapeados).find(key => mesesMapeados[key] === String(mesAtual));
   const contagemLivrosMesAnoAtual = todosLivros.filter(item => {
     return item.data_mes === nomeMesAtual && item.data_ano === String(anoAtual)
   }).length;
//total do ano
const contagemLivrosAnoAtual = todosLivros.filter(item => {
  return item.data_ano === String(anoAtual)
}).length;




  const [tableAllBookCurrentPage, setTableAllBookCurrentPage] = useState(1);
  const tableAllBookTotalPages = Math.ceil(todosLivros.length / ITEMS_PER_PAGE);
      const [busca, setBusca] = useState('');
      const lowerBusca = busca.toLowerCase();
      const filteredAllBook = todosLivros.filter((disponivel) => {
        return Object.values(disponivel).some(value => typeof value === 'string' && value.toLowerCase().includes(lowerBusca));
      });
  const tableAllBookPaginatedData = filteredAllBook.slice(
    (tableAllBookCurrentPage - 1) * ITEMS_PER_PAGE,
    tableAllBookCurrentPage * ITEMS_PER_PAGE
  );
  const tableAllBookPageChange = (page) => {
    setTableAllBookCurrentPage(page);
  };

  return(
    <>

    <Container>
      <div className='div-btn-new'>
        <div className='welcome-text-div'>
          <h1 className='fs-1'>Bem-vindo ao</h1>
          <h2>AdminBook</h2>
      </div>
      <div>
        <Button variant="light" className='fw-bold btn-new p-3' onClick={handleShow}>
              <i className="bi bi-plus-square-fill pe-2"></i>
                Novo Livro
              </Button>
      </div>
      
      
     
      </div>
      <ModalForm show={showModal} handleClose={handleClose} style={{backgroundColor:'#0e3454'}}/>
      <Row className='mt-4  row-cards'>
        <Col className=''>
          <Cards 
          classCor='bg-blue'
          titulo="Total de livros"
          descricao="Registros de todos os livros."
          numero={countQtdTotalLivro}/>
        </Col>
        <Col className=''>
          <Cards 
           classCor='bg-white'
          titulo="Total do Mês"
          descricao="Registro mensal dos livros lidos e não finalizados."
          numero={contagemLivrosMesAnoAtual}/>
        </Col>
        <Col>
          <Cards 
           classCor='bg-white'
          titulo="Total do Ano"
          descricao="Registro anual dos livros lidos e não finalizados."
          numero={contagemLivrosAnoAtual}/>
        </Col>
       
      </Row>
  <Row  className='mb-4'>
    <Col className='col-xl-12' style={{color:'#0e345a'}} >
    <h3 className='text-center pt-3'>Gráfico Quantitativo Anual</h3>
      <Grafico type='bar' data={dataBar} options={optionsBar}/>
    </Col>
  </Row>
  <Row className='h-50 mb-4' >
    <Col style={{backgroundColor:'#fff', color:'#0e345a'}} className='p-3 me-1'>
    <h5 className=''>Quantitativo por Gênero</h5>
    <hr />
      <Grafico type='doughnut' data={dataDoughnut} options={optionsDoughnut} />
    </Col>
    <Col style={{backgroundColor:'#0e345a', color:'#fff'}} className='p-3 me-1'>
      <h5>Autores(as) Frequentes</h5>
      <hr />
      <div>
        <ul>
          <li>
          <p className='fw-bold fs-3'><i className="bi bi-1-square-fill pe-3"></i>{labelsAutores[0]}</p>
          <span className='frequencia-autor fw-bold fs-3'>{dadosAutores[0]}</span>
          </li>
          <li>
         
          <p className='fw-bold fs-5'> <i className="bi bi-2-square-fill pe-3"></i>{labelsAutores[1]}</p>
          <span className='frequencia-autor fw-bold fs-5'>{dadosAutores[1]}</span>
          </li>
          <li>
           <p className='fw-bold fs-7'><i className="bi bi-3-square-fill pe-3"></i>{labelsAutores[2]}</p>
           <span className='frequencia-autor fw-bold fs-7'>{dadosAutores[2]}</span>
          </li>
          <li>
          
          <p><i className="bi bi-4-square pe-3"></i>{labelsAutores[3]}</p>
          <span className='frequencia-autor'>{dadosAutores[3]}</span>
          </li>
          <li>
          <p><i className="bi bi-5-square pe-3"></i>{labelsAutores[4]}</p>
          <span className='frequencia-autor'>{dadosAutores[4]}</span>
          </li>
          <li>
          <p><i className="bi bi-6-square pe-3"></i>{labelsAutores[5]}</p>
          <span className='frequencia-autor'>{dadosAutores[5]}</span>
          </li>
          <li>
          <p><i className="bi bi-7-square pe-3"></i>{labelsAutores[6]}</p>
          <span className='frequencia-autor'>{dadosAutores[6]}</span>
          </li>
          <li>
          <p><i className="bi bi-8-square pe-3"></i>{labelsAutores[7]}</p>
          <span className='frequencia-autor'>{dadosAutores[7]}</span>
          </li>
          <li>
          <p><i className="bi bi-9-square pe-3"></i>{labelsAutores[8]}</p>
          <span className='frequencia-autor'>{dadosAutores[8]}</span>
          </li>
          <li>
          <p><i className="pe-1 ten-square">10º </i>{labelsAutores[9]}</p>
          <span className='frequencia-autor'>{dadosAutores[9]}</span>
          </li>
        </ul>
      </div>
    </Col>
    <Col style={{backgroundColor:'#fff', color:'#0e345a'}} className='p-3 '>
    <h5 className=''>Quantitativo por Formato</h5>
    <hr />
      <Grafico type='pie' data={dataPie} options={optionsPie} />
    </Col>
  </Row>
   <Row className="tabela-container mb-4">
    <h3 className="mt-4 text-center">Lista de livros</h3>
    <Search busca={busca} handleSearch={(ev) => setBusca(ev.target.value)}/>
    <Tabela >
    {tableAllBookPaginatedData.map((livro, index) => {
        // Calcular o índice real
        const realIndex = (tableAllBookCurrentPage - 1) * ITEMS_PER_PAGE + index + 1;
        return (
            <tr key={index}>
                <td>{realIndex}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>{livro.data_mes === "Sem Registro" ? " - " : livro.data_mes + " de "}{livro.data_ano === "Sem Registro" ? "-" : livro.data_ano}</td>
                <td>{livro.genero}</td>
                <td>{livro.formato_livro}</td>
                <td style={{width: '350px'}}>{livro.observacoes}</td>
            </tr>
        );
    })}
    </Tabela>
    <Paginacao  
      currentPage={tableAllBookCurrentPage}
      totalPages={tableAllBookTotalPages}
      onPageChange={tableAllBookPageChange} 
      />
   </Row>
    </Container>
    <Footer/>
    </>)
}