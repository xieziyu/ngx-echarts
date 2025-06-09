export interface ECEventData {
  [key: string]: any;
}

export interface ECActionEvent extends ECEventData {
  type: string;
  componentType?: string;
  componentIndex?: number;
  seriesIndex?: number;
  escapeConnect?: boolean;
  batch?: ECEventData;
}
