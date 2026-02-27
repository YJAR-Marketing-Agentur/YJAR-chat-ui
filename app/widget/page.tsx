"use client";

import ChatUI from "@/components/ChatUI";

export default function WidgetPage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      {/* DE: Vollflächiger Chat ohne äußeren Page-Scroll */}
      <div className="h-full w-full">
        <ChatUI variant="dark" />
      </div>

      {/* DE: Isoliertes Scrollbar-Styling nur für das Widget */}
      <style jsx global>{`
        /* === Scrollbar Styling für Chat === */

        .overflow-y-auto::-webkit-scrollbar {
          width: 0.5px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(120, 150, 200, 0.4);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(120, 150, 200, 0.7);
        }

        /* Firefox */
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(120,150,200,0.4) transparent;
        }
      `}</style>
    </div>
  );
}