import '../styles/globals.css';
import Layout from '../components/Layout'
import { QueryClient, QueryClientProvider} from 'react-query'
const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
    return (
        <Layout>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Layout>
    )    
}