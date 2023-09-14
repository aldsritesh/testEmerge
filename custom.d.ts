declare module "nprogress";
declare module "react-datepicker";
declare module "react-csv";
declare module "@mui/x-date-pickers-pro/DateRangePicker";
declare module "react-table";
declare module "react-grid-layout";

// declare module 'react-quill'

declare module "react-grid-layout" {
  import * as React from "react";

  interface Layout {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    minH?: number;
    maxW?: number;
    maxH?: number;
    moved?: boolean;
    static?: boolean;
  }

  interface ReactGridLayoutProps {
    className?: string;
    style?: React.CSSProperties;
    width: number;
    autoSize?: boolean;
    cols?: { [breakpoint: string]: number } | number;
    draggableCancel?: string;
    draggableHandle?: string;
    verticalCompact?: boolean;
    compactType?: "vertical" | "horizontal" | null;
    margin?: [number, number];
    containerPadding?: [number, number] | null;
    rowHeight?: number;
    maxRows?: number;
    isBounded?: boolean;
    isDroppable?: boolean;
    preventCollision?: boolean;
    useCSSTransforms?: boolean;
    transformScale?: number;
    droppingItem?: {
      i: string;
      h: number;
      w: number;
    };
    onLayoutChange?: (layout: Layout[]) => void;
    onDragStart?: (layout: Layout[], oldItem: Layout, newItem: Layout) => void;
    onDrag?: (layout: Layout[], oldItem: Layout, newItem: Layout) => void;
    onDragStop?: (layout: Layout[], oldItem: Layout, newItem: Layout) => void;
    onResizeStart?: (
      layout: Layout[],
      oldItem: Layout,
      newItem: Layout
    ) => void;
    onResize?: (layout: Layout[], oldItem: Layout, newItem: Layout) => void;
    onResizeStop?: (layout: Layout[], oldItem: Layout, newItem: Layout) => void;
    onDrop?: (item: Layout) => void;
    children?: React.ReactNode;
  }

  const Responsive: React.FC<ReactGridLayoutProps>;
  const WidthProvider: (component: React.ComponentType) => React.ComponentType;
  const ResponsiveReactGridLayout: React.FC<ReactGridLayoutProps>;

  export {
    Layout,
    ReactGridLayoutProps,
    Responsive,
    WidthProvider,
    ResponsiveReactGridLayout,
  };
}
