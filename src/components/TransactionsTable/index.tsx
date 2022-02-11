import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Transaction{
  id: number;
  title:string;
  amount:number;
  type:string;
  category:string;
  createdAt: string;
}

export function TransactionsTable(){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions)) //console.log nos dados pra ver oq retorna
  }, [])  
  
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
         {transactions.map(transaction => {
          return(
          //toda vez que se faz um map no react, o primeiro elemento precisa receber uma key (informação única)
             <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
              {new Intl.NumberFormat('pt-BR',  {
                style:'currency',
                currency: 'BRL'
              }).format(transaction.amount)} 
              </td>
              <td>{transaction.category}</td>
              <td>
              {new Intl.DateTimeFormat('pt-BR').format(
              new Date (transaction.createdAt)
              )} 
              </td>
            </tr>
          );
         })}
        </tbody>
      </table>
    </Container>
  )
}
