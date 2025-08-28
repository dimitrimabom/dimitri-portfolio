"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "./ui/button"

interface CopyToClipboardProps {
    text: string
    className?: string
}

export function CopyToClipboard({ text, className = "" }: CopyToClipboardProps) {
    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(text)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
        } catch (err) {
            console.error("Failed to copy text: ", err)
        }
    }

    return (
        <Button
            onClick={copyToClipboard}
            variant="outline"
            aria-label="Copy to clipboard"
        >
            <span className="relative w-4 h-4 mr-2">
                <Copy
                    className={`
          absolute inset-0 w-4 h-4 
          transition-all duration-300 ease-in-out
          ${isCopied ? "opacity-0 scale-50" : "opacity-100 scale-100"}
        `}
                />
                <Check
                    className={`
          absolute inset-0 w-4 h-4 
          transition-all duration-300 ease-in-out
          ${isCopied ? "opacity-100 scale-100" : "opacity-0 scale-50"}
        `}
                />
            </span>
            <span className="transition-all duration-300 ease-in-out">{isCopied ? "Copied!" : "E-Mail"}</span>
        </Button>
    )
}
