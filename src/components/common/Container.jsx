function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-[92%] max-w-[1200px] ${className}`}>
      {children}
    </div>
  );
}

export default Container;
