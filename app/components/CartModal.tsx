import React from 'react';
import Image from 'next/image';
import {  Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useRouter } from 'next/navigation';

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const { items, removeAll, updateQuantity, getTotal } = useCartStore();
  const router = useRouter();
  const removeItem = useCartStore((state) => state.removeItem);

  const handleBrowseCategories = () => {
    onClose();
    router.push('/');
  };

  const handleCheckout = () => {
    onClose();
    router.push('/checkout');
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/30"
        onClick={onClose}
      />
      <div
        className="fixed top-24 left-1/2 -translate-x-1/2 w-[95vw] max-w-xs p-4
        md:top-24 md:right-4 md:left-auto md:translate-x-0 md:w-[340px] md:max-w-md md:p-6
        lg:top-32 lg:right-56 lg:w-[380px] lg:p-8
        bg-white rounded-2xl shadow-xl z-50 border border-gray-100"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-medium tracking-widest uppercase">Cart ({items.length})</h2>
          {items.length > 0 && (
            <button 
              onClick={removeAll} 
              className="text-gray-400 hover:text-black text-sm underline flex items-center gap-1 transition-colors duration-200"
            >
              <Trash2 size={16} />
              Remove all
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            {/* Animated Cart Icon Container */}
            <div className="relative mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-full p-8 border border-gray-200 shadow-sm">
                <ShoppingBag size={48} className="text-gray-300 group-hover:text-gray-400 transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center mb-8 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Discover our amazing products and add them to your cart to get started
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 w-full">
              <button 
                onClick={onClose}
                className="w-full bg-gradient-to-r from-[#D87D4A] to-[#E88B57] hover:from-[#FBAF85] hover:to-[#D87D4A] text-white cursor-pointer font-bold py-4 rounded-lg text-base uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                Continue Shopping
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                className="w-full border-2 border-gray-200 hover:border-gray-300 cursor-pointer text-gray-600 hover:text-gray-800 font-medium py-3 rounded-lg text-sm uppercase tracking-wider transition-all duration-300 hover:bg-gray-50"
                onClick={handleBrowseCategories}
              >
                Browse Categories
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-2 h-2 bg-orange-200 rounded-full opacity-40"></div>
            <div className="absolute bottom-12 left-6 w-1 h-1 bg-orange-300 rounded-full opacity-60"></div>
            <div className="absolute top-16 left-12 w-1.5 h-1.5 bg-orange-100 rounded-full opacity-50"></div>
          </div>
        ) : (
          <>
            <div className="space-y-6 max-h-72 overflow-y-auto mb-8">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="bg-[#f1f1f1] rounded-lg w-16 h-16 flex items-center justify-center">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      width={64} 
                      height={64} 
                      className="object-contain w-12 h-12" 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold uppercase text-sm mb-1">{item.name}</div>
                    <div className="text-gray-400 text-sm font-semibold">${item.price.toLocaleString()}</div>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded">
                    <button
                      className="px-2 py-1 text-lg text-gray-400 hover:text-black disabled:opacity-50 transition-colors duration-200"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >-</button>
                    <span className="px-3 text-base font-semibold">{item.quantity}</span>
                    <button
                      className="px-2 py-1 text-lg text-gray-400 hover:text-black transition-colors duration-200"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  </div>
                  <button
                    className="ml-2 text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
                    title="Remove item"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-gray-400 font-bold uppercase tracking-widest">Total</span>
              <span className="text-2xl font-medium">${getTotal().toLocaleString()}</span>
            </div>
            <button 
              onClick={handleCheckout} 
              className="w-full bg-gradient-to-r from-[#D87D4A] to-[#E88B57] hover:from-[#FBAF85] hover:to-[#D87D4A] text-white cursor-pointer font-bold py-4 rounded-lg text-base uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CartModal;