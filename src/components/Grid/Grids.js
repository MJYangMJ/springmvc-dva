import React from 'react';
import { Row, Col, Slider } from 'antd';

class MyGrids extends React.Component {
  gutters = {};

  colCounts = {};

  constructor() {
    super();
    this.state = {
      gutterKey: 1,
      colCountKey: 2,
    };
    [8, 16, 24, 32, 40, 48].forEach((value, i) => { this.gutters[i] = value; });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => { this.colCounts[i] = value; });
  }

  onGutterChange = (gutterKey) => {
    this.setState({ gutterKey });
  }

  onColCountChange = (colCountKey) => {
    this.setState({ colCountKey });
  }

  render() {
    const { gutterKey, colCountKey } = this.state;
    const cols = [];
    const colCount = this.colCounts[colCountKey];
    let colCode = '';
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i.toString()} span={24 / colCount}>
          <div>Column</div>
        </Col>
      );
      colCode += `  <Col span={${24 / colCount}} />\n`;
    }
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginRight: 6 }}>Gutter (px): </span>
          <div style={{ width: '50%' }}>
            <Slider
              min={0}
              max={Object.keys(this.gutters).length - 1}
              value={gutterKey}
              onChange={this.onGutterChange}
              marks={this.gutters}
              step={null}
            />
          </div>
          <span style={{ marginRight: 6 }}>Column Count:</span>
          <div style={{ width: '50%' }}>
            <Slider
              min={0}
              max={Object.keys(this.colCounts).length - 1}
              value={colCountKey}
              onChange={this.onColCountChange}
              marks={this.colCounts}
              step={null}
            />
          </div>
        </div>
        <Row gutter={this.gutters[gutterKey]}>{cols}</Row>
        <pre>{`<Row gutter={${this.gutters[gutterKey]}}>\n${colCode}</Row>`}</pre>
      </div>
    );
  }
}


// let bgcolor = {
//   backgroundColor: 'blue',
// }
//
// const MyGrids = () => {
//   return (
//     <div>
//     <Row>
//       <Col span={12}>col-12</Col>
//       <Col span={12}>col-12</Col>
//     </Row>
//     <Row>
//       <Col span={8}>col-8</Col>
//       <Col span={8}>col-8</Col>
//       <Col span={8}>col-8</Col>
//     </Row>
//     <Row>
//       <Col span={6}>col-6</Col>
//       <Col span={6}>col-6</Col>
//       <Col span={6}>col-6</Col>
//       <Col span={6}>col-6</Col>
//     </Row>
//     <Row>
//       <Col style={bgcolor} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
//       <Col style={bgcolor} xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
//       <Col style={bgcolor} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
//     </Row>
//   </div>
//   )
// }

export default MyGrids;
