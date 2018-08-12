import React from 'react'
import MainSidebar from './MainSidebar'
import SecondarySidebar from './SecondarySidebar'
import Content from './Content'
import Modal from './Modal';

export default () => {
  return (
    <div className="app">
      <Modal />
      <MainSidebar />
      <SecondarySidebar />
      <Content />
    </div>
  )
}
