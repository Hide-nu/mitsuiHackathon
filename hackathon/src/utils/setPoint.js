import { setDoc, getDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebase';

export const setPoint = async (uid, pt) => {
  const userDocId = 'user/' + uid;
  try {
    const snapshot = await getDoc(doc(firestore, userDocId))

    if (snapshot.exists()) {
      const oldPoint = snapshot.data().point;
      const newPoint = oldPoint + pt;
      await setDoc(doc(firestore, userDocId), { point: newPoint })
    } else {
      await setDoc(doc(firestore, userDocId), { point: pt })
    }
  } catch (e) {
    console.log(e)
  }
}