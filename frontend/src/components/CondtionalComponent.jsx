import Welcome from "./Welcome";
import Code from "./Code";

export default function CondtionalComponent() {
  const display = true;
  return display ? <Welcome /> : <Code />;
}
