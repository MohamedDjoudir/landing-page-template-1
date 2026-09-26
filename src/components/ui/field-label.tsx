interface FieldLabelProps {
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FieldLabel({ htmlFor, required, children }: FieldLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm uppercase tracking-widest text-white/70 mb-2"
    >
      {children}
      {required && (
        <span className="ms-1 text-destructive" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}
