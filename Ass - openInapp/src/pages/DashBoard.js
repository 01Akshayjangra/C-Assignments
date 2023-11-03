import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import './DashBoard.css';
import Modal from '../components/Modal';
import AddBio from '../components/AddBio';

const DashBoard = () => {
  const accessToken = localStorage.getItem('token-task');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token-task');
    navigate('/login');
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (accessToken) {
      const USER_CREDENTIAL = jwtDecode(accessToken);
      setUser(USER_CREDENTIAL);
    }
  }, [accessToken]);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@xyz.com',
    phone: '+91 32456 7890',
    youtube: 'John_official',
    instagram: 'John_official',
  });
  return (
    <>
      <div className="dash__wrapper-main">
        <div className="dash__wrapper">
          <div className="dash__body">
            <div className="dash">
              <div class="dash__left">
                <div className='dash__left-logo'>
                  Board.
                </div>
                <div className='dash__left-menu-main'>
                  <div className='dash__left-menu'>
                    <li className='dash__left-menu-li selected'>
                      <img src="./assets/dashboard_icon.svg" alt="" />
                      Dashboard
                    </li>
                    <li className='dash__left-menu-li'>
                      <img src="./assets/transaction_icon.svg" alt="" />
                      Transactions
                    </li>
                    <li className='dash__left-menu-li'>
                      <img src="./assets/schedule_icon.svg" alt="" />
                      Schedules
                    </li>
                    <li className='dash__left-menu-li'>
                      <img src="./assets/user_icon.svg" alt="" />
                      Users
                    </li>
                    <li className='dash__left-menu-li'>
                      <img src="./assets/setting_icon.svg" alt="" />
                      Settings
                    </li>
                    <li className='dash__left-menu-li' onClick={handleLogout}>
                      {/* <img src="./assets/setting_icon.svg" alt="" /> */}
                      Logout
                    </li>
                  </div>
                  <div className='dash__left-btm'>
                    <li>Help</li>
                    <li>Contact Us</li>
                  </div>
                </div>
              </div>
              <div class="dash__right">
                <div>
                  <div className='dash__nav'>
                    <h3>Dashboard</h3>
                    <div className='dash__nav-item'>
                      <div className='dash__nav-item-input'>
                        <input type="text" placeholder='Search...' />
                        <div className='dash__nav-item-search'>
                          <img src='./assets/search-icon.svg' alt="" />
                        </div>
                      </div>
                      <div className='dash__nav-item-bell'>
                        <img src='./assets/bell-icon.svg' alt="" />
                      </div>
                      <div className='dash__nav-item-img'>
                        <img src={user?.picture} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className='dash__main'>
                    <div className='dash__info'>
                      <div className="dash__info-item">
                        <div className="dash__info-item-icon1">
                          <img src="./assets/t-revenue.svg" alt="" />
                        </div>
                        <p>Total Revenues</p>
                        <div className="dash__info-item-value">
                          $2,129,430
                          <span>+2.5%</span>
                        </div>
                      </div>
                      <div className="dash__info-item">
                        <div className="dash__info-item-icon2">
                          <img src="./assets/t-transaction.svg" alt="" />
                        </div>
                        <p>Total Transactions</p>
                        <div className="dash__info-item-value">
                          29,430
                          <span>+1.3%</span>
                        </div>
                      </div>
                      <div className="dash__info-item">
                        <div className="dash__info-item-icon3">
                          <img src="./assets/t-like.svg" alt="" />
                        </div>
                        <p>Total Likes</p>
                        <div className="dash__info-item-value">
                          9,430
                          <span>+1.5%</span>
                        </div>
                      </div>
                      <div className="dash__info-item">
                        <div className="dash__info-item-icon4">
                          <img src="./assets/t-user.svg" alt="" />
                        </div>
                        <p>Total Users</p>
                        <div className="dash__info-item-value">
                          4,430
                          <span>+4.2%</span>
                        </div>

                      </div>
                    </div>
                    <div className='dash__barchart'>

                    </div>
                    <div className='dash__profile-main'>
                      <div className='dash__profile-chart'>

                      </div>
                      <div className='dash__profile'>
                        {!userData ? (<div className='dash__profile-add'>
                          <div onClick={toggleModal}>
                            <img src="./assets/Controls.svg" alt="" />
                          </div>
                          <h6>Add Profile</h6>
                        </div>) : (
                          <div className="dash__profile-data">
                            <h1>{user?.name}</h1>
                            <div>
                              <div>
                                <p>
                                  <span>
                                    <img src="./assets/logo-whatsapp.svg" alt="" />
                                  </span>
                                  {userData.email}
                                </p>
                                <p>
                                  <span>
                                    <img src="./assets/logo-mail.svg" alt="" />
                                  </span>
                                  {userData.phone}
                                </p>
                              </div>
                              <div>
                                <p>
                                  <span>
                                    <img src="./assets/logo-instagram.svg" alt="" />
                                  </span>
                                  {userData.youtube}
                                </p>
                                <p>
                                  <span>
                                    <img src="./assets/logo-youtube.svg" alt="" />
                                  </span>
                                  {userData.instagram}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
                          <AddBio toggleModal={toggleModal} />
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
