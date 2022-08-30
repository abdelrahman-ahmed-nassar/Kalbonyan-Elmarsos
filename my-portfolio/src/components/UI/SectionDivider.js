import classes from "./SectionDivider.module.css";
const SectionDivider = ({ idName }) => {
  return (
    <div className={classes.divider}>
      <div className={classes["divider__line"]} id={idName}></div>
    </div>
  );
};

export default SectionDivider;
