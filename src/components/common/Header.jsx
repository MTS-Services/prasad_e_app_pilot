import React from "react";
import { Link, useNavigate} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";
import { HiFire } from "react-icons/hi";
import { APP_NAME, ROUTES } from "../../constants/app";
import logo from "../../assets/logo.png";

export const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const logOutHandler = () =>{
    logout()
    navigate("/")
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to={ROUTES.DASHBOARD_HOME} className="flex items-center space-x-2">
          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
            <img src={logo} alt="" />
          </span>
        </Link>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <LanguageSwitcher />
          {user ? (
            <div className="hidden lg:flex flex-col items-end justify-center">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar flex"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                  
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-gray-100 rounded-sm z-1 mt-3 w-52 p-5 shadow"
                >
                  {/* <Button variant="blackText" size="small" onClick={logout}>
                    {t("navigation.logout")}
                  </Button> */}
                  <button onClick={logOutHandler} className="!bg-red-400 py-1 px-3">{t("navigation.logout")}</button>
                </ul>
              </div>
              <p className="text-black text-xs opacity-15">{user?.role}</p>
            </div>
          ) : (
            // <Button
           
            //   variant="blackText"
            //   size="small"
            //   onClick={() => navigate(ROUTES.LOGIN)}
            // >
            //   {t("navigation.login")}
            // </Button>
            <button className=" btn btn-md border-none bg-green-500 text-white">{t("navigation.login")}</button>
          )}
        </div>
      </nav>
    </header>
  );
};
// (
//             <>

//               <Button variant='blackText' size='small' onClick={logout}>
//                 {t('navigation.logout')}
//               </Button>
//             </>
//           ) :
