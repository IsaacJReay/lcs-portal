import React from "react";
import { Layout, Row, Col } from "antd";
import main_cards from "../data/main_cards.json";
import { Link } from "react-router-dom";

// const { Meta } = Card;
import Card from "../components/Card";
const { Content } = Layout;

function Home() {
  return (
    <Content className="home-page">
      <Row gutter={[18, 18]}>
        {main_cards.map((x) => (
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
              <a href={x.card_link} target="_blank" rel="noopener noreferrer">
                <Card
                  image={x.card_thumbnail}
                  title={x.card_title}
                  description={x.card_subtitle}
                />
              </a>
            )}
          </Col>
        ))}
      </Row>
    </Content>
  );
}

export default Home;
