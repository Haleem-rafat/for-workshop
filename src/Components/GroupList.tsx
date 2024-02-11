import { useState } from "react";


// expamle for props with interface
interface GroupListProps {
  title: string;
  teams: string[];
  funSelct: React.Dispatch<React.SetStateAction<string>>;
}

export default function GroupList({ title, teams, funSelct }: GroupListProps) {


// example for use state
  const [select, setSelcted] = useState<number>(0);

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {teams.length === 0 && "no, data"}
        {teams.map((item, index) => (
          <li
            onClick={() => {
              setSelcted(index);
              funSelct(item);
            }}
            key={item}
            className={
              select === index
                ? "bg-blue-400 text-white border rounded-md px-4 py-3 my-2"
                : "border rounded-md px-4 py-3 my-2 "
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
