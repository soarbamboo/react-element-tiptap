import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import libCss from 'vite-plugin-libcss';

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

export default defineConfig({
  plugins: [
    react(),
    // libCss()
  ],
  build: {
    minify: 'esbuild', // boolean | 'terser' | 'esbuild'
    outDir: "lib",
    cssTarget: "chrome61", // 防止vite将rgba颜色转化为#RGBA十六进制
    lib: {
      entry: resolve("packages/index.tsx"),
      name: "ReactElementTiptap", // 组件库的名称，将作为全局变量名
      fileName: (format) => `${format}/index..js`, // 输出文件的文件名
      formats: ["es", "cjs",'umd'],
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
