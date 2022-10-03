import React, { useState } from 'react'
import packageList from './packagesList'

const Packages = ({
  setCommands,
}: {
  setCommands: React.Dispatch<React.SetStateAction<string[]>>
}) => {
  const [packageListState, setPackageListState] = useState(packageList)

  const handleToggle = (groupIndex: number, index: number) => {
    const newPackageList = [...packageListState]
    newPackageList[groupIndex].list[index].isToggled =
      !newPackageList[groupIndex].list[index].isToggled
    setPackageListState(newPackageList)
    setCommands(
      newPackageList
        .map((group) => group.list)
        .flat()
        .filter((item) => item.isToggled)
        .map((item) => item.command)
    )
  }

  return (
    <div className="package-list">
      <h2>Package List</h2>
      <div className="package-list package-list--container">
        {packageListState.map((packageGroup, index) => (
          <div key={index} className="package-list package-list--group">
            <h3>{packageGroup.title}</h3>
            <div className="package-list package-list--list">
              {packageGroup.list.map((pkg, i) => (
                <div
                  key={i}
                  className="package-list package-list--item"
                  onClick={() => handleToggle(index, i)}
                >
                  <input
                    value={pkg.slug}
                    checked={pkg.isToggled}
                    onChange={() => handleToggle(index, i)}
                    onClick={(e) => e.stopPropagation()}
                    type="checkbox"
                  />
                  <img src={pkg.icon} alt={pkg.name} height="24" width={24} />
                  <p>{pkg.name}</p>
                  <a
                    href={pkg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Documentation
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Packages
