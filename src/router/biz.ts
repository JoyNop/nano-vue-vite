import operate from "@/router/modules/operate"

import control from "@/router/modules/control"
import _ from "lodash"
// export default [...control, ...system];

const arr = _.concat(control, operate)

export const bizRouteUse = arr
export const bizConfigUse = arr
