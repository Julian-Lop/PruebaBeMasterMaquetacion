// * React router
import { createBrowserRouter } from "react-router-dom"

// * Components
import { HomePage } from "../pages/HomePage"
import { FolderPage } from "../pages/FolderPage"
import { Layout } from "../components/Layout"
import { NotFoundPage } from "../pages/NotFoundPage"

const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <NotFoundPage/>,
      element: <Layout><HomePage/></Layout>
    },
    {
      path: '/:folder',
      errorElement: <NotFoundPage />,
      element: <Layout><FolderPage/></Layout>
    },

  ]
)

export { router }