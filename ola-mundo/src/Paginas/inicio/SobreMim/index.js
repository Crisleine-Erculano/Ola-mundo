import styles from './SobreMim.module.css'

import PostModelo from 'Componentes/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/minha-foto.jpg'

export default function SobreMim() {
   return (
      <PostModelo
         fotoCapa={fotoCapa}
         titulo="Sobre Mim">
         <h3 className={styles.subtitulo}>
            Olá, eu sou a Crisleine!
         </h3>
         <img className={styles.fotoSobreMim }
            src={fotoSobreMim}
            alt="Foto da Crisleine "
         />
         <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum ex sodales ultrices bibendum. Donec sodales nunc nec imperdiet commodo. Pellentesque laoreet rhoncus fermentum. In hac habitasse platea dictumst. Nullam dolor dolor, elementum sit amet pulvinar id, convallis a magna. Praesent luctus, felis non porttitor blandit, nisi odio rutrum lorem, eget iaculis libero arcu in nulla. Maecenas sodales urna massa, eu congue ipsum aliquet sed. Sed accumsan mi pellentesque dignissim iaculis. In fermentum libero velit, et laoreet lacus pretium sit amet. Phasellus in velit mi. Pellentesque ut tellus maximus, hendrerit ipsum venenatis, volutpat libero. Sed sed risus non mi dapibus egestas sed volutpat enim. Mauris et fermentum metus, eget tempus massa. Ut vulputate quis purus in euismod. Vivamus ac lorem id nibh cursus aliquet ut nec magna.

         </p>
         <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum ex sodales ultrices bibendum. Donec sodales nunc nec imperdiet commodo. Pellentesque laoreet rhoncus fermentum. In hac habitasse platea dictumst. Nullam dolor dolor, elementum sit amet pulvinar id, convallis a magna. Praesent luctus, felis non porttitor blandit, nisi odio rutrum lorem, eget iaculis libero arcu in nulla. Maecenas sodales urna massa, eu congue ipsum aliquet sed. Sed accumsan mi pellentesque dignissim iaculis. In fermentum libero velit, et laoreet lacus pretium sit amet. Phasellus in velit mi. Pellentesque ut tellus maximus, hendrerit ipsum venenatis, volutpat libero. Sed sed risus non mi dapibus egestas sed volutpat enim. Mauris et fermentum metus, eget tempus massa. Ut vulputate quis purus in euismod. Vivamus ac lorem id nibh cursus aliquet ut nec magna.

         </p>
         <p className={styles.paragrafo}>Pellentesque ut tellus maximus, hendrerit ipsum venenatis, volutpat libero. Sed sed risus non mi dapibus egestas sed volutpat enim. Mauris et fermentum metus, eget tempus massa. Ut vulputate quis purus in euismod. Vivamus ac lorem id nibh cursus aliquet ut nec magna.

         </p>
      </PostModelo>
   )
}