import { Card, Col, Image, Row } from "antd";

export const Match = ({ i }) => {
  // const players = Array.from({ length: 10 }, (_, i) => `Player ${i + 1}`);

  return (
    <Col
      span={12}
      style={{
        display: "flex",
        padding: "5px",
        marginTop: "20px",
        alignItems: "center",
      }}
    >
      <div style={{ width: "20%" }}>
        <img src={i.img} style={{ width: "135%" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          marginLeft: "40px",
        }}
      >
        <div style={{ display: "flex", width: "100%", padding: "1px" }}>
          <img
            src={i.item_1}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_2}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_3}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_4}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_5}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_6}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <img
            src={i.item_7}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_8}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_9}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_10}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_11}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_12}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
        </div>
      </div>
    </Col>
  );
};

// <h1>League of Legends</h1>
// <Row gutter={[16, 16]}>
//   <Col span={6} key={index}>
//     <Card title={player}>
//       <Image src={i.img} />
//       <div>infor</div>
//     </Card>
//   </Col>
// </Row>
// <div style={{ display: "flex", width: "100%" }}>
// <img
//   src={i.item_13}
//   style={{ width: "25%", height: "60%", padding: "2px" }}
// />
// <img
//   src={i.item_14}
//   style={{ width: "25%", height: "60%", padding: "2px" }}
// />
// <img
//   src={i.item_15}
//   style={{ width: "25%", height: "60%", padding: "2px" }}
// />
// <img
//   src={i.item_16}
//   style={{ width: "25%", height: "60%", padding: "2px" }}
// />
// <img
//   src={i.item_17}
//   style={{ width: "25%", height: "60%", padding: "2px" }}
// />
// <img
//   src={i.item_18}
//   style={{ width: "25%", height: "60%", padding: "2px" }}
// />
// </div>
