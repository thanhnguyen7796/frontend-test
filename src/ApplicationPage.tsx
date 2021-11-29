import { Button, Card, Col, Row } from "antd";
import { SmallDashOutlined } from "@ant-design/icons";

export default function ApplicationPage() {
  return (
    <Row>
      <Col span={4}>
        <Card
          title={
            <h2>Tilte</h2>
          }
          extra={
            <Button type="ghost">
              <SmallDashOutlined />
            </Button>
          }
        ></Card>
      </Col>
    </Row>
  );
}
