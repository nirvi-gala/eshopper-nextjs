import styles from './Button.module.css';

export interface IButton {
  sampleTextProp: string;
}

const Button: React.FC<IButton> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default Button;