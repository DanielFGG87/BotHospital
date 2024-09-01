const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


//const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])


/*    .addAnswer([
        'Aguarde mientras gestionamos su turno. Recibirá un mensaje con la información del mismo.',
        'Recuerde que los pacientes de PAMI siempre deben concurrir con la orden medica digital (OME) y la credencial actualizada.'
    ])
*/





function mensage() {
    return [`Por favor, ingrese los siguientes datos:\n
    Apellido y Nombre:\n
    DNI:\n
    Fecha de Nacimiento:\n
    Localidad:\n
    Obra social (recuerde que los pacientes de PAMI deberán presentar la Orden médica digital y la credencial actualizada)\n
    Y luego aguarde mientras gestionamos su turno, recibirá un mensaje con la confirmación del mismo`]}


// ######
// Especialidades Medicas
// ######
    
const flowCardiologia = addKeyword(['1', 'cardiologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Medico 1',
        'Medico 2',
        'Medico 3'
    ])

// CLINICA MEDICA

const flowDrLopez = addKeyword(['2','lopez']).addAnswer([
    mensage()
])

const flowDrRegina = addKeyword(['1','regina']).addAnswer([
    mensage()
    ])

const flowClinicaMed = addKeyword(['2', 'clinica']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Dr. La Regina',
        '*2*.- Dra. Lopez',
    ],
    null,
    null,
    [flowDrRegina, flowDrLopez]
    )

// CIRUGIA

const flowDrNegro = addKeyword(['1','negro']).addAnswer([
    
    mensage()
    

])

const flowDrWallace = addKeyword(['2','wallace']).addAnswer([mensage()
])

const flowDrLopezC = addKeyword(['3','lopez']).addAnswer([
    mensage()])

const flowDrAlmendariz = addKeyword(['4','almendariz']).addAnswer([
    mensage()])

const flowDrBubilllo = addKeyword(['bubillo','5']).addAnswer([
    mensage()])

const flowDrMichelis = addKeyword(['michelis','6']).addAnswer([
    mensage()])

const flowDrMiranda = addKeyword(['miranda','7']).addAnswer([
    mensage()])

const flowCirugia = addKeyword(['3', 'cirugia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Dr. Negro',
        '*2*.- Dr. Wallace',
        '*3*.- Dra. Lopez',
        '*4*.- Dr. Almendariz',
        '*5*.- Dra. Bubillo',
        '*6*.- Dr. De Michelis',
        '*7*.- Dr Miranda',
    ],
    null,
    null,
    [flowDrNegro, flowDrWallace, flowDrLopezC, flowDrAlmendariz, flowDrBubilllo, flowDrMichelis, flowDrMiranda]
    )

// DERMATOLOGIA

const flowDrPierini = addKeyword(['pierini','1']).addAnswer([
    mensage()])

const flowDermatologia = addKeyword(['4', 'dermatologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Dra. Pierini'],
        null,
        null,
    [flowDrPierini])

// ENDOCRINOLOGIA

const flowDrFeretta = addKeyword(['feretta','1']).addAnswer([
    mensage()])

const flowEndocrinologia = addKeyword(['5', 'endocrinologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Dra. Feretta',
   //     'Medico 2',
   //     'Medico 3'
    ],
    null,
    null,
    [flowDrFeretta])

// FONOUDIOLOGIA

const flowTratamientoL = addKeyword(['tratamiento','1']).addAnswer([
    mensage()])

const flowOEA = addKeyword(['oea','2']).addAnswer([
    mensage()])

const flowEstudiosA = addKeyword(['estudios','3']).addAnswer([
    mensage()])


const flowFonoaudiologia = addKeyword(['6', 'fonoaudiologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Tratamiento del Lenguaje',
        '*2*.- OEA',
        '*3*.- Estudios Audiologicos'],
        null,
        null,
    [flowTratamientoL, flowOEA, flowEstudiosA])

// GASTROENTEROLOGIA

const flowDrDelNegro = addKeyword(['1','negro']).addAnswer([
    mensage()])

const flowDrWallaceG = addKeyword(['2','wallace']).addAnswer([
    mensage()])

const flowDrLucia = addKeyword(['3','lucia']).addAnswer([
    mensage()])

const flowDrFacciutto = addKeyword(['4','facciutto']).addAnswer([
    mensage()])

const flowGastroenterologia = addKeyword(['7', 'gastro']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Dr. Del Negro',
        '*2*.- Dr. Wallace',
        '*3*.- Dr. De Lucia',
        '*4*.- Dr. Facciutto'],
        null,
        null,
        [flowDrDelNegro, flowDrWallaceG, flowDrLucia, flowDrFacciutto])

// GINECOLOGIA

const flowDrGrimoldi = addKeyword(['1','grimoldi']).addAnswer([
    mensage()])

const flowDrEstevez = addKeyword(['2','estevez']).addAnswer([
    mensage()])

const flowDrLevitan = addKeyword(['3','levitan']).addAnswer([
    mensage()])

const flowDrMartinez = addKeyword(['4','martinez']).addAnswer([
    mensage()])

const flowDrPiyero = addKeyword(['5','piyero']).addAnswer([
    mensage()])

const flowDrArciprete = addKeyword(['6','arciprete']).addAnswer([
    mensage()])

const flowGinecologia = addKeyword(['8', 'ginecologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Dra. Grimoldi',
        '*2*.- Dr. Estevez',
        '*3*.- Dra. Levitan',
        '*4*.- Dr. Martinez',
        '*5*.- Dr. Piyero',
        '*6*.- Dr. Arciprete'],
        null,
        null,
        [flowDrGrimoldi, flowDrEstevez, flowDrLevitan, flowDrMartinez, flowDrPiyero, flowDrArciprete

])

// HEMATOLOGIA

const flowDrBarbieris = addKeyword(['1','barbieris']).addAnswer([
    mensage()])

const flowHematologia = addKeyword(['9', 'hematologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Dra. Barbieris',
        //'Medico 2',
        //'Medico 3'
    ],
    null,
    null,
    [flowDrBarbieris
])


// NEUROLOGIA

const flowDrGomez = addKeyword(['1','gomez']).addAnswer([
    mensage()])

const flowDrGuerra = addKeyword(['2','gurra']).addAnswer([
        mensage()])    

const flowDrCondori = addKeyword(['3','condori']).addAnswer([
            mensage()])

const flowNeurologia = addKeyword(['10', 'neurologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Dra. Gomez',
        '*2*.- Dra. Guerra',
        '*3*.- Dr Condori'],
        null,
        null,
        [flowDrGomez, flowDrGuerra, flowDrCondori])


// OFTALMOLOGIA

const flowDrGiustozzi = addKeyword(['1','giustozzi']).addAnswer([
    mensage()])

const flowDrZanovello = addKeyword(['2','zanoveloo']).addAnswer([
        mensage()])

const flowOftalmologia = addKeyword(['11', 'oftalmologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Dra. Giustozzi',
        '*2*.- Dr Zanovello'],
        //'Medico 3'
        null,
        null,
        [flowDrGiustozzi, flowDrZanovello])


// ONCOLOGIA

const flowDrBozzano = addKeyword(['1','bozano']).addAnswer([
    mensage()])

const flowOncologia = addKeyword(['12', 'oncologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*BOZ*Dra. Bozzano'],
       //'Medico 2',
        //'Medico 3'
        null,
        null,
        [flowDrBozzano])

// PSIQUIATRIA

const flowDrEcheverria = addKeyword(['1','echeverria']).addAnswer([
    mensage()])

const flowDrGiuli = addKeyword(['2','giuli']).addAnswer([
    mensage()])

const flowPsiquiatria = addKeyword(['13', 'psiquiatria']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*Dra. Echeverria',
        '*2*Dra. Di Giuli'],
        //'Medico 3'
        null,
        null,
        [flowDrGiuli, flowDrEcheverria])

// TRAUMATOLOGIA

const flowDrAcuña = addKeyword(['1','acuña']).addAnswer([
    mensage()])

const flowDrCastellani = addKeyword(['2','castellani']).addAnswer([
    mensage()])  

const flowDrRimmaudo = addKeyword(['3','rimmaudo']).addAnswer([
    mensage()])

const flowDrGallego = addKeyword(['4','gallego']).addAnswer([
    mensage()])

const flowTraumatologia = addKeyword(['14', 'traumatologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Dr. Acuña',
        '*2*.- Dr. Castellani',
        '*3*.- Dr. Rimmaudo',
        '*4*.- Dra. Gallego'],
        null,
        null,
        [flowDrAcuña, flowDrCastellani, flowDrRimmaudo, flowDrGallego])

// PEDIATRIA



const flowPediatria = addKeyword(['15', 'pediatria']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Medico 1',
        'Medico 2',
        'Medico 3'
])

// UROLOGIA

const flowDrGuaragnini = addKeyword(['1','guaragnini']).addAnswer([
    mensage()])

const flowDrMassaccesi = addKeyword(['2','massaccesi']).addAnswer([
    mensage()])

const flowUrologia = addKeyword(['16', 'urologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Dr. Guaragnini',
        '*2*.- Dr. Massaccesi'],
        //'Medico 3'
        null,
        null,
        [flowDrGuaragnini, flowDrMassaccesi])

// NUTRICION

const flowLicPompozzi = addKeyword(['1','pompozzi']).addAnswer([
    mensage()])

const flowLicDalto = addKeyword(['1','dalto']).addAnswer([
        mensage()])

const flowLicEstevez = addKeyword(['1','estevez']).addAnswer([
            mensage()])

const flowNutricion = addKeyword(['17', 'nutricion']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Lic. Pompozzi',
        '*2*.- Lic. Dalto',
        '*3*.- Lic. Estevez'],
        null,
        null,
        [flowLicPompozzi, flowLicDalto, flowLicEstevez])

// ODONTOLOGIA

const flowOdonNiños = addKeyword(['1', 'niños']).addAnswer([mensage()])

const flowOdonAdulosMañana = addKeyword(['1', 'mañana']).addAnswer([mensage()])

const flowOdonAdultosTarde = addKeyword(['2', 'tarde']).addAnswer([mensage()])

const flowOdonAdultos = addKeyword(['1', 'adultos']).addAnswer(['Porfavaor selecione el turno:',
    '',
    '*1*.- Turno Mañana',
    '*2*.- Turno Tarde'],
    null,
    null,
    [flowOdonAdulosMañana, flowOdonAdultosTarde])


const flowOdontologia = addKeyword(['18', 'odontologia']).addAnswer(['Por favor selecione una opcion'])
    .addAnswer([
        '*1*.- Adultos',
        '*2*.- Niños'],
        // 'Medico 3'
        null,
        null,
        [flowOdonAdultos, flowOdonNiños])

// FISIATRIA

const flowDrArocena = addKeyword(['1','arocena']).addAnswer([
    mensage()])

const flowFisiatria = addKeyword(['19', 'fisiatria']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Dra. Arocena'],
        //'Medico 2',
        //'Medico 3'
        null,
        null,
        [flowDrArocena])

// NEUMOLOGIA

const flowDrSpinelli = addKeyword(['1','arocena']).addAnswer([
    mensage()]) 

const flowNeumologia = addKeyword(['20', 'neumologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*1*.- Dra. Spinelli'],
        //'Medico 2'
        null,
        null,
        [flowDrSpinelli])

// OBSTRETICIA

const flowDrArias = addKeyword(['1','arias']).addAnswer([
    mensage()])

const flowDrLemme = addKeyword(['2','lemme']).addAnswer([
    mensage()])

const flowDrTenaglia = addKeyword(['3','tenaglia']).addAnswer([
    mensage()])

const flowDrOrtiz = addKeyword(['4','ortiz']).addAnswer([
    mensage()])

const flowDrSerrani = addKeyword(['5','serrani']).addAnswer([
     mensage()])

const flowObstreticia = addKeyword(['21', 'obstreticia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Arias',
        'Lemme',
        'Tenaglia',
        'Gil Ortiz',
        'Serrani'],
        null,
        null,
        [flowDrArias, flowDrLemme, flowDrOrtiz, flowDrSerrani, flowDrTenaglia])

// OTORRINONARINGOLOGIA



const flowOtorrino = addKeyword(['22', 'otorrino']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dr. Mazzei',
        //'Medico 2',
        //'Medico 3'
])

const flowNefrologia = addKeyword(['23', 'nefrologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dr. Carriquiri',
        //'Medico 2',
        //'Medico 3'
])

const flowKineseologia = addKeyword(['27', 'kineseologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dr. Carriquiri',
        //'Medico 2',
        //'Medico 3'
    ])

    const flowTerapiaOcu = addKeyword(['28', 'terapia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Medico 1',
        //'Medico 2',
        //'Medico 3'
])

// ######


/*const flowDocs = addKeyword(['doc', 'documentacion', 'documentación']).addAnswer(
    [
        '📄 Aquí encontras las documentación recuerda que puedes mejorarla',
        'https://bot-whatsapp.netlify.app/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)
*/


// #######
// ESPECIALIDADES
// #######


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
        '*23.-* Nefrologia'
    
    ],
    null,
    null,
    [flowNeumologia, flowObstreticia, flowOtorrino, flowNefrologia, flowNutricion, flowOdontologia, flowFisiatria, flowOftalmologia, flowOncologia, flowPsiquiatria, flowTraumatologia, flowPediatria, flowUrologia, flowFonoaudiologia, flowGastroenterologia, flowGinecologia, flowHematologia, flowNeurologia, flowCardiologia, flowClinicaMed, flowCirugia, flowDermatologia, flowEndocrinologia]
    )

// ######

// ESTUDIOS DE DIAGNÓSTICO 

// ######

const flowRayos = addKeyword(['1','rayos'])
    .addAnswer(['Enviar foto de la orden de indicación',
        'Apellido y nombre',
        'DNI', 
        'Fecha de nacimiento',
        'Localidad',
        'Obra social (recuerde que los pacientes de PAMI deberán presentar la Orden medica digital y la credencial actualizada)',
        //'*Peso aproximado del paciente*'
        ])


const flowEspinografia = addKeyword(['2','Espinografia'])
    .addAnswer(['Enviar foto de la orden de indicación',
        'Apellido y nombre',
        'DNI', 
        'Fecha de nacimiento',
        'Localidad',
        'Obra social (recuerde que los pacientes de PAMI deberán presentar la Orden medica digital y la credencial actualizada)',
        '*Presentar radiografia previa de columna, el dia de atención'
        ])


const flowTomografia = addKeyword(['3','Tomografia'])
    .addAnswer(['Enviar foto de la orden de indicación',
        'Apellido y nombre',
        'DNI', 
        'Fecha de nacimiento',
        'Localidad',
        'Obra social (recuerde que los pacientes de PAMI deberán presentar la Orden medica digital y la credencial actualizada)',
        '*Peso aproximado del paciente*'
        ])


const flowMamografia = addKeyword(['4','Mamografía'])
    .addAnswer(['Enviar foto de la orden de indicación',
        'Apellido y nombre',
        'DNI', 
        'Fecha de nacimiento',
        'Localidad',
        'Obra social (recuerde que los pacientes de PAMI deberán presentar la Orden medica digital y la credencial actualizada)'
        ])


const flowMagnificaciones = addKeyword(['5','Magnificaciones'])
    .addAnswer(['Enviar foto de la orden de indicación',
        'Apellido y nombre',
        'DNI', 
        'Fecha de nacimiento',
        'Localidad',
        'Obra social (recuerde que los pacientes de PAMI deberán presentar la Orden medica digital y la credencial actualizada)'
         ])

const flowEcocardiograma = addKeyword(['6','Ecocardiograma'])
    .addAnswer(['Enviar foto de la orden de indicación',
        'Apellido y nombre',
        'DNI', 
        'Fecha de nacimiento',
        'Localidad',
        'Obra social (recuerde que los pacientes de PAMI deberán presentar la Orden medica digital y la credencial actualizada)'
        ])

const flowElectroenfacelograma = addKeyword(['7','Electroencefalograma'])
    .addAnswer(['Enviar foto de la orden de indicación',
        'Apellido y nombre',
        'DNI', 
        'Fecha de nacimiento',
        'Localidad',
        'Obra social (recuerde que los pacientes de PAMI deberán presentar la Orden medica digital y la credencial actualizada)'
        ])

const flowDoppler = addKeyword(['8','Doppler'])
    .addAnswer(['Enviar foto de la orden de indicación',
        'Apellido y nombre',
        'DNI', 
        'Fecha de nacimiento',
        'Localidad',
        'Obra social (recuerde que los pacientes de PAMI deberán presentar la Orden medica digital y la credencial actualizada)',
        '*Recuerde que solo se realizan Doppler de vasos de cuello, cardíaco y obstétrico y venoso de MMII*'
        ])

const flowEstAudiologicos = addKeyword(['9','Estudios audiologicos'])
    .addAnswer(['Enviar foto de la orden de indicación',
        'Apellido y nombre',
        'DNI', 
        'Fecha de nacimiento',
        'Localidad',
        'Obra social (recuerde que los pacientes de PAMI deberán presentar la Orden medica digital y la credencial actualizada)'
        ])

const flowEstGastroenterologicos = addKeyword(['10','Estudios Gastroenterológicos'])
    .addAnswer(['Enviar foto de la orden de indicación',
        'Apellido y nombre',
        'DNI', 
        'Fecha de nacimiento',
        'Localidad',
        'Obra social (recuerde que los pacientes de PAMI deberán presentar la Orden medica digital y la credencial actualizada)'
        ])

const flowLaboratorio = addKeyword(['11','Laboratorio'])
    .addAnswer(['Enviar foto de la orden de indicación',
        'Apellido y nombre',
        'DNI', 
        'Fecha de nacimiento',
        'Localidad',
        'Obra social (recuerde que los pacientes de PAMI deberán presentar la Orden medica digital y la credencial actualizada)'
        ])


 const flowEstudioDiag = addKeyword(['2','diagnostico','estudio'])
        .addAnswer([
            '*1.-* Rayos',
            '*2.-* Espinografia',
            '*3.-* Tomografía',
            '*4.-* Mamografía',
            '*5.-* Magnificaciones',
            '*6.-* Ecocardiograma',
            '*7.-* Electroencefalograma', 
            '*8.-* Doppler',
            '*9.-* Estudios Audiologicos', 
            '*10.-* Estudios Gastroenterológicos',
            '*11.-* Laboratorio'
        ],
        null,
        null,
        [
            flowRayos, flowEspinografia, flowTomografia, flowMamografia, 
            flowMagnificaciones, flowEcocardiograma, flowElectroenfacelograma, 
            flowDoppler, flowEstAudiologicos, flowEstGastroenterologicos, 
            flowLaboratorio
        ])
    

// ######

// Pedido de turnos

// ######
 
const flowResTurno = addKeyword(['1','turno']).addAnswer(
    [
        'Aqui podes selecionar el numero al tipo de especialidad a la cual quieres pedir turno, recuerda que debes cumplir ciertos requisitos que estaran informados',
        ' ',
        ' ',
        '*1.-* Consultorios Medicos',
        '*2.-* Estudios de Diagnostico'],
    null,
    null,
    [flowConsultorio, flowEstudioDiag]
)   

// ######
// MODIFICACION CANCELACION DE TURNOS
// ######

const flowModificarT = addKeyword(['1','mopdificar']).addAnswer([
'Indique los siguientes datos para poder modificar su turno',
        'Apellido y nombre:',
        'DNI:',
        'Fecha de nacimiento:',
        'Localidad:',
        'Obra social:',
        'Turno que tenía otorgado (Médico/Especialidad, día que tiene el turno asignado'])

 const flowCancelarT = addKeyword(['1','mopdificar']).addAnswer([
        'Indique los siguientes datos para poder cancelar su turno',
        'Apellido y nombre:',
        'DNI:',
        'Fecha de nacimiento:',
        'Localidad:',
        'Obra social:',
       'Turno que tenía otorgado (Médico/Especialidad, día que tiene el turno asignado'])

const flowModificarCancelarT = addKeyword(['2','modificacion'])
    .addAnswer([
        '*Indique si quiere Cancelar o modificar su turno*',
        '',
        '*1*.- Modificar',
        '*2*.- Cancelar'],
        null,
        null,
        [flowModificarT, flowCancelarT])

// #####
// CONFIRMACION DE TURNOS
// #####

const flowConfirmacion = addKeyword(['3','confirmacion'])
    .addAnswer([
    'Indique los siguientes datos para poder confirmar su turno',
    'Apellido y nombre:',
    'DNI:',
    'Fecha de nacimiento:',
    'Localidad:',
    'Obra social:',
    'Turno que tenía otorgado (Médico/Especialidad, día que tiene el turno asignado'])
  

// #####
// CONSULTAS
// #####

const flowConsultas = addKeyword(['4','consultas'])
    .addAnswer(['Por consultas debe comunicarse a nuestras líneas fijas:', 
        '2344-454112',
        '2344-454114',
        '2344-454113',
        'De lunes a viernes (días hábiles) en horario de 7:00 a 17:00 hs'])


// MENU INICIAL 


const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer(
        [
        '¡Hola!',
        '  ',
        '🤖 Soy el Asistente Virtual del *Hospital Dr Posadas de Saladillo*',
        'Por favor escriba el número de la opción correspondiente',
        '  ',
        '*1.-*  Reservar turnos',
        '*2.-*  Modificación o cancelación de turnos reservados',
        '*3.-*  Confirmación de asistencia',
        '*4.-*  Consultas',
        ],
        null,
        null,
        [flowConsultas, flowConfirmacion, flowModificarCancelarT, flowResTurno]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
