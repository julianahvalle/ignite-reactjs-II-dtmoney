import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface Transaction{
  id: number;
  title:string;
  amount:number;
  type:string;
  category:string;
  createdAt: string;
}

// interface TransactionInput{
//   title:string;
//   amount:number;
//   type:string;
//   category:string;
// }
//ou
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
//ou
//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsProviderProps{
  children: ReactNode;
}

interface TransactionsContextData{
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children } : TransactionsProviderProps ){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions)) //console.log nos dados pra ver oq retorna
  }, [])  

  async function createTransaction(transactionInput: TransactionInput){
    const response =  await api.post('/transactions', {
      ...transactionInput, 
      createdAt: new Date(),
    })
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction,
      //sempre que eu quero adicionar uma nova informação em um vetor, devo usar o spread e adicionar a nova informação no final
    ]);
  }

  return(
    <TransactionsContext.Provider value={{ transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransaction(){
  const context = useContext(TransactionsContext);
  return context;
} 