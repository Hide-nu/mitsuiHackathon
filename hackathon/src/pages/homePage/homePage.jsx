import { auth } from '../../firebase';
import { useHistory, Redirect } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { signOut } from "firebase/auth";

const Home = () => {
  const history = useHistory();
  const { user } = useAuthContext();
  const handleLogout = () => {
    signOut(auth);
    history.push('/login');
  };

  if (!user) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <h1>ホームページ</h1>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    );
  }
};

export default Home;
