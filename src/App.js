import Container from "./components/styles/Container.styled";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Globals";

const theme = {
  colors: {
    header: '#ebfbff',
    body: 'white',
    footer: '#003333'
  },
  mobile: '768px'
};

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>I love love</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
