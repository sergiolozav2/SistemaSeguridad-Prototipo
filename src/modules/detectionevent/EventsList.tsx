import React from "react";
import { IResourceComponentsProps, BaseRecord } from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  ShowButton,
  DateField,
  MarkdownField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

const severityStyle: { [key: string]: string } = {
  alta: "bg-red-200 text-red-600",
  media: "bg-amber-600 text-stone-100",
  baja: "bg-green-200 text-green-700",
};

export const EventsList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });
  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="Id" />
        <Table.Column
          dataIndex={["created_at"]}
          title="Created At"
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="source" title="Source" />
        <Table.Column dataIndex="location" title="Location" />
        <Table.Column
          dataIndex="picture"
          title="Picture"
          render={(value: string) => (
            <div className="w-fit rounded-lg bg-stone-100">
              <img
                className="h-8 aspect-square mix-blend-multiply"
                src={value}
              />
            </div>
          )}
        />
        <Table.Column dataIndex="confidence" title="Confidence" />
        <Table.Column
          dataIndex="severity"
          title="Severity"
          render={(val: string) => (
            <div
              className={`px-2 py-0.5 font-medium rounded-md uppercase w-fit text-center ${severityStyle[val]}`}
            >
              {val}
            </div>
          )}
        />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
