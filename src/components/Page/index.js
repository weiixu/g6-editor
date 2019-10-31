import React from 'react';
import {
  GRAPH_MOUSE_EVENTS,
  GRAPH_OTHER_EVENTS,
  PAGE_EVENTS,
  GRAPH_MOUSE_REACT_EVENTS,
  GRAPH_OTHER_REACT_EVENTS,
  PAGE_REACT_EVENTS,
} from '@common/constants';
import { pick, merge } from '@utils';

class Page extends React.Component {
  page;

  get pageId() {
    return '';
  }

  config = {};

  componentDidMount() {
    this.init();
    this.bindEvent();
    this.forceUpdate();
  }

  shouldComponentUpdate(props) {
    const { data: newData } = props;
    const { data: oldData } = this.props;
    const { mode: newMode } = props.graph || {};
    const { mode: oldMode } = this.props.graph || {};

    if (newMode !== oldMode) {
      this.page.changeMode(newMode);
    }

    if (newData !== oldData) {
      this.page.read(newData);

      return true;
    }

    return false;
  }

  get graph() {
    return this.page.getGraph();
  }

  initPage() {}

  readData() {
    const { data } = this.config;

    if (data) {
      this.page.read(data);
    }
  }

  addListener = (target, eventName, handler) => {
    if (typeof handler === 'function') target.on(eventName, handler);
  };

  init() {
    merge(this.config, this.props, {
      graph: {
        container: this.pageId,
      },
    });

    this.initPage();
    this.readData();
  }

  bindEvent() {
    const { addListener } = this;

    GRAPH_MOUSE_EVENTS.forEach((event) => {
      const eventName = GRAPH_MOUSE_REACT_EVENTS[event];

      addListener(this.graph, `${event}`, this.props[`on${eventName}`]);
      addListener(this.graph, `node:${event}`, this.props[`onNode${eventName}`]);
      addListener(this.graph, `edge:${event}`, this.props[`onEdge${eventName}`]);
      addListener(this.graph, `group:${event}`, this.props[`onGroup${eventName}`]);
      addListener(this.graph, `guide:${event}`, this.props[`onGuide${eventName}`]);
      addListener(this.graph, `anchor:${event}`, this.props[`onAnchor${eventName}`]);
    });

    const { page } = this;
    // 输入锚点不可以连出边
    page.on('hoveranchor:beforeaddedge', (ev) => {
      if (ev.anchor.type === 'input') {
        ev.cancel = true;
      }
    });
    page.on('dragedge:beforeshowanchor', (ev) => {
      // 只允许目标锚点是输入，源锚点是输出，才能连接
      if (!(ev.targetAnchor.type === 'input' && ev.sourceAnchor.type === 'output')) {
        ev.cancel = true;
      }
      // 如果拖动的是目标方向，则取消显示目标节点中已被连过的锚点
      if (ev.dragEndPointType === 'target' && page.anchorHasBeenLinked(ev.target, ev.targetAnchor)) {
        ev.cancel = true;
      }
      // 如果拖动的是源方向，则取消显示源节点中已被连过的锚点
      if (ev.dragEndPointType === 'source' && page.anchorHasBeenLinked(ev.source, ev.sourceAnchor)) {
        ev.cancel = true;
      }
    });

    GRAPH_OTHER_EVENTS.forEach((event) => {
      addListener(this.graph, [event], this.props[GRAPH_OTHER_REACT_EVENTS[event]]);
    });

    PAGE_EVENTS.forEach((event) => {
      addListener(this.page, [event], this.props[PAGE_REACT_EVENTS[event]]);
    });
  }

  render() {
    const { page, pageId } = this;
    const { children } = this.props;

    return (
      <div id={pageId} {...pick(this.props, ['style', 'className'])}>
        {page ? children : null}
      </div>
    );
  }
}

export default Page;
