"use client";

import ChatUI from "@/components/ChatUI";

export default function WidgetPage() {
  return (
    <div id="yjar-widget" className="fixed inset-0 overflow-hidden bg-transparent">
      {/* DE: Full-Bleed im Iframe (keine eigene Karte, kein Außen-Scroll) */}
      <div className="h-full w-full flex flex-col">
        <ChatUI variant="embed" />
      </div>

      {/* DE: Scrollbar Styling nur innerhalb des Widgets */}
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden; /* DE: verhindert äußeren Scroll */
          background: transparent;
        }

        /* === Nur der interne Chat-Scroll === */
        #yjar-widget .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(120, 150, 200, 0.4) transparent;
        }

        #yjar-widget .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        #yjar-widget .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }

        #yjar-widget .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(120, 150, 200, 0.4);
          border-radius: 10px;
        }

        #yjar-widget .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(120, 150, 200, 0.7);
        }
      `}</style>
    </div>
  );
}