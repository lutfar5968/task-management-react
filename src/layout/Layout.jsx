

import ModalPopUp from "../Component/ModalPopUp"
import Banner from "../section/banner/Banner"
import Footer from "../section/footer/Footer"
import Header from "../section/header/header"
import TaskTable from "../section/task table/TaskTable"

function Layout() {
  return (
    <>
        <Header />
        <Banner/>
        <TaskTable/>
        <Footer/>

        <ModalPopUp/>
    </>
    
  )
}

export default Layout