import React from "react";
import { Heart } from "lucide-react";

function Logo() {
  return (
    <button className="flex items-center gap-2">
      <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
        <Heart className="w-5 h-5 text-white fill-white" />
      </div>

      <span className="text-xl font-bold">
        Medi<span className="text-primary">Care</span>
      </span>
    </button>
  );
}

export default Logo;