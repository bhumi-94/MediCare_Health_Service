import React from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Logo() {

  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className="flex items-center gap-2 border-[#1a73e8]">
      <div className="w-8 h-8  bg-[#1a73e8] rounded-xl flex items-center justify-center">
        <Heart className="w-4 h-4 text-white-800 fill-white" />
      </div>

      <span className="text-xl font-bold">
        Medi<span className="text-primary">Care</span>
      </span>
    </button>
  );
}

export default Logo;