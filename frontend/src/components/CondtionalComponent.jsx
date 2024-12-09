import Welcome from "./Welcome";
import Code from "./Code";

export default function CondtionalComponent() {
  let message;
  const display = true;
  if (display) {
    message = <h1>This is message 1</h1>;
  } else {
    message = <h1>This is message 2</h1>;
  }
  return message;
}
