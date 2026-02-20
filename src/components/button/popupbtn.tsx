"use client";

import { PopupButton } from "react-calendly";

export default function CalendlyButton() {
  return (
    <PopupButton
      url="https://calendly.com/d/cxrk-fcg-6db/meeting"
      rootElement={document.body}
      text="Schedule A Call"
    />
  );
}
