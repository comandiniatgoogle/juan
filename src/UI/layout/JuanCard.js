import classes from "./JuanCard.module.css";

const JuanCard = (props) => {
  return <div className={classes.juanCard}>{props.children}</div>;
};

export default JuanCard;
