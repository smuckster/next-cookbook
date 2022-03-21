import '../styles/globals.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
