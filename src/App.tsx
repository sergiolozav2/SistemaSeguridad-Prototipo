import { Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import authProvider from "./authProvider";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { supabaseClient } from "./utility";
import { AntdInferencer } from "@refinedev/inferencer/antd";
import { EventsList } from "./modules/detectionevent/EventsList";
import { AppLayout } from "./components";
import { CameraStream } from "./modules/camera_stream/CameraStream";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider(supabaseClient)}
                liveProvider={liveProvider(supabaseClient)}
                authProvider={authProvider}
                routerProvider={routerBindings}
                notificationProvider={useNotificationProvider}
                options={{
                  syncWithLocation: true,
                  liveMode: "auto",
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "pjFNpe-cJwyUR-RRHkV6",
                }}
                resources={[
                  {
                    name: "Alarma",
                    list: "/events",
                    show: "/events/show/:id",
                    edit: "/events/edit/:id",
                    create: "/events/create",
                  },
                  { name: "Camara", list: "/camera" },
                ]}
              >
                <Routes>
                  <Route
                    index
                    element={<NavigateToResource resource="events" />}
                  />
                  <Route
                    element={
                      <AppLayout>
                        <Outlet />
                      </AppLayout>
                    }
                  >
                    <Route path="events">
                      <Route index element={<EventsList />} />
                      <Route path="show/:id" element={<AntdInferencer />} />
                      <Route path="edit/:id" element={<AntdInferencer />} />
                      <Route path="create" element={<AntdInferencer />} />
                    </Route>
                    <Route path="camera" element={<CameraStream />} />
                  </Route>
                </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
