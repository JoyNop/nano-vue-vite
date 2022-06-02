/**
 *  Introduces component library styles on demand.
 * https://github.com/anncwb/vite-plugin-style-import
 */
import { createStyleImportPlugin, AndDesignVueResolve } from "vite-plugin-style-import"
export function configStyleImportPlugin(isBuild: boolean) {
  return createStyleImportPlugin({
    resolves: [AndDesignVueResolve()],
    libs: [
      // 如果没有你需要的resolve，可以在lib内直接写，也可以给我们提供PR
      {
        libraryName: "ant-design-vue",
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/index`
        }
      }
    ]
  })
}
