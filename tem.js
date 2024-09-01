const flowConsultorio = addKeyword(['1','consultorio','medico'])
    .addAnswer(['Indicar especialidad requerida',
        ' ',
        '*1.-* Cardiologia',
        '*2.-* Clinica Medica',
        '*3.-* Cirugia',
        '*4.-* Dermatologia',
        '*5.-* Endodrinologia',
        '*6.-* Fonoaudiologia',
        '*7.-* Gastroenterologia',
        '*8.-* Ginecologia',
        '*9.-* Hematologia',
        '*10.-* Neurologia',
        '*11.-* Oftalmologia',
        '*12.-* Oncologia',
        '*13.-* Psiquiatria',
        '*14.-* Traumatologia',
        '*15.-* Pediatria',
        '*16.-* Urologia',
        '*17.-* Nutricion',
        '*18.-* Odontologia',
        '*19.-* Fisiatria',
        '*20.-* Neumologia',
        '*21.-* Obstreticia',
        '*22.-* Otorrinonaringologia',
        '*23.-* Nefrologia',
        '*24.-* Vacunacion'
        
    ],
    null,
    null,
    [flowVacunacion, flowNeumologia, flowObstreticia, flowOtorrino, flowNefrologia, flowNutricion, flowOdontologia, flowFisiatria, flowOftalmologia, flowOncologia, flowPsiquiatria, flowTraumatologia, flowPediatria, flowUrologia, flowFonoaudiologia, flowGastroenterologia, flowGinecologia, flowHematologia, flowNeurologia, flowCardiologia, flowClinicaMed, flowCirugia, flowDermatologia, flowEndocrinologia]
    )

const flowVacunacion = addKeyword(['24', 'vacunacion']).addAnswer(['Horario de atencion de 7:00 hs a 18:00 hs',
        'Los turnos son a demanda, previamentepasando por ventanilla  de *TURNOS*.',
        '*Todos los dias se dan todas las vacunas, para FIEBRE AMARILLA debe solicitar turno previo llamando a las lineas fijas intero: 110*'
        //'Medico 2',
        //'Medico 3'
])


// PEDIATRIA


const flowPediatriaSano = addKeyword(['1', 'si']).addAnswer([
      mensage()
])

const flowPediatriaNoSano = addKeyword(['2', 'no']).addAnswer(['*Turno de manera presencial de 8:30 hs a 11:30 hs'])


const flowPediatria = addKeyword(['15', 'pediatria']).addAnswer(['Por favor selecione si es para un niño/a completamente sano.'])
    .addAnswer([
       ' ',
        '*1*.- SI',
        '*2*.- NO'],
      null,
      null,
      [flowPediatriaSano, flowPediatriaNoSano])


const flowCirugiaCuracion = addKeyword(['1','si','curacion']).addAnswer([])

const flowCirugiaIntervencion addKeyword(['2','no']).addAnswer([])

const flowCirugia = addKeyword(['3', 'cirugia']).addAnswer(['¿Desea turno para curaciones o retirar puntos?'])
       .addAnswer([
       ' ',
        '*1*.- SI',
        '*2*.- NO'],
      null,
      null,
      [flowCirugiaCuracion, flowCirugiaIntervencion])

const flowFueraDeHorario = addKeyword([]).addAnswer([
    '*Nos encontramos FUERA DE HORARIO DE ATENCION*',
    'Horario de atencion',
    'Lunes a viernes (dias habiles) de 7:00 hs a 12:00 hs',
    '*Los mensajes no quedaran guardados*',
    'Por favor, vuelva a comunicarse.',
    'Muchas gracias')]
