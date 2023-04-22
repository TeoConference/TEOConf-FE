import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="w-full h-16 bg-slate-500 flex justify-center items-center fixed">
      <nav className="w-full max-w-[1360px] flex bg-red-300 justify-end">
        <div className="w-full max-w-[509px] h-full max-h-6 flex justify-around ">
          <div className="font-Pretendard8">프로그ddd램</div>
          <div>네트워킹</div>
          <Link to="/form">명함</Link>
          <div>후원사</div>
          <div>장소</div>
          <div>FAQ</div>
        </div>
      </nav>
    </header>
  )
}

export default Header
