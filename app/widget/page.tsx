"use client";

import ChatUI from "@/components/ChatUI";

export default function WidgetPage() {
  return (
    <div id="yjar-widget" className="h-full w-full overflow-hidden">
      {/* DE: Volle Höhe im iFrame/Panel */}
      <div className="h-full w-full">
        <ChatUI variant="dark" embedded />
      </div>

      {/* DE: Global für iFrame: volle Höhe + kein outer Scroll + transparenter Hintergrund */}
      <style jsx global>{`
        html,
        body {
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: transparent;
        }

        /* DE: Scrollbar Styling nur innerhalb des Chat-Scrollbereichs */
        #yjar-widget .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(120, 150, 200, 0.4) transparent;
        }

        #yjar-widget .overflow-y-auto::-webkit-scrollbar {
          width: 1px;
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