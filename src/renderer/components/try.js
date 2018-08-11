import React from 'react'
import MainSidebar from './MainSidebar'
import SecondarySidebar from './SecondarySidebar'
import Content from './Content'

export default () => {
  return (
    <div className="app">
      <MainSidebar />
      <SecondarySidebar />
      <Content />
    </div>
  )
}
