import { RefineThemes } from "@refinedev/antd";
import { ConfigProvider } from "antd";
import { PropsWithChildren } from "react";

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { token, ...rest } = RefineThemes.Orange;
  return (
    <ConfigProvider
      // you can change the theme colors here. example: ...RefineThemes.Magenta,
      theme={{
        ...rest,
        token: {
          ...token,
          fontFamily: "Inter",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
