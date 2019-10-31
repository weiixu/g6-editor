import React from 'react';
import { Row, Col, Select, Icon } from 'antd';
import GGEditor, { Flow } from 'gg-editor';
import CustomNode from '../components/shape/CustomNode';
import { CardNode, StartNode, EndNode, CopyNode } from '../components/shape/CardNode';
import EditorMinimap from '../components/EditorMinimap';
import { FlowContextMenu } from '../components/EditorContextMenu';
import { FlowToolbar } from '../components/EditorToolbar';
import { FlowItemPanel } from '../components/EditorItemPanel';
import { FlowDetailPanel } from '../components/EditorDetailPanel';
import styles from './index.less';
import template from './template';

const dataMap = [/* {
    role: 'start',
    type: 'node',
    size: '100*100',
    shape: 'custom-node',
    color: '#FA8C16',
    label: '起止节点',
    labelOffsetY: 20,
    icon: 'src/common/img/logo.svg',
    x: 150,
    y: 130,
    id: 'ea11814e8',
    index: 0,
  },  */{
    role: 'start',
    type: 'node',
    size: '184*40',
    shape: 'start-node',
    label: '开始',
    icon: 'src/common/img/logo.svg',
    x: 450,
    y: 130,
    id: 'ea11814e18',
    color: '#FF8D18',
    bar_color: '#FF8D18',
    index: 0,
  }, {
    role: '',
    type: 'node',
    size: '184*40',
    shape: 'card-node',
    label: '流程节点',
    icon: 'src/common/img/logo.svg',
    state_icon: 'src/common/img/success.svg',
    x: 450,
    y: 330,
    id: 'ea118142e18',
    color: '#1890FF',
    bar_color: '#1890FF',
    index: 0,
  }, {
    role: 'end',
    type: 'node',
    size: '184*40',
    shape: 'end-node',
    label: '结束',
    icon: 'src/common/img/logo.svg',
    state_icon: false,
    x: 450,
    y: 530,
    id: '481fbb11a',
    bar_color: '#52c41a',
    color: '#52c41a',
    icon_width: 16,
    icon_height: 16,
    index: 0,
  }];

// const Flow_dataMap = localStorage.getItem('Flow_dataMap');
// if (Flow_dataMap) {
//   dataMap = [];
//   const oDataMap = JSON.parse(Flow_dataMap);
//   Object.keys(oDataMap).forEach((key) => {
//     // console.log(oDataMap[key]);
//     dataMap.push(oDataMap[key]);
//   });
// }
// console.log(dataMap);
const dataMapTo = (dataList) => {
  const oData = { nodes: [], edges: [] };
  dataList.map((item) => {
    // console.log(item);
    if (item.type === 'node') {
      oData.nodes.push(item);
    } else {
      oData.edges.push(item);
    }
  });
  return oData;
};

function getQueryString(name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = location.hash.split('?')[1] && location.hash.split('?')[1].match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

var flowData = dataMapTo(dataMap);
var flowLine = 'flow-polyline-round';
const template_index = getQueryString('template');
if (template_index) {
  flowData = template[template_index];
  if (template_index == 2) {
    flowLine = 'flow-smooth'
  }
}
console.log(flowData);

const renderFlow = () => {
  const stroeNode = (data) => {
    localStorage.setItem('Flow_dataMap', JSON.stringify(data.dataMap));
  };
  const handleEvent = (e, name) => {
    console.log(`${name}:`, e);
    if (e && e.item) {
      stroeNode(e.item);
    }
  };

  return (
    <Flow
      className={styles.flow}
      noEndEdge={false}
      graph={{ edgeDefaultShape: flowLine }}
      data={flowData}
      onNodeClick={(e) => { handleEvent(e, '点击节点'); }} // 点击节点
      onEdgeClick={(e) => { handleEvent(e, '点击边线'); }} // 点击边线
      onGroupClick={(e) => { handleEvent(e, '点击群组'); }} // 点击群组
      onGuideClick={(e) => { handleEvent(e, '点击导引'); }} // 点击导引
      onAnchorClick={(e) => { handleEvent(e, '点击锚点'); }} // 点击锚点
      // onClick={(e) => { console.log(e, '点击画布:'); }} // 点击画布
      onClick={(e) => { handleEvent(e, '鼠标左键点击事件'); }} // 鼠标左键点击事件
      onDoubleClick={(e) => { handleEvent(e, '鼠标左键双击事件'); }} // 鼠标左键双击事件
      // onMouseEnter={(e) => { handleEvent(e, '鼠标移入事件'); }}  // 鼠标移入事件
      // onMouseLeave={(e) => { handleEvent(e, '鼠标移除事件'); }}  // 鼠标移除事件
      // onMouseMove={(e) => { console.log(e, '鼠标移动事件:'); }} // 鼠标移动事件
      onMouseDown={(e) => { handleEvent(e, '鼠标按下事件'); }} // 鼠标按下事件
      onMouseUp={(e) => { handleEvent(e, '鼠标抬起事件'); }} // 鼠标抬起事件
      onDragStart={(e) => { handleEvent(e, '鼠标开始拖拽事件'); }} // 鼠标开始拖拽事件
      onDrag={(e) => { handleEvent(e, '鼠标拖拽事件'); }} // 鼠标拖拽事件
      onDragEnd={(e) => { handleEvent(e, '鼠标拖拽结束事件'); }} // 鼠标拖拽结束事件
      onDragEnter={(e) => { handleEvent(e, '鼠标拖拽进入事件'); }} // 鼠标拖拽进入事件
      onDragLeave={(e) => { handleEvent(e, '鼠标拖拽移出事件'); }} // 鼠标拖拽移出事件
      onDrop={(e) => { handleEvent(e, '鼠标拖拽放置事件'); }} // 鼠标拖拽放置事件
      onContextMenu={(e) => { handleEvent(e, '鼠标右键菜单事件'); }} // 鼠标右键菜单事件
      onMouseWheel={(e) => { handleEvent(e, '鼠标滚轮事件'); }} // 鼠标滚轮事件
      onKeyDown={(e) => { handleEvent(e, '键盘按键按下事件'); }} // 键盘按键按下事件
      onKeyUp={(e) => { handleEvent(e, '键盘按键抬起事件'); }} // 键盘按键抬起事件
      onBeforeChange={(e) => { handleEvent(e, '子项数据变化前'); }} // 子项数据变化前
      onAfterChange={(e) => { handleEvent(e, '子项数据变化后'); }} // 子项数据变化后
      onBeforeChangeSize={(e) => { handleEvent(e, '画布尺寸变化前'); }} // 画布尺寸变化前
      onAfterChangeSize={(e) => { handleEvent(e, '画布尺寸变化后'); }} // 画布尺寸变化后
      onBeforeViewportChange={(e) => { handleEvent(e, '视口变化前'); }} // 视口变化前
      onAfterViewportChange={(e) => { handleEvent(e, '视口变化后'); }} // 视口变化后
      onBeforeItemActived={(e) => { handleEvent(e, '激活前'); }} // 激活前
      onAfterItemActived={(e) => { handleEvent(e, '激活后'); }} // 激活后
      onBeforeItemInactivated={(e) => { handleEvent(e, '取消激活前'); }} // 取消激活前
      onAfterItemInactivated={(e) => { handleEvent(e, '取消激活后'); }} // 取消激活后
      onBeforeItemSelected={(e) => { handleEvent(e, '选中前'); }} // 选中前
      onAfterItemSelected={(e) => { handleEvent(e, '选中后'); }} // 选中后
      onBeforeItemUnselected={(e) => { handleEvent(e, '取消选中前'); }} // 取消选中前
      onAfterItemUnselected={(e) => { handleEvent(e, '取消选中后'); }} // 取消选中后
      onKeyUpEditLabel={(e) => { handleEvent(e, '键盘按键抬起事件（节点编辑）'); }
    }
    />
  );
};

const changeFlowLine = (value) => {
  console.log(value);
};

class FlowPage extends React.Component {
  state = {
    flowData: {},
    isToggleOn: false,
    dispaly: 'none',
  };

  handleToggleMap() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? 'none' : 'block',
    }));
  }

  render() {
    return (
      <GGEditor className={styles.editor}>
        {/* <Row type="flex" className={styles.editorHd}>
          <Col span={24}>
            <FlowToolbar />
          </Col>
          </Row> */}
        <Row type="flex" className={styles.editorBd}>
          <Col span={3} className={styles.editorSidebar}>
            <FlowItemPanel />
            <Select onChange={changeFlowLine} defaultValue="flow-polyline-round">
              <Option value="flow-smooth">曲线</Option>
              <Option value="flow-polyline">折线</Option>
              <Option value="flow-polyline-round">圆角折线</Option>
            </Select>
          </Col>
          <Col span={15} className={styles.editorContent} id="flowWrap">
            <FlowToolbar />
            <div className={styles.flowToolbarMap}>
              <Icon type="compass" onClick={this.handleToggleMap.bind(this)} />
              {this.state.display === 'block' && (
              <div id="editorMinimapWrap" className={styles.editorMinimapWrap} style={{ display: this.state.display || 'visible' }}>
                <EditorMinimap />
              </div>
              )}
            </div>
            {/* <Flow className={styles.flow} /> */}
            {renderFlow()}
            <CustomNode />
            <CardNode />
            <StartNode />
            <EndNode />
            <CopyNode />
          </Col>
          <Col span={6} className={styles.editorSidebar}>
            <FlowDetailPanel />
          </Col>
        </Row>
        <FlowContextMenu />
      </GGEditor>
    );
  }
}

export default FlowPage;
