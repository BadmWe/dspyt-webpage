import { useStore } from "../lib/store";

export default function Newslettter(cid) {
  const { tick } = useStore();

  tick(Date.now(), cid);
  // Tick the time every second

  return <></>;
}
