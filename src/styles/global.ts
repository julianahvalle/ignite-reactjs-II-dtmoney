import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
  --background: #f0f2f5;
  --input-backgroud: #e7e9ee;
  --shape: #ffffff;

  --red: #e52e40;
  --blue: #5429cc;
  --green: #33cc95;

  --blue-light: #6933ff;
  
  --text-title: #363f5f;
  --text-body: #969cb3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  //font-size: 16px (Desktop)
  html {
    @media(max-width:1080px){
      font-size: 93.75%; // = 15px
    }
    @media(max-width:720px){
      font-size: 87.5%; // = 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smooth: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Popins', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h6,strong {
    font-weight: 600;
  }
  
  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

.react-modal-overlay{ 
  background: rgba(0,0,0, 0.5);

  //para ocupar a tela toda'
  position: fixed; //pra impedir o scroll
  top:0;
  bottom:0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content{
  width: 100%;
  max-width:570px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
}

.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent; 

  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.8);
  }
}
`

