import * as React from 'react'
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin'
// import jsonServerProvider from 'ra-data-json-server'
import hasuraDataProvider from 'ra-data-hasura'
import { FirebaseAuthProvider } from 'react-admin-firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyAsO2_bDsC4hEDeDKqtXncCPwNWVA0WGrU',
  authDomain: 'revealed-1434f.firebaseapp.com',
  databaseURL: 'https://revealed-1434f.firebaseio.com',
  projectId: 'revealed-1434f',
  storageBucket: 'revealed-1434f.appspot.com',
  messagingSenderId: '1065307921558',
  appId: '1:1065307921558:web:410bb483b811466f8c76b7',
  measurementId: 'G-ZPFZCFE9QR',
}

const firebaseOptions = {
  // Enable logging of react-admin-firebase
  logging: true,
  // Authentication persistence, defaults to 'session', options are 'session' | 'local' | 'none'
  persistence: 'session',
}

const fbAuthProvider = FirebaseAuthProvider(firebaseConfig, firebaseOptions)

const httpClient = (url, options = {}) => {
  return fbAuthProvider.getJWTToken().then(function (JWT) {
    if (!options.headers) {
      options.headers = new Headers({
        Accept: 'application/json',
        'X-Hasura-Admin-Secret': 'bunnystrike-gamesengaged',
      })
    }
    // add your own headers here
    options.headers.set('Authorization', `Bearer ${JWT}`)
    return fetchUtils.fetchJson(url, options)
  })
}

const headers = {
  'content-type': 'application/json',
} //'authorization': 'bearer <token>'
const dataProvider = hasuraDataProvider(
  'https://improved-rat-65.hasura.app',
  httpClient,
) // jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => (
  <Admin dataProvider={dataProvider} authProvider={fbAuthProvider}>
    <Resource name="test" list={ListGuesser} />
  </Admin>
)

export default App
