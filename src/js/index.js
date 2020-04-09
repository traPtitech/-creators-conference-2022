import { shuffleGroups } from './shuffle'
import { setupDetails } from './details'
import '../css/index.scss'

if (process.env.NODE_ENV !== 'production') {
  import('../index.pug')
}

shuffleGroups()
setupDetails()
