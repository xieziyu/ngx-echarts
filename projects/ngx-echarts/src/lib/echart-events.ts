export class EChartEvents {
  static Click = 'click';
  static DblClick = 'dblclick';
  static MouseDown = 'mousedown';
  static MouseUp = 'mouseup';
  static MouseOver = 'mouseover';
  static MouseOut = 'mouseout';
  static GlobalOut = 'globalout';
  static ContextMenu = 'contextmenu';
  static DataZoom = 'datazoom';
  static MapSelectChanged = 'mapselectchanged';
  static MapSelected = 'mapselected';
  static MapUnselected = 'mapunselected';

  static All = [
    EChartEvents.Click,
    EChartEvents.DblClick,
    EChartEvents.MouseDown,
    EChartEvents.MouseUp,
    EChartEvents.MouseOver,
    EChartEvents.MouseOut,
    EChartEvents.GlobalOut,
    EChartEvents.ContextMenu,
    EChartEvents.DataZoom,
    EChartEvents.MapSelectChanged,
    EChartEvents.MapSelected,
    EChartEvents.MapUnselected,
  ];
}
