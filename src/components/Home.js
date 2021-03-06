import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link, Navigate } from "react-router-dom";


const Home = ({ setSearchDoctor, token }) => {
  const [allTips, setAllTips] = useState("");
  const [noResult, setNoResult] = useState("");
  const getAllTips = async () => {
    try {
      const result = await axios.get(`https://find-doctorr.herokuapp.com/tips`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (result.data == `No result`) {
        console.log(result.data);
        setNoResult(result.data);
      } else {
        console.log(result.data.Tips);

        setAllTips(result.data.Tips);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getAllTips();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="FindDoctor">!ابحث عن طبيب</h1>
            <input
              id="searchInput"
              type="text"
              placeholder="مثال.الاسم،التخصص "
              onChange={(e) => {
                setSearchDoctor(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <div className="card card1">
              <h5 className="tips">كوفيد-19</h5>
              <p>ضَع كمامة،أنقِذ حياة غيرك</p>
            </div>
            <div className="card card2">
              <h5 className="tips">كوفيد-19</h5>
              <p>اغسِل يديك</p>
            </div>
            <div className="card card3">
              <h5 className="tips">كوفيد-19</h5>
              <p>أبقِ مسافة آمنة</p>
            </div>
            <div className="card card4">
              <h5 className="tips">كوفيد-19</h5>
              <p>ابقَ في المنزل إذا شعرت بالمرض</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home">
        <h1 id="headerHome">!اكتشف الطبيب على الإنترنت</h1>
        <div className="containerService">
          <div className="serviceC">
            <div className="service  service1">
              <div className="main">
                <div className="findDoctor">
                  <div className="divImageFindDoctor">
                    <img id="imageFindDoctor" src="../image/FD.png" />
                  </div>
                  <h4 id="titleFindDoctor">اعثر على طبيب </h4>
                  <p id="PrgFindDoctor">ابحث عن طبيب الاقرب اليك </p>
                </div>
                <div className="shadowOne"></div>
                <div className="shadowTow"></div>
              </div>
            </div>
            <div className=" service service2">
              {" "}
              <div className="main">
                <div className="findDoctor">
                  <div className="divImageFindDoctor">
                    <img id="imageFindDoctor" src="../image/VP.png" />
                  </div>
                  <h4 id="titleFindDoctor">عرض الصفحة الشخصية </h4>
                  <p id="PrgFindDoctor">شاهد الملف الشخصي للطبيب </p>
                </div>
                <div className="shadowOne"></div>
                <div className="shadowTow"></div>
              </div>
            </div>
            <div className="service service3">
              <div className="main">
                <div className="findDoctor">
                  <div className="divImageFindDoctor">
                    <img id="imageFindDoctor" src="../image/Price.png" />
                  </div>
                  <h4 id="titleFindDoctor">اكتشف الاسعار </h4>
                  <p id="PrgFindDoctor"> كشفية الطبيب ومقارنة السعر</p>
                </div>
                <div className="shadowOne"></div>
                <div className="shadowTow"></div>
              </div>
            </div>
          </div>
        </div>

        <a href="/AllDoctor">
          {" "}
          <button id="Skip">استكشف</button>
        </a>
      </div>
      <>
        <div className="bodyTips">
          <h1 className="titleTips">نصائح</h1>
          <div className="tipsContainer">
            <div className="boxImage active">
              {" "}
              <img src="../image/tips.jpg" />
            </div>
            {allTips ? (
              allTips.map((tip, i) => (
                <div key={i} className="boxImage">
                  <img src={tip.image} />
                </div>
              ))
            ) : (
              <div>{noResult}</div>
            )}
          </div>
        </div>
      </>

      <>
        <footer>
          <div className="containerFooter">
            <div className="infFooter">
              <img className="logoFooter" src="../image/logo1.png" />
              <p className="prgFooter">FINDOCTOR</p>
            </div>
            <div className="infFooter">
              <h3>حول</h3>

              <p>شارع حميد الدعجة</p>
              <p>ماركا،العبدلات</p>
              <p>عمان,الاردن</p>
              <p className="emailFooter">fin-doctor@inf.com</p>
              <h4>+296-58545585</h4>
            </div>
            <div className="infFooter">
              <h3>الروابط</h3>
              <ul>
                <li>
                  <a>الرئيسية</a>
                </li>
                <li>
                  <a>الخدمات</a>
                </li>
                <li>
                  <a>النصائح</a>
                </li>
              </ul>
            </div>
            <div className="infFooter">
              <h3>روابط مفيدة</h3>
              <ul>
                <li>
                  <a>الخرائط</a>
                </li>
                <li>
                  <a>الخدمات</a>
                </li>
                <li>
                  <a>التخصصات</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    </>
  );
};

export default Home;
