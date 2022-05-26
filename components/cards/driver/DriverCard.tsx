import Image from 'next/image';
import styles from './DriverCard.module.css';

export interface IDriverCard {
  id: string;
  name: string;
  phone: string;
  email: string;
  birthday: string;
}

const DriverCard: React.FC<IDriverCard> = ({
  id,
  name,
  phone,
  email,
  birthday,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <span className={`${styles.id}`}>Driver ID {id}</span>
        </div>
        <div className={styles.card__body}>
          <div className={styles.user__image}>
            <Image
              src="/profile.svg"
              alt="user__image"
              className={styles.user__image}
              width="70"
              height="70"
            />
          </div>

          <div className={styles.user__info}>
            <span>Nama Driver</span>
            <p>{name}</p>

            <span>Telepon</span>
            <p>{phone}</p>

            <span>Email</span>
            <p>{email}</p>

            <span>Tanggal Lahir</span>
            <p>{birthday}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
