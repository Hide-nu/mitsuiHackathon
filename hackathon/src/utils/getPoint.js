import { getDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebase';

export const getPoint = async (uid) => {
  const userDocId = 'user/' + uid;
  try {
    const snapshot = await getDoc(doc(firestore, userDocId))

    if (snapshot.exists()) {
      return snapshot.data().point;
    }
  } catch (e) {
    console.log(e)
  }
}