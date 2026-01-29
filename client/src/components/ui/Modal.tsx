import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  title?: string;
  hideCloseButton?: boolean;
}

export const Modal = ({ isOpen, onClose, children, title, hideCloseButton = false }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        ref={modalRef}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative animate-in zoom-in-95 duration-200 border border-coffee-100 overflow-hidden"
      >
        {(title || !hideCloseButton) && (
          <div className="flex justify-between items-center p-6 border-b border-coffee-100 bg-coffee-50/30">
            {title && <h3 className="text-xl font-bold text-coffee-900">{title}</h3>}
            {!hideCloseButton && onClose && (
              <button 
                onClick={onClose}
                className="text-coffee-400 hover:text-coffee-600 hover:bg-coffee-100 p-2 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};
