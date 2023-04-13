import { Table, Badge } from 'antd';
import type { ColumnsType } from 'antd/es/table';

type Nets = {
  name: string,
  startsAt: string,
  endsAt: string,
}

interface DataType {
  key: React.Key;
  login: string,
  password: string,
  isOn: boolean,
  nets: Nets[] | string[]
  actions: string,
  startsAt: string[],
  endsAt: string[],
}

interface DataTypeExt {
  key: React.Key;
  nets: Nets[] | string[],
  startsAt: string[],
  endsAt: string[],
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Логин',
    dataIndex: 'login',
    key: 'login'
  },
  { title: 'Пароль', dataIndex: 'password', key: 'password' },
  { title: 'Включён', dataIndex: 'isOn', key: 'isOn', render: (isOn) => <p>
    {isOn ? "Да" : "Нет"}
  </p> },
  { title: 'Доступные подсети', dataIndex: 'nets', key: 'nets', render: (nets) => nets.map((net: string[]) => <Badge count={net} color={"red"} style={{marginRight: 5}}></Badge>) },
  { title: 'Действия', dataIndex: 'actions', key: 'actions' },
];

const data: DataType[] = [
  {
    key: 1,
    login: 'fra253',
    password: "pwd123",
    isOn: true,
    actions: "delete",
    nets: ["PrinNet1"],
    startsAt: ["13.04.2023"],
    endsAt: ["14.04.2023"],
  },
  {
    key: 2,
    login: 'gzt924',
    password: "pwd123",
    isOn: true,
    actions: "delete",
    nets: ["PrinNet1", "PrinNet2"],
    startsAt: ["13.04.2023", "14.04.2023"],
    endsAt: ["14.04.2023", "15.04.2023"],
  },
  {
    key: 3,
    login: 'cvb992',
    password: "pwd123",
    isOn: true,
    actions: "delete",
    nets: ["PrinNet1", "PrinNet2", "PrinNet3"],
    startsAt: ["13.04.2023", "14.04.2023", "15.04.2023"],
    endsAt: ["14.04.2023", "15.04.2023", "16.04.2023"],
  },
];

const columnsExt: ColumnsType<DataTypeExt> = [
  {
    title: 'Доступные подсети',
    dataIndex: 'nets',
    key: 'nets',
    render: (nets) => nets.map((net: string[]) => <p>{net}</p>)
  },
  {
    title: 'Дата начала подписки',
    dataIndex: 'startsAt',
    key: 'startAt',
    render: (nets) => nets.map((net: string[]) => <p>{net}</p>)
  },
  {
    title: 'Дата конца подписки',
    dataIndex: 'endsAt',
    key: 'endsAt',
    render: (nets) => nets.map((net: string[]) => <p>{net}</p>)
  },
]

const App: React.FC = () => (
  <Table
    pagination={false}
    columns={columns}
    expandable={{
      expandedRowRender: (record) => <Table
        pagination={false}
        columns={columnsExt}
        dataSource={data.filter((data) => data.key === record.key)}
      />,
      rowExpandable: (record) => record.isOn
    }}
    dataSource={data}
  />
)

export default App