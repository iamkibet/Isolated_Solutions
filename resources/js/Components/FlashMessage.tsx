import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

interface FlashProps {
    success?: string;
    error?: string;
    info?: string;
    warning?: string;
}

export default function FlashMessage() {
    const page = usePage<{ flash?: FlashProps }>();
    const flash = page.props.flash;
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info' | 'warning'; text: string } | null>(null);

    useEffect(() => {
        if (flash?.success) {
            setMessage({ type: 'success', text: flash.success });
            setVisible(true);
        } else if (flash?.error) {
            setMessage({ type: 'error', text: flash.error });
            setVisible(true);
        } else if (flash?.info) {
            setMessage({ type: 'info', text: flash.info });
            setVisible(true);
        } else if (flash?.warning) {
            setMessage({ type: 'warning', text: flash.warning });
            setVisible(true);
        }

        if (flash?.success || flash?.error || flash?.info || flash?.warning) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [flash]);

    if (!visible || !message) {
        return null;
    }

    const styles = {
        success: {
            bg: 'bg-green-50',
            border: 'border-green-200',
            text: 'text-green-800',
            icon: FaCheckCircle,
            iconColor: 'text-green-600',
        },
        error: {
            bg: 'bg-red-50',
            border: 'border-red-200',
            text: 'text-red-800',
            icon: FaExclamationCircle,
            iconColor: 'text-red-600',
        },
        info: {
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            text: 'text-blue-800',
            icon: FaInfoCircle,
            iconColor: 'text-blue-600',
        },
        warning: {
            bg: 'bg-yellow-50',
            border: 'border-yellow-200',
            text: 'text-yellow-800',
            icon: FaExclamationCircle,
            iconColor: 'text-yellow-600',
        },
    };

    const style = styles[message.type];
    const Icon = style.icon;

    return (
        <div className="fixed top-4 right-4 z-50 max-w-md animate-slide-in">
            <div
                className={`${style.bg} ${style.border} ${style.text} border-l-4 p-4 rounded-lg shadow-lg`}
                role="alert"
            >
                <div className="flex items-start">
                    <Icon className={`${style.iconColor} w-5 h-5 mr-3 flex-shrink-0 mt-0.5`} />
                    <div className="flex-1">
                        <p className="font-semibold text-sm">{message.text}</p>
                    </div>
                    <button
                        onClick={() => setVisible(false)}
                        className={`${style.text} hover:opacity-70 ml-3`}
                    >
                        <FaTimes className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}


