import React from "react";

interface GreeterProps {
  person: string;
}

export default function Greeter({ person }: GreeterProps): JSX.Element {
  return <div>Greet {person}</div>;
}
