function Toast({ message }) {
  return (
    <div className="fixed top-20 right-5 bg-black text-white px-4 py-2 rounded shadow-lg animate-slide-in z-50">
      {message}
    </div>
  );
}

export default Toast;
