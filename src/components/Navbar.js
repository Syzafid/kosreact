import logo from './img/ihsan1.jpeg';
import "./Navcss.css";

function Navbar({ userName, jobTitle }) {
    return (
        <div className="sidebar">
            <div className="profile">
                <img src={logo} alt="Profile Picture" />
                <div>
                    <div className="profile-name">{userName}</div>
                    <div className="profile-job">{jobTitle}</div>
                </div>
            </div>
            <div className="notifications">
                <a href="#notification"><i className="fas fa-bell"></i><span>Notifications</span></a>
            </div>
            <ul className="menu">
                <li className="active"><a href="#dashboard"><i className="fas fa-home"></i><span>Dashboard</span></a></li>
                <li><a href="#budget"><i className="fas fa-chart-pie"></i><span>Budget</span></a></li>
                <li><a href="#income"><i className="fas fa-wallet"></i><span>Income</span></a></li>
                <li><a href="#spending"><i className="fas fa-shopping-cart"></i><span>Spending</span></a></li>
                <li><a href="#upcoming"><i className="fas fa-calendar"></i><span>Upcoming Spending</span></a></li>
            </ul>
            <div className="logout">
                <a href="../logout.php"><i className="fas fa-sign-out-alt"></i><span>Logout</span></a>
            </div>
        </div>
    );
}

export default Navbar;
