import { useState } from 'react'

import splitbee from '@splitbee/web'

import Commands from './components/Commands'
import Packages from './components/Packages'
import Footer from './components/Footer'

splitbee.init({
  disableCookie: true,
})

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
      <Footer />
    </div>
  )
}

export default App
