import { VideoCameraOutlined } from "@ant-design/icons";
import { useMenu } from "@refinedev/core";
import { Menu, theme } from "antd";

const mapRouteToMenu: {
  [key: string]: { icon: React.ReactNode };
} = {
  Alarmas: {
    icon: <VideoCameraOutlined />,
  },
};
export const AppMenu = () => {
  const { menuItems, selectedKey } = useMenu();
  const { token } = theme.useToken();

  const items = menuItems.map((route, index) => {
    const item = mapRouteToMenu[route?.label ?? ""];
    const selected = selectedKey === route.key;
    return {
      label: route.label,
      key: route.key,
      icon: item?.icon,
      style: {
        backgroundColor: selected ? token.colorPrimaryBg : token.colorBgLayout,
        color: selected ? token.colorPrimaryText : token.colorBgMask,
      },
    };
  });

  return <Menu className="text-base" mode="inline" items={items} />;
};
