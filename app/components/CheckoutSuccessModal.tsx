import React from 'react';
import Image from 'next/image';

interface CheckoutSuccessModalProps {
  open: boolean;
  onClose: () => void;
  items: Array<{ id: string; name: string; image: string; price: number; quantity: number }>;
  grandTotal: number;
}

const CheckoutSuccessModal: React.FC<CheckoutSuccessModalProps> = ({ open, onClose, items, grandTotal }) => {
  if (!open) return null;
  const firstItem = items[0];
  const otherCount = items.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 sm:p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative flex flex-col items-start">
        {/* Checkmark icon */}
        <div className="mb-6">
          <Image src="/CheckMark.svg" alt="Order Success" width={64} height={64} />
        </div>
        <h2 className="text-2xl font-bold text-black mb-2 text-left">THANK YOU<br />FOR YOUR ORDER</h2>
        <p className="text-gray-500 text-base mb-6 text-left">You will receive an email confirmation shortly.</p>
        {/* Order summary */}
        <div className="flex flex-col md:flex-row w-full rounded-xl overflow-hidden mb-8 bg-gray-100">
          <div className="flex-1 p-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#f1f1f1] rounded-lg w-12 h-12 flex items-center justify-center">
                <Image src={firstItem.image} alt={firstItem.name} width={48} height={48} className="object-contain w-10 h-10" />
              </div>
              <div className="flex-1">
                <div className="font-bold uppercase text-sm mb-1">{firstItem.name}</div>
                <div className="text-gray-400 text-sm font-semibold">${firstItem.price.toLocaleString()}</div>
              </div>
              <div className="text-gray-400 font-bold text-base">x{firstItem.quantity}</div>
            </div>
            {otherCount > 0 && (
              <div className="text-gray-400 text-xs font-semibold border-t pt-2 text-center">and {otherCount} other item(s)</div>
            )}
          </div>
          <div className="bg-black flex flex-col justify-end items-start p-4 md:min-w-[140px] md:w-auto w-full">
            <span className="text-gray-400 text-xs font-bold uppercase mb-2">Grand Total</span>
            <span className="text-xl font-bold text-white">${grandTotal.toLocaleString()}</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 rounded-lg text-base uppercase tracking-widest transition-colors duration-300 cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CheckoutSuccessModal; 