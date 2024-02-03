import { ThemedLayoutV2 } from "@refinedev/antd";
import { Logo } from "./Logo";

type LayoutProps = {
  children: React.ReactNode;
};
export function AppLayout(props: LayoutProps) {
  return <ThemedLayoutV2 Title={Logo}>{props.children}</ThemedLayoutV2>;
}
