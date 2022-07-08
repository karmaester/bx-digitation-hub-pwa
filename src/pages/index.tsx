import MainForm from './MainForm'
import Layout from '@components/Layout/Layout'

export default function Index() {
  return <MainForm />
}

Index.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}