import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  font-size: 60%;
}

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:0;
}


html,
body,
#root {
  height: 100vh;
  -webkit-font-smoothing: antialiased;
}

body {
  background: #f0f0f7;
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}

body,
input,
textarea,
button {
  font: 500 1.6rem Poppins;
  color: var(--color-text-base);
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
}
`;
