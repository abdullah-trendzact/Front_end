/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useMenuChildren } from '@/components/menu';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMenus } from '@/providers';
import { useLayout } from '@/providers';
import { deepMerge } from '@/utils';
import { demo5LayoutConfig } from './Demo5LayoutConfig';

// Interface defining the structure for layout provider properties

// Initial layout properties with default values
const initalLayoutProps = {
  layout: demo5LayoutConfig,
  // Default layout configuration
  headerSticky: false,
  // Header is not sticky by default
  mobileSidebarOpen: false,
  // Mobile sidebar is closed by default
  setMobileSidebarOpen: open => {
    console.log(`${open}`);
  }
};

// Creating context for the layout provider with initial properties
const Demo5LayoutContext = createContext(initalLayoutProps);

// Custom hook to access the layout context
const useDemo5Layout = () => useContext(Demo5LayoutContext);

// Layout provider component that wraps the application
const Demo5LayoutProvider = ({
  children
}) => {
  const {
    pathname
  } = useLocation(); // Gets the current path
  const {
    setMenuConfig
  } = useMenus(); // Accesses menu configuration methods
  const secondaryMenu = useMenuChildren(pathname, MENU_SIDEBAR, 0); // Retrieves the secondary menu

  // Sets the primary and secondary menu configurations
  setMenuConfig('primary', MENU_SIDEBAR);
  setMenuConfig('secondary', secondaryMenu);
  const {
    getLayout,
    updateLayout,
    setCurrentLayout
  } = useLayout(); // Layout management methods

  // Merges the default layout with the current one
  const getLayoutConfig = () => {
    return deepMerge(demo5LayoutConfig, getLayout(demo5LayoutConfig.name));
  };
  const [layout, setLayout] = useState(getLayoutConfig); // State for layout configuration

  // Updates the current layout when the layout state changes
  useEffect(() => {
    setCurrentLayout(layout);
  });
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false); // State for mobile sidebar

  const scrollPosition = useScrollPosition(); // Tracks the scroll position

  const headerSticky = scrollPosition > layout.options.header.stickyOffset; // Makes the header sticky based on scroll

  return (
    // Provides the layout configuration and controls via context to the application
    <Demo5LayoutContext.Provider value={{
      layout,
      headerSticky,
      mobileSidebarOpen,
      setMobileSidebarOpen
    }}>
      {children}
    </Demo5LayoutContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { Demo5LayoutProvider, useDemo5Layout };