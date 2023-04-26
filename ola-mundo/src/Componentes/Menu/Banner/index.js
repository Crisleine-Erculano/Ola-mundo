import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.jpg'

export default function Banner() {
   return (
      <div className={styles.banner}>
         <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
               Olá, Mundo!
            </h1>
            <p className={styles.paragrafo}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
         </div>
         <div className={styles.imagens}>
            <img className={styles.circuloColorido}
               src={circuloColorido}
               alt='Foto de um círculo colorido'
               aria-hidden={true}
            />
            
            <img className={styles.minhaFoto}
               src={minhaFoto}
               alt='Foto de uma pessoa'
            />

         </div>
      </div>
   )
}