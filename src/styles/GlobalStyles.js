import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #F4F4F7;
    margin: 0px;

}
a.link-unstyled {
  color: inherit;
}

a.link-unstyled:hover {
  color: inherit;
  text-decoration: none;
}

.button {
  padding: 0.375rem 2rem;
}



`

