import React, { Component } from "react";
import "./BooksList.css";
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

class BooksList extends Component {
  render() {
    const books = this.props.books;
    return (
      <div className="BooksList">
        <div className="site-card-wrapper">
          <Row gutter={16}>
            {books.map((item, index) => (
              <Col span={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src={item.image}
                  />
                }
              >
                <Meta
                  title={item.title}
                  description={item.description}
                />
              </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default BooksList;
