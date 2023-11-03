import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './Components/Header'
import { TaskInput } from './Components/TaskInput'
import { Tasks } from './Components/Tasks'
import { TaskContextProvider } from './Contexts/TasksContext'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TaskContextProvider>
        <Header />
        <TaskInput />
        <Tasks />
        <GlobalStyle />
      </TaskContextProvider>
    </ThemeProvider>
  )
}

export default App
