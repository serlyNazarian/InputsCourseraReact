import Bowl from "./bowl";

function Puppy(props) {
  return (
    <div>
      {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
    </div>
  );
}

export default Puppy;
