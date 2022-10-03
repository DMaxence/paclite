const Commands = ({ commands }: { commands: string }) => {
  const copyCommand = (e: any, command: string) => {
    navigator.clipboard.writeText(`${command} ${commands}`)
    e.target.innerHTML = 'Copied!'
    setTimeout(() => {
      e.target.innerHTML = 'Copy'
    }, 1000)
  }

  return (
    <div className="commands">
      <h2>Installation</h2>
      <div className="commands--container">
        <div className="commands--item">
          <p>Using npm</p>
          <pre>
            <code>npm install {commands}</code>
            <div
              className="copy-button"
              onClick={(e) => copyCommand(e, 'npm install')}
            >
              Copy
            </div>
          </pre>
        </div>
        <div className="commands--item">
          <p>Using yarn</p>
          <pre>
            <code>yarn add {commands}</code>
            <div
              className="copy-button"
              onClick={(e) => copyCommand(e, 'yarn add')}
            >
              Copy
            </div>
          </pre>
        </div>
        <div className="commands--item">
          <p>Using pnpm</p>
          <pre>
            <code>pnpm add {commands}</code>
            <div
              className="copy-button"
              onClick={(e) => copyCommand(e, 'pnpm add')}
            >
              Copy
            </div>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Commands
