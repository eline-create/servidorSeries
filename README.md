# servidorSeries


Este repositório foi criado para incluir um projeto prático realizado referente a atividade individual da Semana 11/18 do curso de Desenvolvedor Web Back-End realizado pela [Reprograma](https://reprograma.com.br/) em parceria com o [Porto Digital/Mi.I.N.As](https://portodigital.org/119/38006).

Nas ultimas duas semanas criei dois repositórios referentes a semana de projeto prático [Projeto 1](https://github.com/eline-create/projeto-pratico) e [Projeto 2](https://github.com/eline-create/projeto-pratico2) que obdeceram os mesmo parâmetros deste aqui.

Neste aqui, também faremos um CRUD completo, deixando o código mais limpo e obdecendo a alguns desafios. A ideia é que possamos fazer um projeto com mais solicitações e possamos testar as habilidades de desenvolvimento de códigos mediante possíveis solicitações.

<h2>O que faremos</h2>


Bem, o repositório referente a esta semana de aula está no [GitHub](https://github.com/reprograma/on7-porto-s11-projeto-revisao) da {Reprograma}. Lá está todo passo a passo da atividade inclusive as sugestões de temas propostos pela professora.

Este repositório será um servidor de Series, como o nome já diz.

1. Será montada uma API em JSON sobre séries, nela conterá a seguinte estrutura:

```json

{ "id": 1,
 "name": "Series Name",
 "genre": "Series genre",
 "synopsis": "Short history about the serie",
 "liked": "If you liked the serie",
 "seasons": "How many seasons the serie has?" [
    { 
      "id": 1,
      "code": "number of season",
      "episodes": "How many episodes in this season" [
        { 
           "id": "episode id",
           "code": "Number of de episode",
           "name": "episode name",
           "wacthed": "status about the episode"
        }
        ]
    }
]}
```

---

#### Contratos que deverão ser entregues

| Verbo        | Recurso                | Descrição                             |
| ------------ | ---------------------- | ------------------------------------- |
| GET          | `/series`              | Retornar todas as séries              |
| GET          | `/series/:id`          | Retornar apenas uma série específica  |
| POST         | `/series`              | Cadastrar nova série                  |
| PUT          | `/series/:id`          | Atualizar uma série específica        |
| DELETE       | `/series/:id`          | Deletar uma série específica          |
| PATCH        | `/series/:id/liked`    | Atualizar se gostou da série ou não   |

---

#### Contratos para ir ao infinito e além

Nossa API de séries contém várias temporadas e essas contém vários episódios. Podemos criar mais algumas rotas para trabalhar com essas temporadas e episódios:

| Verbo          | Recurso                                                   | Descrição                               |
| :------------  | :-------------------------------------------------------- | :-------------------------------------  |
| POST           | `/series/:id/season/:seasonId/episode`                    | Cadastrar novo episódio na temporada, onde :id é o id da série e :seasonId é o id da temporada |
| POST           | `/series/:id/season`                                      | Cadastrar nova temporada na série, onde o :id é o id da série                                  |
| DELETE         | `/series/:id/season/:seasonId`                            | Deletar uma temporada específica, onde :id é o id da série e :seasonId é o id da temporada     |
| DELETE         | `/series/:id/season/:seasonId/episode/:episodeId`         | Deletar um episódio específico na temporada, onde :id é o id da série, :seasonId é o id da temporada e :episodeId é o id do episódio  |
| PATCH          | `/series/:id/season/:seasonId/episode/:episodeId/watched` | Atualizar se o episódio foi assistido ou não, onde :id é o id da série, :seasonId é o id da temporada e :episodeId é o id do episódio |

---


Para saber mais sobre escrever markdown visite o [site Pipz Academy](https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open).

PALAVRAS-CHAVES: Javascript, Node.js, API, JSON, Reprograma, Porto Digital/MINAS.
