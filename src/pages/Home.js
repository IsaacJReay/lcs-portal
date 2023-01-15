import React, { useState } from "react";
import { Layout, Row, Col, _ } from "antd";
import main_cards from "../data/main_cards.json";
import { Link } from "react-router-dom";

// const { Meta } = Card;
import Card from "../components/Card";
const { Content } = Layout;

function Home() {
  let Khmer = main_cards.filter((lg) => lg.language === "Khmer");
  let English = main_cards.filter((lg) => lg.language === "English");
  const [state, setState] = useState("Khmer");
  return (
    <Content className="home-page">
      {state === "English" && (
        <div onClick={() => setState("Khmer")} className="lg-btn">
          <img src="/icons8-cambodia-circular-48.png" />
        </div>
      )}
      {state === "Khmer" && (
        <div onClick={() => setState("English")} className="lg-btn">
          <img src="/icons8-great-britain-48.png" />
        </div>
      )}
      <Row gutter={[18, 18]}>
        {state === "" && (
          <>
            {main_cards.map((x) => (
              <>
                <Col xs={24} sm={24} md={12} lg={8} xl={6} key={x.id}>
                  {x.sub_cards ? (
                    <Link to={`/resource/${x.id}`}>
                      <Card
                        image={x.card_thumbnail}
                        title={x.card_title}
                        description={x.card_subtitle}
                      />
                    </Link>
                  ) : (
                    <a
                      href={x.card_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card
                        image={x.card_thumbnail}
                        title={x.card_title}
                        description={x.card_subtitle}
                      />
                    </a>
                  )}
                </Col>
              </>
            ))}
          </>
        )}
        {state === "Khmer" && (
          <>
            {Khmer.map((x) => (
              <>
                <Col xs={24} sm={24} md={12} lg={8} xl={6} key={x.id}>
                  {x.sub_cards ? (
                    <Link to={`/resource/${x.id}`}>
                      <Card
                        image={x.card_thumbnail}
                        title={x.card_title}
                        description={x.card_subtitle}
                      />
                    </Link>
                  ) : (
                    <a
                      href={x.card_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card
                        image={x.card_thumbnail}
                        title={x.card_title}
                        description={x.card_subtitle}
                      />
                    </a>
                  )}
                </Col>
              </>
            ))}
          </>
        )}
        {state === "English" && (
          <>
            {English.map((x) => (
              <>
                <Col xs={24} sm={24} md={12} lg={8} xl={6} key={x.id}>
                  {x.sub_cards ? (
                    <Link to={`/resource/${x.id}`}>
                      <Card
                        image={x.card_thumbnail}
                        title={x.card_title}
                        description={x.card_subtitle}
                      />
                    </Link>
                  ) : (
                    <a
                      href={x.card_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card
                        image={x.card_thumbnail}
                        title={x.card_title}
                        description={x.card_subtitle}
                      />
                    </a>
                  )}
                </Col>
              </>
            ))}
          </>
        )}
      </Row>
    </Content>
  );
}

export default Home;
