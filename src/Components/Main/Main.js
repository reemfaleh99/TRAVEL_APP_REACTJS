import useFetch from "../../hooks/useFetch";
import Cards from "./Cards";
const Main = () => {
  const { isPending, data } = useFetch("http://localhost:8000/main");
  return (
    <section className="main container">
      <div className="secTitle">
        <h3 className="title">Most Visited Destinstions</h3>
      </div>
      {data && <Cards data={data} />}
    </section>
  );
};

export default Main;
