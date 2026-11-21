import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function SakugaToast({ message, type = 'success', onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="relative flex items-center gap-3 border-2 border-black bg-[#ffe600] px-5 py-3 text-zinc-950 shadow-[6px_6px_0px_#000000]">
        {/* Manga speech pointer notch */}
        <div className="absolute -bottom-2 right-8 h-3 w-3 rotate-45 border-r-2 border-b-2 border-black bg-[#ffe600]" />

        {type === 'success' ? (
          <CheckCircle2 className="h-5 w-5 text-emerald-900" />
        ) : (
          <AlertCircle className="h-5 w-5 text-rose-900" />
        )}

        <div>
          <p className="font-jp text-[10px] font-black uppercase text-zinc-800">通知 // TRANSMISSION</p>
          <p className="font-mono text-sm font-bold tracking-tight">{message}</p>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="ml-2 p-1 text-black hover:bg-black/10 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
