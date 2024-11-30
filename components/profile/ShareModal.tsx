"use client";

import { X, Facebook, Mail } from "lucide-react";
import Image from "next/image";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  if (!isOpen) return null;

  const pageLink = "http://www.therapist-swetha.com/profile/view";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pageLink);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Share</h2>
          <button onClick={onClose} className="p-1">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-center gap-12 mb-8">
            <button className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Facebook className="w-6 h-6 text-[#1877F2]" />
              </div>
              <span className="text-sm text-gray-600">Facebook</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Image 
                  src="/whatsapp.svg" 
                  alt="WhatsApp" 
                  width={24} 
                  height={24}
                />
              </div>
              <span className="text-sm text-gray-600">WhatsApp</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Image 
                  src="/twitter.svg" 
                  alt="Twitter" 
                  width={24} 
                  height={24}
                />
              </div>
              <span className="text-sm text-gray-600">Twitter</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Mail className="w-6 h-6 text-gray-600" />
              </div>
              <span className="text-sm text-gray-600">Mail</span>
            </button>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Page Link</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={pageLink}
                readOnly
                className="flex-1 px-4 py-2 bg-gray-100 rounded-lg text-sm"
              />
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-[#29B6F6] text-white rounded-lg text-sm hover:bg-blue-400 transition-colors"
              >
                Copy link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}