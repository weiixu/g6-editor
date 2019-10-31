const list = [{
  nodes: [{
    role: 'start',
    type: 'node',
    size: '184*40',
    shape: 'start-node',
    label: '开始',
    icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
    x: 450,
    y: 130,
    id: 'ea11814e18',
    bar_color: '#1890FF',
    index: 0,
  },
  {
    role: '',
    type: 'node',
    size: '184*40',
    shape: 'card-node',
    label: '流程节点',
    icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
    x: 298.0625,
    y: 268,
    id: '8726f178',
    index: 1,
  },
  {
    role: '',
    type: 'node',
    size: '184*40',
    shape: 'card-node',
    label: '流程节点',
    icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
    x: 601.9375,
    y: 267.5,
    id: 'ea118142e18',
    index: 2,
  },
  {
    role: '',
    type: 'node',
    size: '184*40',
    shape: 'card-node',
    label: '流程节点',
    icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
    x: 753.4375,
    y: 423.75,
    id: '917197cc',
    index: 7,
  },
  {
    role: '',
    type: 'node',
    size: '184*40',
    shape: 'card-node',
    label: '流程节点',
    icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
    x: 449.4375,
    y: 423.25,
    id: 'bd8ae6c8',
    index: 8,
  },
  ],
  edges: [{
    source: 'ea11814e18',
    sourceAnchor: 0,
    target: '8726f178',
    targetAnchor: 0,
    id: '9c00e128',
    index: 3,
  },
  {
    source: 'ea11814e18',
    sourceAnchor: 0,
    target: 'ea118142e18',
    targetAnchor: 0,
    id: 'ee5471f4',
    index: 4,
  },
  {
    source: 'ea118142e18',
    sourceAnchor: 3,
    target: 'bd8ae6c8',
    targetAnchor: 0,
    id: '753362bf',
    index: 5,
  },
  {
    source: 'ea118142e18',
    sourceAnchor: 3,
    target: '917197cc',
    targetAnchor: 0,
    id: 'd7e54ab7',
    index: 6,
  },
  ],
}, {
  nodes: [{
    role: 'start',
    type: 'node',
    size: '184*40',
    shape: 'start-node',
    label: '开始',
    icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
    x: 450,
    y: 130,
    id: 'ea11814e18',
    bar_color: '#1890FF',
    index: 0,
  },
  {
    role: '',
    type: 'node',
    size: '184*40',
    shape: 'card-node',
    label: '流程节点',
    icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
    x: 298.0625,
    y: 268,
    id: '8726f178',
    index: 1,
  },
  {
    role: '',
    type: 'node',
    size: '184*40',
    shape: 'card-node',
    label: '流程节点',
    icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
    x: 601.9375,
    y: 267.5,
    id: 'ea118142e18',
    index: 2,
  },
  {
    type: 'node',
    size: '184*40',
    shape: 'copy-node',
    color: '#13C2C2',
    label: '抄送节点',
    role: 'copy',
    icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
    x: 727.625,
    y: 380.5,
    id: '44cc13b2',
    index: 7,
  },
  {
    type: 'node',
    size: '184*40',
    shape: 'copy-node',
    color: '#13C2C2',
    label: '抄送节点',
    role: 'copy',
    icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
    x: 726.125,
    y: 481.5,
    id: '9f2a5e50',
    index: 8,
  },
  ],
  edges: [{
    source: 'ea11814e18',
    sourceAnchor: 0,
    target: '8726f178',
    targetAnchor: 0,
    id: '9c00e128',
    index: 3,
  },
  {
    source: 'ea11814e18',
    sourceAnchor: 0,
    target: 'ea118142e18',
    targetAnchor: 0,
    id: 'ee5471f4',
    index: 4,
  },
  {
    source: 'ea118142e18',
    sourceAnchor: 3,
    target: '44cc13b2',
    targetAnchor: 1,
    id: '34630963',
    index: 5,
  },
  {
    source: 'ea118142e18',
    sourceAnchor: 3,
    target: '9f2a5e50',
    targetAnchor: 1,
    id: 'b3e7be0a',
    index: 6,
  },
  ],
}, {
  nodes: [
    {
      role: 'start',
      type: 'node',
      size: '184*40',
      shape: 'start-node',
      label: '开始',
      icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
      x: 450,
      y: 130,
      id: 'ea11814e18',
      bar_color: '#1890FF',
      index: 0,
    },
    {
      role: '',
      type: 'node',
      size: '184*40',
      shape: 'card-node',
      label: '流程节点',
      icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
      x: 346.5625,
      y: 267.5,
      id: 'ea118142e18',
      index: 3,
    },
    {
      type: 'node',
      size: '184*40',
      shape: 'card-node',
      label: '流程节点',
      role: 'flow',
      icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
      x: 551.125,
      y: 267.5,
      id: 'f4ea51da',
      index: 4,
    },
    {
      role: '',
      type: 'node',
      size: '184*40',
      shape: 'card-node',
      label: '流程节点',
      icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
      x: 144.5625,
      y: 267,
      id: '8726f178',
      index: 7,
    },
    {
      type: 'node',
      size: '184*40',
      shape: 'card-node',
      label: '流程节点',
      role: 'flow',
      icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
      x: 757.625,
      y: 266.5,
      id: 'bb88c000',
      index: 8,
    },
  ],
  edges: [
    {
      source: 'ea11814e18',
      sourceAnchor: 0,
      target: '8726f178',
      targetAnchor: 0,
      id: '9c00e128',
      index: 1,
    },
    {
      source: 'ea11814e18',
      sourceAnchor: 0,
      target: 'ea118142e18',
      targetAnchor: 0,
      id: 'ee5471f4',
      index: 2,
    },
    {
      source: 'ea11814e18',
      sourceAnchor: 0,
      target: 'f4ea51da',
      targetAnchor: 0,
      id: 'd3312919',
      index: 5,
    },
    {
      source: 'ea11814e18',
      sourceAnchor: 0,
      target: 'bb88c000',
      targetAnchor: 0,
      id: 'b20acf4a',
      index: 6,
    },
  ],
}, {
  nodes: [
    {
      role: 'start',
      type: 'node',
      size: '184*40',
      shape: 'start-node',
      label: '开始',
      icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
      x: 450,
      y: 130,
      id: 'ea11814e18',
      bar_color: '#1890FF',
      index: 0,
    },
    {
      type: 'node',
      size: '184*40',
      shape: 'copy-node',
      color: '#13C2C2',
      label: '抄送节点',
      role: 'copy',
      icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
      x: 307.125,
      y: 269.5,
      id: 'edea39b6',
      index: 5,
    },
    {
      type: 'node',
      size: '184*40',
      shape: 'copy-node',
      color: '#13C2C2',
      label: '抄送节点',
      role: 'copy',
      icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
      x: 306.625,
      y: 428,
      id: '72ba3682',
      index: 6,
    },
    {
      type: 'node',
      size: '184*40',
      shape: 'copy-node',
      color: '#13C2C2',
      label: '抄送节点',
      role: 'copy',
      icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
      x: 598.625,
      y: 351,
      id: 'f82b443f',
      index: 7,
    },
    {
      type: 'node',
      size: '184*40',
      shape: 'copy-node',
      color: '#13C2C2',
      label: '抄送节点',
      role: 'copy',
      icon: '//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg',
      x: 599.125,
      y: 528.5,
      id: '66dbf9b6',
      index: 8,
    },
  ],
  edges: [
    {
      source: 'ea11814e18',
      sourceAnchor: 0,
      target: 'edea39b6',
      targetAnchor: 2,
      id: 'deac6c35',
      index: 1,
    },
    {
      source: 'ea11814e18',
      sourceAnchor: 0,
      target: 'f82b443f',
      targetAnchor: 1,
      id: 'a6b0cf3e',
      index: 2,
    },
    {
      source: 'ea11814e18',
      sourceAnchor: 0,
      target: '72ba3682',
      targetAnchor: 2,
      id: 'd5cf0b8b',
      index: 3,
    },
    {
      source: 'ea11814e18',
      sourceAnchor: 0,
      target: '66dbf9b6',
      targetAnchor: 1,
      id: '5bf25bb6',
      index: 4,
    },
  ],
}];

export default list;