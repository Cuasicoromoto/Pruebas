// =============================================================
//  GOOGLE APPS SCRIPT – Cuasiparroquia Nuestra Señora de Coromoto
//
//  Este script se ejecuta como una Web App de Google Apps Script.
//  Sirve datos desde Google Sheets a la PWA.
//
//  HOJAS REQUERIDAS EN TU GOOGLE SHEET:
//  ─────────────────────────────────────
//  1. Hoja llamada "Principal"
//     Columnas: A=titulo, B=contenido, C=fecha, D=datetime
//     (Solo se lee la primera fila con datos)
//
//  2. Hoja llamada "Avisos"
//     Columnas: A=mes, B=dia, C=diaSemana, D=titulo, E=desc, F=lugar
//     (Se leen todas las filas con datos)
//
//  DESPLIEGUE:
//  1. Ve a script.google.com y pega este código.
//  2. Asegúrate de que la hoja de cálculo tenga las hojas
//     "Principal" y "Avisos".
//  3. Ve a "Implementar" > "Nueva implementación" > "Aplicación web".
//  4. Ejecuta como: Tú (tu cuenta).
//  5. Acceso: Cualquier persona (incluso anónima).
//  6. Copia la URL generada y pégala en script.js de la PWA.
// =============================================================

function doGet(e) {
    const tipo = e.parameter.tipo || '';

    try {
        if (tipo === 'Principal') {
            return getPrincipal();
        } else if (tipo === 'Avisos') {
            return getAvisos();
        } else {
            return ContentService
                .createTextOutput(JSON.stringify({ error: 'Parámetro "tipo" no válido. Usa ?tipo=Principal o ?tipo=Avisos' }))
                .setMimeType(ContentService.MimeType.JSON);
        }
    } catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({ error: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// ─────────────────────────────────────
//  PRINCIPAL – Tarjeta principal de la app (Carrusel)
//  Lee TODAS las filas con datos de la hoja "Principal"
//  Espera las columnas: titulo | contenido | fecha | datetime
//  Devuelve un array de objetos para el carrusel.
//  Retrocompatible: si solo hay 1 fila, devuelve un array con 1 objeto.
// ─────────────────────────────────────
function getPrincipal() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const hoja = ss.getSheetByName('Principal');

    if (!hoja) {
        return ContentService
            .createTextOutput(JSON.stringify({ error: 'No se encontró la hoja "Principal"' }))
            .setMimeType(ContentService.MimeType.JSON);
    }

    const datos = hoja.getDataRange().getValues();
    const avisos = [];

    for (let i = 0; i < datos.length; i++) {
        const fila = datos[i];

        // Saltar filas vacías
        if (!fila[0] && !fila[1]) continue;

        // Si la primera celda parece encabezado, saltar
        const c0 = String(fila[0] || '').trim().toLowerCase();
        if (i === 0 && (c0 === 'titulo' || c0 === 'título')) continue;

        avisos.push({
            titulo: String(fila[0] || ''),
            contenido: String(fila[1] || ''),
            fecha: String(fila[2] || ''),
            datetime: String(fila[3] || '')
        });
    }

    return ContentService
        .createTextOutput(JSON.stringify(avisos))
        .setMimeType(ContentService.MimeType.JSON);
}

// ─────────────────────────────────────
//  AVISOS – Línea de tiempo de eventos
//  Lee todas las filas de la hoja "Avisos"
//  Espera las columnas: mes | dia | diaSemana | titulo | desc | lugar
// ─────────────────────────────────────
function getAvisos() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const hoja = ss.getSheetByName('Avisos');

    if (!hoja) {
        return ContentService
            .createTextOutput(JSON.stringify({ error: 'No se encontró la hoja "Avisos"' }))
            .setMimeType(ContentService.MimeType.JSON);
    }

    const datos = hoja.getDataRange().getValues();
    const avisos = [];

    for (let i = 0; i < datos.length; i++) {
        const fila = datos[i];

        // Saltar filas vacías
        if (!fila[0] && !fila[3]) continue;

        // Si la primera celda parece encabezado (cualquier combinación de "mes", "día", etc.), saltar
        const c0 = String(fila[0] || '').trim().toLowerCase();
        if (i === 0 || c0 === 'mes' || c0 === 'día' || c0 === 'dia') continue;

        avisos.push({
            mes: String(fila[0] || ''),
            dia: String(fila[1] || ''),
            diaSemana: String(fila[2] || ''),
            titulo: String(fila[3] || ''),
            lugar: String(fila[4] || ''),
            desc: String(fila[5] || '')
        });
    }

    return ContentService
        .createTextOutput(JSON.stringify(avisos))
        .setMimeType(ContentService.MimeType.JSON);
}