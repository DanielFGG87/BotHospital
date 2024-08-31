const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


//const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])


/*    .addAnswer([
        'Aguarde mientras gestionamos su turno. Recibirá un mensaje con la información del mismo.',
        'Recuerde que los pacientes de PAMI siempre deben concurrir con la orden medica digital (OME) y la credencial actualizada.'
    ])
*/

// ######
// MEDICOS
// ######

const flowDrRegina =


// ######
// Especialidades Medicas
// ######

const flowCardiologia = addKeyword(['1', 'cardiologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Medico 1',
        'Medico 2',
        'Medico 3'
    ])

const flowClinicaMed = addKeyword(['2', 'clinica']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*REG*.- Dr. La Regina',
        '*LOP*.- Dra. Lopez'
])


const flowCirugia = addKeyword(['3', 'cirugia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*NEG*.- Dr. Del Negro',
        '*WAL*.- Dr. Wallace',
        '*LOP*.- Dra. Lopez',
        '*ALM*.- Dr. Almendariz',
        '*BUB*.- Dra. Bubillo',
        '*MIC*.- Dr. De Michelis',
        '*MIR*.- Dr Miranda'
])

const flowDermatologia = addKeyword(['4', 'dermatologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*PIE*.- Dra. Pierini'
        
])

const flowEndocrinologia = addKeyword(['5', 'endocrinologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Medico 1',
        'Medico 2',
        'Medico 3'
])

const flowFonoaudiologia = addKeyword(['6', 'fonoaudiologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        '*TL*.- Tratamiento del Lenguaje',
        '*OEA*.- OEA',
        '*EA*.- Estudios Audiologicos'
])

const flowGastroenterologia = addKeyword(['7', 'gastro']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dr. Del Negro',
        'Dr. Wallace',
        'Dr. De Lucia',
        'Dr. Facciutto'
])

const flowGinecologia = addKeyword(['8', 'ginecologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dra. Grimoldi',
        'Dr. Estevez',
        'Dra. Levitan',
        'Dr. Martinez',
        'Dr. Piyero',
        'Dr. Arciprete'

])

const flowHematologia = addKeyword(['9', 'hematologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dra. Barbieris'
        //'Medico 2',
        //'Medico 3'
])

const flowNeurologia = addKeyword(['10', 'fonoaudiologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dra. Gomez',
        'Dra. Guerra',
        'Dr Condori'
])

const flowOftalmologia = addKeyword(['11', 'oftalmologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dra. Giustozzi',
        'Dr Zanovello',
        //'Medico 3'
])

const flowOncologia = addKeyword(['12', 'oncologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dra. Bozzano',
       //'Medico 2',
        //'Medico 3'
])

const flowPsiquiatria = addKeyword(['13', 'psiquiatria']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dra. Echeverria',
        'Dra. Di Giuli',
        //'Medico 3'
])

const flowTraumatologia = addKeyword(['14', 'traumatologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dr. Acuña',
        'Dr. Castellani',
        'Dr. Rimmaudo',
        'Dra. Gallego'
])

const flowPediatria = addKeyword(['15', 'pediatria']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Medico 1',
        'Medico 2',
        'Medico 3'
])

const flowUrologia = addKeyword(['16', 'urologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dr. Guaragnini',
        'Dr. Massaccesi',
        //'Medico 3'
])

const flowNutricion = addKeyword(['17', 'nutricion']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Lic. Pompozzi',
        'Lic. Dalto',
        'Lic. Estevez'
])

const flowOdontologia = addKeyword(['18', 'odontologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Medico 1',
        'Medico 2',
        'Medico 3'
])

const flowFisiatria = addKeyword(['19', 'fisiatria']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dra. Arocena',
        //'Medico 2',
        //'Medico 3'
])

const flowNeumologia = addKeyword(['20', 'neumologia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Dra. Spinelli',
        //'Medico 2'
])

const flowObstreticia = addKeyword(['21', 'obstreticia']).addAnswer(['Por favor selecione el medico'])
    .addAnswer([
        'Arias',
        'Lemme',
        'Tenaglia',
        'Gil Ortiz',
        'Serrani'
])

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
        '*Peso aproximado del paciente*'
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
        'Obra social (recuerde que los pacientes de PAMI deberán presentar la Orden medica digital y la credencial actualizada)'
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

const flowEstudioDiag = addKeyword(['12','diagnostico','estudio'])
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
        [flowRayos, flowTomografia, flowEspinografia, flowMamografia, flowMagnificaciones, flowEcocardiograma, flowDoppler, flowElectroenfacelograma, flowEstAudiologicos, flowEstGastroenterologicos, flowLaboratorio]
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

const flowModificar = addKeyword(['2','modificacion'])
    .addAnswer([])

// #####
// CONFIRMACION DE TURNOS
// #####

const flowConfirmacion = addKeyword(['3','confirmacion'])
    .addAnswer([])

// #####
// CONSULTAS
// #####

const flowConsultas = addKeyword(['4','consultas'])
    .addAnswer(['Por consultas debe comunicarse a nuestras líneas fijas:', 
        '2344-454112',
        '2344-454114',
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
        [flowConsultas, flowConfirmacion, flowModificar, flowResTurno]
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
