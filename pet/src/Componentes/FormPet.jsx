import React from 'react'

export default function FormPetCadastro(props) {

  return (
      <div>
          <form method="post" onSubmit={props.add}>
              <div>
                  <label>Nome: </label>
                  <input type="text" name="nome" value={props.cadastro.nome} onChange={props.onChange}/>
              </div>
              <div>
                  <label>Idade: </label>
                  <input type="text" name="idade" value={props.cadastro.idade} onChange={props.onChange}/>
              </div>
              <div>
                  <label>Raca: </label>
                  <input type="text "name="raca" value={props.cadastro.raca} onChange={props.onChange}/>
              </div>
              <div>
                  <label>Tamanho: </label>
                  <input type="text "name="tamanho" value={props.cadastro.tamanho} onChange={props.onChange}/>
              </div>
              <div>
                  <label>Nome do dono: </label>
                  <input type="text "name="nomeDono" value={props.cadastro.nomeDono} onChange={props.onChange}/>
              </div>

              <div>
                  <label>Tele dono:</label>
                  <input type="text "name="telefoneDono" value={props.cadastro.telefoneDono} onChange={props.onChange}/>
              </div>
              <div>
                  <label>Img: </label>
                  <input type="file"name="imagemPet" value={props.cadastro.imagemPet} onChange={props.onChange}/>
              </div> 
              <div>
                  <label>Obs: </label>
                  <textarea name="observacoes" cols="30" rows="5" value={props.cadastro.observaçoes} onChange={props.onChange} />
              </div> 
              <div> 
                  <button type="submit">Cadastrar</button>
              </div>
          </form>
      </div>
    )
  }