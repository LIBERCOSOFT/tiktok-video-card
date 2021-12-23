import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDqvLSMHeWlzTIc_zZJDiKBRrYwCcwjjn4',
  authDomain: 'tiktok-libercosoft.firebaseapp.com',
  projectId: 'tiktok-libercosoft',
  storageBucket: 'tiktok-libercosoft.appspot.com',
  messagingSenderId: '902538680287',
  appId: '1:902538680287:web:eaa4f5832c2d62e488166a',
  measurementId: 'G-KT8V522Z20',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
