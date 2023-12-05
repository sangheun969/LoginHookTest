import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./reducer/UseReducer";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.email);
  const userCreate = useSelector((state) => state.user.createUsers);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  const onClickConfirmButton = useCallback(() => {
    const foundUser = userCreate.find(
      (user) => user.email === email && user.pw === pw
    );

    if (foundUser) {
      dispatch(setUser({ userName: foundUser.email }));
      alert("로그인에 성공했습니다.");
      navigate("/");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  }, [dispatch, email, pw, navigate, userName, userCreate]);

  return (
    <>
      <div className="mainTitle">
        <h2>MONT HOOKS</h2>
        <div className="shopLogin">
          <Link to={"/"} className="shopLink">
            메인페이지
          </Link>
        </div>
      </div>
      <div className="page">
        <div className="titleWrap">
          이메일과 비밀번호를
          <br />
          입력해주세요
        </div>

        <div className="contentWrap">
          <div className="inputTitle">이메일 주소</div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              placeholder="test@gmail.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={pw}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
        </div>

        <div>
          <button
            onClick={onClickConfirmButton}
            disabled={notAllow}
            className="bottomButton"
          >
            확인
          </button>
        </div>
        {userCreate && userCreate.length > 0 && (
          <div>
            <h3>유저 목록:</h3>
            <ul>
              {userCreate.map((item, index) => (
                <li key={index}>
                  <strong>{item.email}</strong>: {item.pw}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
