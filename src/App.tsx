import { useState } from 'react'

import Commands from './components/Commands'
import Packages from './components/Packages'

function App() {
  const [commands, setCommands] = useState<Array<string>>([])

  const filteredCommands = () => {
    const commandsString = commands.join(' ')
    const arrayCommands = commandsString.split(' ')
    const cleanedCommands = arrayCommands.filter((command, index) => {
      return arrayCommands.indexOf(command) === index
    })

    return cleanedCommands.join(' ')
  }

  return (
    <div className="container">
      <Packages setCommands={setCommands} />
      <Commands commands={filteredCommands()} />
    </div>
  )
}

export default App
