import Layout from '../components/Layout/Layout'
import MainForm from './MainForm'

export default function Index() {
  return <MainForm />
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}