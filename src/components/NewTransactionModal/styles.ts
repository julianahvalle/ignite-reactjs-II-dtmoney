import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
    input{
      width:100%;
      padding:0 1.5rem;
      height:4rem;
      border-radius: 0.25rem;

      background: var(--input-backgroud);
      border: 1px solid #d7d7d7;

      font-weight: 400;
      font-size: 1rem;

      &::placeholder{
        color: var(--text-body); 
      }

      & + input{ //todo input a partir do segundo terá um margin-top
        margin-top:1rem;
      }
    }

    button[type="submit"]{
      width:100%;
      padding:0 1.5rem;
      height:4rem;
      background: var(--green);
      color: #FFF;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      font-weight: 600;

      transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
    }
`;


export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

`;
interface RadioBoxProps { 
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
};
export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive
      ? transparentize(0.8, colors[props.activeColor]) //transparentize funciona somente no background 
      : 'transparent'}; 
    // aqui não precisa das chaves 

    display: flex;
    align-items: center;
    justify-content:center;

    transition: border-color 0.2s;
  
    &:hover{
      border-color: ${darken(0.1, '#d7d7d7')}; //com o polished
    }

  img{
    width: 20px;
    height: 20px;
  }

  span{
    display: inline-block; //para dar margin mais fácil
    margin: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;