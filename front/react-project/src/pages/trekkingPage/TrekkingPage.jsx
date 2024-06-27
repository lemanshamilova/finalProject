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
import faqImg from "../../assets/images/faq-image-1.svg";
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
              <span>Home</span>
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
            <h1>Best Treks for you with Trekker</h1>
            <p>
              Since 2014, we’ve helped more than 500,000 people of all ages
              enjoy the best outdoor experience of their lives. Whether it’s for
              one day or a two-week vacation, close to home or a foreign land
            </p>
            <div className="forFilter">
              <button>All Types </button>
              <button>Easy Moderate</button>
              <button>Moderate</button>
              <button>Moderate Difficult</button>
              <button>Difficult</button>
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
                View Details{" "}
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={mountains}
                />
              </p>
            </div>
          ))}
        </div>
        <div className="heading-aboutTrekking">
          <h1>Get Some Important Answer</h1>
        </div>
        <div className="aboutTrekking">
          <div style={{ maxWidth: "550px" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    style={{
                      backgroundColor: "#1dc5ce",
                      padding: "5px",
                      borderRadius: "50%",
                      fontSize: "29px",
                      color: "white",
                    }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                style={{ padding: "20px", fontSize: "20px", fontWeight: "600" }}
              >
                What is Trekking?
              </AccordionSummary>
              <AccordionDetails>
                One of the major benefits of trekking is that it improves your
                physical health immensely. Spending multiple hours on the trail,
                climbing around boulders, rock hopping and ascending hills gives
                your whole body a workout, improving your strength, agility and
                cardio fitness.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    style={{
                      backgroundColor: "#1dc5ce",
                      padding: "5px",
                      borderRadius: "50%",
                      fontSize: "29px",
                      color: "white",
                    }}
                  />
                }
                aria-controls="panel2-content"
                id="panel2-header"
                style={{ padding: "20px", fontSize: "20px", fontWeight: "600" }}
              >
               What do I need to carry?
              </AccordionSummary>
              <AccordionDetails>
                One of the major benefits of trekking is that it improves your
                physical health immensely. Spending multiple hours on the trail,
                climbing around boulders, rock hopping and ascending hills gives
                your whole body a workout, improving your strength, agility and
                cardio fitness.
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    style={{
                      backgroundColor: "#1dc5ce",
                      padding: "5px",
                      borderRadius: "50%",
                      fontSize: "29px",
                      color: "white",
                    }}
                  />
                }
                aria-controls="panel3-content"
                id="panel3-header"
                style={{ padding: "20px", fontSize: "20px", fontWeight: "600" }}
              >
             How concerned should I be about the altitude?
              </AccordionSummary>
              <AccordionDetails>
                One of the major benefits of trekking is that it improves your
                physical health immensely. Spending multiple hours on the trail,
                climbing around boulders, rock hopping and ascending hills gives
                your whole body a workout, improving your strength, agility and
                cardio fitness.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    style={{
                      backgroundColor: "#1dc5ce",
                      padding: "5px",
                      borderRadius: "50%",
                      fontSize: "29px",
                      color: "white",
                    }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                style={{ padding: "20px", fontSize: "20px", fontWeight: "600" }}
              >
              What do we eat and drink while on trek?
              </AccordionSummary>
              <AccordionDetails>
                One of the major benefits of trekking is that it improves your
                physical health immensely. Spending multiple hours on the trail,
                climbing around boulders, rock hopping and ascending hills gives
                your whole body a workout, improving your strength, agility and
                cardio fitness.
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
