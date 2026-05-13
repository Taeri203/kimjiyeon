"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyButton({ value, label = "복사" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  async function handleCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }
  return <button type="button" onClick={handleCopy} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#082A5A] px-4 py-2 text-sm font-black text-white" aria-label={`${label}: ${value}`}>{copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}{copied ? "복사됨" : label}</button>;
}
