  import { Outlet } from 'react-router-dom'
  import Footer from './components/Footer'
  import Header from './components/Header'
  import { FormProvider} from './contexts/FormProvider'
  import { useState } from 'react'

  function App() {

    return (
      <> 
      <FormProvider>
      <form>
        <Header />
        <Outlet />
        <Footer />
      </form>
      </FormProvider>
      </>
    )
  }

  export default App
