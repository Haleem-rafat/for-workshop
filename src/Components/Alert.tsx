interface AlertProps {
  children: string | string[];
}
export default function Alert({ children }: AlertProps) {
  // ex. for children
  return <div className="bg-green-400 text-white p-3 m-10">{children}</div>;
}
