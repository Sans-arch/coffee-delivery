import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "../styles/global"
import { defaultTheme } from "../styles/themes/default"
import { Header } from "../components/Header"
import { ApplicationContainer } from "./styles"

function App() {
  return (
    <ApplicationContainer>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <GlobalStyle />
      </ThemeProvider>
    </ApplicationContainer>
  )
}

export default App
