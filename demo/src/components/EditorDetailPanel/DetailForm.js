import React, { Fragment } from 'react';
import { Card, Form, Input, Select, Modal, Button, Tabs, Icon, notification, TreeSelect } from 'antd';
import { withPropsAPI } from 'gg-editor';
// import upperFirst from 'lodash/upperFirst';
import styles from './index.less';

const { TabPane } = Tabs;
const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;

const inlineFormItemLayout = {
  labelCol: {
    md: { span: 6 },
  },
  wrapperCol: {
    md: { span: 18 },
  },
};

class DetailForm extends React.Component {
  get item() {
    const { propsAPI } = this.props;

    return propsAPI.getSelected()[0];
  }

  state = {
    modal2Visible: false,
    treeValue: ['0-0-2'],
  };

  componentWillMount() {
    this.props.onRef && this.props.onRef(this);
  }

  handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const { form, propsAPI } = this.props;
    const { getSelected, executeCommand, update, save } = propsAPI;

    setTimeout(() => {
      form.validateFieldsAndScroll((err, values) => {
        if (err) {
          return;
        }

        const item = getSelected()[0];

        if (!item) {
          return;
        }

        executeCommand(() => {
          update(item, {
            ...values,
          });
        });
      });
    }, 0);
  };

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  showNodeDetail() {
    notification.info({
      message: '节点数据',
      description: <pre style={{ maxHeight: '500px', overflowY: 'auto' }}>{JSON.stringify(this.item.getModel(), null, 2)}</pre>,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }

  onChange = (treeValue) => {
    console.log('onChange ', treeValue);
    this.setState({ treeValue });
  };

  onChangeTabs = (key) => {
    console.log(key);
  }

  renderEdgeShapeSelect = () => {
    return (
      <Select onChange={this.handleSubmit}>
        <Option value="flow-smooth">Smooth</Option>
        <Option value="flow-polyline">Polyline</Option>
        <Option value="flow-polyline-round">Polyline Round</Option>
      </Select>
    );
  };

  renderNodeDetail = () => {
    const { form } = this.props;
    const { label, approve, operate, leader } = this.item.getModel();

    console.log('item:', this.item);
    // let children = ['协同', '审批', '知会', '阅读'];
    let children = ['提交', '暂存', '回退'];
    children = children.map(item => <Option key={item}>{item}</Option>);
    const { SHOW_PARENT } = TreeSelect;
    const treeData = [
      {
        title: '技术部',
        value: '0-0',
        key: '0-0',
        children: [
          {
            title: '尹伟红',
            value: '0-0-0',
            key: '0-0-0',
          },
          {
            title: '马强',
            value: '0-0-1',
            key: '0-0-1',
          },
          {
            title: '徐伟伟',
            value: '0-0-2',
            key: '0-0-2',
          },
        ],
      },
      {
        title: '产品部',
        value: '0-1',
        key: '0-1',
        children: [
          {
            title: '刘蛟',
            value: '0-1-0',
            key: '0-1-0',
          },
          {
            title: '李心洁',
            value: '0-1-1',
            key: '0-1-1',
          },
        ],
      },
    ];
    const tProps = {
      treeData,
      value: this.state.treeValue,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
    };

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Item
            label="节点名称"
            {...inlineFormItemLayout}
          >
            {
            form.getFieldDecorator('label', {
              initialValue: label,
            })(<Input onBlur={this.handleSubmit} />)
          }
          </Item>
          <Item
            onClick={() => this.setModal2Visible(false)}
            label="负责人"
            {...inlineFormItemLayout}
          >
            {
              <div className={styles.setLeader} onClick={() => this.setModal2Visible(true)}>
                <Icon type="plus" />
                {' '}
                <span>点击设置负责人</span>
              </div>
          }
          </Item>
          <Item
            label="审批意见"
            {...inlineFormItemLayout}
          >
            {
            form.getFieldDecorator('approve', {
              initialValue: approve,
            })(<TextArea
                onBlur={this.handleSubmit}
                placeholder="请填写"
                autosize={{ minRows: 2, maxRows: 6 }} />)
          }
          </Item>
          <Item
            label="节点操作"
            {...inlineFormItemLayout}
          >
            {
            form.getFieldDecorator('operate', {
              initialValue: operate,
            })(<Select mode="multiple" onChange={this.handleSubmit}>
              {children}
            </Select>)
          }
          </Item>
        </Form>
        <Button type="primary" style={{ float: 'right' }} onClick={() => this.showNodeDetail()}>
          节点信息
        </Button>
        <Modal
          title="部门成员列表"
          okText="确定"
          cancelText="取消"
          centered
          visible={this.state.modal2Visible}
          bodyStyle={{ padding: 0, minHeight: '160px' }}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <Tabs defaultActiveKey="1" onChange={this.onChangeTabs}>
            <TabPane tab="组织架构" key="1" className={styles.tabsBody}>
              <Form onSubmit={this.handleSubmit}>
                <Item
                  label="负责人"
                  {...inlineFormItemLayout}
                >
                  {form.getFieldDecorator('leader', {
                    initialValue: leader,
                  })(<TreeSelect {...tProps} onChange={this.handleSubmit} width="100%" />)
               }
                </Item>
              </Form>
            </TabPane>
            <TabPane tab="角色" key="2" className={styles.tabsBody}>
              角色
            </TabPane>
            <TabPane tab="成员" key="3" className={styles.tabsBody}>
              成员
            </TabPane>
            <TabPane tab="动态负责人" key="4" className={styles.tabsBody}>
              动态负责人
            </TabPane>
          </Tabs>

        </Modal>
      </div>
    );
  };

  renderEdgeDetail = () => {
    const { form } = this.props;
    const { label = '', shape = 'flow-polyline-round' } = this.item.getModel();

    return (
      <Fragment>
        <Item label="Label" {...inlineFormItemLayout}>
          {form.getFieldDecorator('label', {
            initialValue: label,
          })(<Input onBlur={this.handleSubmit} />)}
        </Item>
        <Item label="Shape" {...inlineFormItemLayout}>
          {form.getFieldDecorator('shape', {
            initialValue: shape,
          })(this.renderEdgeShapeSelect())}
        </Item>
      </Fragment>
    );
  };

  renderGroupDetail = () => {
    const { form } = this.props;
    const { label = '新建分组' } = this.item.getModel();

    return (
      <Item label="Label" {...inlineFormItemLayout}>
        {form.getFieldDecorator('label', {
          initialValue: label,
        })(<Input onBlur={this.handleSubmit} />)}
      </Item>
    );
  };

  render() {
    const { type, title } = this.props;

    if (!this.item) {
      return null;
    }

    return (
      <Card type="inner" size="small" title={title} bordered={false}>
        <Form onSubmit={this.handleSubmit}>
          {type === 'node' && this.renderNodeDetail()}
          {type === 'edge' && this.renderEdgeDetail()}
          {type === 'group' && this.renderGroupDetail()}
        </Form>
      </Card>
    );
  }
}

export default Form.create()(withPropsAPI(DetailForm));
