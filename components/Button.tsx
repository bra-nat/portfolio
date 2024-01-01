const Button = ({ label, extraClasses }: { label: string, extraClasses?: string }) => {
  return (
    <button className={`${extraClasses} bg-p_primary text-primary text-sm uppercase `} >
      {label}
    </button>
  );
};

export default Button;
