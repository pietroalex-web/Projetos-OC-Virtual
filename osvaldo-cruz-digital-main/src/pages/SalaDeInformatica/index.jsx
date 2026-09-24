import Image from 'next/image';
import styles from './CardInformatica.module.css';

export default function CardInformatica() {
  return (
    <div className={styles.container}>
      {/* Imagem otimizada do Next.js */}
      <Image 
        src="/foto-laboratorio.jpg" 
        alt="Laboratório de Informática" 
        width={900} 
        height={500} 
        priority
        className={styles.bgImage}
      />

      {/* Card de Texto Sobreposto */}
      <div className={styles.overlayCard}>
        <div className={styles.cardHeader}>
          <span className={styles.userIcon}></span>
        </div>
        <p>
          <strong>Informática - Lucas:</strong> Boa tarde, como vocês estão? 
          Então, a informática é importante para que prepare cada vez mais os alunos 
          para o futuro, já que os empregos precisam do mínimo de tecnologia.
        </p>
      </div>
    </div>
  );
}