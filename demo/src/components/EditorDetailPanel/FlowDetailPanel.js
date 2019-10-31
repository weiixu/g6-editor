import { saveAs } from 'file-saver';
import React from 'react';
import { Card, Checkbox, Button, notification } from 'antd';
import { NodePanel, EdgePanel, GroupPanel, MultiPanel, CanvasPanel, DetailPanel } from 'gg-editor';
import DetailForm from './DetailForm';
import styles from './index.less';

class FlowDetailPanel extends React.Component {
  state = {
    checked: true,
    nodeDetail: '',
  };

  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    this.setState({
      checked: e.target.checked,
    });
  }

  onRef = (ref) => {
    this.nodeDetail = ref;
  }

  handleClear = () => {
    localStorage.setItem('Flow_dataMap', '');
    location.reload();
  }

  handleDownload = () => {
    const canvas = document.querySelector('#flowWrap canvas');
    // const oWrap = document.querySelector('#editorMinimapWrap')
    // const canvas2 = oWrap.querySelector('.g6-editor-minimap-background canvas')
    console.log(canvas);
    // 白色背景
    const _canvas = document.createElement('canvas');
    _canvas.width = canvas.width;
    _canvas.height = canvas.height;
    const ctx = _canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(canvas, 0, 0);
    saveAs(_canvas.toDataURL(), 'img.png');
  }

  saveDraft = () => {
    // console.log(this);
    // console.log(this.nodeDetail);
    if (!this.nodeDetail) return;
    const { propsAPI } = this.nodeDetail.props;
    // console.log('propsAPI:', propsAPI);
    const { save } = propsAPI;
    const saveData = save();
    // console.log('saveData:', saveData);
  }

  startFlow = () => {
    // console.log(this);
    // console.log(this.nodeDetail);
    if (!this.nodeDetail) return;
    const { propsAPI } = this.nodeDetail.props;
    // console.log('propsAPI:', propsAPI);
    const { save } = propsAPI;
    const saveData = save();
    // console.log('saveData:', saveData);
    notification.info({
      message: '流程数据',
      description: <pre style={{ maxHeight: '500px', overflowY: 'auto' }}>{JSON.stringify(saveData, null, 2)}</pre>,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }

  render() {
    return (
      <DetailPanel className={styles.detailPanel}>
        <NodePanel>
          <DetailForm type="node" title="节点属性" onRef={this.onRef} />
        </NodePanel>
        <EdgePanel>
          <DetailForm type="edge" title="边线属性" onRef={this.onRef} />
        </EdgePanel>
        <GroupPanel>
          <DetailForm type="group" title="组属性" onRef={this.onRef} />
        </GroupPanel>
        <MultiPanel>
          <Card type="inner" size="small" title="多选" bordered={false} />
        </MultiPanel>
        <CanvasPanel>
          <Card type="inner" size="small" title="流程信息" bordered={false}>
            <div>
              <Button style={{ marginLeft: '0' }} onClick={() => this.startFlow()} type="primary">启用流程</Button>
              <Button style={{ marginLeft: '5px' }} onClick={() => this.saveDraft()}>保存草稿</Button>
              <Button style={{ marginLeft: '5px' }} onClick={() => this.handleClear()}>清空</Button>
              <Button style={{ marginLeft: '5px' }} onClick={() => this.handleDownload()}>下载</Button>
            </div>
            <br />
            <div>
              <h4>流程提醒</h4>
              <Checkbox checked={this.state.checked} onChange={this.onChange}>使用微信提醒节点负责人、抄送人</Checkbox>
              <br />
              <Checkbox checked={this.state.checked} onChange={this.onChange}>使用邮件提醒节点负责人、抄送人</Checkbox>
            </div>
            <br />
            <div>
              <h4>流程日志/流转图</h4>
              <Checkbox checked={this.state.checked} onChange={this.onChange}>允许查看流程日志和流转图</Checkbox>
            </div>
          </Card>
        </CanvasPanel>
      </DetailPanel>
    );
  }
}

export default FlowDetailPanel;
