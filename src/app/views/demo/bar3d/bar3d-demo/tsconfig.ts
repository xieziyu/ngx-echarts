export const TSCONFIG_CODE = `\
{
  ...
  "paths": {
+    "echarts": [
+      "node_modules/echarts/dist/echarts.min.js"
+    ],
+    "echarts-gl": [
+      "node_modules/echarts-gl/dist/echarts-gl.min.js"
+    ],
  }
}

`;
