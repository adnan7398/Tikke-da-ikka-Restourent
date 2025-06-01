import React from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const CheckoutSuccess: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6 text-green-500">
            <CheckCircle size={64} className="mx-auto" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your order. We'll start preparing your delicious food right away.
            You'll receive a confirmation email with your order details shortly.
          </p>
          <div className="space-y-4">
            <NavLink
              to="/menu"
              className="block bg-red-800 text-white py-3 rounded hover:bg-red-700 transition"
            >
              Order More Food
            </NavLink>
            <NavLink
              to="/"
              className="block text-gray-600 hover:text-red-800 transition"
            >
              Return to Home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;