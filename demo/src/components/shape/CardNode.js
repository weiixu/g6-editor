import React from 'react';
import { RegisterNode } from 'gg-editor';

class CardNode extends React.Component {
  constructor(options) {
    super(options, options);
    this.options = Object.assign({
      name: 'card-node',
    }, options);
    // console.log('super', this.options);
  }

  render() {
    // console.log('render', this.options);
    const anchor = this.options.anchor || [
      [0.5, 0, { type: 'input' }], // 上边中点
      [0, 0.5, { type: 'output' }], // 左边中点
      [1, 0.5, { type: 'output' }], // 右边中点
      [0.5, 1, { type: 'output' }], // 底边中点
    ];
    const config = {
      draw(item) {
        const keyShape = this.drawKeyShape(item);

        // 绘制图标
        const group = item.getGraphicGroup();
        const model = item.getModel();
        this.model = model;
        const width = 184;
        const height = 40;
        const x = -width / 2;
        const y = -height / 2;
        const borderRadius = 4;

        // 左侧色条
        group.addShape('path', {
          attrs: {
            path: [
              ['M', x, y + borderRadius],
              ['L', x, y + height - borderRadius],
              ['A', borderRadius, borderRadius, 0, 0, 0, x + borderRadius, y + height],
              ['L', x + borderRadius, y],
              ['A', borderRadius, borderRadius, 0, 0, 0, x, y + borderRadius],
            ],
            fill: model.bar_color || '#ccc',
          },
        });

        // 类型 logo
        group.addShape('image', {
          attrs: {
            x: x + 16,
            y: y + 12,
            width: model.icon_width || 16,
            height: model.icon_height || 16,
            img: model.icon || 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
          },
        });

        // 状态
        group.addShape('image', {
          attrs: {
            img: model.state_icon, // || 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
            x: x + 158,
            y: y + 12,
            width: 16,
            height: 16,
          },
        });

        // 绘制标签
        this.drawLabel(item);

        return keyShape;
      },
      // 锚点
      anchor,
    };
    console.log('config', config);

    return (
      <RegisterNode name={this.options.name || 'card-node'} config={config} extend="flow-ract" />
    );
  }
}

class StartNode extends CardNode {
  constructor() {
    super({
      name: 'start-node',
      anchor: [
        // [0.5, 0], // 上边中点
        [0.5, 1, { type: 'output' }], // 底边中点
      ],
    });
  }
}
class EndNode extends CardNode {
  constructor() {
    super({
      name: 'end-node',
      anchor: [
        [0.5, 0, { type: 'input' }], // 上边中点
      ],
    });
  }
}
class CopyNode extends CardNode {
  constructor() {
    super({
      name: 'copy-node',
      anchor: [
        [0.5, 0, { type: 'input' }], // 上边中点
        [0, 0.5, { type: 'input' }], // 左边中点
        [1, 0.5, { type: 'input' }], // 右边中点
        [0.5, 1, { type: 'input' }], // 底边中点
      ],
    });
  }
}

// console.log({ CardNode, StartNode, EndNode });

export default CardNode;
export { CardNode, StartNode, EndNode, CopyNode };
