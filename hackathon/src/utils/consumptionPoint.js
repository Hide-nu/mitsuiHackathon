import { setDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebase';

export const consumptionPoint = async (uid, havingPoint, consumptionPoint) => {
  const userDocId = 'user/' + uid;
  try {
    const newPoint = havingPoint - consumptionPoint;
    await setDoc(doc(firestore, userDocId), { point: newPoint })
  } catch (e) {
    console.log(e)
  }
}