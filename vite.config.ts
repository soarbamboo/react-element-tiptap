import path from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import typesctipt from "@rollup/plugin-typescript";
import react from "@vitejs/plugin-react";
const PROJECT_NAME = "react-element-tiptap";

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

export default defineConfig({
  plugins: [
    reactRefresh(),
    typesctipt({
      target: "es2015",
      rootDir: resolve("packages/"),
      declaration: true,
      declarationDir: resolve("lib"),
      exclude: resolve("node_modules/**"),
      allowSyntheticDefaultImports: true,
    }),
  ],
  build: {
    outDir: "lib",
    cssTarget: "chrome61", // 防止vite将rgba颜色转化为#RGBA十六进制
    lib: {
      entry: resolve("packages/index.ts"),
      name: "ReactElementTiptap", // 组件库的名称，将作为全局变量名
      fileName: PROJECT_NAME, // 输出文件的文件名
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"], // 却表外部化处理那些不想打包进库的依赖
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
    },
  },
});
