import { Component, createSignal } from 'solid-js';
import { useRoutes } from '@solidjs/router';

import { routes } from './routes';

import Sidebar, { SidebarMobile } from 'components/Layouts/Sidebar';
import Searchbar from 'components/Layouts/Searchbar';
import Footer from 'components/Layouts/Footer';

const App: Component = () => {
  const Route = useRoutes(routes);
  const [sidebarOpen, setSidebarOpen] = createSignal(false);

  return (
    <>
      <SidebarMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar />

      <section class="flex h-full flex-col xl:pl-72">
        <Searchbar setSidebarOpen={setSidebarOpen} />
        <main class="flex-auto p-4 sm:p-8">
          <Route />
        </main>

        <Footer />
      </section>
    </>
  );
};

export default App;
