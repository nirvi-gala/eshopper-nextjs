import styles from './__store__.module.css';

export interface I__store__ {
  sampleTextProp: string;
}

const __store__: React.FC<I__store__> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default __store__;