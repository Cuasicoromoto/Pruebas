const COMUNES = {
    inicio: `
        <p class="jaculatoria texto-normal">Ave María Purísima, <br><i>sin pecado original concebida.</i></p>
        <ul><li>Señal de la Cruz.</li><li>Acto de Contrición.</li></ul>`,

    padreNuestroBloque: `<ul><li>Padre Nuestro.</li><li>10 Avemarías.</li><li>Gloria.</li></ul><br>`,

    jaculatoriaMisterio: `
        <p class="jaculatoria">María, Madre de Gracias, <br>Madre de Misericordia, <br><i>en la vida y en la muerte <br>ampáranos gran Señora.</i><br><br>Alabanzas y gracias <br>sean dadas en todo momento <br>al Santísimo y Divinísimo <br>Sacramento del Altar, <br><i>y bendita sea por siempre <br>la Santa e Inmaculada Concepción <br>de la bienaventurada siempre <br>Virgen María, Madre de Dios <br>y Madre nuestra.</i> <br><br>Oh, Jesús mío, <br>perdona nuestros pecados, <br>líbranos del fuego del infierno, <br>lleva al Cielo a todas las almas, <br>especialmente a las más necesitadas <br>de tu divina misericordia. Amén.</p>`,

    salve: `
        <br><h3>Salve</h3><p>Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A Ti llamamos los desterrados hijos de Eva; a Ti suspiramos, gimiendo y llorando, en este valle de lágrimas. <br><br>Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. <br><br>¡Oh clementísima, oh piadosa, <br>oh dulce Virgen María! <br><br>Ruega por nosotros Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. <br><br>Amén.</p>`,

    intencionesPapa: `
        <br><h3>Por las intenciones del Papa</h3><p class="jaculatoria">Virgen purísima y castísima antes del parto, haznos mansos, humildes y castos, <br><i>en pensamientos palabras y obras.</i></p><br><p>Dios te salve María... </p><br><p class="jaculatoria">Virgen purísima y castísima en el parto, haznos mansos, humildes y castos, <br><i>en pensamientos palabras y obras.</i></p><br><p>Dios te salve María... </p><br><p class="jaculatoria">Virgen purísima y castísima después del parto, haznos mansos, humildes y castos, <br><i>en pensamientos palabras y obras.</i></p><br><p>Dios te salve María... </p>`,

    letanias: `
        <br><h3>Letanías</h3>
        <p class="jaculatoria">Señor, ten piedad. <br><i>Señor, ten piedad.</i></p> 
        <br><p class="jaculatoria">Cristo, ten piedad. <br><i>Cristo, ten piedad.</i></p> 
        <br><p class="jaculatoria">Señor, ten piedad. <br><i>Señor, ten piedad.</i></p> 
        <br><p class="jaculatoria">Cristo, óyenos. <br><i>Cristo, óyenos.</i></p> 
        <br><p class="jaculatoria">Cristo, escúchanos. <br><i>Cristo, escúchanos.</i></p> 
        <br><p><i>(Ten misericordia de nosotros)</i></p> 
        <p class="jaculatoria">Dios, Padre celestial, <br>Dios, Hijo, Redentor del mundo, <br>Dios, Espíritu Santo, <br>Santísima Trinidad, un solo Dios,</p>         
        <br><p><i>(Ruega por nosotros)</i></p> 
        <p class="jaculatoria">Santa María, <br>Santa Madre de Dios, <br>Santa Virgen de las Vírgenes, <br>Madre de Cristo, <br>Madre de la Iglesia, <br>Madre de la misericordia, <br>Madre de la divina gracia, <br>Madre de la esperanza, <br>Madre purísima, <br>Madre castísima, <br>Madre siempre virgen, <br>Madre inmaculada, <br>Madre amable, <br>Madre admirable, <br>Madre del buen consejo, <br>Madre del Creador, <br>Madre del Salvador, <br>Virgen prudentísima, <br>Virgen digna de veneración, <br>Virgen digna de alabanza, <br>Virgen poderosa, <br>Virgen clemente, <br>Virgen fiel, <br>Espejo de justicia, <br>Trono de la sabiduría, <br>Causa de nuestra alegría, <br>Vaso espiritual, <br>Vaso digno de honor, <br>Vaso insigne de devoción, <br>Rosa mística, <br>Torre de David, <br>Torre de marfil, <br>Casa de oro, <br>Arca de la Alianza, <br>Puerta del cielo, <br>Estrella de la mañana, <br>Salud de los enfermos, <br>Refugio de los pecadores, <br>Consuelo de los migrantes, <br>Consoladora de los afligidos, <br>Auxilio de los cristianos, <br>Reina de los Ángeles, <br>Reina de los Patriarcas, <br>Reina de los Profetas, <br>Reina de los Apóstoles, <br>Reina de los Mártires, <br>Reina de los Confesores, <br>Reina de las Vírgenes, <br>Reina de todos los Santos, <br>Reina concebida sin pecado original, <br>Reina asunta a los Cielos, <br>Reina del Santísimo Rosario, <br>Reina de la familia, <br>Reina de la paz.
        <br><br>Cordero de Dios, <br>que quitas el pecado del mundo, <br><i>Perdónanos, Señor.</i> <br><br>Cordero de Dios, <br>que quitas el pecado del mundo, <br><i>Escúchanos, Señor.</i> <br><br>Cordero de Dios, <br>que quitas el pecado del mundo, <br><i>Ten misericordia de nosotros, Señor.</i></p>
        <br><p>Ruega por nosotros, Santa Madre de Dios. <br><i>Para que seamos dignos de alcanzar <br>las promesas de nuestro Señor Jesucristo. <br><br>Amén.</i></p>`,

    cierre: `<br><h3>Jaculatoria final</h3> <p class="jaculatoria">Ave María Purísima. <br><i>Sin pecado original concebida.</i></p>`
};

let oracionesDinamicas = {};

const oracionesTexto = {
    '<!-- Oraciones cotidianas -->': ``,
    '<!-- Oraciones varias -->': ``,
    '<!-- Novenas -->': ``,
    '<!-- Coronillas -->': ``,
    '<!-- Del Catecismo -->': ``,
};

const armarRosario = (misterios) => {
    let html = COMUNES.inicio;
    misterios.forEach((m, i) => {
        html += `<br><h3>${i + 1}º Misterio: <br>${m}</h3>`;
        html += COMUNES.padreNuestroBloque;
        html += COMUNES.jaculatoriaMisterio;
    }
    );
    html += COMUNES.salve;
    html += COMUNES.intencionesPapa;
    html += COMUNES.letanias;
    html += COMUNES.cierre;
    return html;
};

oracionesTexto['Misterios Gozosos'] = armarRosario(['La Encarnación del Hijo de Dios.', 'La Visitación de María Santísima a Santa Isabel.', 'El Nacimiento del Hijo de Dios.', 'La Presentación del Señor Jesús en el templo.', 'La Pérdida y Hallazgo del Niño Jesús en el templo.']);
oracionesTexto['Misterios Luminosos'] = armarRosario(['El Bautismo de Jesús en el Jordán.', 'Las Bodas de Caná.', 'El anuncio del Reino de Dios invitando a la conversión.', 'La Transfiguración.', 'La Institución de la Eucaristía.']);
oracionesTexto['Misterios Dolorosos'] = armarRosario(['La Oración de Jesús en el Huerto.', 'La Flagelación de Nuestro Señor Jesús.', 'La Coronación de espinas.', 'Jesús carga la cruz a cuestas.', 'La Crucifixión y Muerte de Jesús.']);
oracionesTexto['Misterios Gloriosos'] = armarRosario(['La Resurrección del Señor.', 'La Ascensión de Jesús al Cielo.', 'La Venida del Espíritu Santo.', 'La Asunción de María a los Cielos.', 'La Coronación de la Santísima Virgen.']);

const diasNovenaCoromoto = [{
    titulo: "Día 1: ",
    texto: "Dios te Salve María, Reina excelsa y elevada por Dios a incomparable grandeza, por haber sido enriquecida con todos los privilegios del poder del padre, con toda la preferencia del entendimiento del Hijo, y con todas las gracias y dones del Espíritu Santo, te confesamos como Emperatriz del Universo, Reina de los ángeles y de los hombres; en los cielos y en la tierra no hay pura criatura de mayor grandeza y majestad que Tu. Dios te salve, a Ti llamamos los peregrinos de este valle de lágrimas, para que te dignes aplicarnos tus soberanos favores y nos hagas dignos servidores de tu Divino Hijo, Jesucristo Nuestro Señor. Ayúdanos, Señora, para que en las luchas de carne contra el espíritu, salgamos vencedores mediante tu divino y maternal auxilio, y podamos un día entrar triunfante en la Gloria del Cielo. Amén."
}, {
    titulo: "Día 2: ",
    texto: "Dios te Salve, Madre de Misericordia, a quien Dios Padre hizo dispensadora de sus bondades; Dios Hijo Tesorera de sus merecimientos infinitos y Dios Espíritu Santo, Señora de sus dones y gracias, para que lo administrase en beneficio del género humano. Salve, Virgen Madre, que llevaste en tu purísimo seno al Señor de la Creación, al Supremo Ser, de quien los cielos y tierra no son más que débiles obras de sus omnipotentes manos. Salve María, fuente de gracia, que alcanzas el perdón de nuestras culpas y eres nuestra fiel protectora en todas las penas y tentaciones que nos afligen en este valle de amargos dolores. Ruega, Señora, por nosotros. Acepta las humildes plegarias que te dirigimos en nuestras tribulaciones y necesidades, y haznos dignos de cantar un día tus santas alabanzas en medio de los bienaventurados en la Gloria Eterna. Amén."
}, {
    titulo: "Día 3: ",
    texto: "Virgen Santísima, Madre de Dios y Madre nuestra, por cuya intercesión poderosa llegaron al conocimiento de la fe cristiana. Hermosísima Aurora, que brillaste apareciendo en Coromoto y nos dejaste una preciosa prenda de Tu amor, en una milagrosa Imagen, apiádate de nosotros. Alivia nuestros males, poderosísima Abogada nuestra y fortalécenos en las luchas contra los enemigos del alma. <br><br>¡Oh Patrona de Venezuela! Haz que nuestra Nación siga siempre en sus leyes, en sus costumbres y en sus empresas, los sabios y salvadores principios del Santo Evangelio. Protege nuestras instituciones, destierra de nosotros el vicio, la impiedad e indiferencia religiosa; en una palabra, renueva la fe en nuestra amada Patria. Promueve en nuestra sociedad obras verificadoras de salud, adelanto moral y material, para que gozando de los beneficios de una paz tranquila honremos y sirvamos fielmente en la tierra a Tu Divino Hijo Jesucristo, a fin de gozarle eternamente en el Cielo. Amén."
}, {
    titulo: "Día 4: ",
    texto: "Dios te Salve, dulzura inefable, rico panal de miel celestial de gracia, labrado por la omnipotente mano de Dios, para ser paraíso de sus deleites; gusto y alegría de los corazones que aman la tierra y encanto y admiración de los espíritus celestiales. <br><br>¡Virgen bendita! Eres Madre dichosísima en cuyo purísimo ser el dulcísimo Creador derramó la infinita suavidad e inefable dulzura de su divinidad. Con tu bondadoso auxilio suavizas nuestras penas, nos ayudas a reprimir nuestras pasiones, nos fortaleces en toda tentación y derramas sobre nuestras almas el suave rocío de tu dulce consuelo. <br><br>¡Virgen purísima! En ti puso Dios la plenitud de sus gracias y misericordias, para que fueses dulzura y alivio de cuantos clamaren a Ti desde este valle de lágrimas y duelo. <br><br>Ya que eres la alegría de los que te invocan no nos dejes en el llanto y pesar; más, atráenos con tu amabilidad y dulzura maternales para que, apartándonos de los embaucadores gustos y deleites de este mundo, evitemos todo mal y merezcamos entrar un día en el Gozo Eterno. Amén."
}, {
    titulo: "Día 5: ",
    texto: "Dios te Salve, esperanza nuestra; anhelo constante de los Patriarcas, blanco de los ardientes deseos de los Profetas, sagrario seguro donde se refugian los pecadores para alcanzar el perdón de Dios, pues tus ruegos aplacan el justo enojo. <br><br>Eres, Señora, estrella luminosa que guía al cristiano en la noche borrascosa de esta vida; eres el faro luminoso que le indica los escollos donde podría zozobrar su alma, y le señalas el puerto de la segura salvación. <br><br>Iris de paz, que anuncias la misericordia divina, intercede por nosotros, a fin de que, por medio de la recepción del Santo sacramento de la Penitencia y de un verdadero dolor de nuestras culpas alcancemos de Dios el perdón y misericordia, y seamos admitidos en el Reino de la Gloria. Amén."
}, {
    titulo: "Día 6: ",
    texto: "Dios te Salve, Abogada nuestra, que nos amas tanto que sólo cuidas de nuestro bien y nos concedes tus innumerables beneficios y nos favoreces con tus constantes auxilios y santas aspiraciones. <br><br>A tus ruegos y divina intercesión se aplaca la Justicia Divina enojada por nuestra culpa. Por tu mediación, Dios conserva y derrama sus gracias sobre este mundo y nos aplica con eficacia los méritos infinitos de Jesucristo Nuestro Señor y Salvador. <br><br>Derrama, ¡Oh bondadosísima María! En nuestro corazón, tus luces divinas, para que conociendo y agradeciendo tus inmensos beneficios, podamos cantar tus alabanzas por los siglos de los siglos, en la Vida Eterna. Amén."
}, {
    titulo: "Día 7: ",
    texto: "Dios te Salve, Virgen Clemente, toda llena de afabilidad; cuyo mirar tierno y compasivo es consuelo y alivio del alma dolorida. <br><br>Eres, María, estrella benignísima que señalas al náufrago el puerto de la salvación; eres el refugio del pecador, la salud del enfermo, el consuelo del triste, la alegría del desconsolado y la paz y la esperanza del que muere. <br><br>Haznos ¡oh Virgen sacrosanta! Imitadores de tu excelsa clemencia infundiendo en nuestros corazones la divina caridad con nuestro prójimo. <br><br>¡Divina Mediadora nuestra! Acoge propicia nuestras súplicas y despáchalas favorablemente, pues nadie ha solicitado tu protección sin que no haya recibido de tu bondad y clemencia un pronto y eficaz socorro. <br><br>¡Madre clemente!, después del cautiverio de esta vida, muéstranos a Jesús, fruto bendito de tu vientre, y haz que seamos dignos de gozarte en la eternidad. Amén"
}, {
    titulo: "Día 8: ",
    texto: "Dios te Salve ¡oh piadosa!, a quien Dios adornó con las más generosa piedad que te inclinaba a dirigirle todos los pensamientos, deseos y actos de tu vida; te inspiraba un celo ardiente para la gloria de su culto divino, a la par que llenaba tu corazón de tierna compasión para el alivio y consuelo de las almas. Ave, piadosa Madre de las consolaciones. Guárdanos siempre bajo el manto protector de tu misericordia, para que nuestras almas no sean presa de los enemigos de nuestra eterna salvación. <br><br>Ruega por nosotros, Santa Madre de Dios, para que con tu divino auxilio, salgamos victoriosos de toda tentación y vivamos siempre en el servicio y culto del Señor; y que, con el sostén de tu gracia, merezcamos rendirle eternos cultos de amor y alabanza en la Gloria Celestial. Amén."
}, {
    titulo: "Día 9: ",
    texto: "Dios te Salve, ¡oh siempre dulce Virgen María!, cuya virginidad y nombre fue dulcedumbre castísima de Dios, delicia suave para los hombre, gustosa suavidad para los ángeles. <br><br>¡Oh cándida azucena!, zarza eterna a quien Jesús, -fuego divino-, al nacer de Ti, no ofendió tu virginal pureza. <br><br>Virgen sin semejante, que posees a un tiempo la gloriosa aureola de la virginidad y la incomparable dignidad de Madre de Dios, por eso, tu excelso nombre, MARÍA, es símbolo de gracias y purezas. <br><br>Purifícanos, Señora, con tu virtud del asqueroso lodo de toda mancha impura. Presérvanos de la inmunda servidumbre de viles apetitos y colócanos en la apetecible y dulcísima esclavitud de tu sagrado amor, sirviendo a Jesús en toda pureza y castidad, seamos dignos de alcanzar las promesas de su divina gracia en la Gloria Eterna. Amén."
}];

const diasNovenaSanJose = [{
    titulo: "Día 1: ",
    texto: "Oh benignísimo Jesús así como consolaste a tu padre amado en las perplejidades e incertidumbres que tuvo, dudando si abandonar a tu Santísima Madre su esposa, así te suplicamos humildemente por intercesión de San José nos concedas mucha prudencia y acierto en todos los casos dudosos y angustias de nuestra vida, para que siempre acertemos con tu santísima voluntad."
}, {
    titulo: "Día 2: ",
    texto: "Oh benignísimo Jesús, así como consolaste a tu padre amado en la pobreza y desamparo de Belén, con tu nacimiento, y con los cánticos de los Angeles y visitas de los pastores, así también te suplicamos humildemente por intercesión de San José, que nos concedas llevar con paciencia nuestra pobreza y desamparo en esta vida, y que alegres nuestro espíritu con tu presencia y tu gracia, y la esperanza de la gloria."
}, {
    titulo: "Día 3: ",
    texto: "Oh benignísimo Jesús, así como consolaste a tu amado padre en el doloroso misterio de la Circuncisión, recibiendo de él el dulce nombre de Jesús, así te suplicamos humildemente, por intercesión de San José, nos concedas pronunciar siempre con amor y respeto tu santísimo nombre, llevarlo en el corazón, honrarlo en la vida, y profesar con obras y palabras que tú fuiste nuestro Salvador y Jesús."
}, {
    titulo: "Día 4: ",
    texto: "Oh benignísimo Jesús, así como consolaste a tu padre amado de la pena que le causó la profecía de Simeón, mostrándole el innumerable coro de los Santos, así te suplicamos humildemente, por intercesión de San José que nos concedas la gracia de ser de aquellos para quienes tu sirves, no de ruina, sino de resurrección, y que correspondamos fielmente a tu gracia para que vayamos a tu gloria."
}, {
    titulo: "Día 5: ",
    texto: "Oh benignísimo Jesús, así como tu amado padre te condujo de Belén a Egipto para librarte del tirano Herodes, así te suplicamos humildemente, por intercesión de San José, que nos libres de los que quieren dañar nuestras almas o nuestros cuerpos, nos des fortaleza y salvación en nuestras persecuciones, y en medio del destierro de esta vida nos protejas hasta que volemos a la patria."
}, {
    titulo: "Día 6: ",
    texto: "Oh benignísimo Jesús así como tu padre amado te sustentó en Nazaret, y en cambio tú le premiaste en tu santísima compañía tantos años, con tu doctrina y tu dulce conversación, así te rogamos humildemente, por intercesión de San José nos concedas el sustento espiritual de tu gracia, y de tu santa comunión, y que vivamos santa y modestamente, como tú en Nazaret."
}, {
    titulo: "Día 7: ",
    texto: "Oh benignísimo Jesús, así como por seguir la voluntad de tu padre celestial permitiste que tu amado padre en la tierra padeciese el vehementísimo dolor de perderte por tres días, así te suplicamos humildemente, por intercesión de San José, que antes queramos perder todas las cosas y disgustar a cualquier amigo, que dejar de hacer tu voluntad; que jamás te perdamos a ti por el pecado mortal, o que si por desgracia te perdiésemos te hallemos mediante una buena confesión."
}, {
    titulo: "Día 8: ",
    texto: "Oh benignísimo Jesús, que en la hora de su muerte consolaste a tu glorioso padre, asistiendo juntamente con tu Madre su esposa a su última agonía, te suplicamos humildemente, por intercesión de San José, que nos concedas una muerte semejante a la suya asistido de tu bondad, de tu Santísima Madre y del mismo glorioso Patriarca protector de los moribundos, pronunciando al morir vuestros santísimos nombres, Jesús, María y José."
}, {
    titulo: "Día 9: ",
    texto: "Oh benignísimo Jesús, así como has elegido por medio de tu Vicario en la tierra a tu amado padre para protector de tu Santa Iglesia Católica, así te suplicamos humildemente por intercesión de San José, nos concedas el que seamos verdaderos y sinceros católicos, que profesemos sin error la fe católica, que vivamos sin miedo una vida digna de la fe que profesamos, y que jamás puedan los enemigos ni aterrarnos con persecuciones, ni con engaños seducirnos y apartamos de la única y verdadera religión que es la Católica."
}];

const datos = {
    'Avisos Cuasiparroquiales': ``,

    'Horarios': [{
        nombre: 'Capilla Nuestra <br>Señora del Carmen',
        frecuencia: 'Todos los sábados',
        actividades: [{
            nombre: 'Catequesis',
            hora: '7:00 AM'
        }, {
            nombre: 'Conversatorio de la Fe',
            hora: '8:30 AM'
        }, {
            nombre: 'Celebración de la Palabra',
            hora: '9:00 AM'
        }]
    }, {
        nombre: 'Capilla Nuestra <br>Señora de la Asunción',
        frecuencia: 'Todos los sábados',
        actividades: [{
            nombre: 'Catequesis',
            hora: '9:00 AM'
        }, {
            nombre: 'Conversatorio de la Fe',
            hora: '10:30 AM'
        }, {
            nombre: 'Celebración de la Palabra',
            hora: '11:00 AM'
        }]
    }, {
        nombre: 'Capilla Nuestra <br>Señora de Los Dolores',
        frecuencia: 'Todos los sábados',
        actividades: [{
            nombre: 'Conversatorio de la Fe',
            hora: '2:00 PM'
        }, {
            nombre: 'Celebración de la Palabra',
            hora: '3:00 PM'
        }, {
            nombre: 'Catequesis',
            hora: '2:00 PM'
        }]
    }, {
        nombre: 'Capilla Jesús <br>de la Divina Misericordia',
        frecuencia: 'Todos los sábados',
        actividades: [{
            nombre: 'Catequesis',
            hora: '4:00 PM'
        }, {
            nombre: 'Conversatorio de la Fe',
            hora: '4:00 PM'
        }, {
            nombre: 'Celebración de la Palabra',
            hora: '5:00 PM'
        }]
    }, {
        nombre: 'Comunidad <br>María Auxiliadora',
        frecuencia: 'Sábados quincenales',
        actividades: [{
            nombre: 'Catequesis',
            hora: '5:00 PM'
        }, {
            nombre: 'Conversatorio de la Fe',
            hora: '6:00 PM'
        }, {
            nombre: 'Celebración de la Palabra',
            hora: '6:30 PM'
        }]
    }, {
        nombre: 'Capilla San José',
        frecuencia: 'Todos los domingos',
        actividades: [{
            nombre: 'Catequesis',
            hora: '10:30 AM'
        }, {
            nombre: 'Conversatorio de la Fe',
            hora: '10:30 AM'
        }, {
            nombre: 'Celebración de la Palabra',
            hora: '12:00 PM'
        }]
    }].map(c => `
        <div class="acordeon">
            <div class="cabecera-acordeon" data-accion="toggle-acordeon">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span class="material-icons-round" style="color: var(--oro);">church</span> 
                    ${c.nombre}
                </div>
                <span class="material-icons-round flecha">chevron_right</span>
            </div>
            <div class="contenido-acordeon contenido-conectado">
                <div class="contenido-caja">
                    <p style="font-size: 0.75rem; color: var(--oro); text-transform: uppercase; font-weight: 400; margin-bottom: 8px; letter-spacing: 1.2px;">
                        ${c.frecuencia}
                    </p>
                    ${c.actividades.map(act => `
                        <div class="linea-horaria"><span>${act.nombre}</span><b>${act.hora}</b></div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join(''),

    'Apostolados': [{
        nombre: 'Cáritas',
        descripcion: 'Cáritas es el corazón solidario de nuestra Cuasiparroquia. A través de este apostolado buscamos acompañar a los más necesitados, ofreciendo ayuda material, escucha fraterna y esperanza. Cada gesto de servicio es una manera concreta de hacer presente el amor de Cristo en quienes atraviesan momentos difíciles.'
    }, {
        nombre: 'Catequesis',
        descripcion: 'La catequesis es el apostolado evangelizador por excelencia. Aquí, catequistas entregan su tiempo y vocación para transmitir la fe, acompañando a niños, jóvenes y adultos en su iniciación cristiana. Es un espacio donde se siembra la Palabra de Dios, preparando corazones para una vida plena en Cristo.'
    }, {
        nombre: 'Ministerio de Música',
        descripcion: 'El Ministerio de Música es el alma sonora de nuestra Cuasiparroquia. A través de este apostolado, músicos y cantores elevan la oración y la alegría de la fe, acompañando las celebraciones litúrgicas con melodías que inspiran y unen a la comunidad en alabanza y adoración.'
    }, {
        nombre: 'Monaguillos',
        descripcion: 'Los monaguillos son niños y jóvenes servidores del altar que, con entusiasmo y dedicación, apoyan en las celebraciones litúrgicas. Este apostolado les permite crecer en la fe, aprender el valor del servicio y descubrir la belleza de la liturgia. Su presencia es signo de esperanza y compromiso en el camino cristiano.'
    }, {
        nombre: 'Grupo Juniors',
        descripcion: 'El grupo juvenil es un espacio de encuentro, amistad y misión, donde adolescentes y jóvenes comparten su energía, creatividad y alegría para construir comunidad y vivir el Evangelio. Este apostolado les permite crecer juntos, descubrir sus dones y ser protagonistas de la vida parroquial, llevando la fe a cada rincón con entusiasmo.'
    }, {
        nombre: 'Grupo Másters',
        descripcion: 'El grupo Máster reúne a adultos comprometidos que, con experiencia y madurez, sostienen la misión de la Cuasiparroquia. Son servidores que acompañan, orientan y fortalecen la vida comunitaria con su testimonio de fe y entrega. Su presencia inspira a las nuevas generaciones.'
    }, {
        nombre: 'Los Amigos de Jesús',
        descripcion: 'Los Amigos de Jesús es una comunidad de servidores llamados a vivir aquellas palabras "Ya no los llamo siervos, sino amigos" (Jn 15,15). Es el conjunto de todos los apostolados de la Cuasiparroquia que busca transformar la vida cotidiana en un encuentro constante con el amor de Dios. <br><br>Cada miembro, desde su realidad particular, se convierte en un testigo del Evangelio, llevando la luz de la fe a sus familias, a sus trabajos y a sus comunidades. <br><br>Ser un Amigo de Jesús es responder con un "sí" alegre a la invitación de dar fruto abundante, sabiendo que en esta amistad no hay lugar para el miedo, solo para la esperanza y el servicio.'
    }].map(a => `
        <div class="acordeon">
            <div class="cabecera-acordeon" data-accion="toggle-acordeon">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span class="material-icons-round" style="color: var(--oro);">groups</span> 
                    ${a.nombre}
                </div>
                <span class="material-icons-round flecha">chevron_right</span>
            </div>
            <div class="contenido-acordeon contenido-conectado">
                <div class="contenido-caja">
                    <p>${a.descripcion}</p>
                </div>
            </div>
        </div>
    `).join(''),

    'Obras': [{
        nombre: 'Ancianato',
        icon: 'elderly',
        desc: 'Es una casa para el reposo, donde actualmente logramos brindar atención a 15 abuelos. Más que una institución, este espacio busca ser un verdadero hogar cimentado en la caridad y el respeto, donde cada adulto mayor es valorado como un tesoro vivo. Aquí, la caridad no es solo asistencia, es el compromiso de ofrecerles una vida digna. <br><br><b>¿Cómo puedes ayudar?</b> Tú también puedes ser parte de <i>Los Amigos del Abuelo</i> a través de aportes de alimentos, medicinas, artículos de higiene, o brindando tu tiempo en el voluntariado. Cada gesto, por pequeño que sea, nos ayuda a sostener este espacio de caridad y esperanza. <br><br><b>Horarios de visitas:</b>',
        items: ['Martes a jueves <br>de 2:00 a 5:00 PM.', 'Domingos <br>de 10:00 AM a 4:00 PM.']
    }, {
        nombre: 'Columbario',
        icon: 'hexagon',
        desc: 'El columbario es un lugar sagrado, donde las cenizas de nuestros seres queridos reposan en la paz del Señor y la memoria se convierte en oración constante. Este lugar de esperanza refleja nuestra fe en la resurrección, ofreciendo a las familias un entorno digno y cercano para honrar a quienes ya han partido a la Casa del Padre. <br><br>Si deseas información sobre la adquisición de nichos, puedes contactar con la Cuasiparroquia. <br><br><b>Requisitos:</b>',
        items: ['Certificado de defunción.', 'Certificado de cremación.', 'Cédula de identidad del difunto.', 'Cédula de identidad y Rif del familiar responsable.']
    }, {
        nombre: 'Casa de Retiros',
        icon: 'cottage',
        desc: 'Un lugar de paz y encuentro en el corazón de nuestra Cuasiparroquia. Nuestra Casa de Retiros es un espacio sagrado diseñado para el recogimiento del alma, donde grupos y comunidades pueden apartarse del ruido del mundo para escuchar la voz de Dios. Es el escenario ideal para retiros, convivencias y jornadas de oración que buscan renovar el espíritu y fortalecer los lazos de fraternidad. <br><br><b>Bondades:</b>:',
        items: ['Comedor.', 'Espacios abiertos.', 'Salón de reuniones.', 'Habitaciones compartidas.', 'Capacidad hasta para 60 personas.', 'Capilla con la presencia del Santísimo.']
    }].map(o => `
        <div class="acordeon">
            <div class="cabecera-acordeon" data-accion="toggle-acordeon">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span class="material-icons-round" style="color: var(--oro);">${o.icon}</span> 
                    ${o.nombre}
                </div>
                <span class="material-icons-round flecha">chevron_right</span>
            </div>
            <div class="contenido-acordeon contenido-conectado">
                <div class="contenido-caja">
                    <p>${o.desc}</p>
                    <ul class="lista-bondades">
                        ${o.items.map(i => `<li><span class="material-icons-round">check</span> ${i}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join(''),

    'Devocionario': `
        <div class="acordeon">
            <div class="cabecera-acordeon" data-accion="toggle-acordeon">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span class="material-icons-round" style="color: var(--oro);">menu_book</span> Oraciones cotidianas
                </div>
                <span class="material-icons-round flecha">chevron_right</span>
            </div>
            <div class="contenido-acordeon contenido-conectado">
                <div class="contenido-caja">
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Señal de la Cruz">Señal de la Cruz <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Padre nuestro">Padre nuestro <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Avemaría">Avemaría <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Gloria">Gloria <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Yo Confieso">Yo Confieso <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Acto de Contrición">Acto de Contrición <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Credo">Credo <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Salve">Salve <span>Ver</span></div>
                </div>
            </div>
        </div>
        <div class="acordeon">
            <div class="cabecera-acordeon" data-accion="toggle-acordeon">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span class="material-icons-round" style="color: var(--oro);">menu_book</span> Oraciones varias
                </div>
                <span class="material-icons-round flecha">chevron_right</span>
            </div>
            <div class="contenido-acordeon contenido-conectado">
                <div class="contenido-caja">
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Ángel de la guarda">Ángel de la guarda <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Alma de Cristo">Alma de Cristo <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Angelus">Angelus <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Acuérdate">Acuérdate <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Tu pureza">Tu pureza <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="A la Sagrada Familia">A la Sagrada Familia <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="A San José">A San José <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Benedictus">Benedictus <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Magnificat">Magnificat <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Corazón de Jesús">Corazón de Jesús <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Letanías de San José">Letanías de San José <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="A San Miguel Arcángel">A San Miguel Arcángel<span>Ver</span></div>
                </div>
            </div>
        </div>
        <div class="acordeon">
            <div class="cabecera-acordeon" data-accion="toggle-acordeon">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span class="material-icons-round" style="color: var(--oro);">menu_book</span> Santo Rosario
                </div>
                <span class="material-icons-round flecha">chevron_right</span>
            </div>
            <div class="contenido-acordeon contenido-conectado">
                <div class="contenido-caja">
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Misterios Gozosos">Misterios Gozosos <span>(lun y sáb)</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Misterios Luminosos">Misterios Luminosos <span>(jueves)</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Misterios Dolorosos">Misterios Dolorosos <span>(mar y vie)</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Misterios Gloriosos">Misterios Gloriosos <span>(mie y dom)</span></div>
                </div>
            </div>
        </div>
        <div class="acordeon">
            <div class="cabecera-acordeon" data-accion="toggle-acordeon">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span class="material-icons-round" style="color: var(--oro);">menu_book</span> Novenas
                </div>
                <span class="material-icons-round flecha">chevron_right</span>
            </div>
            <div class="contenido-acordeon contenido-conectado">
                <div class="contenido-caja">
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Novena a la Virgen de Coromoto">A la Virgen de Coromoto <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Novena a San José">Novena a San José <span>Ver</span></div>
                </div>                    
            </div>
        </div>
        <div class="acordeon">
            <div class="cabecera-acordeon" data-accion="toggle-acordeon">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span class="material-icons-round" style="color: var(--oro)">menu_book</span> Coronillas
                </div>
                <span class="material-icons-round flecha">chevron_right</span>
            </div>
            <div class="contenido-acordeon contenido-conectado">
                <div class="contenido-caja">
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Coronilla de San José">Coronilla de San José <span>Ver</span></div>
                </div>
            </div>
        </div>
        <div class="acordeon">
            <div class="cabecera-acordeon" data-accion="toggle-acordeon">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span class="material-icons-round" style="color: var(--oro)">menu_book</span> Del Catecismo
                </div>
                <span class="material-icons-round flecha">chevron_right</span>
            </div>
            <div class="contenido-acordeon contenido-conectado">
                <div class="contenido-caja">
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Mandamientos">Mandamientos <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Sacramentos">Sacramentos <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Obras de Misericordia Corporales">Obras de Misericordia Corporales <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Obras de Misericordia Espirituales">Obras de Misericordia Espirituales <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Preparación para la confesión">Preparación para la confesión <span>Ver</span></div>
                    <div class="enlace-oracion" data-accion="abrir-subpanel" data-valor="Los siete dones del Espíritu Santo">Los siete dones del Espíritu Santo <span>Ver</span></div>
                </div>
            </div>
        </div>
    `,

    'Sacramentos': [{
        nombre: 'Bautismo',
        icon: 'water_drop',
        desc: 'El sacramento del Bautismo es el fundamento de toda la vida cristiana, la puerta que abre el acceso a los demás sacramentos. A través del agua y la invocación de la Santísima Trinidad, el fiel es purificado del pecado original, nace a una vida nueva como hijo de Dios y pasa a formar parte viva de la Iglesia, el Cuerpo de Cristo. <br><br><b>Requisitos</b>',
        items: ['Partida de Nacimiento del niño', 'Un padrino, una madrina o ambos', 'Copia de Cédula de los padrinos', 'Charla pre-bautismal']
    }, {
        nombre: 'Comunión',
        icon: 'spa',
        desc: 'El sacramento de la Comunión, también conocido como la Sagrada Eucaristía, es el centro y la cumbre de la vida cristiana. En este acto, el cristiano recibe el Cuerpo y la Sangre de Jesucristo bajo las especies del pan y el vino. Es un alimento espiritual que nutre el alma, fortalece nuestra unión con Dios y nos hace partícipes del sacrificio de Cristo en la Cruz. <br><br>El próximo período de inscripciones a catequesis será en septiembre de 2026. <br><br><b>Requisitos:</b>',
        items: ['Representante legal', 'Fe de bautizo actualizada', 'Tercer grado aprobado', 'Asistir a catequesis']
    }, {
        nombre: 'Confirmación',
        icon: 'whatshot',
        desc: 'El sacramento de la Confirmación es el acto mediante el cual el bautizado fortalece su unión con la Iglesia y recibe una efusión especial de los dones del Espíritu Santo. Es la ratificación de la fe iniciada en el Bautismo, que marca al cristiano con un sello espiritual indeleble y lo compromete a ser testigo de Cristo en el mundo a través de sus palabras y acciones. <br><br>El próximo período de inscripciones a catequesis será en septiembre de 2026. <br><br><b>Requisitos:</b>',
        items: ['Representante legal', 'Fe de bautizo actualizada', '13 años mínimo', 'Un padrino o una madrina', 'Asistir a catequesis']
    }, {
        nombre: 'Confesión',
        icon: 'add_box',
        desc: 'El sacramento de la confesión, también conocido como Reconciliación o Penitencia, es el acto mediante el cual el fiel confiesa sus pecados al sacerdote para recibir el perdón de Dios y la sanación del alma. Es un encuentro de misericordia que restaura la gracia perdida por el pecado y reconcilia al cristiano con la Iglesia. <br><br><b>Pasos a seguir:</b>',
        items: ['Examen de conciencia', 'Dolor de corazón', 'Propósito de enmienda', 'Decir los pecados al confesor', 'Cumplir la penitencia']
    }, {
        nombre: 'Unción de los Enfermos',
        icon: 'opacity',
        desc: 'El sacramento de la Unción de los enfermos, anteriormente llamado extremaunción, es el acto mediante el cual la Iglesia acude en ayuda del fiel cuya salud se encuentra debilitada por la enfermedad o la vejez. Es un encuentro de consuelo y fortaleza que otorga una gracia especial del Espíritu Santo para sanar el alma, aliviar el sufrimiento corporal si conviene a la salvación, y unir el dolor del enfermo a la Pasión de Cristo. <br><br><b>Requisitos:</b>',
        items: ['Haber recibido el bautismo', 'Petición del sacramento']
    }, {
        nombre: 'Orden Sagrado',
        icon: 'account_circle',
        desc: 'El sacramento del Orden Sagrado es el acto mediante el cual la misión confiada por Cristo a sus apóstoles sigue siendo ejercida en la Iglesia hasta el fin de los tiempos. A través de la imposición de manos del Obispo y la oración consecratoria, el fiel recibe un sello espiritual que lo configura con Cristo Cabeza, Pastor, Esposo y Siervo, otorgándole la potestad sagrada para administrar los sacramentos, predicar el Evangelio y guiar a la comunidad de cristiana. <br><br><b>Requisitos:</b>',
        items: ['Discernimiento vocacionnal', 'Formación', 'Promesas de pobreza, castidad y obediencia.']
    }, {
        nombre: 'Matrimonio',
        icon: 'people',
        desc: 'El sacramento del Matrimonio es el acto mediante el cual un hombre y una mujer establecen entre sí una alianza para toda la vida, ordenada por su misma naturaleza al bien de los cónyuges y a la generación y educación de los hijos. En este sacramento, el amor humano es elevado a la dignidad del amor divino, convirtiéndose en un signo visible de la unión entre Cristo y su Iglesia, basado en el consentimiento libre, la fidelidad y la indisolubilidad. <br><br><b>Requisitos:</b>',
        items: ['Fe de Bautismo actualizada', 'Certificado de Confirmación', 'Curso Prematrimonial', 'Expediente parroquial']
    },].map(s => `
        <div class="acordeon">
            <div class="cabecera-acordeon" data-accion="toggle-acordeon">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span class="material-icons-round" style="color: var(--oro);">${s.icon}</span> 
                    ${s.nombre}
                </div>
                <span class="material-icons-round flecha">chevron_right</span>
            </div>
            <div class="contenido-acordeon contenido-conectado">
                <div class="contenido-caja">
                    <p>${s.desc}</p>
                    <ul class="lista-bondades">
                        ${s.items.map(i => `<li><span class="material-icons-round">check</span> ${i}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join(''),

    'Apoyar': `
        <div class="caja-info">
            <h4><span class="material-icons-round">payments</span> Pago Móvil</h4>
            <div class="contenido-caja">
                <div class="linea-horaria"><span>Bancamiga</span>0172</div>
                <div class="linea-horaria"><span>RIF (comercio)</span>504929760</div>
                <div class="linea-horaria"><span>Teléfono</span>04142711341</div>
            </div>
        </div>
        <div class="caja-info">
            <h4><span class="material-icons-round">account_balance</span> Transferencia</h4>
            <div class="contenido-caja">
                <p style="margin-bottom: 0;"><b>A nombre de:</b></p>
                <p style="margin-top: 0; font-family: monospace; background: #eee; padding: 4px 8px; border-radius: 5px; font-size: 0.85rem;">
                    Cuasiparroquia Nuestra <br>Señora de Coromoto
                </p>
                <p style="margin-bottom: 0;"><b>Cuenta Corriente:</b></p>
                <p style="margin-top: 0; font-family: monospace; background: #eee; padding: 4px 8px; border-radius: 5px; font-size: 0.85rem;">
                    0172-0131-0113-1578-4742
                </p>
                <p style="margin-bottom: 0;"><b>RIF:</b></p>
                <p style="margin-top: 0; font-family: monospace; background: #eee; padding: 4px 8px; border-radius: 5px; font-size: 0.85rem;">
                    J-504929760
                </p>
            </div>
        </div>
        <div style="text-align: center;">
            <p style="margin-top: 10px; font-size: 0.75rem; color: #888;">
                Por favor, enviar el comprobante a <br><a href="mailto:cuasicoromoto@gmail.com" style="text-decoration: none; color: inherit;">
                <span style="font-size:1rem; color: var(--vinotinto)">cuasicoromoto@gmail.com</span></a>
            </p>
            <p style="margin-top: 10px; font-size: 0.75rem; color: #888;">
                También puedes comunicarte vía WhatsApp<br>
                <a href="https://wa.me/584142711341" target="_blank" style="text-decoration: none; color: inherit;">
                <span style="font-size:1rem; color: var(--vinotinto);">0414 2711341</span></a>
            </p>
        </div>
    `,

    'Recursos': `
        <div class="caja-info">
            <h4><span class="material-icons-round">link</span> Enlaces de Interés</h4>
            <div class="contenido-caja">
                <a href="https://conferenciaepiscopalvenezolana.com/" target="_blank" class="enlace-web">
                    Conferencia Episcopal Venezolana <span>Ir</span>
                </a>
                <a href="https://ompvzla.com/" target="_blank" class="enlace-web">
                    Obras Misionales Pontificias Venezuela <span>Ir</span>
                </a>
                <a href="https://www.aciprensa.com/" target="_blank" class="enlace-web">
                    Aciprensa <span>Ir</span>
                </a>
            </div>
        </div>

        <div class="caja-info">
            <h4><span class="material-icons-round">folder_open</span> Documentos</h4>
            <div class="contenido-caja">
                <div>
                    Próximamente...
                </div>
                <!--
                <div class="enlace-oracion">Hoja Dominical <span>PDF</span></div>
                <div class="enlace-oracion">Planilla de Inscripción <span>PDF</span></div>
                -->
            </div>
        </div>
    `
};

const panel = document.getElementById('panel');
const subPanel = document.getElementById('sub-panel');
const capaOscura = document.getElementById('capa-oscura');
const tituloPanel = document.getElementById('titulo-panel');
const contenidoPanel = document.getElementById('contenido-panel');
const subTitulo = document.getElementById('sub-titulo');
const subContenido = document.getElementById('sub-contenido');

const oracionesSinAmen = ['Angelus', 'A San José', 'Misterios Gozosos', 'Misterios Luminosos', 'Misterios Dolorosos', 'Misterios Gloriosos', 'Novena a la Virgen de Coromoto', 'Mandamientos', 'Sacramentos', 'Obras de Misericordia Corporales', 'Obras de Misericordia Espirituales', 'Preparación para la confesión', 'Los siete dones del Espíritu Santo'];

window.cargarDiaNovena = (diaIndex, tipo) => {
    let diasData = [];
    if (tipo === 'sanjose')
        diasData = diasNovenaSanJose;
    if (tipo === 'coromoto')
        diasData = diasNovenaCoromoto;

    const contenidoDiv = document.getElementById('contenido-novena');
    if (!contenidoDiv || !diasData[diaIndex])
        return;

    // Resaltar botón activo
    document.querySelectorAll('.btn-dia').forEach((btn, idx) => {
        if (idx === diaIndex)
            btn.classList.add('activo');
        else
            btn.classList.remove('activo');
    }
    );

    contenidoDiv.innerHTML = `
        <h4 style="color:var(--vinotinto); margin-bottom:0.5rem;">${diasData[diaIndex].titulo}</h4>
        <p>${diasData[diaIndex].texto}</p>
    `;
};

async function abrirPanel(titulo) {
    tituloPanel.innerText = titulo;
    panel.classList.add('abierto');
    capaOscura.classList.add('activa');

    if (titulo === 'Avisos Cuasiparroquiales') {
        // Llama a la nueva función si tocamos los avisos
        await cargarAvisosDesdeAppsScript();
    } else {
        // Carga normal para el resto de apartados (horarios, devocionario, etc.)
        const contenido = datos[titulo];
        if (!contenido) {
            console.error(`Contenido no encontrado para el título: ${titulo}`);
            return;
        }
        contenidoPanel.innerHTML = contenido;
    }
}

function abrirSubPanel(nombre) {
    if (!nombre)
        return;
    subTitulo.innerText = nombre;
    /*let texto = oracionesTexto[nombre] || "<p>Texto de la oración próximamente.</p>";*/
    let texto = oracionesDinamicas[nombre] || oracionesTexto[nombre] || "<p>Descargando oración o no disponible...</p>";

    // Eliminamos "Amén" si viene en el texto original (con o sin punto, y opcionalmente seguido de etiquetas de cierre)
    texto = texto.replace(/Amén\.?\s*(<\/p>)?$/i, '$1');

    // Verificamos si esta oración está en la lista de exclusión
    const mostrarAmen = !oracionesSinAmen.includes(nombre);

    subContenido.innerHTML = `
        <div class="contenedor-oracion-liturgica">
            <div class="texto-oracion">
                ${texto}
            </div>
            ${mostrarAmen ? '<span class="amen-final">Amén</span>' : ''}
        </div>
    `;
    subContenido.scrollTop = 0;
    subPanel.classList.add('abierto');
}

function cerrarPanel() {
    panel.classList.remove('abierto');
    capaOscura.classList.remove('activa');
}

function cerrarSubPanel() {
    subPanel.classList.remove('abierto');
}

function cerrarTodo() {
    cerrarPanel();
    cerrarSubPanel();
}

// Mapa para convertir el nombre del mes a número y poder hacer cálculos
const mesesMapeo = {
    "enero": 0, "febrero": 1, "marzo": 2, "abril": 3, "mayo": 4, "junio": 5,
    "julio": 6, "agosto": 7, "septiembre": 8, "setiembre": 8, "octubre": 9, "noviembre": 10, "diciembre": 11
};

// Función que procesa los datos, filtra fechas pasadas y construye el HTML
function renderizarAvisos(avisos) {
    // 1. Obtenemos la fecha de HOY (y le quitamos las horas para comparar días exactos)
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    // 2. Filtramos el listado dejando solo los eventos de hoy y del futuro
    const avisosFuturos = avisos.filter(aviso => {
        if (!aviso.mes || !aviso.dia) return false;

        try {
            // Separamos "Marzo 2026" en mes y año
            const partesMes = aviso.mes.trim().toLowerCase().split(/\s+/);
            const nombreMes = partesMes[0];
            const anio = parseInt(partesMes[1]) || hoy.getFullYear(); // Si olvidas poner el año en el sheet, asume el actual

            const mesNum = mesesMapeo[nombreMes];

            // TRUCO: Extraemos el último número del día. 
            // Si escribes "12 al 15", la app tomará el "15" y dejará de mostrarlo el día 16.
            const numerosDia = aviso.dia.toString().match(/\d+/g);
            const diaNum = numerosDia ? parseInt(numerosDia[numerosDia.length - 1]) : NaN;

            // Si todo está correcto, calculamos si ya pasó
            if (mesNum !== undefined && !isNaN(diaNum)) {
                const fechaEvento = new Date(anio, mesNum, diaNum);
                return fechaEvento >= hoy; // Devuelve TRUE si es hoy o en el futuro
            }

            // Si el formato es un texto libre (ej: "Por definir"), no lo ocultamos por si acaso
            return true;
        } catch (e) {
            return true;
        }
    });

    // 3. Si no hay eventos futuros
    if (avisosFuturos.length === 0) {
        return '<div style="text-align:center; padding: 40px 20px; color: #888;">No hay nuevos avisos programados por el momento.</div>';
    }

    // 4. Construimos el HTML solo con los avisos futuros
    let html = '';
    let mesActual = '';
    let grupoAbierto = false;

    avisosFuturos.forEach(aviso => {
        if (aviso.mes !== mesActual) {
            if (grupoAbierto) html += `</div>`; // Cierra el mes anterior
            html += `<div class="encabezado-mes">${aviso.mes}</div><div class="grupo-timeline">`;
            mesActual = aviso.mes;
            grupoAbierto = true;
        }

        // AQUÍ ESTÁ LA MAGIA: Convertimos los saltos de línea de Sheets a HTML
        const descripcionFormateada = aviso.desc.replace(/\n/g, '<br>');

        html += `
            <div class="aviso-fila">
                <div class="aviso-fecha">
                    <b>${aviso.dia}</b>
                    <span>${aviso.diaSemana}</span>
                </div>
                <div class="aviso-contenido">
                    <h4>${aviso.titulo}</h4>
                    <p>${aviso.lugar ? `<b>${aviso.lugar} - </b>` : ''}${descripcionFormateada}</p>
                </div>
            </div>
        `;
    });

    if (grupoAbierto) html += `</div>`;
    return html;
}

async function cargarAvisosDesdeAppsScript() {
    // RECUERDA PONER AQUÍ LA URL DE TU SCRIPT
    const webAppUrl = 'https://script.google.com/macros/s/AKfycbyWYf7jJAm794SohA8UBj62wjYDur2I2mgLjrL5-mCEjLcs9qq-gtLLc0n9h0xijlzO/exec?tipo=Avisos';
    /*const webAppUrl = 'https://script.google.com/macros/s/AKfycbw0-_dLWDfhLxXzmkrMBehYj5jL31rNn7CVQ6qsZ_Phvd5ToTzzgEuSUqAPdVwapfC1/exec';*/

    // A. Revisamos si hay datos guardados (Ahora guardamos el JSON crudo, no el HTML)
    const avisosGuardados = localStorage.getItem('avisos_cuasiparroquiales_json');
    if (avisosGuardados) {
        try {
            const avisos = JSON.parse(avisosGuardados);
            contenidoPanel.innerHTML = renderizarAvisos(avisos); // Renderiza y oculta los que acaban de expirar
        } catch (e) {
            contenidoPanel.innerHTML = '<div style="text-align:center; padding: 20px; font-weight: bold; color: var(--vinotinto);">Cargando avisos...</div>';
        }
    } else {
        contenidoPanel.innerHTML = '<div style="text-align:center; padding: 20px; font-weight: bold; color: var(--vinotinto);">Cargando avisos...</div>';
    }

    // B. Conexión a internet para buscar eventos nuevos
    if (navigator.onLine) {
        try {
            const response = await fetch(webAppUrl);
            const avisos = await response.json();

            // C. Refrescamos la pantalla con los nuevos datos filtrados
            contenidoPanel.innerHTML = renderizarAvisos(avisos);

            // D. Guardamos el JSON crudo para la próxima vez
            localStorage.setItem('avisos_cuasiparroquiales_json', JSON.stringify(avisos));

        } catch (error) {
            console.error("Error al cargar desde Google:", error);
            if (!avisosGuardados) {
                contenidoPanel.innerHTML = '<div style="text-align:center; padding: 20px; color: #888;">No hay conexión a internet y no hay avisos recientes guardados.</div>';
            }
        }
    }
}

// Esta función sirve para pedir CUALQUIER pestaña de oraciones a Google Sheets
async function cargarCategoriaOraciones(categoria) {
    const webAppUrl = `https://script.google.com/macros/s/AKfycbxebCOoaQsZP9ppnb9GGCkZHgs2062fdQtTNoN0I2OLEWLYBKWcrumgM7OjhBBMKRb6/exec?tipo=${categoria}`;

    // 1. Cargar desde la memoria local (offline) SOLO si la variable está vacía
    if (Object.keys(oracionesDinamicas).length === 0) {
        const oracionesGuardadas = localStorage.getItem('oraciones_cuasiparroquia_json');
        if (oracionesGuardadas) {
            try {
                oracionesDinamicas = JSON.parse(oracionesGuardadas);
            } catch (e) { console.error("Error leyendo oraciones locales"); }
        }
    }

    // 2. Intentar actualizar desde internet en segundo plano
    if (navigator.onLine) {
        try {
            const response = await fetch(webAppUrl);
            const data = await response.json();

            // En lugar de crear un objeto nuevo, AGREGAMOS las oraciones a la caja general
            data.forEach(item => {
                if (item.nombre) {
                    oracionesDinamicas[item.nombre.trim()] = item.texto;
                }
            });

            // Actualizamos el LocalStorage con TODAS las oraciones combinadas
            localStorage.setItem('oraciones_cuasiparroquia_json', JSON.stringify(oracionesDinamicas));

        } catch (error) {
            console.error(`Error al actualizar la categoría ${categoria}:`, error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Cargar oraciones en segundo plano
    cargarCategoriaOraciones('OracionesCotidianas');
    cargarCategoriaOraciones('OracionesVarias');
    cargarCategoriaOraciones('Novenas');
    cargarCategoriaOraciones('Coronillas');
    cargarCategoriaOraciones('DelCatecismo');

    document.querySelectorAll('[data-abrir-panel]').forEach(el => {
        el.addEventListener('click', () => {
            abrirPanel(el.dataset.abrirPanel);
        }
        );
    }
    );

    contenidoPanel.addEventListener('click', (e) => {
        const acordeonHeader = e.target.closest('[data-accion="toggle-acordeon"]');
        if (acordeonHeader) {
            const acordeonActual = acordeonHeader.parentElement;
            const yaEstabaAbierto = acordeonActual.classList.contains('activo');

            // Cierra todos los acordeones en el panel
            contenidoPanel.querySelectorAll('.acordeon').forEach(a => {
                a.classList.remove('activo');
            }
            );

            // Si no estaba abierto, ábrelo
            if (!yaEstabaAbierto) {
                acordeonActual.classList.add('activo');

                // Desplazar el scroll para que su contenido se vea completo
                setTimeout(() => {
                    acordeonActual.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        }

        const abrirSubBtn = e.target.closest('[data-accion="abrir-subpanel"]');
        if (abrirSubBtn) {
            abrirSubPanel(abrirSubBtn.dataset.valor);
        }
    }
    );

    document.querySelectorAll('.boton-cerrar').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.closest('#sub-panel'))
                cerrarSubPanel();
            else if (btn.closest('#panel'))
                cerrarPanel();
        }
        );
    }
    );

    capaOscura.addEventListener('click', cerrarTodo);
}
);

/* --- LÓGICA DE INSTALACIÓN PWA --- */
let deferredPrompt;
const installBanner = document.getElementById('pwa-install-banner');
const installBtn = document.getElementById('pwa-install-btn');
const closeBanner = document.getElementById('pwa-close-banner');

window.addEventListener('beforeinstallprompt', (e) => {
    // Evita que el navegador muestre el aviso automático
    e.preventDefault();
    // Guarda el evento para poder activarlo después
    deferredPrompt = e;
    // Muestra nuestro banner personalizado
    if (installBanner) {
        installBanner.style.display = 'flex';
    }
}
);

if (installBtn) {
    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt)
            return;
        // Muestra el prompt de instalación nativo
        deferredPrompt.prompt();
        // Espera a que el usuario responda
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`Usuario eligió: ${outcome}`);
        // Limpia el evento
        deferredPrompt = null;
        // Oculta el banner
        if (installBanner)
            installBanner.style.display = 'none';
    }
    );
}

if (closeBanner) {
    closeBanner.addEventListener('click', () => {
        if (installBanner)
            installBanner.style.display = 'none';
    }
    );
}

window.addEventListener('appinstalled', (event) => {
    console.log('PWA instalada con éxito');
    if (installBanner)
        installBanner.style.display = 'none';
}
);
