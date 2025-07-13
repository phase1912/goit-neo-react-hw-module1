import './App.css'
import userData from './userData.json'
import friendsData from './friendsData.json'
import transactionsData from './transactionsData.json'
import Profile from './components/task1/profile.jsx';
import FriendsList from "./components/task2/friendsList.jsx";
import TransactionHistory from "./components/task3/transactionHistory.jsx";

function App() {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendsList friends={friendsData}/>
            <TransactionHistory transactions={transactionsData}/>
        </>
    )
}

export default App
