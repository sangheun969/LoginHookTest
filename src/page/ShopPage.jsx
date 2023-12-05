import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addShopItem } from "../reducer/UseReducer";
const ShopPage = () => {
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddShopItem = useCallback(() => {
    dispatch(addShopItem({ title, content }));
    // 입력 후 입력 필드를 초기화합니다.
    setTitle("");
    setContent("");
    navigate("/");
    console.log("제목 내용~~", title, content);
  }, [dispatch, navigate, title, content]);

  return (
    <div className="shopPage">
      <div className="mainTitle">
        <h2>MONT HOOKS</h2>
        <div className="shopLogin">
          {userName ? (
            <span>{userName}</span>
          ) : (
            <Link to={"/login"} className="shopLink">
              로그인
            </Link>
          )}
        </div>
      </div>
      <div className="shopItems">
        <div>
          <input
            type="text"
            className="shopItemTitle"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="shopItemContent"
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleAddShopItem}>등록</button>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
