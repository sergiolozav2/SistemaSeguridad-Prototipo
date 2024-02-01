import { Layout, theme } from "antd";
import { AppMenu } from "./AppMenu";
import { Logo } from "./Logo";

const { Header, Content, Sider } = Layout;

type LayoutProps = {
  children: React.ReactNode;
};
export function AppLayout(props: LayoutProps) {
  return (
    <Layout className="min-h-screen">
      <Sider theme="light" collapsible collapsed={false}>
        <div className="my-8 flex items-center justify-center">
          <Logo />
        </div>
        <AppMenu />
      </Sider>
      <Content className="mt-4 mx-4">{props.children}</Content>
    </Layout>
  );
}
