import { Modal } from '../../../components/ui/Modal';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PaymentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentSuccessModal = ({ isOpen, onClose }: PaymentSuccessModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} hideCloseButton>
      <div className="flex flex-col items-center text-center space-y-6 py-4">
        {/* Animated Check Icon */}
        <div className="w-24 h-24 relative">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-25"></div>
          <div className="relative w-full h-full bg-green-500 rounded-full flex items-center justify-center shadow-xl">
            <svg 
              className="w-12 h-12 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="3"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M5 13l4 4L19 7" 
                className="animate-[draw_0.6s_ease-in-out_forwards]"
                style={{ strokeDasharray: 60, strokeDashoffset: 60 }}
              />
            </svg>
            <style>{`
              @keyframes draw {
                to { stroke-dashoffset: 0; }
              }
            `}</style>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-black text-coffee-900 tracking-tight">
            {t("payment.success.title")}
          </h2>
          <p className="text-coffee-600 font-medium">
            {t("payment.success.subtitle")} <br/> 
            <span className="text-sm text-coffee-400">
              {t("payment.success.details")}
            </span>
          </p>
        </div>

        <div className="w-full pt-4">
          <button 
            onClick={onClose}
            className="w-full bg-coffee-900 text-white py-4 rounded-2xl font-bold hover:bg-coffee-800 transition-all flex items-center justify-center gap-2 group shadow-lg"
          >
            {t("payment.success.back_to_home")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </Modal>
  );
};
