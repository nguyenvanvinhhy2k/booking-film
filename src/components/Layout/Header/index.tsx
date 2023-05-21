
const Header = () => {
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
          <li className="mr-[25px] cursor-pointer">HOME</li>
          <li className="mr-[25px] cursor-pointer">THÔNG TIN</li>
          <li className="mr-[25px] cursor-pointer">DU LỊCH</li>
          <li className="mr-[25px] cursor-pointer">BLOG TOUR</li>
          <li className="mr-[25px] cursor-pointer">KHUYẾN MÃI</li>
        </ul>
      </div>
    </div>
  </div>
}
export default Header;