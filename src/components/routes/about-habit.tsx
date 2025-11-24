import { Link, useParams } from "react-router";

export function HabitDetail() {
  const params = useParams();
  console.log(params);

  return (
    <div className="">
      <Link to="/"> back to Home</Link>
      <div>Hello</div>
    </div>
  );
}
