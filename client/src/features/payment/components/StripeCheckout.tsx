import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import confetti from 'canvas-confetti';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../cart/cartSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Public Test Key from Stripe Documentation
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

interface PaymentFormProps {
  total: number;
}

const PaymentForm = ({ total }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    // Simulate network delay for "processing"
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real app, we would create a PaymentIntent on the backend here.
    // Since we are mocking the backend part for this demo:
    
    // Simulate Success
    setProcessing(false);
    dispatch(clearCart());
    
    // Trigger Confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#846358', '#bfa094', '#fdf8f6', '#43302b']
    });

    alert('¡Pago realizado con éxito! Gracias por tu compra.');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-3xl shadow-lg border border-coffee-100 space-y-6">
      <h3 className="text-xl font-bold text-coffee-900 mb-4">Detalles de Pago</h3>
      
      <div className="p-4 border border-coffee-200 rounded-xl bg-coffee-50/50">
        <CardElement options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }} />
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}

      <div className="flex justify-between items-center pt-4 border-t border-coffee-100">
        <span className="text-lg font-medium text-coffee-600">Total a Pagar:</span>
        <span className="text-2xl font-black text-coffee-900">${total.toFixed(2)}</span>
      </div>

      <button 
        type="submit" 
        disabled={!stripe || processing}
        className="w-full bg-coffee-900 text-white py-4 rounded-2xl font-bold hover:bg-coffee-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl active:scale-95"
      >
        {processing ? 'Procesando...' : 'Pagar Ahora'}
      </button>
    </form>
  );
};

export const StripeCheckout = ({ total }: { total: number }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm total={total} />
    </Elements>
  );
};
