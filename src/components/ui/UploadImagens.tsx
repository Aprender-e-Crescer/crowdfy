import {CloudUpload} from 'lucide-react'

export function Uploadimagens() {
      return(

      <div className="flex-col">
            <CloudUpload className="h-[46px] w-[46px]" />
            <h1 className="ml-6">
            Clique para enviar ou solte sua foto aqui
            </h1>
            <h2 className="ml-12">
            SVG, PNG, JPG ou GIF (max.1MB)
            </h2>
      </div>
      
)
}