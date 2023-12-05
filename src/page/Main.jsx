import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Main = () => {
  const userName = useSelector((state) => state.user.userName);
  const shopItems = useSelector((state) => state.user.shopItems);
  return (
    <div className="shopPage">
      <div className="mainTitle">
        <h2>MONT HOOKS</h2>
        <div className="shopLogin">
          {userName ? (
            <>
              <Link to={"/adminPage"} className="adminPage">
                admin
              </Link>
              <span>{userName}</span>
            </>
          ) : (
            <>
              <Link to={"/login"} className="shopLink">
                로그인
              </Link>
              <Link to={"/create"} className="shopLink">
                회원가입
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="allShop">
        <span className="shopItem">
          {userName ? (
            <Link to={"/shop"} className="shopLink">
              쇼핑등록
            </Link>
          ) : (
            <span>로그인후 등록</span>
          )}
        </span>
      </div>
      {shopItems && shopItems.length > 0 && (
        <div className="shopItemList">
          <h3>아이템 목록:</h3>
          <ul>
            {shopItems.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>: {item.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Main;
