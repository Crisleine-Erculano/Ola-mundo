import { useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostModelo from "Componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Post() {
   const parametros = useParams();
   const post = posts.find((post) => {
      return post.id === Number(parametros.id)
   })
   console.log(post)

   return (
      <PostModelo
         fotocapa={`/assets/Post/${post.id}/capa.png`}
         titulo={post.titulo}
      >
         <ReactMarkdown>
            {post.texto}
         </ReactMarkdown>

      </PostModelo>
   )
}