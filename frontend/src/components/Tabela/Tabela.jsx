import { Table } from "react-bootstrap";
import './Tabela.css'
export default function Tabela({ children}){
    return (
        <>
            <Table responsive bordered>
            <thead>
              <tr>
                <th className="id-livros">#</th>
                <th>Título</th>
                <th>Autor(a)</th>
                <th>Data de finalização</th>
                <th>Gênero</th>
                <th>Tipo de livro</th>
                <th>Observações</th>
              </tr>
            </thead>
            <tbody>
              {children}
            
            </tbody>
          </Table>
        </>
    )
}