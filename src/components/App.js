import Header from "./ui/Header";
import {ThemeProvider} from "@material-ui/styles";
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Header />
      hello
    </ThemeProvider>
  );
}

export default App;
