import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteShopItem } from "../reducer/UseReducer";
const AdminPage = () => {
  const userName = useSelector((state) => state.user.userName);
  const shopItems = useSelector((state) => state.user.shopItems);
  const dispatch = useDispatch();

  const handleDeleteItem = (index) => {
    dispatch(deleteShopItem(index)); // 삭제 액션 dispatch
  };
  return (
    <div className="shopPage">
      <div className="mainTitle">
        <h2>MONT HOOKS</h2>
        <div className="shopLogin">
          {userName ? (
            <span>{userName}</span>
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
            <Link to={"/"} className="shopLink">
              메인페이지
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
                <button onClick={() => handleDeleteItem(index)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
