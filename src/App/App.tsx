import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "../styles/global"
import { defaultTheme } from "../styles/themes/default"
import { ApplicationContainer } from "./styles"
import { Layout } from "../Layout"

function App() {
  return (
    <ApplicationContainer>
      <ThemeProvider theme={defaultTheme}>
        <Layout />
        <GlobalStyle />
      </ThemeProvider>
    </ApplicationContainer>
  )
}

export default App
