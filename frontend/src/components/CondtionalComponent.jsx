import Welcome from "./Welcome";
import Code from "./Code";

export default function CondtionalComponent() {
  const display = true;
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}
