import { Meta, StoryObj } from '@storybook/react';

import { Table, TableProps } from '.';
import { Flex, Text } from '../../antOverrides';

// Sample data to use in stories
interface SampleData {
  key: string;
  name: string;
  age: number;
  address: string;
}
//mock Data
const dataSource: SampleData[] = [
  {
    key: '1',
    name: 'Alex Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Bim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Coe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Dane Smith',
    age: 36,
    address: 'New York No. 2 Lake Park',
  },
];

const renderColumn = (
  dataIndex: keyof SampleData,
  width: number,
  align: 'center' | 'left' = 'center',
) => (
  <Table.Column<SampleData>
    align={align}
    width={width}
    render={({ value }) => (
      <Text className="w-full text-center" size={14} weight="medium">
        {value}
      </Text>
    )}
    dataIndex={dataIndex}
  >
    {dataIndex}
  </Table.Column>
);

// Define a common Table component
const CommonTable: React.FC<TableProps<SampleData>> = (props) => (
  <Flex className="w-full">
    <Table {...props}>
      {renderColumn('name', 100)}
      {renderColumn('age', 50, 'center')}
      {renderColumn('address', 400)}
    </Table>
  </Flex>
);

export default {
  title: 'Organisms/Table',
  component: Table,
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class names to apply to the table container.',
    },
    children: {
      control: 'none',
      description:
        'The table columns and other nested components. Typically consists of <Table.Column> components.',
    },
    expandable: {
      control: 'object',
      description:
        'Configuration for expandable rows. If provided, rows can be expanded to show additional details.',
      defaultValue: undefined,
    },
    rowSelection: {
      control: 'object',
      description: 'Configuration for row selection. Allows rows to be selected with checkboxes.',
      defaultValue: undefined,
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'The size of the table. Can be "small", "middle", or "large".',
      defaultValue: 'middle',
    },
    pagination: {
      control: 'object',
      description:
        'Pagination settings for the table. When provided, the table will show pagination controls.',
      defaultValue: undefined,
    },
    loading: {
      control: 'boolean',
      description:
        'Whether the table is in a loading state. When true, a loading spinner is displayed.',
      defaultValue: false,
    },
    transparentHeader: {
      control: 'boolean',
      description: 'If true, the table header will have a transparent background.',
      defaultValue: false,
    },
    internalScroll: {
      control: 'boolean',
      description:
        'If true, the table will have internal scrolling enabled. Adjusts the scrollable area of the table.',
      defaultValue: true,
    },
    extraHeight: {
      control: 'number',
      description:
        'Extra height to adjust the internal scrolling area of the table. Can be used to account for additional UI elements.',
      defaultValue: 0,
    },
    footer: {
      control: 'function',
      description:
        'Custom footer for the table. Can be a React node or function that returns a React node.',
      defaultValue: undefined,
    },
  },
  subcomponents: {
    Column: Table.Column,
    Cell: Table.Cell,
  },
  tags: ['autodocs'],
} as Meta<TableProps<SampleData>>;

type Story = StoryObj<TableProps<SampleData>>;
//-----------------------------------------------------------------------------
/**
 * Basic Table
 */
export const BasicTable: Story = {
  args: {
    dataSource: dataSource,
    rowKey: 'key',
    pagination: false,
  },

  render: (args) => <CommonTable {...args} />,
};
//------------------------------------------------------------------------------
/**
 * Table with Pagination
 */
export const PaginationTemplate: Story = {
  args: {
    dataSource: dataSource,
    rowKey: 'key',
  },

  render: (args) => {
    const handlePageChange = (page: number) => {
      alert(`Page changed to: ${page}`);
    };

    return (
      <CommonTable
        {...args}
        pagination={{
          current: 1,
          pageSize: 3,
          total: dataSource.length,
          onChange: handlePageChange,
          showQuickJumper: true,
        }}
      />
    );
  },
};
//-----------------------------------------------------------------------
/**
 * Table with Sorter Column
 */
export const SorterTemplate: Story = {
  args: {
    dataSource: dataSource,
    pagination: false,
  },

  render: (args) => (
    <Flex className="w-full">
      <Table pagination={args.pagination} dataSource={dataSource}>
        <Table.Column<SampleData>
          sorter={(a, b) => a.name.localeCompare(b.name)}
          align="center"
          width={100}
          render={({ value }) => (
            <Text className="w-full text-center" size={14} weight="medium">
              {value}
            </Text>
          )}
          dataIndex={'name'}
        >
          name
        </Table.Column>
        <Table.Column<SampleData>
          align="center"
          sorter={(a, b) => a.age - b.age}
          width={50}
          render={({ value }) => (
            <Text className="w-full text-center" size={14} weight="medium">
              {value}
            </Text>
          )}
          dataIndex={'age'}
        >
          age
        </Table.Column>
        <Table.Column<SampleData>
          align="center"
          width={400}
          render={({ value }) => (
            <Text className="w-full text-center" size={14} weight="medium">
              {value}
            </Text>
          )}
          dataIndex={'address'}
        >
          address
        </Table.Column>
      </Table>
    </Flex>
  ),
};
//-----------------------------------------------------------------------------
/**
 * Table with Footer
 */
export const FooterTemplate: Story = {
  args: {
    dataSource: dataSource,
    pagination: false,
  },

  render: (args) => (
    <CommonTable
      {...args}
      footer={() => (
        <div className="bg-light-6 border-light-7 flex h-12 flex-1 items-center justify-center border-y">
          This is footer
        </div>
      )}
    />
  ),
};
//----------------------------------------------------------------------------------
/**
 * Table With custom Render Cell
 */
export const CustomCellTemplate: Story = {
  args: {
    dataSource: dataSource,
    pagination: false,
  },

  render: (args) => (
    <Flex className="w-full">
      <Table pagination={args.pagination} dataSource={dataSource}>
        <Table.Column<SampleData>
          width={100}
          render={({ value }) => (
            <Table.Cell>
              <i>{value}</i>
            </Table.Cell>
          )}
          dataIndex={'name'}
        >
          name
        </Table.Column>
        <Table.Column<SampleData>
          align="center"
          width={50}
          render={({ value }) => (
            <Text className="w-full text-center" size={14} weight="medium">
              {value}
            </Text>
          )}
          dataIndex={'age'}
        >
          age
        </Table.Column>
        <Table.Column<SampleData>
          align="center"
          width={400}
          render={({ value }) => (
            <Text className="w-full text-center" size={14} weight="medium">
              {value}
            </Text>
          )}
          dataIndex={'address'}
        >
          address
        </Table.Column>
      </Table>
    </Flex>
  ),
};
//-------------------------------------------------------------------------
/**
 * Table when no Receive Data
 */
export const NoDataTemplate: Story = {
  args: {
    dataSource: undefined,
    pagination: false,
  },

  render: (args) => <CommonTable {...args} />,
};
//--------------------------------------------------------------------------
/**
 * Table Expandable
 */
export const ExpandableTemplate: Story = {
  args: {
    dataSource: dataSource,
    pagination: false,
  },

  render: (args) => (
    <Flex className="w-full">
      <Table
        expandable={{
          expandedRowRender: ({ name }) => {
            return <div className="bg-light-1 flex  justify-center py-2">{name}</div>;
          },
        }}
        pagination={args.pagination}
        dataSource={dataSource}
      >
        <Table.Column<SampleData>
          width={100}
          render={({ value }) => (
            <Table.Cell>
              <i>{value}</i>
            </Table.Cell>
          )}
          dataIndex={'name'}
        >
          name
        </Table.Column>
        <Table.Column<SampleData>
          align="center"
          width={50}
          render={({ value }) => (
            <Text className="w-full text-center" size={14} weight="medium">
              {value}
            </Text>
          )}
          dataIndex={'age'}
        >
          age
        </Table.Column>
        <Table.Column<SampleData>
          align="center"
          width={400}
          render={({ value }) => (
            <Text className="w-full text-center" size={14} weight="medium">
              {value}
            </Text>
          )}
          dataIndex={'address'}
        >
          address
        </Table.Column>
      </Table>
    </Flex>
  ),
};
