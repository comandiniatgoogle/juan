import JuanCard from "./UI/layout/JuanCard";

const Welcome = (props) => {
  return (
    <div>
      <JuanCard>
        Hello my name is {props.name} {props.surname} and I am {props.status}!
      </JuanCard>
      {/* <br />
      <JuanCard>
        <ByeBye />
      </JuanCard> */}
    </div>
  );
};

const ByeBye = () => {
  return <div>Bye Bye</div>;
};

export default Welcome;
