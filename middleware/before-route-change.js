import {useUiStore} from "/store/ui"
export default async function ({ $pinia }) {
  const store = useUiStore($pinia)
  store.RESET_STATE()
}
