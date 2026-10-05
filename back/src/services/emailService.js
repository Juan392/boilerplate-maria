const nodemailer = require('nodemailer');

// Simulated email transport (logs to console instead of sending)
const transporter = nodemailer.createTransport({
  jsonTransport: true,
});

async function sendContractEmail(contrato) {
  const mailOptions = {
    from: process.env.SMTP_USER || 'noreply@maria-saas.com',
    to: contrato.email,
    subject: `Confirmación y Envío de Contrato de Temporada - ${contrato.nombre} ${contrato.apellidos}`,
    text: `Estimado/a ${contrato.nombre} ${contrato.apellidos},
    Es un placer saludarle desde MarIA SaaS. En seguimiento a nuestra conversación sobre su reserva preferencial para esta temporada de invierno, hemos preparado los términos correspondientes para garantizar la disponibilidad exclusiva de sus espacios y servicios solicitados.

Adjunto a este mensaje encontrará el documento oficial: ${contrato.contrato}.

Para formalizar y asegurar las condiciones acordadas, le solicitamos revisar el archivo y proceder con la firma electrónica correspondiente a la brevedad posible. 

Quedo a su entera disposición en caso de que requiera cualquier ajuste en el itinerario o aclaración sobre las cláusulas contractuales.

Atentamente,

Ejecutivo de Ventas Hoteleras
MarIA SaaS Solutions
contacto@mariasaas.com`,
  };

  // TODO: In production, use real SMTP transport
  console.log('[EMAIL SIMULADO] Enviando email a:', contrato.email);
  console.log('[EMAIL SIMULADO] Asunto:', mailOptions.subject);
  console.log('[EMAIL SIMULADO] Contenido:', mailOptions.text);

  return { message: 'Email simulado enviado', recipient: contrato.email };
}

module.exports = { sendContractEmail };
