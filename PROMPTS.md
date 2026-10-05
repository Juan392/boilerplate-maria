# PROMPTS.md

Documenta los prompts que utilizaste para las siguientes tareas. Sigue la estructura indicada para cada uno.

---

## Prompt 1: Generación de datos de prueba

**Tarea:** Generar 10 registros realistas para la tabla de contratos (nombre, apellidos, teléfono, email, fecha_reserva, status).

### Contexto dado a la IA
<!-- Qué información le proporcionaste: stack, estructura de la tabla, restricciones, etc. 

Es un Saas de hosteleria, un esquema muy general de los campos que necesitamos en sentencias de sql, reglas de negocio como el status de la reservacion.-->

### Prompt
<!-- Escribe aquí el texto exacto que usaste 
Actúa como un ejecutivo de ventas hoteleras de MarIA SaaS con 5 años de experiencia.

Tarea 1 - Datos: Genera 10 registros de prueba de clientes VIP reales de Latinoamérica para la temporada de invierno. Presenta los datos ÚNICAMENTE en formato de sentencias INSERT INTO de SQL válidas para SQLite. La tabla se llama contratos y los campos obligatorios son: nombre, apellidos, telefono, email, fecha_reserva (en formato YYYY-MM-DD, con fechas situadas en julio o agosto) y status (alternando entre 'Pendiente de firma', 'Firmado' y 'Cancelado').
-->


### Por qué lo estructuraste así
<!-- Estruucture asi mi prompt porque segui el patron mas seguro para tareas tecnicas segun la ingeniera del prompt. El Rol-Task-Constraint, ademas
     Me aseguro de que la IA ajuste su tono, vocabulario y registros al darle un Rol en el sector de hoteleria.
     Separo las tareas en subtareas numeradas que previene las alucinaciones u omotir contexto clave.
-->

### Segunda iteración (si aplica)
<!-- Si el primer resultado no fue ideal, ¿cómo refinaste el prompt? -->

### Resultado obtenido
<!-- 
INSERT INTO contratos (nombre, apellidos, telefono, email, fecha_reserva, status) VALUES
('Valentina', 'Herrera Silva', '+56987654321', 'v.herrera@andescorp.cl', '2026-07-12', 'Pendiente de firma'),
('Mateo', 'Gómez Restrepo', '+573001234567', 'mateo.gomez@inversionesgr.co', '2026-07-15', 'Firmado'),
('Lucía', 'Fernández Rossi', '+5491145678901', 'lucia.rossi@patagoniaholdings.ar', '2026-07-22', 'Cancelado'),
('Rodrigo', 'Mendoza Carrión', '+51981234567', 'rmendoza@mendozagroup.pe', '2026-07-28', 'Pendiente de firma'),
('Camila', 'Silva Dos Santos', '+5511998765432', 'camila.santos@paulistarealty.br', '2026-08-02', 'Firmado'),
('Sebastián', 'Vargas Paredes', '+593998765432', 'svargas@quitoexports.ec', '2026-08-07', 'Cancelado'),
('Mariana', 'Benítez Cáceres', '+595981234567', 'mbenitez@asunciontrade.py', '2026-08-14', 'Pendiente de firma'),
('Joaquín', 'Larrea Méndez', '+59899123456', 'jlarrea@surpartners.uy', '2026-08-19', 'Firmado'),
('Catalina', 'Ríos Morales', '+56976543210', 'crios@australinvest.cl', '2026-08-23', 'Cancelado'),
('Diego', 'Salazar Castro', '+51976543210', 'dsalazar@salazarconsulting.pe', '2026-08-29', 'Pendiente de firma');
 -->

---

## Prompt 2: Mensaje de email profesional

**Tarea:** Redactar el cuerpo del email que simula el envío del contrato al huésped (el que actualmente hace `console.log` en `emailService.js`).

### Contexto dado a la IA
<!-- Siguiendo la tarea anterior, ya habia un rol asignado previamente como un ejecutivo de ventas hoteleras con 5 años. En este se le solicita un tono formal y persuasivo
     para dirigirse a clientes VIP de LatinoAmerica para la temporada de invierno. -->

### Prompt
<!-- Tarea 2 - Email: Redacta una plantilla de correo electrónico formal, persuasiva y profesional dirigida a estos clientes para enviarles su contrato. La respuesta debe consistir exclusivamente en un bloque de código con un string multilínea de JavaScript (utilizando template literals con comillas invertidas `), listo para integrarse en la propiedad text de Nodemailer. Debe interpolar estrictamente las variables ${contrato.nombre}, ${contrato.apellidos} y ${contrato.contrato} (esta última corresponde al nombre del archivo adjunto)." -->

### Por qué lo estructuraste así
<!-- Haciendo nuevamente uso del patron Role-Task-Constraint garantizo un tono formal y corporativo en los resultados. Ademas la IA respeta el contrato con las variables exactas. Ademas, le exijo un template literal del bloque de codigo para integrarlo de manera sencilla en la propiedad "text" del emailService sin necesidad de refactorizar mi codigo ni limpiar el texto que suele dar la IA explicando sus desiciones. -->

### Segunda iteración (si aplica)
<!-- SSe refinó la integración para incluir el asunto (subject) del correo, ya que el prompt original solo contempló el cuerpo (text), dejando el asunto por defecto demasiado simple para el estándar comercial B2B. -->

### Resultado obtenido
<!-- subject: `Confirmación y Envío de Contrato de Temporada - ${contrato.nombre} ${contrato.apellidos}`,
    text: `Estimado/a ${contrato.nombre} ${contrato.apellidos},

Es un placer saludarle desde MarIA SaaS. En seguimiento a nuestra conversación sobre su reserva preferencial para esta temporada de invierno, hemos preparado los términos correspondientes para garantizar la disponibilidad exclusiva de sus espacios y servicios solicitados.

Adjunto a este mensaje encontrará el documento oficial: ${contrato.contrato}.

Para formalizar y asegurar las condiciones acordadas, le solicitamos revisar el archivo y proceder con la firma electrónica correspondiente a la brevedad posible. 

Quedo a su entera disposición en caso de que requiera cualquier ajuste en el itinerario o aclaración sobre las cláusulas contractuales.

Atentamente,

Ejecutivo de Ventas Hoteleras
MarIA SaaS Solutions
contacto@mariasaas.com`,
  }; -->
