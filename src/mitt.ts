import mitt from "mitt"
import Emitter from "mitt"

const emitter = mitt()

export default {
  // @ts-ignore
  $on: (...args: any) => emitter.on(...args),
  // @ts-ignore
  $once: (...args: any) => emitter.once(...args),
  // @ts-ignore
  $off: (...args: any) => emitter.off(...args),
  // @ts-ignore
  $emit: (...args: any) => emitter.emit(...args)
}
