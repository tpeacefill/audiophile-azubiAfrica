'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '../store/cartStore';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CheckoutSuccessModal from '../components/CheckoutSuccessModal';
import { z } from 'zod';

const checkoutSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  address: z.string().min(1, 'Address is required'),
  zipCode: z.string().min(1, 'ZIP Code is required'),
  city: z.string().min(1, 'City is required'),
  country: z.string().min(1, 'Country is required'),
  paymentMethod: z.enum(['e-money', 'cash']),
  eMoneyNumber: z.string(),
  eMoneyPin: z.string(),
}).refine(
  (data) => data.paymentMethod !== 'e-money' || data.eMoneyNumber.trim() !== '',
  { message: 'e-Money Number is required', path: ['eMoneyNumber'] }
).refine(
  (data) => data.paymentMethod !== 'e-money' || data.eMoneyPin.trim() !== '',
  { message: 'e-Money PIN is required', path: ['eMoneyPin'] }
);

const CheckoutPage = () => {
  const router = useRouter();
  const { items, getTotal, removeAll } = useCartStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: 'e-money',
    eMoneyNumber: '',
    eMoneyPin: ''
  });
  const [successOpen, setSuccessOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: typeof formData) => {
    const result = checkoutSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      return fieldErrors;
    }
    return {};
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const fieldError = validate(formData);
    if (fieldError[name]) {
      setErrors(prev => ({ ...prev, [name]: fieldError[name] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    removeAll();
    router.push('/');
  };

  const handleContinueAndPay = (e: React.MouseEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSuccessOpen(true);
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
    removeAll();
    router.push('/');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-24 mt-14">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => router.back()}
            className="text-gray-500 hover:text-black text-sm font-light mb-8 cursor-pointer"
          >
            Go Back
          </button>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form Section */}
            <form onSubmit={handleSubmit} className="flex-1 bg-white rounded-lg p-8 shadow-sm mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-10 tracking-wide">CHECKOUT</h2>
              {/* Billing Details */}
              <div className="mb-10">
                <h3 className="text-[#D87D4A] uppercase tracking-widest text-sm font-bold mb-6">Billing Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent text-sm focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent text-sm focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent text-sm focus:outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>
              {/* Shipping Info */}
              <div className="mb-10">
                <h3 className="text-[#D87D4A] uppercase tracking-widest text-sm font-bold mb-6">Shipping Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent text-sm focus:outline-none ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent text-sm focus:outline-none ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent text-sm focus:outline-none ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent text-sm focus:outline-none ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                  </div>
                </div>
              </div>
              {/* Payment Details */}
              <div>
                <h3 className="text-[#D87D4A] uppercase tracking-widest text-sm font-bold mb-6">Payment Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Payment Method</label>
                    <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                      <label className={`flex items-center border rounded-lg px-4 py-2 cursor-pointer ${formData.paymentMethod === 'e-money' ? 'border-[#D87D4A]' : 'border-gray-300'}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="e-money"
                          checked={formData.paymentMethod === 'e-money'}
                          onChange={handleInputChange}
                          className="accent-[#D87D4A] mr-2"
                        />
                        e-Money
                      </label>
                      <label className={`flex items-center border rounded-lg px-4 py-2 cursor-pointer ${formData.paymentMethod === 'cash' ? 'border-[#D87D4A]' : 'border-gray-300'}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={formData.paymentMethod === 'cash'}
                          onChange={handleInputChange}
                          className="accent-[#D87D4A] mr-2"
                        />
                        Cash on Delivery
                      </label>
                    </div>
                  </div>
                  {formData.paymentMethod === 'e-money' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-2">e-Money Number</label>
                        <input
                          type="text"
                          name="eMoneyNumber"
                          value={formData.eMoneyNumber}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent text-sm focus:outline-none ${errors.eMoneyNumber ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.eMoneyNumber && <p className="text-red-500 text-xs mt-1">{errors.eMoneyNumber}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-2">e-Money PIN</label>
                        <input
                          type="password"
                          name="eMoneyPin"
                          value={formData.eMoneyPin}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:border-transparent text-sm focus:outline-none ${errors.eMoneyPin ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.eMoneyPin && <p className="text-red-500 text-xs mt-1">{errors.eMoneyPin}</p>}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-10">
              </div>
            </form>
            {/* Summary Section */}
            <div className="w-full lg:w-[380px] flex-shrink-0">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-lg font-bold mb-8 tracking-widest uppercase">Summary</h3>
                <div className="space-y-6 mb-8">
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
                      <div className="text-gray-400 font-bold text-base">x{item.quantity}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-bold uppercase tracking-widest">Total</span>
                    <span className="text-lg font-bold">${getTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-bold uppercase tracking-widest">Shipping</span>
                    <span className="font-bold">$50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-bold uppercase tracking-widest">VAT (included)</span>
                    <span className="font-bold">${(getTotal() * 0.2).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <span className="text-gray-400 font-bold uppercase tracking-widest">Grand Total</span>
                    <span className="text-xl font-bold text-[#D87D4A]">${(getTotal() + 50).toLocaleString()}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 rounded-lg text-base uppercase tracking-widest transition-colors duration-300 cursor-pointer"
                  onClick={handleContinueAndPay}
                >
                  Continue & Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <CheckoutSuccessModal open={successOpen} onClose={handleSuccessClose} items={items} grandTotal={getTotal() + 50} />
    </>
  );
};

export default CheckoutPage; 