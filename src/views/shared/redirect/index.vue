<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-10-19 14:39:43
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-10-19 14:40:41
 * @Description: file content
 * @FilePath: /vue02/src/views/shared/redirect/index.vue
-->
<script lang="tsx">
export default {
  name: "Redirect",
};
</script>

<script lang="tsx" setup>
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
onBeforeMount(() => {
  const { params, query } = route;
  const { path } = params;
  router.replace({
    path: "/" + (Array.isArray(path) ? path.join("/") : path),
    query,
  });
});
</script>
