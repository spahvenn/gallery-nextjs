import { toast, ToastOptions } from "react-toastify";

const defaultOptions = {
  autoClose: 4000,
};

export function showSuccessMsg(msg: string, options: ToastOptions = {}) {
  toast.success(msg, { ...defaultOptions, ...options });
}

export function showInfoMsg(msg: string, options: ToastOptions = {}) {
  toast.info(msg, { ...defaultOptions, ...options });
}
