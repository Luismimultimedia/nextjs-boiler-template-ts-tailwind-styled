import { AppProps } from 'next/app'
import 'shared/styles/tailwind.scss'
import 'shared/styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
