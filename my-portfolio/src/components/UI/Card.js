import classes from "./Card.module.scss";

const Card = ({ heading, emoji, detail }) => {
  return (
    <div className={classes.card}>
      {emoji}
      <span className={classes.heading}>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
