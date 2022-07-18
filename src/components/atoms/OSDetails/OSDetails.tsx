import styles from './OSDetails.module.scss';

type OSDetailsPropsT = {
  clientName: string;
  pieces: { count: number, total: number};
};


const OSDetails = ({clientName, pieces}: OSDetailsPropsT
) => {
  return (
    <section className={styles.osDetailsContainer}>
      <div className={styles.osDetails}>
        <span>Cliente:</span>
        <span>{clientName}</span>
      </div>
      <div className={styles.osDetails}>
        <span>Piezas Pinchadas:</span>
        <span>{pieces.count} de {pieces.total}</span>
      </div>
    </section>
  );
}

export default OSDetails;

