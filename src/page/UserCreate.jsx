import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../reducer/UseReducer";

const UserCreate = () => {
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleCreateUser = useCallback(() => {
    dispatch(createUser({ email, pw }));
    setEmail("");
    setPw("");
    navigate("/login");
    console.log("회원가입~", email, pw);
  }, [dispatch, navigate, email, pw]);
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
      <div className="userCreateWrap">
        <h2>회원가입</h2>
        <div>
          <input
            className="useInput"
            type="text"
            placeholder="test@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="useInput"
            type="text"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleCreateUser}>회원등록</button>
        </div>
      </div>
    </div>
  );
};

export default UserCreate;
