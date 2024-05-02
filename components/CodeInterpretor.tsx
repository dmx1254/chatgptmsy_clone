import React from "react";
import { Clipboard } from "lucide-react";

const CodeInterpretor = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl border-[2px] border-[#2F2F2F] rounded-[6px] my-4">
      <div className="flex items-center justify-between bg-[#2F2F2F] w-full p-2">
        <span className="text-sm">python</span>
        <div className="flex items-center gap-1">
          <Clipboard size={14} />
          <span className="text-sm">Copy code</span>
        </div>
      </div>
      <div className="flex w-full h-full p-3 bg-[#0d0d0d]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        temporibus iure fugit id maiores quo quaerat quibusdam neque modi
        molestias.
      </div>
      <div></div>
    </div>
  );
};

export default CodeInterpretor;
