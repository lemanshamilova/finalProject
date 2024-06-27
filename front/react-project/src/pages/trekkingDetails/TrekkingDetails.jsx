// import axios from 'axios';
import React from "react";
// import { useParams } from 'react-router-dom'
import "./style.scss";
import { trekkings } from "../../../data/data";
import durationImg from "../../assets/images/duration.svg";
import speedImg from "../../assets/images/speedometer.svg";
import teamImg from "../../assets/images/team-group.svg";
import hillImg from "../../assets/images/hill.svg";
import shareIcon from "../../assets/images/share-icon.svg";
import reviewIcon from "../../assets/images/review-icon.svg";
import heartIcon from "../../assets/images/heart-icon-1.svg";
import { FaStar } from "react-icons/fa6";

const TrekkingDetails = () => {
  // const {trekkingId}=useParams()
  // const [trekking, setTrekking] = useState([]);

  // const getProduct=async()=>{
  //   const res=await axios(`http://localhost:5050/trekkings/${trekkingId}`)
  //   setTrekking(res.data)
  // }
  // useEffect(() => {
  //   getProduct()

  // }, []);
  return (
    <section>
      <hr style={{ border: "1px dashed gray" }} />

      <div className="container">
        <div className="trekkingDetailPage">
          {trekkings.slice(0, 1).map((item, index) => (
            <div key={index} className="trekkingDetails">
              <div className="trekkingDetails_box">
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <h1>{item.title} </h1>
                <h1 style={{color:"#1dc5ce"}}>{item.price}$</h1>
                </div>
                <div className="details_flexing">
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <img src={durationImg} />
                    <div>
                      <h4>Müddət</h4>
                      <p>{item?.duration}</p>
                    </div>
                  </div>
                  <hr />
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <img src={speedImg} alt="" />
                    <div>
                      <h4>Çətinlik</h4>
                      <p>{item?.difficulty}</p>
                    </div>
                  </div>
                  <hr />
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <img src={teamImg} alt="" />
                    <div>
                      <h4>Qrup ölçüsü</h4>
                      <p>{item?.size}</p>
                    </div>
                  </div>
                  <hr />
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <img src={hillImg} alt="" />
                    <div>
                      <h4>Hündürlük</h4>
                      <p>{item?.hill}</p>
                    </div>
                  </div>
                </div>
                <hr style={{ border: "1px dashed #4b4c4d", marginTop: "20px" }} />
                <div className="comment_box">
                  <p>
                    (5 rəy) <FaStar className="star" />{" "}
                    <FaStar className="star" /> <FaStar className="star" />{" "}
                    <FaStar className="star" /> <FaStar className="star" />
                  </p>
                  <div>
                    <div>
                      <img src={shareIcon} alt="" />
                      <p>Paylaşın</p>
                    </div>
                    <div>
                      <img src={reviewIcon} alt="" />
                      <p>Baxış-icmal </p>
                    </div>
                    <div>
                      <img src={heartIcon} alt="" />
                      <p>İstək siyahısı</p>
                    </div>
                  </div>
                </div>
                <hr style={{ border: "1px dashed #4b4c4d" }} />
              </div>
            </div>
          ))}
          <div className="aboutTrekkings">
           <div className="aboutTrekking_box">
           <h1>Haqqinda</h1>
            <p>
              İcraçı və ya VIP-nin şəxsi təhlükəsizlik xidmətlərini seçməsinin
              bir çox səbəbi var. Rəhbərlər milyonlarla və ya daha çox dəyəri
              olan böyük şirkətlərə rəhbərlik edə bilər və onları quldurluq,
              hücum və daha çox şey üçün yüksək dəyərli hədəfə çevirə bilər.
              İcra başçılarına qarşı təhdidlər, hətta ictimaiyyət nümayəndəsi və
              ya narazı işçilər tərəfindən rüşvət və şantaj ola bilər. Digər
              VIP-lərə gəldikdə, onların mütləq olmasına ehtiyac yoxdur.
            </p>
            <p>
              Onları quldurluq, hücum və daha çox şey üçün yüksək qiymətli
              hədəfə çevirmək. İcra başçılarına qarşı təhdidlər, hətta
              ictimaiyyət nümayəndəsi və ya narazı işçilər tərəfindən rüşvət və
              şantaj ola bilər. Digər VIP-lərə gəldikdə
            </p>
           </div>
           <div className="reservation_box">
            <form action="" className="reservation_form">
              <h3>Bu Treks sifariş edin</h3>
              <input type="text" placeholder="Tam adı" />
              <input type="text" placeholder="E-poçt"/>
              <input type="text" placeholder="Telefon*"/>
              <input type="text" placeholder="GG-AA-YYYY"/>
              <input type="text" placeholder="Qonaq" />
              <button className="reserv">İndi göndər</button>

            </form>

           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrekkingDetails;
