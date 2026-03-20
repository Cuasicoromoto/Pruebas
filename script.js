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

const oracionesTexto = {
    '<!-- Oraciones cotidianas -->': ``,
    'Señal de la Cruz': `<p>Por la señal de la Santa Cruz <br>de nuestros enemigos <br>líbranos Señor, Dios nuestro. <br><br>En el nombre del Padre, <br>y del Hijo, <br>y del Espíritu Santo.</p>`,
    'Padre nuestro': `<p>Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo.<br><br>Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal.</p>`,
    'Avemaría': `<p>Dios te salve, María, llena eres de gracia; el Señor es contigo. Bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús.<br><br>Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte.</p>`,
    'Gloria': `<p>Gloria al Padre, <br>y al Hijo, <br>y al Espíritu Santo.<br><br>Como era en el principio, <br>ahora y siempre, <br>por los siglos de los siglos.</p>`,
    'Yo Confieso': `<p>Yo confieso ante Dios Todopoderoso, y ante ustedes hermanos que he pecado mucho de pensamiento, palabra, obra y omisión.<br><br>Por mi culpa, por mi culpa, por mi gran culpa.<br><br>Por eso ruego a Santa María siempre Virgen, a los ángeles, a los santos y a ustedes hermanos, que intercedan por mí ante Dios, Nuestro Señor.</p>`,
    'Acto de Contrición': `<p>Jesús, mi Señor y Redentor: Yo me arrepiento de todos los pecados que he cometido hasta hoy, y me pesa de todo corazón, porque con ellos he ofendido a un Dios tan bueno.<br><br>Propongo firmemente no volver a pecar, y confío en que, por tu infinita misericordia, me has de conceder el perdón de mis culpas y me has de llevar a la vida eterna.</p>`,
    'Credo': `<p>Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos.<br><br>Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna.</p>`,
    'Salve': `<p>Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A Ti llamamos los desterrados hijos de Eva; a Ti suspiramos, gimiendo y llorando, en este valle de lágrimas. <br><br>Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. <br><br>¡Oh clementísima, oh piadosa, <br>oh dulce Virgen María! <br><br>Ruega por nosotros Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo.</p>`,

    '<!-- Oraciones varias -->': ``,
    'Ángel de la guarda': `<p>Angel de mi guarda, <br>dulce compañía <br> no me desampares <br> ni de noche ni de día, <br>no me dejes solo <br>pues sin ti me perdería.</p>`,
    'Alma de Cristo': `<p class="jaculatoria texto-normal">Alma de Cristo, <br><i>santifícame.</i> <br><br>Cuerpo de Cristo, <br><i>sálvame.</i> <br><br>Sangre de Cristo, <br><i>embriágame.</i> <br><br>Agua del costado de Cristo, <br><i>lávame.</i> <br><br>Pasión de Cristo, <br><i>confórtame. </i> <br><br>¡Oh, buen Jesús! <br><i>óyeme.</i> <br><br>Dentro de tus llagas, <br><i>escóndeme. </i> <br><br>No permitas Señor, <br><i>que me aparte de Ti.</i> <br><br>Del enemigo malo, <br><i>defiéndeme. </i> <br><br>En la hora de mi muerte, <br><i>llámame, </i> <br><br>Y mándame ir a Ti <br><i>para que con tus Santos te alaben por los siglos de los siglos.</i> <br><br>Amén.</p>`,
    'Angelus': `<p class="jaculatoria texto-normal"><b>V.</b> El ángel del Señor anunció a María. <br><b>R.</b> <i>Y concibió por obra y gracia del Espíritu Santo.</i></p> <br><p>Dios te salve, María...</p><br> <p class="jaculatoria"><b>V.</b> He aquí la esclava del Señor. <br><b>R.</b> <i>Hágase en mí según tu palabra.</i></p> <br><p>Dios te salve, María...</p><br><p class="jaculatoria"><b>V.</b> Y el Verbo se hizo carne. <br><b>R.</b> <i>Y habitó entre nosotros.</i> </p><br><p>Dios te salve, María...</p><br><p class="jaculatoria"><b>V.</b> Ruega por nosotros, santa Madre de Dios. <br><b>R.</b> <i>Para que seamos dignos de alcanzar las divinas promesas de Nuestro Señor Jesucristo.</i></p><br><p><b>V.</b> Infunde, Señor, tu gracia en nuestras almas, para que los que por el anuncio del ángel hemos conocido la Encarnación de tu Hijo Jesucristo, por los méritos de su Pasión y su Cruz lleguemos a la gloria de la Resurrección. Por el mismo Jesucristo, nuestro Señor. <br><br><b>R.</b> <i>Amén.</i> <br><br>Gloria al Padre... (tres veces)</p>`,
    'Acuérdate': `<p>Acuérdate, oh piadosísima Virgen María, que jamás se ha oído decir que ninguno de los que han acudido a tu protección, implorando tu asistencia y reclamando tu socorro, haya sido abandonado de ti.<br><br>Animado con esta contianza, a ti también acudo, oh Madre, Virgen de las vírgenes, aunque gimiendo bajo el peso de mis pecados, me atrevo a comparecer ante tu presencia soberana.<br><br>No deseches mis humildes súplicas, oh Madre del Verbo divino, antes bien, escúchalas y acógelas benignamente. <br><br>Amén.</p>`,
    'Tu pureza': `<p>Bendita sea tu pureza <br>y eternamente lo sea, <br>pues todo un Dios se recrea <br>en tan graciosa belleza. <br><br>A ti, celestial princesa, <br>Virgen Sagrada María, <br>te ofrezco en este día <br>alma, vida y corazón. <br><br>Mírame con compasión <br>y no me dejes, madre mía.`,
    'A la Sagrada Familia': `<p>JESÚS, Hijo de Dios e Hijo de María, bendice a nuestra familia. Inspira bondadosamente en nosotros la unidad, la paz y el amor mutuo que tú encontraste en Tu propia familia en la pequeña aldea de Nazaret. <br><br>MARÍA, Madre de Jesús y Nuestra Madre, sustenta a nuestra familia con tu fe y tu amor. Consérvanos cerca de tu Hijo, Jesús, en todas nuestras alegrías y en nuestras penas. <br><br>JOSÉ, Padre adoptivo de Jesús, guardián y esposo de María, protege a nuestra familia del peligro. Auxílianos en todos los momentos de desánimo y ansiedad. <br><br>SAGRADA FAMILIA DE NAZARET, haz a nuestra familia una contigo. Ayúdanos a ser instrumentos de paz. Concédenos que el amor, fortalecido por la gracia, pruebe ser más fuerte que las debididades y las pruebas que nuestra familia a veces atraviesa. Que siempre tengamos a Dios en el centro de nuestros corazones y hogares hasta que todos seamos una sola familia, feliz y en paz en nuestro verdadero hogar contigo. <br><br>Amén.</p>`,
    'A San José': `
        <h3>1. Custodio del Redentor</h3><p class="texto-normal">Salve, custodio del Redentor<br>y esposo de la Virgen María.<br><br>A ti Dios confió a su Hijo,<br>en ti María depositó su confianza,<br>contigo Cristo se forjó como hombre.<br><br>Oh, bienaventurado José,<br>muéstrate padre también a nosotros<br>y guíanos en el camino de la vida.<br><br>Concédenos gracia, <br>misericordia y valentía,<br>y defiéndenos de todo mal. Amén.</p>
        <br><h3>2. Custodio y padre</h3><p>Custodio y padre de vírgenes, San José, a cuya fiel custodia fueron encomendadas la misma inocencia. Cristo Jesús y la Virgen de las vírgenes María: por estas dos queridísimas prendas, Jesús y María, te ruego y te suplico me alcances que, preservado de toda impureza, sirva siempre con alma limpia, corazón puro y cuerpo casto a Jesús y a María. Amén.</p>
        <br><h3>3. Glorioso patriarca San José</h3><p>Glorioso patriarca san José,cuyo poder sabe hacer posibles las cosas imposibles,ven en mi ayuda en estos momentos de angustia y dificultad.<br><br>Toma bajo tu protección las situaciones tan graves y difíciles que te confío,para que tengan una buena solución.<br><br>Mi amado Padre, toda mi confianza está puesta en ti.Que no se diga que te haya invocado en vano y,como puedes hacer todo con Jesús y María,muéstrame que tu bondad es tan grande como tu poder. Amén.</p> `,
    'Benedictus': `<p>Bendito sea el Señor, Dios de Israel, porque ha visitado y redimido a su pueblo, suscitándonos una fuerza de salvación en la casa de David, su siervo, según lo había predicho desde antiguo por boca de sus santos Profetas.<br><br>Es la salvación que nos libra de nuestros enemigos y de la mano de todos los que nos odian, realizando la misericordia que tuvo con nuestros padres, recordando su santa alianza y el juramento que juró a nuestro padre Abrahán.<br><br>Para concedernos que, libres de temor, arrancados de la mano de los enemigos, le sirvamos con santidad y justicia, en su presencia, todos nuestros días.<br><br>Y a ti, niño, te llamarán profeta del Altísimo, porque irás delante del Señor a preparar sus caminos, anunciando a su pueblo la salvación, el perdón de sus pecados.<br><br>Por la entrañable misericordia de nuestro Dios, nos visitará el sol que nace de lo alto, para iluminar a los que viven en tinieblas y en sombra de muerte, para guiar nuestros pasos por el camino de la paz.<br><br>Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>`,
    'Magnificat': `<p>Proclama mi alma la grandeza del Señor, se alegra mi espíritu en Dios, mi salvador; porque ha mirado la humildad de su esclava.<br><br>Desde ahora me felicitarán todas las generaciones, porque el Poderoso ha hecho obras grandes en mí: su nombre es santo, y su misericordia llega a sus fieles de generación en generación.<br><br>Él hace proezas con su brazo: dispersa a los soberbios de corazón, derriba del trono a los poderosos y enaltece a los humildes, a los hambrientos los colma de bienes y a los ricos los despide vacíos.<br><br>Auxilia a Israel, su siervo, acordándose de la misericordia -como lo había prometido a nuestros padres- en favor de Abrahán y su descendencia por siempre.<br><br>Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>`,
    'Corazón de Jesús': `<h3>Acto de confianza en el Corazón de Jesús</h3><p>Oh, Corazón de Jesús, Dios y hombre verdadero, refugio de los pecadores y esperanza de los que en ti confían. Tú nos dices amablemente: Venid a mí que soy manso y humilde de corazón; y nos repites las palabras que dijiste al paralítico: Confía, hijo mío; tus pecados te son perdonados; y a la mujer enferma: Confía, hija; tu fe te ha salvado; y a los apóstoles: Confiad, soy yo; no temáis.<br><br>Animado con estas palabras tuyas, acudo a ti con el corazón lleno de confianza, para decirte sinceramente y desde lo más íntimo de mi alma: Corazón de Jesús, en tí confío.</p><br><p class="jaculatoria">En mis alegrías y tristezas, <br><i>Corazón de Jesús, en tí confío.</i><br><br>En mis negocios y empresas, <br><i>Corazón de Jesús, en tí confío.</i><br><br>En mis prosperidades y adversidades, <br><i>Corazón de Jesús, en tí confío.</i><br><br>En las necesidades de mi familia, <br><i>Corazón de Jesús, en tí confío.</i><br><br>En las tentaciones del demonio, <br><i>Corazón de Jesús, en tí confío.</i><br><br>En las instigaciones de mis propias pasiones, <br><i>Corazón de Jesús, en tí confío.</i><br><br>En las persecuciones de mis enemigos, <br><i>Corazón de Jesús, en tí confío.</i><br><br>En las murmuraciones y calumnias, <br><i>Corazón de Jesús, en tí confío.</i><br><br>En mis enfermedades y dolores, <br><i>Corazón de Jesús, en tí confío.</i><br><br>En mis defectos y pecados, <br><i>Corazón de Jesús, en tí confío.</i><br><br>En la santificación y salvación de mi alma, <br><i>Corazón de Jesús, en tí confío.</i><br><br>Siempre y en toda ocasión, <br><i>Corazón de Jesús, en tí confío.</i><br><br>En vida y en muerte, <br><i>Corazón de Jesús, en tí confío.</i><br><br>En tiempo y eternidad, <br><i>Corazón de Jesús, en tí confío.</i></p><br><h3>Oración</h3><p>Corazón de mi amable Jesús, confío y confiaré siempre en tu bondad; y, por el corazón de tu Madre, te pido que no desfallezca nunca esta mi confianza en ti, a pesar de todas las contrariedades y de todas las pruebas que tú quieras enviarme, para que, habiendo sido mi consuelo en vida, seas mi refugio en la hora de la muerte y mi gloria por toda la eternidad. <br><br>Amén.</p>`,
    'A San Miguel Arcángel': `<p>San Miguel Arcángel, defiéndenos en la batalla.<br><br>Sé nuestro amparo contra la perversidad y las acechanzas del demonio. <br><br>Que Dios ejerza su dominio sobre él, te lo pedimos humildemente; y tú, Príncipe de la Milicia Celestial, con el poder que Dios te ha conferido, arroja al infierno a Satanás y a los otros espíritus malignos que vagan por el mundo buscando la ruina de las almas. <br><br>Amén.</p>`,
    'Letanías de San José': `
        <h3>Letanías de San José </h3>
        <p class="jaculatoria texto-normal">Señor, ten misericordia de nosotros. <br><i>Señor, ten misericordia de nosotros.</i>
        <br><br>Cristo, ten misericordia de nosotros. <br><i>Cristo, ten misericordia de nosotros.</i>
        <br><br>Señor, ten misericordia de nosotros. <br><i> Señor, ten misericordia de nosotros.</i>
        <br><br>Cristo óyenos. <br><i> Cristo óyenos.</i>
        <br><br>Cristo escúchanos. <br><i> Cristo escúchanos.</i></p>
        <br><p><i>(Ten misericordia de nosotros)</i></p> 
        <p class="jaculatoria">Dios, Padre celestial, <br>Dios, Hijo, Redentor del mundo, <br>Dios, Espíritu Santo, <br>Santísima Trinidad, un solo Dios,</p>         
        <br><p><i>(Ruega por nosotros)</i></p> 
        <p class="jaculatoria">Santa María,
        <br>San José,
        <br>Ilustre descendiente de David,    
        <br>Luz de los Patriarcas, 
        <br>Esposo de la Madre de Dios, <br>Casto guardián de la Virgen, <br>Padre nutricio del Hijo de Dios, <br>Celoso defensor de Cristo, <br>Jefe de la Sagrada Familia, <br>José, justísimo, ruega por nosotros.   
        <br>José, castísimo, <br>José, prudentísimo, <br>José, valentísimo, <br>José, fidelísimo, <br>Espejo de paciencia, <br>Amante de la pobreza, <br>Modelo de trabajadores, <br>Gloria de la vida doméstica, ruega por nosotros.   
<br>Custodio de Vírgenes, <br>Sostén de las familias, <br>Consuelo de los desgraciados, <br>Esperanza de los enfermos, <br>Patrón de los moribundos, ruega por nosotros.   
Terror de los demonios, ruega por nosotros.   
Protector de la Santa Iglesia, ruega por nosotros.   
Cordero de Dios, que quitas los pecados del mundo: perdónanos, Señor.
Cordero de Dios, que quitas los pecados del mundo: escúchanos, Señor,
Cordero de Dios, que quitas los pecados del mundo: ten misericordia de nosotros.
V.- Le estableció señor de su casa.
R.- Y jefe de toda su hacienda.
 
Oremos: Oh Dios, que en tu inefable providencia, te dignaste elegir a San José por Esposo de tu Santísima Madre: concédenos, te rogamos, que merezcamos tener por intercesor en el cielo al que veneramos como protector en la tierra. Tú que vives y reinas por los siglos de los siglos. Amén
   </p> `,

    '<!-- Novenas -->': ``,
    'Novena a la Virgen de Coromoto': `
        <p class="texto-normal">Por la señal de la Santa Cruz...</p>
        <br><h3>Acto de Contrición</h3>
        <p>Jesús, mi Señor y Redentor: Yo me arrepiento de todos los pecados que he cometido hasta hoy, y me pesa de todo corazón, porque con ellos he ofendido a un Dios tan bueno.

Propongo firmemente no volver a pecar, y confío en que, por tu infinita misericordia, me has de conceder el perdón de mis culpas y me has de llevar a la vida eterna. Amén.</p>
        <br><h3>Oración Inicial</h3>
        <p>Virgen Santísima, Madre de Dios y Madre nuestra, por cuya intercesión poderosa llegaron al conocimiento de la fe cristiana. Hermosísima Aurora, que brillaste apareciendo en Coromoto y nos dejaste una preciosa prenda de Tu amor, en una milagrosa Imagen, apiádate de nosotros. Alivia nuestros males, poderosísima Abogada nuestra y fortalécenos en las luchas contra los enemigos del alma.
        <br><br>¡Oh Patrona de Venezuela! Haz que nuestra Nación siga siempre en sus leyes, en sus costumbres y en sus empresas, los sabios y salvadores principios del Santo Evangelio. Protege nuestras instituciones, destierra de nosotros el vicio, la impiedad e indiferencia religiosa; en una palabra, renueva la fe en nuestra amada Patria. Promueve en nuestra sociedad obras verificadoras de salud, adelanto moral y material, para que gozando de los beneficios de una paz tranquila honremos y sirvamos fielmente en la tierra a Tu Divino Hijo Jesucristo, a fin de gozarle eternamente en el Cielo. Amén.</p>
        <br><p class="jaculatoria"><b>V.</b> Hazme, Virgen Sagrada, digno de alabanza. <br><b>R.</b> <i>Dame fortaleza contra tus enemigos.</i></p>
        <br><h3>Oración del día</h3>
        <!-- Barra de Navegación de Días -->
        <div class="novena-nav">
            <button class="btn-dia" onclick="cargarDiaNovena(0, 'coromoto')">1</button>
            <button class="btn-dia" onclick="cargarDiaNovena(1, 'coromoto')">2</button>
            <button class="btn-dia" onclick="cargarDiaNovena(2, 'coromoto')">3</button>
            <button class="btn-dia" onclick="cargarDiaNovena(3, 'coromoto')">4</button>
            <button class="btn-dia" onclick="cargarDiaNovena(4, 'coromoto')">5</button>
            <button class="btn-dia" onclick="cargarDiaNovena(5, 'coromoto')">6</button>
            <button class="btn-dia" onclick="cargarDiaNovena(6, 'coromoto')">7</button>
            <button class="btn-dia" onclick="cargarDiaNovena(7, 'coromoto')">8</button>
            <button class="btn-dia" onclick="cargarDiaNovena(8, 'coromoto')">9</button>
        </div>

        <!-- Contenedor dinámico -->
        <div id="contenido-novena" class="contenido-dia-box">
            <p style="color:var(--texto-gris); text-align:center; padding: 1rem 0;">
                Selecciona el día de la novena <br> para ver la reflexión.
            </p>
        </div>
        <br><div style="text-align: center"><p class="texto-normal"><i>(Pídase con fervor y confianza <br>la gracia que se desea obtener.)</i></p></div>
        <br><p>Dios te salve Reina y Madre de misericordia...</p>
        <br><h3>Oración final</h3>
        <p>Oh Gran Dios, que con darnos en Tu Nacimiento a María, obra de tu Omnipotencia, maravilla de la gracia, admiración de los ángeles, honra y alegría de los hombres, escogida entre millares por feliz Madre tuya, y constituida por dulce Madre nuestra, nos dejaste con dádiva tan rica, muy obligados a tu amor; y más, renaciendo en cierto modo para nosotros con su maravillosa Aparición en Coromoto, el m ismo día que celebra su natalicio santo.
        <br><br>Mil gracias, Señor, te repetimos, suplicándote fortalezcas nuestra memoria para no olvidar tan altos beneficios, alumbres nuestro entendimiento para reconocerlos y admirarlos; enciendas de amor nuestra voluntad para en obras de amor corresponderlos, acabando la vida en tu servicio con el favor de tu gracia, para gozar de tu Gloria. Amén.</p>     
        <br><p class="jaculatoria">Jesús, José y María <br><i>les doy mi corazón y el alma mía.</i> <br><br>Jesús, José y María <br><i>asístanme en mi última agonía.</i> <br><br>Jesús, José y María <br><i>con ustedes descanse en paz el alma mía.</i>
        <br><br><ul><li>12 Avemarías.</li> <li>3 Padrenuestro.</li> <li>Señal de la Santa Cruz.</li></ul>`,

    'Novena a San José': `
        <p class="texto-normal">Por la señal de la Santa Cruz...</p>
        <br><h3>Oración inicial</h3>
        <p>Oh gloriosísimo Padre de Jesús, Esposo de María. Patriarca y Protector de la Santa Iglesia, a quien el Padre Eterno confió el cuidado de gobernar, regir y defender en la tierra la Sagrada Familia; protégenos también a nosotros, que pertenecemos, como fieles católicos, a la santa familia de tu Hijo que es la Iglesia, y alcánzanos los bienes necesarios de esta vida, y sobre todo los auxilios espirituales para la vida eterna. <br><br>Alcánzanos especialmente estas tres gracias, la de no cometer jamás ningún pecado mortal, principalmente contra la castidad; la de un sincero amor y devoción a Jesús y María, y la de una buena muerte, recibiendo bien los últimos Sacramentos. <br><br>Concédenos además la gracia especial que te pedimos cada uno en esta novena.</p>
        <br><div style="text-align: center"><p class="texto-normal"><i>(Pídase con fervor y confianza <br>la gracia que se desea obtener.)</i></p></div>
        <br><h3>Oración del día</h3>
        <!-- Barra de Navegación de Días -->
        <div class="novena-nav">
            <button class="btn-dia" onclick="cargarDiaNovena(0, 'sanjose')">1</button>
            <button class="btn-dia" onclick="cargarDiaNovena(1, 'sanjose')">2</button>
            <button class="btn-dia" onclick="cargarDiaNovena(2, 'sanjose')">3</button>
            <button class="btn-dia" onclick="cargarDiaNovena(3, 'sanjose')">4</button>
            <button class="btn-dia" onclick="cargarDiaNovena(4, 'sanjose')">5</button>
            <button class="btn-dia" onclick="cargarDiaNovena(5, 'sanjose')">6</button>
            <button class="btn-dia" onclick="cargarDiaNovena(6, 'sanjose')">7</button>
            <button class="btn-dia" onclick="cargarDiaNovena(7, 'sanjose')">8</button>
            <button class="btn-dia" onclick="cargarDiaNovena(8, 'sanjose')">9</button>
        </div>
        <!-- Contenedor dinámico -->
        <div id="contenido-novena" class="contenido-dia-box">
            <p style="color:var(--texto-gris); text-align:center; padding: 1rem 0;">
                Selecciona el día de la novena <br> para ver la reflexión.
            </p>
        </div>
        <br><br><h3>Oración para todos los días</h3>
        <p>Oh custodio y padre de Vírgenes San José a cuya fiel custodia fueron encomendadas la misma inocencia de Cristo Jesús y la Virgen de las vírgenes María; por estas dos queridísimas prendas Jesús y María, te ruego y suplico me alcances, que preservado yo de toda impureza, sirva siempre castísimamente con alma limpia, corazón puro y cuerpo casto a Jesús y a María. Amén.
        <br><br><p class="jaculatoria">Jesús José y María <br><i>les doy mi corazón y el alma mía.</i> <br><br>Jesús, José y María <br><i>asístanme en mi última agonía.</i> <br><br>Jesús, José y María <br><i>con ustedes descanse en paz el alma mía.</i>
        <br><br><i>(Padrenuestro, Avemaría y Gloria.)</i></p>
        <br><h3>Antífona</h3>
        <p>Tenía el mismo Jesús, al empezar su vida pública, cerca de treinta años, hijo, según se pensaba de José.
        <br><br><b>V.</b> San José, ruega por nosotros.
        <br><b>R.</b> <i>Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo.</i></p>
        <br><h3>Oración final</h3>
        <p>Oh Dios que con inefable providencia te dignaste escoger al bienaventurado José por Esposo de tu Madre Santísima; concédenos que, pues le veneramos como protector en la tierra, merezcamos tenerle como protector en los cielos. Oh Dios que vives y reinas en los siglos de los siglos. <br><br>Amén.</p>`,

    '<!-- Coronillas -->': ``,
    'Coronilla de San José': `
        <p class="texto-normal">Por la señal de la Santa Cruz...</p>
        <br><h3>Acto de Contrición</h3>
        <p>Jesús, mi Señor y Redentor: Yo me arrepiento de todos los pecados que he cometido hasta hoy, y me pesa de todo corazón, porque con ellos he ofendido a un Dios tan bueno. Propongo firmemente no volver a pecar, y confío en que, por tu infinita misericordia, me has de conceder el perdón de mis culpas y me has de llevar a la vida eterna. Amén.</p>
        <br><h3>Credo</h3>
        <p>Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. <br><br>Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén.</p>
        <br><h3>Primer misterio:<br>El anuncio del Ángel de que lo concebido en María es obra del Espíritu Santo</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.
        <br><br><b>(7 veces)</b><br>San José, custodio <br>de los sagrados corazones <br>de Jesús y de María,
        <br><i>inflama mi corazón <br>para que en él sólo reine Jesús, <br>como reinó en tu santo corazón.</i>
        <br><br><b>(1 vez)</b><br>Jesús, José y María, <br><i>les doy el corazón <br>y el alma mía.</i></p>
        <br><h3>Segundo misterio:<br>La búsqueda de posada en Belén</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.
        <br><br><b>(7 veces)</b><br>San José, custodio <br>de los sagrados corazones <br>de Jesús y de María,
        <br><i>inflama mi corazón <br>para que en él sólo reine Jesús, <br>como reinó en tu santo corazón.</i>
        <br><br><b>(1 vez)</b><br>Jesús, José y María, <br><i>les doy el corazón <br>y el alma mía.</i></p>
        <br><h3>Tercer misterio:<br>El nacimiento del Niño Jesús en Belén</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.
        <br><br><b>(7 veces)</b><br>San José, custodio <br>de los sagrados corazones <br>de Jesús y de María,
        <br><i>inflama mi corazón <br>para que en él sólo reine Jesús, <br>como reinó en tu santo corazón.</i>
        <br><br><b>(1 vez)</b><br>Jesús, José y María, <br><i>les doy el corazón <br>y el alma mía.</i></p>
        <br><h3>Cuarto misterio:<br>La presentación del Niño Jesús en el templo.</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.
        <br><br><b>(7 veces)</b><br>San José, custodio <br>de los sagrados corazones <br>de Jesús y de María,
        <br><i>inflama mi corazón <br>para que en él sólo reine Jesús, <br>como reinó en tu santo corazón.</i>
        <br><br><b>(1 vez)</b><br>Jesús, José y María, <br><i>les doy el corazón <br>y el alma mía.</i></p>
        <br><h3>Quinto misterio:<br>La huída a Egipto con Jesús y María</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.
        <br><br><b>(7 veces)</b><br>San José, custodio <br>de los sagrados corazones <br>de Jesús y de María,
        <br><i>inflama mi corazón <br>para que en él sólo reine Jesús, <br>como reinó en tu santo corazón.</i>
        <br><br><b>(1 vez)</b><br>Jesús, José y María, <br><i>les doy el corazón <br>y el alma mía.</i></p>
        <br><h3>Sexto misterio:<br>El regreso de la sagrada familia a Nazaret</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.
        <br><br><b>(7 veces)</b><br>San José, custodio <br>de los sagrados corazones <br>de Jesús y de María,
        <br><i>inflama mi corazón <br>para que en él sólo reine Jesús, <br>como reinó en tu santo corazón.</i>
        <br><br><b>(1 vez)</b><br>Jesús, José y María, <br><i>les doy el corazón <br>y el alma mía.</i></p>
        <br><h3>Séptimo misterio:<br>La pérdida y hallazgo del Niño Jesús en el templo</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.
        <br><br><b>(7 veces)</b><br>San José, custodio <br>de los sagrados corazones <br>de Jesús y de María,
        <br><i>inflama mi corazón <br>para que en él sólo reine Jesús, <br>como reinó en tu santo corazón.</i>
        <br><br><b>(1 vez)</b><br>Jesús, José y María, <br><i>les doy el corazón <br>y el alma mía.</i></p>
        <br><h3>Octavo misterio:<br>La muerte de San José en brazos de Jesús y de María</h3>
        <p class="jaculatoria texto-normal"><b>(1 vez)</b><br>Dios te salve José, custodio del Redentor y esposo purísimo de María: Tú eres el hombre justo y obediente a la voluntad del Padre. Bendito el Señor que te confió a sus tesoros Jesús y María.
        <br><br><b>(7 veces)</b><br>San José, custodio <br>de los sagrados corazones <br>de Jesús y de María,
        <br><i>inflama mi corazón <br>para que en él sólo reine Jesús, <br>como reinó en tu santo corazón.</i>
        <br><br><b>(1 vez)</b><br>Jesús, José y María, <br><i>les doy el corazón <br>y el alma mía.</i></p>
        <br><h3>Jaculatoria final</h3>
        <p class="jaculatoria"><b>(3 veces)</b><br>San José, patrono <br>de los devotos de los <br>Sagrados Corazones de Jesús y María,
        <br><i>Ruega por nosotros.</i></p>
        <br><ul><li>Gloria.</li></ul>`,

    '<!-- Del Catecismo -->': ``,
    'Mandamientos': `<ol class="texto-normal"><li>Amarás a Dios sobre todas las cosas.</li><li>No tomarás el nombre de Dios en vano.</li><li>Santificarás las fiestas.</li><li>Honrarás a tu padre y a tu madre.</li><li>No matarás.</li><li>No cometerás actos impuros.</li><li>No robarás.</li><li>No dirás falso testimonio ni mentirás.</li><li>No consentirás pensamientos ni deseos impuros.</li><li>No codiciarás los bienes ajenos.</li></ol>`,
    'Sacramentos': `<h3 class="texto-normal">De iniciación:</h3><ul class="texto-normal"><li>Bautismo.</li><li>Comunión.</li><li>Confirmación.</li></ul><br><h3 class="texto-normal">De sanación:</h3><ul class="texto-normal"><li>Confesión.</li><li>Unción de los enfermos.</li></ul><br><h3 class="texto-normal">De vocación:</h3><ul class="texto-normal"><li>Orden Sagrado.</li><li>Matrimonio.</li></ul>`,
    'Obras de Misericordia Corporales': `<ol class="texto-normal"><li>Visitar y cuidar a los enfermos.</li> <br><li>Dar de comer al hambriento.</li> <br><li>Dar de beber al sediento.</li> <br><li>Dar posada al peregrino.</li> <br><li>Vestir al desnudo.</li> <br><li>Visitar a los presos.</li> <br><li>Enterrar a los difuntos.</li>`,
    'Obras de Misericordia Espirituales': `<ol class="texto-normal"><li>Enseñar al que no sabe.</li> <br><li>Corregir al que se equivoca.</li> <br><li>Dar buen consejo al que lo necesita.</li> <br><li>Perdonar las injurias.</li> <br><li>Consolar al triste.</li> <br><li>Sufrir con paciencia los defectos del prójimo.</li> <br><li>Rogar a Dios por los vivos y difuntos.</li>`,
    'Preparación para la confesión': `
        <ol class="texto-normal"><li><b>Examen de conciencia:</b> consiste en recordar todos los pecados que hemos cometido desde la última confesión.</li>
        <br><li><b>Arrepentimiento:</b> consiste en sentir sincero dolor de haber ofendido a Dios; y detestar el pecado. Para alcanzar el arrepentimiento hay que pedírselo a Dios.</li>
        <br><li><b>Propósito de la enmienda:</b> consiste en decidirse firmemente a no volver a pecar; en estar dispuestos a evitar el pecado, cueste lo que cueste.</li>
        <br><li><b>Confesión:</b> consiste en decirle al Sacerdote todos los pecados que hemos descubierto en el examen de conciencia.</li>
        <br><li><b>Cumplir la penitencia:</b> cumplir aquello que nos señala el confesor para reparar el daño del pecado que ha sido perdonado.</li></ol>`,
    'Los cinco mandamientos de la Iglesia': `
        <ol class="texto-normal"><li><b>Oír misa entera los domingos y fiestas de precepto:</b> exige a los fieles participar en la celebración eucarística, en la que se reúne la comunidad cristiana, el día en que conmemora la Resurrección del Señor, y en aquellas principales fiestas litúrgicas que conmemoran los misterios del Señor, la Virgen María y los santos.</li>                 
        <br><li><b>Confesar los pecados mortales al menos una vez al año, en peligro de muerte, y si se ha de comulgar:</b> asegura la preparación para la Eucaristía mediante la recepción del sacramento de la Reconciliación, que continúa la obra de conversión y de perdón del Bautismo.</li>
        <br><li><b>Comulgar por Pascua de Resurrección:</b> garantiza un mínimo en la recepción del Cuerpo y la Sangre del Señor en relación con el tiempo de Pascua, origen y centro de la liturgia cristiana.</li>
        <br><li><b>Ayunar y abstenerse de comer carne cuando lo manda la Santa Madre Iglesia:</b> asegura los tiempos de ascesis y de penitencia que nos preparan para las fiestas litúrgicas; contribuyen a hacernos adquirir el dominio sobre nuestros instintos y la libertad del corazón.</li>
        <br><li><b>Ayudar a la Iglesia en sus necesidades:</b> señala la obligación de ayudar, cada uno según su capacidad, a subvenir a las necesidades materiales de la Iglesia.</li></ol>`,

    'Los siete dones del Espíritu Santo': `
        <ol class="texto-normal"><li><b>Sabiduría:</b> Es el don de entender lo que favorece y lo que perjudica el proyecto de Dios. La verdadera sabiduría trae el gusto de Dios y su Palabra.</li>
        <br><li><b>Entendimiento:</b> Es el don divino que nos ilumina para aceptar las verdades reveladas por Dios. Mediante este don, el Espíritu Santo nos permite escrutar las profundidades de Dios, comunicando a nuestro corazón una particular participación en el conocimiento divino, en los secretos del mundo y en la intimidad del mismo Dios.</li>
        <br><li><b>Consejo:</b> Es el don de saber discernir los caminos y las opciones, de saber orientar y escuchar. Es la luz que el Espíritu nos da para distinguir lo correcto e incorrecto, lo verdadero y falso.</li>
        <br><li><b>Ciencia:</b> Es el don de la ciencia de Dios y no la ciencia del mundo. Por este don el Espíritu Santo nos revela interiormente el pensamiento de Dios sobre nosotros, pues “nadie conoce lo íntimo de Dios, sino el Espíritu de Dios” (1 Corintios 2:11).</li>
        <br><li><b>Piedad:</b> Es el don que el Espíritu Santo nos da para estar siempre abiertos a la voluntad de Dios, buscando siempre actuar como Jesús actuaría. Si Dios vive su alianza con el hombre de manera tan envolvente, el hombre, a su vez, se siente también invitado a ser piadoso con todos.</li>
        <br><li><b>Fortaleza:</b> Este es el don que nos vuelve valientes para enfrentar las dificultades del día a día de la vida cristiana. Vuelve fuerte y heróica la fe. Recordemos el valor de los mártires. Nos da perseverancia y firmeza en las decisiones. Los que tienen ese don no se amedrentan frente a las amenazas y persecuciones, pues confían incondicionalmente en el Padre.</li>
        <br><li><b>Temor de Dios:</b> Este don nos mantiene en el debido respeto frente a Dios y en la sumisión a su voluntad, apartándonos de todo lo que le pueda desagradar.</li></ol>`,
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
}
    ;

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
    'Avisos Cuasiparroquiales': `
        <div class="encabezado-mes">Febrero 2026</div>
        <div class="grupo-timeline">
            <div class="aviso-fila">
                <div class="aviso-fecha"><b>02</b><span>Lun</span></div>
                <div class="aviso-contenido"><h4>La Candelaria</h4><p>Bendición de velas y presentación del Niño Jesús.</p></div>
            </div>
            <div class="aviso-fila">
                <div class="aviso-fecha"><b>18</b><span>Mié</span></div>
                <div class="aviso-contenido"><h4>Miércoles de Ceniza</h4><p>Inicio de la Cuaresma. Misas: 7am, 12pm y 6pm.</p></div>
            </div>
        </div>
        <div class="encabezado-mes">Marzo 2026</div>
        <div class="grupo-timeline">
            <div class="aviso-fila">
                <div class="aviso-fecha"><b>19</b><span>Jue</span></div>
                <div class="aviso-contenido"><h4>Solemnidad de San José</h4><p>Fiesta patronal en la Capilla San José.</p></div>
            </div>
        </div>
        <div class="encabezado-mes">Abril 2026</div>
        <div class="grupo-timeline">
            <div class="aviso-fila">
                <div class="aviso-fecha"><b>05</b><span>Dom</span></div>
                <div class="aviso-contenido"><h4>Domingo de Resurrección</h4><p>¡Aleluya! Gran fiesta de la Pascua.</p></div>
            </div>
        </div>
    `,
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
                <div class="linea-horaria" style="font-family: monospace; font-size: 1rem;"><span>Bancamiga</span>0172</div>
                <div class="linea-horaria" style="font-family: monospace; font-size: 1rem;"><span>RIF (comercio)</span style="font-family: monospace; font-size: 0.9rem;">504929760</div>
                <div class="linea-horaria" style="font-family: monospace; font-size: 1rem;"><span>Teléfono</span style="font-family: monospace; font-size: 0.9rem;">04142711341</div>
            </div>
        </div>
        <div class="caja-info">
            <h4><span class="material-icons-round">account_balance</span> Transferencia</h4>
            <div class="contenido-caja">
                <p style="margin-bottom: 0;"><b>A nombre de:</b></p>
                <p style="font-family: monospace; background: #eee; padding: 10px; border-radius: 5px; font-size: 1rem;">
                    Cuasiparroquia Nuestra Señora de Coromoto
                </p>
                <p style="margin-bottom: 0;"><b>Cuenta Corriente:</b></p>
                <p style="font-family: monospace; background: #eee; padding: 10px; border-radius: 5px; font-size: 1rem;">
                    0172-0131-0113-1578-4742
                </p>
                <p style="margin-bottom: 0;"><b>RIF:</b></p>
                <p style="font-family: monospace; background: #eee; padding: 10px; border-radius: 5px; font-size: 1rem;">
                    J-504929760
                </p>
            </div>
        </div>
        <div style="text-align: center;">
            <p style="margin-top: 10px; font-size: 0.75rem; color: #888;">
                Por favor, enviar el comprobante a <br><span style="font-size:1rem;">cuasicoromoto@gmail.com</span>
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
                <a href="https://evangeli.net/evangelio" target="_blank" class="enlace-web">
                    Evangeli <span>Ir</span>
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
}
    ;

function abrirPanel(titulo) {
    const contenido = datos[titulo];
    if (!contenido) {
        console.error(`Contenido no encontrado para el título: ${titulo}`);
        return;
    }
    tituloPanel.innerText = titulo;
    contenidoPanel.innerHTML = contenido;
    panel.classList.add('abierto');
    capaOscura.classList.add('activa');
}

function abrirSubPanel(nombre) {
    if (!nombre)
        return;
    subTitulo.innerText = nombre;
    let texto = oracionesTexto[nombre] || "<p>Texto de la oración próximamente.</p>";

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

document.addEventListener('DOMContentLoaded', () => {

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
