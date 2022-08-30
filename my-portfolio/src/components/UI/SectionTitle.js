import classes from "./SectionTitle.module.css";

const SectionTitle = ({ children }) => {
  return <h1 className={classes.title}>{children}</h1>;
};

export default SectionTitle;
