/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { IResourceComponentsProps, BaseRecord } from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  ShowButton,
  DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";
import { ImageDialog } from "./components/ImageDialog";

const severityStyle: { [key: string]: string } = {
  alta: "bg-red-200 text-red-600",
  media: "bg-amber-600 text-stone-100",
  baja: "bg-green-200 text-green-700",
};

export const EventsList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const [imageDialog, setImageDialog] = useState<any>();

  function openDialog(image: any) {
    setImageDialog(image);
  }

  function closeDialog() {
    setImageDialog(undefined);
  }
  return (
    <List>
      <ImageDialog record={imageDialog} closeModal={closeDialog} />
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title="ID"
          sorter
          sortDirections={["descend"]}
        />
        <Table.Column
          className="whitespace-nowrap"
          dataIndex={["created_at"]}
          title="Registro"
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column className="capitalize" dataIndex="name" title="Identificación" />
        <Table.Column dataIndex="source" title="Origen" />
        <Table.Column dataIndex="location" title="Ubicación" />
        <Table.Column
          dataIndex="picture"
          title="Fotografía"
          render={(value: string, record) => (
            <div className="w-fit rounded-lg bg-stone-100">
              <img
                onClick={() => openDialog(record)}
                className="cursor-pointer object-cover h-8 aspect-square mix-blend-multiply"
                src={value}
              />
            </div>
          )}
        />
        <Table.Column dataIndex="confidence" title="Confianza" />
        <Table.Column
          dataIndex="severity"
          title="Riesgo"
          render={(val: string) => (
            <div
              className={`px-2 py-0.5 font-medium rounded-md uppercase w-fit text-center ${severityStyle[val]}`}
            >
              {val}
            </div>
          )}
        />
        <Table.Column
          title="Acciones"
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
