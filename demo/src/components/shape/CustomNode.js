import React from 'react';
// import { Card } from 'antd';
// import { ItemPanel, Item } from 'gg-editor';
// import styles from './index.less';
import { RegisterNode } from "gg-editor";

class CustomNode extends React.Component {
  render() {
    const config = {
      draw(item) {
        const keyShape = this.drawKeyShape(item);

        // 绘制图标
        const group = item.getGraphicGroup();
        const model = item.getModel();

        group.addShape("image", {
          attrs: {
            x: -15,
            y: -25,
            width: 30,
            height: 30,
            img: model.icon
          }
        });

        // 绘制标签
        this.drawLabel(item);

        return keyShape;
      },

      anchor: [
        [0.5, 0], // 上边中点
        [0.5, 1] // 底边中点
      ]
    };

    return (
      <RegisterNode name="custom-node" config={config} extend={"flow-circle"} />
    );
  }
}

export default CustomNode;
