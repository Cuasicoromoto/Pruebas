// =============================================================
//  ORACIONES  –  Base de datos local de la PWA
//  Cuasiparroquia Nuestra Señora de Coromoto
//
//  Para agregar una oración nueva:
//    1. Ubica su sección y agrégala al final del objeto.
//    2. Usa el formato:  "Nombre de la oración": `<p>Texto aquí</p>`,
//    3. Para salto de línea dentro del texto usa: <br>
//    4. Para cursiva (respuestas y jaculatorias): <i>texto</i>
//    5. Para negrita (títulos dentro del texto):  <b>texto</b>
// =============================================================


// ==========================================================
//  ORACIONES COTIDIANAS
// ==========================================================
const oracionesCotidianas = {

    "Señal de la Cruz": `
        <p>Por la señal de la Santa Cruz <br>
        de nuestros enemigos <br>
        líbranos Señor, Dios nuestro. <br>
        <br>
        En el nombre del Padre, <br>
        y del Hijo, <br>
        y del Espíritu Santo.</p>
    `,

    "Padre nuestro": `
        <p>Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo.<br>
        <br>
        Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal.</p>
    `,

    "Avemaría": `
        <p>Dios te salve, María, llena eres de gracia; el Señor es contigo. Bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús.<br>
        <br>
        Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte.</p>
    `,

    "Gloria": `
        <p>Gloria al Padre, <br>
        y al Hijo, <br>
        y al Espíritu Santo.<br>
        <br>
        Como era en el principio, <br>
        ahora y siempre, <br>
        por los siglos de los siglos.</p>
    `,

    "Yo Confieso": `
        <p>Yo confieso ante Dios Todopoderoso, y ante ustedes hermanos que he pecado mucho de pensamiento, palabra, obra y omisión.<br>
        <br>
        Por mi culpa, por mi culpa, por mi gran culpa.<br>
        <br>
        Por eso ruego a Santa María siempre Virgen, a los ángeles, a los santos y a ustedes hermanos, que intercedan por mí ante Dios, Nuestro Señor.</p>
    `,

    "Acto de Contrición": `
        <p>Jesús, mi Señor y Redentor: Yo me arrepiento de todos los pecados que he cometido hasta hoy, y me pesa de todo corazón, porque con ellos he ofendido a un Dios tan bueno.<br>
        <br>
        Propongo firmemente no volver a pecar, y confío en que, por tu infinita misericordia, me has de conceder el perdón de mis culpas y me has de llevar a la vida eterna.</p>
    `,

    "Credo": `
        <p>Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos.<br>
        <br>
        Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna.</p>
    `,

    "Salve": `
        <p>Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A Ti llamamos los desterrados hijos de Eva; a Ti suspiramos, gimiendo y llorando, en este valle de lágrimas. <br>
        <br>
        Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. <br>
        <br>
        ¡Oh clementísima, oh piadosa, <br>
        oh dulce Virgen María! <br>
        <br>
        Ruega por nosotros Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo.</p>
    `,

};


// ==========================================================
//  ORACIONES VARIAS
// ==========================================================
const oracionesVarias = {

    "Ángel de la guarda": `
        <p>Angel de mi guarda, <br>
        dulce compañía <br>
        no me desampares <br>
        ni de noche ni de día, <br>
        no me dejes solo <br>
        pues sin ti me perdería.</p>
    `,

    "Alma de Cristo": `
        <p class="jaculatoria texto-normal">Alma de Cristo, <br>
        <i>santifícame.</i> <br>
        <br>
        Cuerpo de Cristo, <br>
        <i>sálvame.</i> <br>
        <br>
        Sangre de Cristo, <br>
        <i>embriágame.</i> <br>
        <br>
        Agua del costado de Cristo, <br>
        <i>lávame.</i> <br>
        <br>
        Pasión de Cristo, <br>
        <i>confórtame. </i> <br>
        <br>
        ¡Oh, buen Jesús! <br>
        <i>óyeme.</i> <br>
        <br>
        Dentro de tus llagas, <br>
        <i>escóndeme. </i> <br>
        <br>
        No permitas Señor, <br>
        <i>que me aparte de Ti.</i> <br>
        <br>
        Del enemigo malo, <br>
        <i>defiéndeme. </i> <br>
        <br>
        En la hora de mi muerte, <br>
        <i>llámame, </i> <br>
        <br>
        Y mándame ir a Ti <br>
        <i>para que con tus Santos te alaben por los siglos de los siglos.</i> <br>
        <br>
        Amén.</p>
    `,

    "Angelus": `
        <p class="jaculatoria texto-normal"><b>V.</b> El ángel del Señor anunció a María. <br>
        <b>R.</b> <i>Y concibió por obra y gracia del Espíritu Santo.</i></p>
        <br>
        <p>Dios te salve, María...</p>
        <br>
        <p class="jaculatoria"><b>V.</b> He aquí la esclava del Señor. <br>
        <b>R.</b> <i>Hágase en mí según tu palabra.</i></p>
        <br>
        <p>Dios te salve, María...</p>
        <br>
        <p class="jaculatoria"><b>V.</b> Y el Verbo se hizo carne. <br>
        <b>R.</b> <i>Y habitó entre nosotros.</i> </p>
        <br>
        <p>Dios te salve, María...</p>
        <br>
        <p class="jaculatoria"><b>V.</b> Ruega por nosotros, santa Madre de Dios. <br>
        <b>R.</b> <i>Para que seamos dignos de alcanzar las divinas promesas de Nuestro Señor Jesucristo.</i></p>
        <br>
        <p><b>V.</b> Infunde, Señor, tu gracia en nuestras almas, para que los que por el anuncio del ángel hemos conocido la Encarnación de tu Hijo Jesucristo, por los méritos de su Pasión y su Cruz lleguemos a la gloria de la Resurrección. Por el mismo Jesucristo, nuestro Señor. <br>
        <br>
        <b>R.</b> <i>Amén.</i> <br>
        <br>
        Gloria al Padre... (tres veces)</p>
    `,

    "Acuérdate": `
        <p>Acuérdate, oh piadosísima Virgen María, que jamás se ha oído decir que ninguno de los que han acudido a tu protección, implorando tu asistencia y reclamando tu socorro, haya sido abandonado de ti.<br>
        <br>
        Animado con esta contianza, a ti también acudo, oh Madre, Virgen de las vírgenes, aunque gimiendo bajo el peso de mis pecados, me atrevo a comparecer ante tu presencia soberana.<br>
        <br>
        No deseches mis humildes súplicas, oh Madre del Verbo divino, antes bien, escúchalas y acógelas benignamente. <br>
        <br>
        Amén.</p>
    `,

    "Tu pureza": `
        <p>Bendita sea tu pureza <br>
        y eternamente lo sea, <br>
        pues todo un Dios se recrea <br>
        en tan graciosa belleza. <br>
        <br>
        A ti, celestial princesa, <br>
        Virgen Sagrada María, <br>
        te ofrezco en este día <br>
        alma, vida y corazón. <br>
        <br>
        Mírame con compasión <br>
        y no me dejes, madre mía.</p>
    `,

    "A la Sagrada Familia": `
        <p>JESÚS, Hijo de Dios e Hijo de María, bendice a nuestra familia. Inspira bondadosamente en nosotros la unidad, la paz y el amor mutuo que tú encontraste en Tu propia familia en la pequeña aldea de Nazaret. <br>
        <br>
        MARÍA, Madre de Jesús y Nuestra Madre, sustenta a nuestra familia con tu fe y tu amor. Consérvanos cerca de tu Hijo, Jesús, en todas nuestras alegrías y en nuestras penas. <br>
        <br>
        JOSÉ, Padre adoptivo de Jesús, guardián y esposo de María, protege a nuestra familia del peligro. Auxílianos en todos los momentos de desánimo y ansiedad. <br>
        <br>
        SAGRADA FAMILIA DE NAZARET, haz a nuestra familia una contigo. Ayúdanos a ser instrumentos de paz. Concédenos que el amor, fortalecido por la gracia, pruebe ser más fuerte que las debilidades y las pruebas que nuestra familia a veces atraviesa. Que siempre tengamos a Dios en el centro de nuestros corazones y hogares hasta que todos seamos una sola familia, feliz y en paz en nuestro verdadero hogar contigo. <br>
        <br>
        Amén.</p>
    `,

    "A San José": `
        <h3>1. Custodio del Redentor</h3>
        <p class="texto-normal">Salve, custodio del Redentor<br>
        y esposo de la Virgen María.<br>
        <br>
        A ti Dios confió a su Hijo,<br>
        en ti María depositó su confianza,<br>
        contigo Cristo se forjó como hombre.<br>
        <br>
        Oh, bienaventurado José,<br>
        muéstrate padre también a nosotros<br>
        y guíanos en el camino de la vida.<br>
        <br>
        Concédenos gracia, <br>
        misericordia y valentía,<br>
        y defiéndenos de todo mal. Amén.</p>
        <br>
        <h3>2. Custodio y padre</h3>
        <p>Custodio y padre de vírgenes, San José, a cuya fiel custodia fueron encomendadas la misma inocencia. Cristo Jesús y la Virgen de las vírgenes María: por estas dos queridísimas prendas, Jesús y María, te ruego y te suplico me alcances que, preservado de toda impureza, sirva siempre con alma limpia, corazón puro y cuerpo casto a Jesús y a María. Amén.</p>
        <br>
        <h3>3. Glorioso patriarca San José</h3>
        <p>Glorioso patriarca san José, cuyo poder sabe hacer posibles las cosas imposibles, ven en mi ayuda en estos momentos de angustia y dificultad.<br>
        <br>
        Toma bajo tu protección las situaciones tan graves y difíciles que te confío, para que tengan una buena solución.<br>
        <br>
        Mi amado Padre, toda mi confianza está puesta en ti. Que no se diga que te haya invocado en vano y, como puedes hacer todo con Jesús y María, muéstrame que tu bondad es tan grande como tu poder. Amén.</p>
    `,

    "Benedictus": `
        <p>Bendito sea el Señor, Dios de Israel, porque ha visitado y redimido a su pueblo, suscitándonos una fuerza de salvación en la casa de David, su siervo, según lo había predicho desde antiguo por boca de sus santos Profetas.<br>
        <br>
        Es la salvación que nos libra de nuestros enemigos y de la mano de todos los que nos odian, realizando la misericordia que tuvo con nuestros padres, recordando su santa alianza y el juramento que juró a nuestro padre Abrahán.<br>
        <br>
        Para concedernos que, libres de temor, arrancados de la mano de los enemigos, le sirvamos con santidad y justicia, en su presencia, todos nuestros días.<br>
        <br>
        Y a ti, niño, te llamarán profeta del Altísimo, porque irás delante del Señor a preparar sus caminos, anunciando a su pueblo la salvación, el perdón de sus pecados.<br>
        <br>
        Por la entrañable misericordia de nuestro Dios, nos visitará el sol que nace de lo alto, para iluminar a los que viven en tinieblas y en sombra de muerte, para guiar nuestros pasos por el camino de la paz.<br>
        <br>
        Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>
    `,

    "Magnificat": `
        <p>Proclama mi alma la grandeza del Señor, se alegra mi espíritu en Dios, mi salvador; porque ha mirado la humildad de su esclava.<br>
        <br>
        Desde ahora me felicitarán todas las generaciones, porque el Poderoso ha hecho obras grandes en mí: su nombre es santo, y su misericordia llega a sus fieles de generación en generación.<br>
        <br>
        Él hace proezas con su brazo: dispersa a los soberbios de corazón, derriba del trono a los poderosos y enaltece a los humildes, a los hambrientos los colma de bienes y a los ricos los despide vacíos.<br>
        <br>
        Auxilia a Israel, su siervo, acordándose de la misericordia -como lo había prometido a nuestros padres- en favor de Abrahán y su descendencia por siempre.<br>
        <br>
        Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>
    `,

    "Corazón de Jesús": `
        <h3>Acto de confianza en el Corazón de Jesús</h3>
        <p>Oh, Corazón de Jesús, Dios y hombre verdadero, refugio de los pecadores y esperanza de los que en ti confían. Tú nos dices amablemente: Venid a mí que soy manso y humilde de corazón; y nos repites las palabras que dijiste al paralítico: Confía, hijo mío; tus pecados te son perdonados; y a la mujer enferma: Confía, hija; tu fe te ha salvado; y a los apóstoles: Confiad, soy yo; no temáis.<br>
        <br>
        Animado con estas palabras tuyas, acudo a ti con el corazón lleno de confianza, para decirte sinceramente y desde lo más íntimo de mi alma: Corazón de Jesús, en tí confío.</p>
        <br>
        <p class="jaculatoria">En mis alegrías y tristezas, <br>
        <i>Corazón de Jesús, en tí confío.</i><br>
        <br>
        En mis negocios y empresas, <br>
        <i>Corazón de Jesús, en tí confío.</i><br>
        <br>
        En mis prosperidades y adversidades, <br>
        <i>Corazón de Jesús, en tí confío.</i><br>
        <br>
        En las necesidades de mi familia, <br>
        <i>Corazón de Jesús, en tí confío.</i><br>
        <br>
        En las tentaciones del demonio, <br>
        <i>Corazón de Jesús, en tí confío.</i><br>
        <br>
        En las instigaciones de mis propias pasiones, <br>
        <i>Corazón de Jesús, en tí confío.</i><br>
        <br>
        En las persecuciones de mis enemigos, <br>
        <i>Corazón de Jesús, en tí confío.</i><br>
        <br>
        En las murmuraciones y calumnias, <br>
        <i>Corazón de Jesús, en tí confío.</i><br>
        <br>
        En mis enfermedades y dolores, <br>
        <i>Corazón de Jesús, en tí confío.</i><br>
        <br>
        En mis defectos y pecados, <br>
        <i>Corazón de Jesús, en tí confío.</i><br>
        <br>
        En la santificación y salvación de mi alma, <br>
        <i>Corazón de Jesús, en tí confío.</i><br>
        <br>
        Siempre y en toda ocasión, <br>
        <i>Corazón de Jesús, en tí confío.</i><br>
        <br>
        En vida y en muerte, <br>
        <i>Corazón de Jesús, en tí confío.</i><br>
        <br>
        En tiempo y eternidad, <br>
        <i>Corazón de Jesús, en tí confío.</i></p>
        <br>
        <h3>Oración</h3>
        <p>Corazón de mi amable Jesús, confío y confiaré siempre en tu bondad; y, por el corazón de tu Madre, te pido que no desfallezca nunca esta mi confianza en ti, a pesar de todas las contrariedades y de todas las pruebas que tú quieras enviarme, para que, habiendo sido mi consuelo en vida, seas mi refugio en la hora de la muerte y mi gloria por toda la eternidad. <br>
        <br>
        Amén.</p>
    `,

    "Letanías de San José": `
        <h3>Letanías de San José </h3>
        <p class="jaculatoria texto-normal">Señor, ten misericordia de nosotros. <br>
        <i>Señor, ten misericordia de nosotros.</i><br>
        <br>
        Cristo, ten misericordia de nosotros. <br>
        <i>Cristo, ten misericordia de nosotros.</i><br>
        <br>
        Señor, ten misericordia de nosotros. <br>
        <i> Señor, ten misericordia de nosotros.</i><br>
        <br>
        Cristo óyenos. <br>
        <i> Cristo óyenos.</i><br>
        <br>
        Cristo escúchanos. <br>
        <i> Cristo escúchanos.</i></p>
        <br>
        <p><i>(Ten misericordia de nosotros)</i></p>
        <p class="jaculatoria">Dios, Padre celestial, <br>
        Dios, Hijo, Redentor del mundo, <br>
        Dios, Espíritu Santo, <br>
        Santísima Trinidad, un solo Dios,</p>
        <br>
        <p><i>(Ruega por nosotros)</i></p>
        <p class="jaculatoria">Santa María,<br>
        San José,<br>
        Ilustre descendiente de David, <br>
        Luz de los Patriarcas, <br>
        Esposo de la Madre de Dios, <br>
        Casto guardián de la Virgen, <br>
        Padre nutricio del Hijo de Dios, <br>
        Celoso defensor de Cristo, <br>
        Jefe de la Sagrada Familia, <br>
        José, justísimo, <br>
        José, castísimo, <br>
        José, prudentísimo, <br>
        José, valentísimo, <br>
        José, fidelísimo, <br>
        Espejo de paciencia, <br>
        Amante de la pobreza, <br>
        Modelo de trabajadores, <br>
        Gloria de la vida doméstica, <br>
        Custodio de Vírgenes, <br>
        Sostén de las familias, <br>
        Consuelo de los desgraciados, <br>
        Esperanza de los enfermos, <br>
        Patrón de los moribundos, <br>
        Terror de los demonios, <br>
        Protector de la Santa Iglesia, <br>
        <br>
        Cordero de Dios, que quitas los pecados del mundo, <br>
        <i>perdónanos, Señor.</i><br>
        <br>
        Cordero de Dios, que quitas los pecados del mundo, <br>
        <i>escúchanos, Señor,</i><br>
        <br>
        Cordero de Dios, que quitas los pecados del mundo, <br>
        <i>ten misericordia de nosotros.</i></p>
        <br>
        <p><i>V.</i> Le estableció señor de su casa.<br>
        <i>R.</i> Y jefe de toda su hacienda.<br>
        <br>
        <i>Oremos:</i> Oh Dios, que en tu inefable providencia, te dignaste elegir a San José por Esposo de tu Santísima Madre: concédenos, te rogamos, que merezcamos tener por intercesor en el cielo al que veneramos como protector en la tierra. Tú que vives y reinas por los siglos de los siglos.</p>
    `,

    "A San Miguel Arcángel": `
        <p>San Miguel Arcángel, defiéndenos en la batalla.<br>
        <br>
        Sé nuestro amparo contra la perversidad y las acechanzas del demonio. <br>
        <br>
        Que Dios ejerza su dominio sobre él, te lo pedimos humildemente; y tú, Príncipe de la Milicia Celestial, con el poder que Dios te ha conferido, arroja al infierno a Satanás y a los otros espíritus malignos que vagan por el mundo buscando la ruina de las almas. <br>
        <br>
        Amén.</p>
    `,

};


// ==========================================================
//  CORONILLAS
// ==========================================================
const oracionesCoronillas = {

    "Coronilla de San José": `
        <p class="texto-normal">Por la señal de la Santa Cruz...</p>
        <br>
        <h3>Acto de Contrición</h3>
        <p>Jesús, mi Señor y Redentor: Yo me arrepiento de todos los pecados que he cometido hasta hoy, y me pesa de todo corazón, porque con ellos he ofendido a un Dios tan bueno. Propongo firmemente no volver a pecar, y confío en que, por tu infinita misericordia, me has de conceder el perdón de mis culpas y me has de llevar a la vida eterna. Amén.</p>
        <br>
        <h3>Credo</h3>
        <p>Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. <br>
        <br>
        Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén.</p>
        <br>
        <h3>Primer misterio:<br>
        El anuncio del Ángel de que lo concebido en María es obra del Espíritu Santo</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>
        Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.<br>
        <br>
        <b>(7 veces)</b><br>
        San José, custodio <br>
        de los sagrados corazones <br>
        de Jesús y de María,<br>
        <i>inflama mi corazón <br>
        para que en él sólo reine Jesús, <br>
        como reinó en tu santo corazón.</i><br>
        <br>
        <b>(1 vez)</b><br>
        Jesús, José y María, <br>
        <i>les doy el corazón <br>
        y el alma mía.</i></p>
        <br>
        <h3>Segundo misterio:<br>
        La búsqueda de posada en Belén</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>
        Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.<br>
        <br>
        <b>(7 veces)</b><br>
        San José, custodio <br>
        de los sagrados corazones <br>
        de Jesús y de María,<br>
        <i>inflama mi corazón <br>
        para que en él sólo reine Jesús, <br>
        como reinó en tu santo corazón.</i><br>
        <br>
        <b>(1 vez)</b><br>
        Jesús, José y María, <br>
        <i>les doy el corazón <br>
        y el alma mía.</i></p>
        <br>
        <h3>Tercer misterio:<br>
        El nacimiento del Niño Jesús en Belén</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>
        Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.<br>
        <br>
        <b>(7 veces)</b><br>
        San José, custodio <br>
        de los sagrados corazones <br>
        de Jesús y de María,<br>
        <i>inflama mi corazón <br>
        para que en él sólo reine Jesús, <br>
        como reinó en tu santo corazón.</i><br>
        <br>
        <b>(1 vez)</b><br>
        Jesús, José y María, <br>
        <i>les doy el corazón <br>
        y el alma mía.</i></p>
        <br>
        <h3>Cuarto misterio:<br>
        La presentación del Niño Jesús en el templo.</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>
        Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.<br>
        <br>
        <b>(7 veces)</b><br>
        San José, custodio <br>
        de los sagrados corazones <br>
        de Jesús y de María,<br>
        <i>inflama mi corazón <br>
        para que en él sólo reine Jesús, <br>
        como reinó en tu santo corazón.</i><br>
        <br>
        <b>(1 vez)</b><br>
        Jesús, José y María, <br>
        <i>les doy el corazón <br>
        y el alma mía.</i></p>
        <br>
        <h3>Quinto misterio:<br>
        La huída a Egipto con Jesús y María</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>
        Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.<br>
        <br>
        <b>(7 veces)</b><br>
        San José, custodio <br>
        de los sagrados corazones <br>
        de Jesús y de María,<br>
        <i>inflama mi corazón <br>
        para que en él sólo reine Jesús, <br>
        como reinó en tu santo corazón.</i><br>
        <br>
        <b>(1 vez)</b><br>
        Jesús, José y María, <br>
        <i>les doy el corazón <br>
        y el alma mía.</i></p>
        <br>
        <h3>Sexto misterio:<br>
        El regreso de la sagrada familia a Nazaret</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>
        Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.<br>
        <br>
        <b>(7 veces)</b><br>
        San José, custodio <br>
        de los sagrados corazones <br>
        de Jesús y de María,<br>
        <i>inflama mi corazón <br>
        para que en él sólo reine Jesús, <br>
        como reinó en tu santo corazón.</i><br>
        <br>
        <b>(1 vez)</b><br>
        Jesús, José y María, <br>
        <i>les doy el corazón <br>
        y el alma mía.</i></p>
        <br>
        <h3>Séptimo misterio:<br>
        La pérdida y hallazgo del Niño Jesús en el templo</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>
        Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.<br>
        <br>
        <b>(7 veces)</b><br>
        San José, custodio <br>
        de los sagrados corazones <br>
        de Jesús y de María,<br>
        <i>inflama mi corazón <br>
        para que en él sólo reine Jesús, <br>
        como reinó en tu santo corazón.</i><br>
        <br>
        <b>(1 vez)</b><br>
        Jesús, José y María, <br>
        <i>les doy el corazón <br>
        y el alma mía.</i></p>
        <br>
        <h3>Octavo misterio:<br>
        La muerte de San José en brazos de Jesús y de María</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>
        Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.<br>
        <br>
        <b>(7 veces)</b><br>
        San José, custodio <br>
        de los sagrados corazones <br>
        de Jesús y de María,<br>
        <i>inflama mi corazón <br>
        para que en él sólo reine Jesús, <br>
        como reinó en tu santo corazón.</i><br>
        <br>
        <b>(1 vez)</b><br>
        Jesús, José y María, <br>
        <i>les doy el corazón <br>
        y el alma mía.</i></p>
        <br>
        <h3>Jaculatoria final</h3>
        <p class="jaculatoria"><b>(3 veces)</b><br>
        San José, patrono <br>
        de los devotos de los <br>
        Sagrados Corazones de Jesús y María,<br>
        <i>Ruega por nosotros.</i></p>
        <br>
        <ul><li>Gloria.</li>
        </ul>
    `,

};


// ==========================================================
//  DEL CATECISMO
// ==========================================================
const oracionesCatecismo = {

    "Mandamientos": `
        <ol class="texto-normal"><li>Amarás a Dios sobre todas las cosas.</li>
        <li>No tomarás el nombre de Dios en vano.</li>
        <li>Santificarás las fiestas.</li>
        <li>Honrarás a tu padre y a tu madre.</li>
        <li>No matarás.</li>
        <li>No cometerás actos impuros.</li>
        <li>No robarás.</li>
        <li>No dirás falso testimonio ni mentirás.</li>
        <li>No consentirás pensamientos ni deseos impuros.</li>
        <li>No codiciarás los bienes ajenos.</li>
        </ol>
    `,

    "Sacramentos": `
        <h3 class="texto-normal">De iniciación:</h3>
        <ul class="texto-normal"><li>Bautismo.</li>
        <li>Comunión.</li>
        <li>Confirmación.</li>
        </ul>
        <br>
        <h3 class="texto-normal">De sanación:</h3>
        <ul class="texto-normal"><li>Confesión.</li>
        <li>Unción de los enfermos.</li>
        </ul>
        <br>
        <h3 class="texto-normal">De vocación:</h3>
        <ul class="texto-normal"><li>Orden Sagrado.</li>
        <li>Matrimonio.</li>
        </ul>
    `,

    "Obras de Misericordia Corporales": `
        <ol class="texto-normal"><li>Visitar y cuidar a los enfermos.</li>
        <br>
        <li>Dar de comer al hambriento.</li>
        <br>
        <li>Dar de beber al sediento.</li>
        <br>
        <li>Dar posada al peregrino.</li>
        <br>
        <li>Vestir al desnudo.</li>
        <br>
        <li>Visitar a los presos.</li>
        <br>
        <li>Enterrar a los difuntos.</li>
        </ol>
    `,

    "Obras de Misericordia Espirituales": `
        <ol class="texto-normal"><li>Enseñar al que no sabe.</li>
        <br>
        <li>Corregir al que se equivoca.</li>
        <br>
        <li>Dar buen consejo al que lo necesita.</li>
        <br>
        <li>Perdonar las injurias.</li>
        <br>
        <li>Consolar al triste.</li>
        <br>
        <li>Sufrir con paciencia los defectos del prójimo.</li>
        <br>
        <li>Rogar a Dios por los vivos y difuntos.</li>
        </ol>
    `,

    "Preparación para la confesión": `
        <ol class="texto-normal"><li><b>Examen de conciencia:</b> consiste en recordar todos los pecados que hemos cometido desde la última confesión.</li>
        <br>
        <li><b>Arrepentimiento:</b> consiste en sentir sincero dolor de haber ofendido a Dios; y detestar el pecado. Para alcanzar el arrepentimiento hay que pedírselo a Dios.</li>
        <br>
        <li><b>Propósito de la enmienda:</b> consiste en decidirse firmemente a no volver a pecar; en estar dispuestos a evitar el pecado, cueste lo que cueste.</li>
        <br>
        <li><b>Confesión:</b> consiste en decirle al Sacerdote todos los pecados que hemos descubierto en el examen de conciencia.</li>
        <br>
        <li><b>Cumplir la penitencia:</b> cumplir aquello que nos señala el confesor para reparar el daño del pecado que ha sido perdonado.</li>
        </ol>
    `,

    "Los siete dones del Espíritu Santo": `
        <ol class="texto-normal"><li><b>Sabiduría:</b> Es el don de entender lo que favorece y lo que perjudica el proyecto de Dios. La verdadera sabiduría trae el gusto de Dios y su Palabra.</li>
        <br>
        <li><b>Entendimiento:</b> Es el don divino que nos ilumina para aceptar las verdades reveladas por Dios. Mediante este don, el Espíritu Santo nos permite escrutar las profundidades de Dios, comunicando a nuestro corazón una particular participación en el conocimiento divino, en los secretos del mundo y en la intimidad del mismo Dios.</li>
        <br>
        <li><b>Consejo:</b> Es el don de saber discernir los caminos y las opciones, de saber orientar y escuchar. Es la luz que el Espíritu nos da para distinguir lo correcto e incorrecto, lo verdadero y falso.</li>
        <br>
        <li><b>Ciencia:</b> Es el don de la ciencia de Dios y no la ciencia del mundo. Por este don el Espíritu Santo nos revela interiormente el pensamiento de Dios sobre nosotros, pues "nadie conoce lo íntimo de Dios, sino el Espíritu de Dios" (1 Corintios 2:11).</li>
        <br>
        <li><b>Piedad:</b> Es el don que el Espíritu Santo nos da para estar siempre abiertos a la voluntad de Dios, buscando siempre actuar como Jesús actuaría. Si Dios vive su alianza con el hombre de manera tan envolvente, el hombre, a su vez, se siente también invitado a ser piadoso con todos.</li>
        <br>
        <li><b>Fortaleza:</b> Este es el don que nos vuelve valientes para enfrentar las dificultades del día a día de la vida cristiana. Vuelve fuerte y heróica la fe. Recordemos el valor de los mártires. Nos da perseverancia y firmeza en las decisiones. Los que tienen ese don no se amedrentan frente a las amenazas y persecuciones, pues confían incondicionalmente en el Padre.</li>
        <br>
        <li><b>Temor de Dios:</b> Este don nos mantiene en el debido respeto frente a Dios y en la sumisión a su voluntad, apartándonos de todo lo que le pueda desagradar.</li>
        </ol>
    `,

    "Los cinco mandamientos de la Iglesia": `
        <ol class="texto-normal"><li><b>Oír misa entera los domingos y fiestas de precepto:</b> exige a los fieles participar en la celebración eucarística, en la que se reúne la comunidad cristiana, el día en que conmemora la Resurrección del Señor, y en aquellas principales fiestas litúrgicas que conmemoran los misterios del Señor, la Virgen María y los santos.</li>
        <br>
        <li><b>Confesar los pecados mortales al menos una vez al año, en peligro de muerte, y si se ha de comulgar:</b> asegura la preparación para la Eucaristía mediante la recepción del sacramento de la Reconciliación, que continúa la obra de conversión y de perdón del Bautismo.</li>
        <br>
        <li><b>Comulgar por Pascua de Resurrección:</b> garantiza un mínimo en la recepción del Cuerpo y la Sangre del Señor en relación con el tiempo de Pascua, origen y centro de la liturgia cristiana.</li>
        <br>
        <li><b>Ayunar y abstenerse de comer carne cuando lo manda la Santa Madre Iglesia:</b> asegura los tiempos de ascesis y de penitencia que nos preparan para las fiestas litúrgicas; contribuyen a hacernos adquirir el dominio sobre nuestros instintos y la libertad del corazón.</li>
        <br>
        <li><b>Ayudar a la Iglesia en sus necesidades:</b> señala la obligación de ayudar, cada uno según su capacidad, a subvenir a las necesidades materiales de la Iglesia.</li>
        </ol>
    `,

};


// ==========================================================
//  FUSIÓN FINAL
//  script.js busca las oraciones en este objeto único.
//  No es necesario modificar nada más al agregar oraciones
//  a las constantes anteriores.
// ==========================================================
const oracionesDinamicas = {
    ...oracionesCotidianas,
    ...oracionesVarias,
    ...oracionesCoronillas,
    ...oracionesCatecismo,
};
