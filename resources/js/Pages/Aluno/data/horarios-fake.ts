interface Aula {
  hora: string,
  materia: string,
  sigla: string,
  prof: string,
  sala: string
}

type Data = {
  "dia": string,
  "matutino"?: Aula[],
  "mat/vesp"?: Aula[],
  "vespertino"?: Aula[],
  "vesp/not"?: Aula[],
  "noturno"?: Aula[]
}[]


export const data: Data = [
  // segunda
  {
    "dia": "segunda-feira",
    "matutino": [
      {
        hora: "09:30 - 13:00",
        materia: "Comunicação e Expressão",
        sigla: "COM036",
        prof: "Helena Damelio",
        sala: "103"
      }
    ]
  },

  // terça
  {
    "dia": "terça-feira",
    "matutino": [
      {
        hora: "09:30 - 11:10",
        materia: "Contabilidade",
        sigla: "CON005",
        prof: "Maria Irene",
        sala: "207"
      },
      {
        hora: "11:20 - 13:00",
        materia: "Inglês II",
        sigla: "ING152",
        prof: "Vanderlei Souza",
        sala: "106"
      },
    ]
  },

  // quarta
  {
    "dia": "quarta-feira",
    "matutino": [
      {
        hora: "09:30 - 13:00",
        materia: "Cálculo",
        sigla: "CAL014",
        prof: "Luciano Condori",
        sala: "303"
      }
    ]
  },

  // quinta
  {
    "dia": "quinta-feira",
    "matutino": [
      {
        hora: "07:40 - 09:20",
        materia: "Linguagem de Programação",
        sigla: "ILP054",
        prof: "Sandra Geroldo",
        sala: "206"
      },
      {
        hora: "09:30 - 13:00",
        materia: "Engenharia de Software I",
        sigla: "IES014",
        prof: "Priscila Faccioli",
        sala: "206"
      },
    ]
  },

  // sexta
  {
    "dia": "sexta-feira",
    "matutino": [
      {
        hora: "07:40 - 09:20",
        materia: "Linguagem de Programação",
        sigla: "ILP054",
        prof: "Sandra Geroldo",
        sala: "206"
      },
    ],
    "mat/vesp": [
      {
        hora: "10:20 - 13:50",
        materia: "Sistemas de Informação",
        sigla: "ISI020",
        prof: "Ana Travessos",
        sala: "203"
      },
    ]
  },

  // sábado
  {
    "dia": "sábado",
    "matutino": [
      {
        hora: "07:40 - 11:10",
        materia: "Programação WEB",
        sigla: "ILP054",
        prof: "Sem professor",
        sala: "206"
      },
    ],
  },
]
