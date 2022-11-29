import {Component} from 'react'
import TabItem from '../TabItem'
import ImageItem from '../ImageItem'
import './index.css'

const ImagesDisplay = props => {
  const {tabsList, imagesList, updateTabId, activeTabId} = props
  console.log(imagesList)

  return (
    <div className="big-image-tab-buttons-image-list-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png"
        className="big-image"
      />
      <ul className="buttons-container">
        {tabsList.map(eachTab => (
          <TabItem
            tabDetails={eachTab}
            updateTabId={updateTabId}
            key={eachTab.tabId}
            isTabActive={eachTab.tabId === activeTabId}
          />
        ))}
      </ul>
      <ul className="all-images-container">
        {imagesList.map(eachImage => (
          <ImageItem imageDetails={eachImage} key={eachImage.id} />
        ))}
      </ul>
    </div>
  )
}

export default ImagesDisplay
