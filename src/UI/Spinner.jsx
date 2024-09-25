function Spinner() {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="w-24 h-24 rounded-full animate-spin spinner-gradient"></div>
  
        {/* Add custom styles for the gradient and mask */}
        <style jsx>{`
          .spinner-gradient {
            background: conic-gradient(#0000 10%, var(--color-light--2));
            -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
          }
        `}</style>
      </div>
    );
  }
  
  export default Spinner;
  