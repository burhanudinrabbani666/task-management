import { Link, useParams } from "react-router";

export function HabitDetail() {
  const params = useParams();
  const { habitId } = params;
  return (
    <div className="">
      <Link to="/"> back to Home</Link>
      <div>ID : {habitId}</div>
    </div>
  );
}
