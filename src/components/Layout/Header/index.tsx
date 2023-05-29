import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [user, setUser] = useState<any>()
  const logOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("auth");
		localStorage.removeItem("userIds");
    window?.location?.reload()
  }

  const username = localStorage.getItem('username');
	const bookingTour: any = localStorage.getItem('booking')
	const tourId = JSON.parse(bookingTour)

  useEffect(() => {
    if(username) {
      setUser(username)
    }
  }, [username])

  return <div className="flex justify-center items-center p-[1rem] bg-[#003c71]">
    <div className="flex justify-between items-center w-[1200px]">
      <div className="flex items-center space-x-2">
        <p className="border-r-2 border-[#ccc] pr-[15px]">
          <img src="https://www.ivivu.com/du-lich/content/img/logo.svg" alt="" />
        </p>
        <p className="flex space-x-2 text-white text-[20px] font-bold">
          Đặt tour nhanh chóng
        </p>
      </div>
      <div>
        <ul className="flex items-center text-white font-bold">
          <Link to="/">
            <li className="mr-[25px] cursor-pointer">HOME</li>
          </Link>
          <Link to={`/booking-view/${tourId?.tourId}`} className="mr-[25px] cursor-pointer">THÔNG TIN</Link>
          <li className="mr-[25px] cursor-pointer">DU LỊCH</li>
          <li className="mr-[25px] cursor-pointer">BLOG TOUR</li>
          <li className="mr-[25px] cursor-pointer">KHUYẾN MÃI</li>
          {
            username ? (
              <div className="">{user?.replaceAll('"', ' ')}</div>
            ) : (
              <Link to="/login">
                <div className="cursor-pointer hover:text-rose-600">Đăng Nhập</div>
              </Link>
            )
          }

          <div className="px-[10px]">|</div>
          {
            username ? (
                <div onClick={logOut} className="cursor-pointer hover:text-rose-600">Đăng Xuất</div>
            ) : (
              <Link to="/register">
                <div className="cursor-pointer hover:text-rose-600">Đăng Ký</div>
              </Link>
            )
          }

        </ul>
      </div>
    </div>
  </div>
}
export default Header;