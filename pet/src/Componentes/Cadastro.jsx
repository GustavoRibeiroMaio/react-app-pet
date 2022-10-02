import React,{ useState } from 'react'
import FormPetCadastro from '../Components/FormPetCadastro'
export default function PetCadastro() {

    const [cadastro, setCadastro] = useState([
      {
        "nome" : "Geraldo",
        "idade" : "8 anos",
        "raca":"Galgo italiano",
        "tamanho":"1 metro e meio",
        "nomeDono":"Gustavo",
        "telefoneDono":"11 95958-8206",
        "imagemPet":"im",
        "observacoes":"Pokas Idea"
      }
    ])

}