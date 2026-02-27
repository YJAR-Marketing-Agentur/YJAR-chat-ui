"use client";

import ChatUI from "@/components/ChatUI";
import "@/app/globals.css";

export default function WidgetPage() {
  return (
    <div id="yjar-widget" className="h-screen w-screen bg-[#020617] overflow-hidden">
      {/* DE: Zentrierter Container wie im "richtigen" Screenshot */}
      <div className="h-full w-full flex items-center justify-center p-3">
        {/* DE: Fixe Widget-Größe + responsive */}
        <div className="w-[380px] max-w-[100vw] h-[520px] max-h-[80vh]">
          <ChatUI variant="dark" />
        </div>
      </div>

      {/* DE: Außen-Scroll verhindern (Iframe) */}
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
          background: #020617;
        }

        /* DE: Scrollbar nur intern */
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