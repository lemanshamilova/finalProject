import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaChevronCircleRight } from "react-icons/fa";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getAllData } from "../../redux/slices/TrekkingSlice";
import { CiStar } from "react-icons/ci";
import mountains from "../../assets/images/logo-icon.svg";
import { trekkings } from "../../../data/data";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqImg from '../../assets/images/faq-image-1.svg'
const TrekkingPage = () => {
  // const trekkings = useSelector((state) => state.trekkings.trekkings);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getAllData());
  // }, []);
  return (
    <section>
      <div className="background">
        <div className="container">
          <div className="center">
            <h1>TREKKING</h1>
            <div className="flex">
              <div className="home">
                <AiFillHome />
              </div>
              <span>Ev</span>
              <FaChevronCircleRight />
              <span>Trekking</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mountains"></div>
      <div className="container">
        <section>
          <div className="head-Trekking">
            <h1>Trekker ilə sizin üçün ən yaxşı treklər</h1>
            <p>
              2014-cü ildən bəri biz hər yaşda olan 500.000-dən çox insana
              həyatlarının ən yaxşı açıq hava təcrübəsindən zövq almağa kömək
              etmişik. İstər bir günlük, istərsə də iki həftəlik tətil, evə
              yaxın və ya xarici ölkəyə.
            </p>
            <div className="forFilter">
              <button>Bütün Növlər</button>
              <button>Asan Orta</button>
              <button>Orta</button>
              <button>Orta Çətin</button>
              <button>Çətin</button>
            </div>
          </div>
        </section>
        <div className="trekkingsPage">
          {trekkings.map((p) => (
            <div className="trekkingsPageCart" key={p._id}>
              <p className="price">${p.price}</p>
              <img src={p.image} />
              <p className="title">{p.title}</p>
              <div className="starts">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
              <div>
                <p className="desc">{p.description}</p>
              </div>
              <hr className="hr" />

              <p
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/trekkings/${p._id}`);
                }}
                className="details"
              >
                Təfərrüatlara baxın{" "}
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={mountains}
                />
              </p>
            </div>
          ))}
        </div>
        <div className="heading-aboutTrekking">
          <h1>Bəzi Vacib Cavab Alın</h1>
        </div>
        <div className="aboutTrekking">
          <div style={{ maxWidth: "550px"}}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{backgroundColor:"#1dc5ce",padding:"5px",borderRadius:"50%",fontSize:"29px",color:"white"}} />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{padding:"20px",fontSize:"20px",fontWeight:"600" }}
              >
                Trekking nədir?
              </AccordionSummary >
              <AccordionDetails>
                Trekkinqin əsas faydalarından biri fiziki sağlamlığınızı hədsiz
                dərəcədə yaxşılaşdırmaqdır. Cığırda bir neçə saat sərf etmək,
                daşların ətrafında dırmaşmaq, qayalarla tullanmaq və təpələrə
                qalxmaq bütün bədəninizə məşq edir, gücünüzü, çevikliyinizi və
                kardiyo fitnessinizi artırır.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{backgroundColor:"#1dc5ce",padding:"5px",borderRadius:"50%",fontSize:"29px",color:"white"}}/>}
                aria-controls="panel2-content"
                id="panel2-header"
                style={{padding:"20px",fontSize:"20px",fontWeight:"600" }}
              >
                Mənə nə lazımdır?
              </AccordionSummary>
              <AccordionDetails>
                Trekkinqin əsas faydalarından biri fiziki sağlamlığınızı hədsiz
                dərəcədə yaxşılaşdırmaqdır. Cığırda bir neçə saat sərf etmək,
                daşların ətrafında dırmaşmaq, qayalarla tullanmaq və təpələrə
                qalxmaq bütün bədəninizə məşq edir, gücünüzü, çevikliyinizi və
                kardiyo fitnessinizi artırır.
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{backgroundColor:"#1dc5ce",padding:"5px",borderRadius:"50%",fontSize:"29px",color:"white"}}/>}
                aria-controls="panel3-content"
                id="panel3-header"
                style={{padding:"20px",fontSize:"20px",fontWeight:"600" }}
              >
                Hündürlüklə bağlı nə dərəcədə narahat olmalıyam?
              </AccordionSummary>
              <AccordionDetails>
              Trekkinqin əsas faydalarından biri fiziki sağlamlığınızı hədsiz
                dərəcədə yaxşılaşdırmaqdır. Cığırda bir neçə saat sərf etmək,
                daşların ətrafında dırmaşmaq, qayalarla tullanmaq və təpələrə
                qalxmaq bütün bədəninizə məşq edir, gücünüzü, çevikliyinizi və
                kardiyo fitnessinizi artırır.
              </AccordionDetails>
            
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{backgroundColor:"#1dc5ce",padding:"5px",borderRadius:"50%",fontSize:"29px",color:"white"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{padding:"20px",fontSize:"20px",fontWeight:"600" }}
              >
               Gəzinti zamanı nə yeyib-içirik?
              </AccordionSummary>
              <AccordionDetails>
                Trekkinqin əsas faydalarından biri fiziki sağlamlığınızı hədsiz
                dərəcədə yaxşılaşdırmaqdır. Cığırda bir neçə saat sərf etmək,
                daşların ətrafında dırmaşmaq, qayalarla tullanmaq və təpələrə
                qalxmaq bütün bədəninizə məşq edir, gücünüzü, çevikliyinizi və
                kardiyo fitnessinizi artırır.
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <img src={faqImg} className="image-trekking" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrekkingPage;
